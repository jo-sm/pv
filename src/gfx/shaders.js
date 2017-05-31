// NOTE: The shader code below use the placeholder ${PRECISION} variable
// for the shader precision. This values is replaced before compiling
// the shader program with highp on iOS and mediump on all other devices.
// This is required, because the outline shaders do not work well on iOS
// with mediump, but some android devices do not support highp.


// this fragment shader prelude gets added to all fragment shader code
// before  compiling. It essentially contains a selection of functions
// required by  multiple fragment shaders, e.g. the code for screen-door-
// transparency, selection highlighting etc.
//
export const PRELUDE_FS = `
precision \${PRECISION} float;
uniform bool screenDoorTransparency;

vec4 handleAlpha(vec4 inColor) {
  if (screenDoorTransparency) {
    ivec2 pxCoord = ivec2(gl_FragCoord.xy);
    ivec2 mod = pxCoord - (pxCoord/2) * 2;

    if (inColor.a < 0.99 && (inColor.a < 0.01 || mod.x != 0 || mod.y != 0)) {
      discard;
    }

    return vec4(inColor.rgb, 1.0);
  } else {
    if (inColor.a == 0.0) {
      discard;
    }

    return inColor;
  }
}

int intMod(int x, int y) {
  int z = x/y;
  return x-y*z;
}

uniform vec4 selectionColor;

vec3 handleSelect(vec3 inColor, float vertSelect) {
  return mix(inColor, selectionColor.rgb, step(0.5, vertSelect) * selectionColor.a);
}

uniform bool fog;
uniform float fogNear;
uniform float fogFar;
uniform vec3 fogColor;

vec3 handleFog(vec3 inColor) {
  if (fog) {
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep(fogNear, fogFar, depth);

    return mix(inColor, fogColor, fogFactor);
  } else {
    return inColor;
  }
}`;

// line fragment shader, essentially uses the vertColor and adds some fog.
export const LINES_FS = `
varying vec4 vertColor;
varying vec3 vertNormal;

void main(void) {
  gl_FragColor = handleAlpha(vertColor);
  gl_FragColor.rgb = handleFog(gl_FragColor.rgb);
}`;

export const SELECT_LINES_FS = `
precision \${PRECISION} float;

varying float vertSelect;
varying vec3 vertNormal;
uniform float fogNear;
uniform float fogFar;
uniform vec3 fogColor;
uniform bool fog;
uniform vec4 selectionColor;

void main(void) {
  gl_FragColor = mix(vec4(0.0, 0.0, 0.0, 0.0),
                     vec4(selectionColor.rgb, 1.0), vertSelect);
  gl_FragColor.a = step(0.5, vertSelect);
  if (gl_FragColor.a == 0.0) { discard; }
  float depth = gl_FragCoord.z / gl_FragCoord.w;
  if (fog) {
    float fog_factor = smoothstep(fogNear, fogFar, depth);
    gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w),
                        fog_factor);
  }
}`;

// hemilight vertex shader
export const SELECT_LINES_VS = `
attribute vec3 attrPos;
attribute float attrSelect;

uniform mat4 projectionMat;
uniform mat4 modelviewMat;
uniform float pointSize;
varying float vertSelect;
void main(void) {
  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);
  gl_Position.z += gl_Position.w * 0.000001;
  float distToCamera = vec4(modelviewMat * vec4(attrPos, 1.0)).z;
  gl_PointSize = pointSize * 200.0 / abs(distToCamera);
  vertSelect = attrSelect;
}`;

export const SELECT_VS = `
precision \${PRECISION} float;
uniform mat4 projectionMat;
uniform mat4 modelviewMat;
uniform float pointSize;
attribute vec3 attrPos;
attribute float attrObjId;
attribute vec4 attrColor;

varying float objId;
varying float objAlpha;

void main(void) {
  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);
  float distToCamera = vec4(modelviewMat * vec4(attrPos, 1.0)).z;
  gl_PointSize = pointSize * 200.0 / abs(distToCamera);
  objId = attrObjId;
  objAlpha = attrColor.a;
}`;

export const SELECT_FS = `
precision \${PRECISION} float;

varying float objId;
varying float objAlpha;
uniform int symId;

int intMod(int x, int y) {
  int z = x/y;
  return x-y*z;
}
void main(void) {
  if (objAlpha == 0.0) { discard; }
  // ints are only required to be 7bit...
  int integralObjId = int(objId+0.5);
  int red = intMod(integralObjId, 256);
  integralObjId/=256;
  int green = intMod(integralObjId, 256);
  integralObjId/=256;
  int blue = intMod(integralObjId, 256);
  int alpha = symId;
  gl_FragColor = vec4(float(red), float(green),
                      float(blue), float(alpha))/255.0;
}`;

