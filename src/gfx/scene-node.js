// A scene node holds a set of child nodes to be rendered on screen. Later on,
// the SceneNode might grow additional functionality commonly found in a scene
// graph, e.g. coordinate transformations.
export default class SceneNode {
  constructor(gl) {
    this._children = [];
    this._visible = true;
    this._name = name || '';
    this._gl = gl;
    this._order = 1;
  }

  order(order) {
    if (order !== undefined) {
      this._order = order;
    }
    return this._order;
  }

  add(node) {
    this._children.push(node);
  }

  draw(cam, shaderCatalog, style, pass) {
    for (var i = 0, e = this._children.length; i !== e; ++i) {
      this._children[i].draw(cam, shaderCatalog, style, pass);
    }
  }

  show() {
    this._visible = true;
  }

  hide() {
    this._visible = false;
  }

  name(name) {
    if (name !== undefined) {
      this._name = name;
    }
    return this._name;
  }

  destroy() {
    for (var i = 0; i < this._children.length; ++i) {
      this._children[i].destroy();
    }
  }

  visible() {
    return this._visible;
  }
}