// hemilight vertex shader
export const LINES_VS = `
attribute vec3 attrPos;
attribute vec4 attrColor;

uniform mat4 projectionMat;
uniform mat4 modelviewMat;
varying vec4 vertColor;
uniform float pointSize;
void main(void) {
  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);
  float distToCamera = vec4(modelviewMat * vec4(attrPos, 1.0)).z;
  gl_PointSize = pointSize * 200.0 / abs(distToCamera);
  vertColor = attrColor;
}`;

// hemilight fragment shader
export const HEMILIGHT_FS = `
varying vec4 vertColor;
varying vec3 vertNormal;
varying float vertSelect;

void main(void) {
  float dp = dot(vertNormal, vec3(0.0, 0.0, 1.0));
  float hemi = min(1.0, max(0.0, dp)*0.6+0.5);
  gl_FragColor = vec4(vertColor.rgb*hemi, vertColor.a);
  gl_FragColor.rgb = handleFog(handleSelect(gl_FragColor.rgb, vertSelect));
  gl_FragColor = handleAlpha(gl_FragColor);
}`;

// phong fragment shader
export const PHONG_FS = `
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertPos;
uniform float zoom;
varying float vertSelect;

void main(void) {
  vec3 eyePos = vec3(0.0, 0.0, zoom);
  float dp = dot(vertNormal, normalize(eyePos - vertPos));
  float hemi = min(1.0, max(0.3, dp)+0.2);
  //hemi *= vertColor.a;
  vec3 rgbColor = vertColor.rgb * hemi;
  //gl_FragDepthEXT = gl_FragCoord.z;
  rgbColor += min(vertColor.rgb, 0.8) * pow(max(0.0, dp), 18.0);
  rgbColor = handleSelect(rgbColor, vertSelect);
  gl_FragColor = vec4(clamp(rgbColor, 0.0, 1.0), vertColor.a);
  gl_FragColor.rgb = handleFog(gl_FragColor.rgb);
  gl_FragColor = handleAlpha(gl_FragColor);
}`;

// hemilight vertex shader
export const HEMILIGHT_VS = `
attribute vec3 attrPos;
attribute vec4 attrColor;
attribute vec3 attrNormal;
attribute float attrSelect;

uniform mat4 projectionMat;
uniform mat4 modelviewMat;
varying vec4 vertColor;
varying vec3 vertNormal;
varying vec3 vertPos;
varying float vertSelect;
void main(void) {
  vertPos = (modelviewMat * vec4(attrPos, 1.0)).xyz;
  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);
  vec4 n = (modelviewMat * vec4(attrNormal, 0.0));
  vertNormal = n.xyz;
  vertColor = attrColor;
  vertSelect = attrSelect;
}`;

// outline shader. mixes outlineColor with fogColor
export const OUTLINE_FS = `
varying float vertAlpha;
varying float vertSelect;

uniform vec3 outlineColor;

void main() {
  gl_FragColor = vec4(mix(outlineColor, selectionColor.rgb,
                          step(0.5, vertSelect)),
                      vertAlpha);
  gl_FragColor.rgb = handleFog(gl_FragColor.rgb);
  gl_FragColor = handleAlpha(gl_FragColor);
}`;

// outline vertex shader. Expands vertices along the (in-screen) xy
// components of the normals.
export const OUTLINE_VS = `
precision \${PRECISION} float;

attribute vec3 attrPos;
attribute vec3 attrNormal;
attribute vec4 attrColor;
attribute float attrSelect;

uniform vec3 outlineColor;
uniform mat4 projectionMat;
uniform mat4 modelviewMat;
varying float vertAlpha;
varying float vertSelect;
uniform vec2 relativePixelSize;
uniform float outlineWidth;
uniform float outlineOffset;

void main(void) {
  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);
  vec4 normal = modelviewMat * vec4(attrNormal, 0.0);
  vertAlpha = attrColor.a;
  vertSelect = attrSelect;
  vec2 expansion = relativePixelSize *
       (outlineWidth + 2.0 * step(0.5, attrSelect));
  vec2 offset = normal.xy * expansion;
  gl_Position.xy += gl_Position.w * offset;
  gl_Position.z += gl_Position.w * outlineOffset;
}`;

export const TEXT_VS = `
precision \${PRECISION} float;

attribute vec3 attrCenter;
attribute vec2 attrCorner;
uniform mat4 projectionMat;
uniform mat4 modelviewMat;
uniform mat4 rotationMat;
varying vec2 vertTex;
uniform float width;
uniform float height;
void main() {
  vec4 pos = modelviewMat* vec4(attrCenter, 1.0);
  pos.z += 4.0;
  gl_Position = projectionMat * pos;
  gl_Position.xy += vec2(width,height)*attrCorner*gl_Position.w;
  vertTex = (attrCorner+abs(attrCorner))/(2.0*abs(attrCorner));
}`;

export const TEXT_FS = `
precision \${PRECISION} float;

uniform mat4 projectionMat;
uniform mat4 modelviewMat;
uniform sampler2D sampler;
uniform float xScale;
uniform float yScale;
varying vec2 vertTex;
void main() {
  vec2 texCoord = vec2(vertTex.x*xScale, vertTex.y*yScale);
  gl_FragColor = texture2D(sampler, texCoord);
  if (gl_FragColor.a == 0.0) { discard; }
}`;

// spherical billboard fragment shader
export const SPHERES_FS = `
#extension GL_EXT_frag_depth: enable

varying vec2 vertTex;
varying vec4 vertCenter;
varying vec4 vertColor;
varying float vertSelect;
varying float radius;
uniform mat4 projectionMat;
uniform vec3 outlineColor;
varying float border;
uniform bool outlineEnabled;

void main(void) {
  float zz = dot(vertTex, vertTex);
  if (zz > 1.0)
    discard;
  vec3 normal = vec3(vertTex.x, vertTex.y, sqrt(1.0-zz));
  vec3 pos = vertCenter.xyz + normal * radius;
  float dp = normal.z;
  float hemi = sqrt(min(1.0, max(0.3, dp) + 0.2));
  vec4 projected = projectionMat * vec4(pos, 1.0);
  float depth = projected.z / projected.w;
  gl_FragDepthEXT = (depth + 1.0) * 0.5;
  vec3 rgbColor = vertColor.rgb * hemi;
  rgbColor += min(vertColor.rgb, 0.8) * pow(max(0.0, dp), 18.0);
  if (outlineEnabled) {
    rgbColor = mix(rgbColor * hemi, outlineColor, step(border, sqrt(zz)));
  } else {
    rgbColor *= hemi;
  }
  rgbColor = handleSelect(rgbColor, vertSelect);
  vec4 fogged = vec4(handleFog(rgbColor), vertColor.a);
  gl_FragColor = handleAlpha(fogged);
}`;

export const SPHERES_VS = `
precision \${PRECISION} float;
attribute vec3 attrPos;
attribute vec4 attrColor;
attribute vec3 attrNormal;
attribute float attrSelect;
uniform vec2 relativePixelSize;
uniform float outlineWidth;
varying float radius;

uniform mat4 projectionMat;
uniform mat4 modelviewMat;
uniform mat4 rotationMat;
varying vec4 vertColor;
varying vec2 vertTex;
varying float border;
varying vec4 vertCenter;
varying float vertSelect;
void main() {
  vec3 d = vec3(attrNormal.xy * attrNormal.z, 0.0);
  vec4 rotated = vec4(d, 0.0)*rotationMat;
  gl_Position = projectionMat * modelviewMat *
                (vec4(attrPos, 1.0)+rotated);
  vertTex = attrNormal.xy;
  vertColor = attrColor;
  vertSelect = attrSelect;
  vertCenter = modelviewMat* vec4(attrPos, 1.0);
  float dist = length((projectionMat * vertCenter).xy - gl_Position.xy);
  float dd = dist / gl_Position.w;
  border = 1.0 - outlineWidth * 1.4 * length(relativePixelSize)/dd;
  radius = attrNormal.z;
}`;

// spherical billboard fragment shader
export const SELECT_SPHERES_FS = `
#extension GL_EXT_frag_depth: enable

varying vec2 vertTex;
varying vec4 vertCenter;
varying vec4 vertColor;
uniform mat4 projectionMat;
varying float objId;
varying float radius;
uniform int symId;

void main(void) {
  float zz = dot(vertTex, vertTex);
  if (zz > 1.0)
    discard;
  vec3 normal = vec3(vertTex.x, vertTex.y, sqrt(1.0-zz));
  vec3 pos = vertCenter.xyz + normal * radius;
  vec4 projected = projectionMat * vec4(pos, 1.0);
  float depth = projected.z / projected.w;
  gl_FragDepthEXT = (depth + 1.0) * 0.5;
  // ints are only required to be 7bit...
  int integralObjId = int(objId+0.5);
  int red = intMod(integralObjId, 256);
  integralObjId/=256;
  int green = intMod(integralObjId, 256);
  integralObjId/=256;
  int blue = intMod(integralObjId, 256);
  int alpha = symId;
  gl_FragColor = vec4(float(red), float(green),
                      float(blue), float(alpha))/255.0;
}`;

export const SELECT_SPHERES_VS = `
precision \${PRECISION} float;
attribute vec3 attrPos;
attribute vec4 attrColor;
attribute vec3 attrNormal;
attribute float attrObjId;
varying float radius;

uniform mat4 projectionMat;
uniform mat4 modelviewMat;
uniform mat4 rotationMat;
varying vec2 vertTex;
varying vec4 vertCenter;
varying float objId;
void main() {
  vec3 d = vec3(attrNormal.xy * attrNormal.z, 0.0);
  vec4 rotated = vec4(d, 0.0)*rotationMat;
  //vec4 rotated = vec4(d, 0.0);
  gl_Position = projectionMat * modelviewMat *
                (vec4(attrPos, 1.0)+rotated);
  vertTex = attrNormal.xy;
  vertCenter = modelviewMat* vec4(attrPos, 1.0);
  radius = attrNormal.z;
  objId = attrObjId;
}`;
