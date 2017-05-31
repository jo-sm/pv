(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.mlvw = factory());
}(this, (function () { 'use strict';

/**
 * @name mat2
 * @class 2x2 Matrix
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */


/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */


/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */


/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */


/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */


/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */


/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */


/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */


/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/


/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */


/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */


/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */



/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */


/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */


/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */


/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

/**
 * @name mat2d
 * @class 2x3 Matrix
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */


/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */


/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */


/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */


/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */


/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */


/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */


/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */


/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */


/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/


/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/


/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */


/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */


/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */


/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */


/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */


/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */


/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */


/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */


/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

/**
 * @name mat3
 * @class 3x3 Matrix
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create$2() {
    var out = new Float32Array(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone$2(a) {
    var out = new Float32Array(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy$2(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues$2(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new Float32Array(9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set$2(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity$2(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose$1(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }

    return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert$2(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,


    // Calculate the determinant
    det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint$1(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    out[0] = a11 * a22 - a12 * a21;
    out[1] = a02 * a21 - a01 * a22;
    out[2] = a01 * a12 - a02 * a11;
    out[3] = a12 * a20 - a10 * a22;
    out[4] = a00 * a22 - a02 * a20;
    out[5] = a02 * a10 - a00 * a12;
    out[6] = a10 * a21 - a11 * a20;
    out[7] = a01 * a20 - a00 * a21;
    out[8] = a00 * a11 - a01 * a10;
    return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant$2(a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply$2(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        b00 = b[0],
        b01 = b[1],
        b02 = b[2],
        b10 = b[3],
        b11 = b[4],
        b12 = b[5],
        b20 = b[6],
        b21 = b[7],
        b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate$1(out, a, v) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        x = v[0],
        y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate$2(out, a, rad) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale$2(out, a, v) {
    var x = v[0],
        y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation$1(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation$2(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c;
    out[1] = s;
    out[2] = 0;

    out[3] = -s;
    out[4] = c;
    out[5] = 0;

    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling$2(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;

    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;

    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15],
        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,


    // Calculate the determinant
    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str$2(a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob$2(a) {
    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add$2(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract$2(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar$2(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd$2(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals$2(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

var mat3 = Object.freeze({
	create: create$2,
	fromMat4: fromMat4,
	clone: clone$2,
	copy: copy$2,
	fromValues: fromValues$2,
	set: set$2,
	identity: identity$2,
	transpose: transpose$1,
	invert: invert$2,
	adjoint: adjoint$1,
	determinant: determinant$2,
	multiply: multiply$2,
	mul: multiply$2,
	translate: translate$1,
	rotate: rotate$2,
	scale: scale$2,
	fromTranslation: fromTranslation$1,
	fromRotation: fromRotation$2,
	fromScaling: fromScaling$2,
	fromMat2d: fromMat2d,
	fromQuat: fromQuat,
	normalFromMat4: normalFromMat4,
	str: str$2,
	frob: frob$2,
	add: add$2,
	subtract: subtract$2,
	sub: subtract$2,
	multiplyScalar: multiplyScalar$2,
	multiplyScalarAndAdd: multiplyScalarAndAdd$2,
	equals: equals$2
});

/**
 * @name mat4
 * @class 4x4 Matrix
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create$3() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone$3(a) {
    var out = new Float32Array(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy$3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues$3(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new Float32Array(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set$3(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity$3(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose$2(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a03 = a[3],
            a12 = a[6],
            a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }

    return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert$3(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15],
        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,


    // Calculate the determinant
    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint$2(out, a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant$3(a) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15],
        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4's explicitly
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply$3(out, a, b) {
    var a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11],
        a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    // Cache only the current line of the second matrix
    var b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate$2(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2],
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
        a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
        a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

        out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
        out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
        out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale$3(out, a, v) {
    var x = v[0],
        y = v[1],
        z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate$3(out, a, rad, axis) {
    var x = axis[0],
        y = axis[1],
        z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s,
        c,
        t,
        a00,
        a01,
        a02,
        a03,
        a10,
        a11,
        a12,
        a13,
        a20,
        a21,
        a22,
        a23,
        b00,
        b01,
        b02,
        b10,
        b11,
        b12,
        b20,
        b21,
        b22;

    if (len === 0) return null;

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation$2(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling$3(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation$3(out, rad, axis) {
    var x = axis[0],
        y = axis[1],
        z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s,
        c,
        t;

    if (len === 0) return null;

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad);

    // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];

    return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
    var m11 = mat[0],
        m12 = mat[1],
        m13 = mat[2],
        m21 = mat[4],
        m22 = mat[5],
        m23 = mat[6],
        m31 = mat[8],
        m32 = mat[9],
        m33 = mat[10];

    out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
    out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
    out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

    return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
    // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
    var trace = mat[0] + mat[5] + mat[10];
    var S = 0;

    if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (mat[6] - mat[9]) / S;
        out[1] = (mat[8] - mat[2]) / S;
        out[2] = (mat[1] - mat[4]) / S;
    } else if (mat[0] > mat[5] & mat[0] > mat[10]) {
        S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
        out[3] = (mat[6] - mat[9]) / S;
        out[0] = 0.25 * S;
        out[1] = (mat[1] + mat[4]) / S;
        out[2] = (mat[8] + mat[2]) / S;
    } else if (mat[5] > mat[10]) {
        S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
        out[3] = (mat[8] - mat[2]) / S;
        out[0] = (mat[1] + mat[4]) / S;
        out[1] = 0.25 * S;
        out[2] = (mat[6] + mat[9]) / S;
    } else {
        S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
        out[3] = (mat[1] - mat[4]) / S;
        out[0] = (mat[8] + mat[2]) / S;
        out[1] = (mat[6] + mat[9]) / S;
        out[2] = 0.25 * S;
    }

    return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2,
        sx = s[0],
        sy = s[1],
        sz = s[2];

    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    // Quaternion math
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2,
        sx = s[0],
        sy = s[1],
        sz = s[2],
        ox = o[0],
        oy = o[1],
        oz = o[2];

    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
    out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
    out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
    out[15] = 1;

    return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat$1(out, q) {
    var x = q[0],
        y = q[1],
        z = q[2],
        w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,
        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0),
        downTan = Math.tan(fov.downDegrees * Math.PI / 180.0),
        leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0),
        rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0),
        xScale = 2.0 / (leftTan + rightTan),
        yScale = 2.0 / (upTan + downTan);

    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = far * near / (near - far);
    out[15] = 0.0;
    return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0,
        x1,
        x2,
        y0,
        y1,
        y2,
        z0,
        z1,
        z2,
        len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) === 0 && Math.abs(eyey - centery) === 0 && Math.abs(eyez - centerz) === 0) {
        return identity$3(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
}

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str$3(a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob$3(a) {
    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add$3(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract$3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar$3(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd$3(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    out[9] = a[9] + b[9] * scale;
    out[10] = a[10] + b[10] * scale;
    out[11] = a[11] + b[11] * scale;
    out[12] = a[12] + b[12] * scale;
    out[13] = a[13] + b[13] * scale;
    out[14] = a[14] + b[14] * scale;
    out[15] = a[15] + b[15] * scale;
    return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals$3(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

var mat4 = Object.freeze({
	create: create$3,
	clone: clone$3,
	copy: copy$3,
	fromValues: fromValues$3,
	set: set$3,
	identity: identity$3,
	transpose: transpose$2,
	invert: invert$3,
	adjoint: adjoint$2,
	determinant: determinant$3,
	multiply: multiply$3,
	mul: multiply$3,
	translate: translate$2,
	scale: scale$3,
	rotate: rotate$3,
	rotateX: rotateX,
	rotateY: rotateY,
	rotateZ: rotateZ,
	fromTranslation: fromTranslation$2,
	fromScaling: fromScaling$3,
	fromRotation: fromRotation$3,
	fromXRotation: fromXRotation,
	fromYRotation: fromYRotation,
	fromZRotation: fromZRotation,
	fromRotationTranslation: fromRotationTranslation,
	getTranslation: getTranslation,
	getScaling: getScaling,
	getRotation: getRotation,
	fromRotationTranslationScale: fromRotationTranslationScale,
	fromRotationTranslationScaleOrigin: fromRotationTranslationScaleOrigin,
	fromQuat: fromQuat$1,
	frustum: frustum,
	perspective: perspective,
	perspectiveFromFieldOfView: perspectiveFromFieldOfView,
	ortho: ortho,
	lookAt: lookAt,
	str: str$3,
	frob: frob$3,
	add: add$3,
	subtract: subtract$3,
	sub: subtract$3,
	multiplyScalar: multiplyScalar$3,
	multiplyScalarAndAdd: multiplyScalarAndAdd$3,
	equals: equals$3
});

/**
 * @name vec3
 * @class 3 Dimensional Vector
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create$5() {
    var out = new Float32Array(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone$5(a) {
    var out = new Float32Array(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues$5(x, y, z) {
    var out = new Float32Array(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy$5(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set$5(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add$5(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract$4(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply$5(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale$5(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x * x + y * y + z * z;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length$1(a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength$1(a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize$1(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x * x + y * y + z * z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot$1(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp$1(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t,
        factor1 = factorTimes2 * (2 * t - 3) + 1,
        factor2 = factorTimes2 * (t - 2) + t,
        factor3 = factorTimes2 * (t - 1),
        factor4 = factorTimes2 * (3 - 2 * t);

    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

    return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t,
        inverseFactorTimesTwo = inverseFactor * inverseFactor,
        factorTimes2 = t * t,
        factor1 = inverseFactorTimesTwo * inverseFactor,
        factor2 = 3 * t * inverseFactorTimesTwo,
        factor3 = 3 * factorTimes2 * inverseFactor,
        factor4 = factorTimes2 * t;

    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

    return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
    scale = scale || 1.0;

    var r = Math.random() * 2.0 * Math.PI;
    var z = Math.random() * 2.0 - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0],
        y = a[1],
        z = a[2],
        qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3],


    // calculate quat * vec
    ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX$2(out, a, b, c) {
    var p = [],
        r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];

    //perform rotation
    r[0] = p[0];
    r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
    r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];

    return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY$2(out, a, b, c) {
    var p = [],
        r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];

    //perform rotation
    r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];

    return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ$2(out, a, b, c) {
    var p = [],
        r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];

    //perform rotation
    r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
    r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
    r[2] = p[2];

    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];

    return out;
}

var vec = create$5();
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
        stride = 3;
    }

    if (!offset) {
        offset = 0;
    }

    if (count) {
        l = Math.min(count * stride + offset, a.length);
    } else {
        l = a.length;
    }

    for (i = offset; i < l; i += stride) {
        vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
        fn(vec, vec, arg);
        a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
    }

    return a;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {

    var tempA = fromValues$5(a[0], a[1], a[2]);
    var tempB = fromValues$5(b[0], b[1], b[2]);

    normalize$1(tempA, tempA);
    normalize$1(tempB, tempB);

    var cosine = dot$1(tempA, tempB);

    if (cosine > 1.0) {
        return 0;
    } else if (cosine < -1.0) {
        return Math.PI;
    } else {
        return Math.acos(cosine);
    }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str$5(a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals$5(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

var vec3 = Object.freeze({
	create: create$5,
	clone: clone$5,
	fromValues: fromValues$5,
	copy: copy$5,
	set: set$5,
	add: add$5,
	subtract: subtract$4,
	sub: subtract$4,
	multiply: multiply$5,
	mul: multiply$5,
	divide: divide,
	div: divide,
	ceil: ceil,
	floor: floor,
	min: min,
	max: max,
	round: round,
	scale: scale$5,
	scaleAndAdd: scaleAndAdd,
	distance: distance,
	dist: distance,
	squaredDistance: squaredDistance,
	sqrDist: squaredDistance,
	length: length$1,
	len: length$1,
	squaredLength: squaredLength$1,
	sqrLen: squaredLength$1,
	negate: negate,
	inverse: inverse,
	normalize: normalize$1,
	dot: dot$1,
	cross: cross,
	lerp: lerp$1,
	hermite: hermite,
	bezier: bezier,
	random: random,
	transformMat4: transformMat4,
	transformMat3: transformMat3,
	transformQuat: transformQuat,
	rotateX: rotateX$2,
	rotateY: rotateY$2,
	rotateZ: rotateZ$2,
	forEach: forEach,
	angle: angle,
	str: str$5,
	equals: equals$5
});

/**
 * @name vec4
 * @class 4 Dimensional Vector
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create$6() {
    var out = new Float32Array(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone$6(a) {
    var out = new Float32Array(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues$6(x, y, z, w) {
    var out = new Float32Array(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy$6(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set$6(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add$6(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract$5(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply$6(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide$1(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil$1(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor$1(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min$1(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max$1(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round$1(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale$6(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} k the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd$1(out, a, b, k) {
    out[0] = a[0] + b[0] * k;
    out[1] = a[1] + b[1] * k;
    out[2] = a[2] + b[2] * k;
    out[3] = a[3] + b[3] * k;
    return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance$1(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance$1(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length$2(a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength$2(a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate$1(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse$1(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize$2(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
    }
    return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot$2(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp$2(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [k] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random$1(out, k) {
    k = k || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = Math.random();
    out[1] = Math.random();
    out[2] = Math.random();
    out[3] = Math.random();
    normalize$2(out, out);
    scale$6(out, out, k);
    return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4$1(out, a, m) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat$1(out, a, q) {
    var x = a[0],
        y = a[1],
        z = a[2],
        qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3],


    // calculate quat * vec
    ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
}

var vec$1 = create$6();

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach$1(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
        stride = 4;
    }

    if (!offset) {
        offset = 0;
    }

    if (count) {
        l = Math.min(count * stride + offset, a.length);
    } else {
        l = a.length;
    }

    for (i = offset; i < l; i += stride) {
        vec$1[0] = a[i];vec$1[1] = a[i + 1];vec$1[2] = a[i + 2];vec$1[3] = a[i + 3];
        fn(vec$1, vec$1, arg);
        a[i] = vec$1[0];a[i + 1] = vec$1[1];a[i + 2] = vec$1[2];a[i + 3] = vec$1[3];
    }

    return a;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str$6(a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals$6(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

var vec4 = Object.freeze({
	create: create$6,
	clone: clone$6,
	fromValues: fromValues$6,
	copy: copy$6,
	set: set$6,
	add: add$6,
	subtract: subtract$5,
	sub: subtract$5,
	multiply: multiply$6,
	mul: multiply$6,
	divide: divide$1,
	div: divide$1,
	ceil: ceil$1,
	floor: floor$1,
	min: min$1,
	max: max$1,
	round: round$1,
	scale: scale$6,
	scaleAndAdd: scaleAndAdd$1,
	distance: distance$1,
	dist: distance$1,
	squaredDistance: squaredDistance$1,
	sqrDist: squaredDistance$1,
	length: length$2,
	len: length$2,
	squaredLength: squaredLength$2,
	sqrLen: squaredLength$2,
	negate: negate$1,
	inverse: inverse$1,
	normalize: normalize$2,
	dot: dot$2,
	lerp: lerp$2,
	random: random$1,
	transformMat4: transformMat4$1,
	transformQuat: transformQuat$1,
	forEach: forEach$1,
	str: str$6,
	equals: equals$6
});

/**
 * @name quat
 * @class Quaternion
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create$4() {
    var out = new Float32Array(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
var normalize$$1 = normalize$2;

var tmpvec3 = create$5();
var xUnitVec3 = fromValues$5(1, 0, 0);
var yUnitVec3 = fromValues$5(0, 1, 0);

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
function rotationTo(out, a, b) {
    var dot$$1 = dot$1(a, b);
    if (dot$$1 < -0.999999) {
        cross(tmpvec3, xUnitVec3, a);
        if (length$1(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
        normalize$1(tmpvec3, tmpvec3);
        setAxisAngle(out, tmpvec3, Math.PI);
        return out;
    } else if (dot$$1 > 0.999999) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
    } else {
        cross(tmpvec3, a, b);
        out[0] = tmpvec3[0];
        out[1] = tmpvec3[1];
        out[2] = tmpvec3[2];
        out[3] = 1 + dot$$1;
        return normalize$$1(out, out);
    }
}

var matr = create$2();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
function setAxes(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize$$1(out, fromMat3(out, matr));
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
var clone$4 = clone$6;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
var fromValues$4 = fromValues$6;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
var copy$4 = copy$6;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
var set$4 = set$6;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity$4(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out, q) {
    var rad = Math.acos(q[3]) * 2.0;
    var s = Math.sin(rad / 2.0);
    if (s !== 0.0) {
        out[0] = q[0] / s;
        out[1] = q[1] / s;
        out[2] = q[2] / s;
    } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
    }
    return rad;
}

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
var add$4 = add$6;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply$4(out, a, b) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
var scale$4 = scale$6;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX$1(out, a, rad) {
    rad *= 0.5;

    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bx = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY$1(out, a, rad) {
    rad *= 0.5;

    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        by = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ$1(out, a, rad) {
    rad *= 0.5;

    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bz = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
}

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot$$1 = dot$2;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
var lerp$$1 = lerp$2;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3],
        bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    var omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }
    // calculate coefficients
    if (1.0 - cosom > 0.000001) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;

    return out;
}

var temp1 = create$4();
var temp2 = create$4();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
function sqlerp(out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert$4(out, a) {
    var a0 = a[0],
        a1 = a[1],
        a2 = a[2],
        a3 = a[3],
        dot$$1 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
        invDot = dot$$1 ? 1.0 / dot$$1 : 0;

    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
var length$$1 = length$2;

/**
 * Alias for {@link quat.length}
 * @function
 */
var len$$1 = length$2;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength$$1 = squaredLength$2;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
var sqrLen$$1 = squaredLength$2;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;

        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str$4(a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var equals$4 = equals$6;

var quat = Object.freeze({
	create: create$4,
	normalize: normalize$$1,
	rotationTo: rotationTo,
	setAxes: setAxes,
	clone: clone$4,
	fromValues: fromValues$4,
	copy: copy$4,
	set: set$4,
	identity: identity$4,
	setAxisAngle: setAxisAngle,
	getAxisAngle: getAxisAngle,
	add: add$4,
	multiply: multiply$4,
	mul: multiply$4,
	scale: scale$4,
	rotateX: rotateX$1,
	rotateY: rotateY$1,
	rotateZ: rotateZ$1,
	calculateW: calculateW,
	dot: dot$$1,
	lerp: lerp$$1,
	slerp: slerp,
	sqlerp: sqlerp,
	invert: invert$4,
	conjugate: conjugate,
	length: length$$1,
	len: len$$1,
	squaredLength: squaredLength$$1,
	sqrLen: sqrLen$$1,
	fromMat3: fromMat3,
	str: str$4,
	equals: equals$4
});

/**
 * @name vec2
 * @class 2 Dimensional Vector
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create$7() {
    var out = new Float32Array(2);
    out[0] = 0;
    out[1] = 0;
    return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */


/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */


/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */


/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */


/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */


/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */


/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */


/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */


/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */


/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */


/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */


/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */


/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */


/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */


/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */


/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */


/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */


/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */


/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */


/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */


/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */


/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */


/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */


/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */


/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */


var vec$2 = create$7();

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */


/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */


/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Slab = function Slab(near, far) {
  classCallCheck(this, Slab);

  this.near = near;
  this.far = far;
};

var FixedSlab = function () {
  function FixedSlab() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { near: 0.1, far: 400.0 };
    classCallCheck(this, FixedSlab);

    this._near = options.near;
    this._far = options.far;
  }

  createClass(FixedSlab, [{
    key: "update",
    value: function update() {
      return new Slab(this._near, this._far);
    }
  }]);
  return FixedSlab;
}();

var AutoSlab = function () {
  function AutoSlab() {
    classCallCheck(this, AutoSlab);

    this._far = 100.0;
  }

  createClass(AutoSlab, [{
    key: "update",
    value: function update(objects, cam) {
      var center = cam.center();
      var radius = null;
      for (var i = 0; i < objects.length; ++i) {
        var obj = objects[i];
        if (!obj.visible()) {
          continue;
        }
        radius = obj.updateSquaredSphereRadius(center, radius);
      }
      if (radius === null) {
        return null;
      }
      radius = Math.sqrt(radius);

      var zoom = cam.zoom();
      var newFar = (radius + zoom) * 1.05;
      var newNear = 0.1;

      return new Slab(newNear, newFar);
    }
  }]);
  return AutoSlab;
}();

// A continous range of object identifiers.
var ContinuousIdRange = function () {
  function ContinuousIdRange(pool, start, end) {
    classCallCheck(this, ContinuousIdRange);

    this._pool = pool;
    this._start = start;
    this._next = start;
    this._end = end;
  }

  createClass(ContinuousIdRange, [{
    key: 'nextId',
    value: function nextId(obj) {
      var id = this._next;
      console.assert(this._next < this._end);
      this._next++;
      this._pool._objects[id] = obj;
      return id;
    }
  }, {
    key: 'hasLeft',
    value: function hasLeft() {
      return this._next < this._end;
    }
  }, {
    key: 'recycle',
    value: function recycle() {
      this._pool.recycle(this);
    }
  }, {
    key: 'length',
    value: function length() {
      return this._end - this._start;
    }
  }]);
  return ContinuousIdRange;
}();

// simple class that generates unique object identifiers. Identifiers are
// requested in sequential groups.
// TODO: describe why!


var UniqueObjectIdPool = function () {
  // 2^24

  function UniqueObjectIdPool() {
    classCallCheck(this, UniqueObjectIdPool);
    this.MAX_ID = 16777216;

    this.clear();
  }

  createClass(UniqueObjectIdPool, [{
    key: 'getContinuousRange',
    value: function getContinuousRange(num) {
      // FIXME: keep the "free" list sorted, so we can binary search it
      // for a good match
      var bestIndex = -1;
      var bestLength = null;
      for (var i = 0; i < this._free.length; ++i) {
        var free = this._free[i];
        var length = free.length();
        if (length >= num && (bestLength === null || length < bestLength)) {
          bestLength = length;
          bestIndex = i;
        }
      }
      if (bestIndex !== -1) {
        var result = this._free[bestIndex];
        this._free.splice(bestIndex, 1);
        this._usedCount++;
        return result;
      }
      var start = this._unusedRangeStart;
      var end = start + num;
      if (end > this.MAX_ID) {
        console.error('not enough free object ids.');
        return null;
      }
      this._unusedRangeStart = end;
      var newRange = new ContinuousIdRange(this, start, end);
      this._usedCount++;
      return newRange;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._objects = {};
      this._unusedRangeStart = 1;
      this._free = [];
      this._usedCount = 0;
    }
  }, {
    key: 'recycle',
    value: function recycle(range) {
      for (var i = range._start; i < range._next; ++i) {
        delete this._objects[i];
      }
      range._next = range._start;
      this._free.push(range);
      this._usedCount--;
      console.assert(this._usedCount >= 0);
      if (this._free.length > 0 && this._usedCount === 0) {
        this.clear();
      }
    }
  }, {
    key: 'objectForId',
    value: function objectForId(id) {
      return this._objects[id];
    }
  }]);
  return UniqueObjectIdPool;
}();

var FrameBuffer = function () {
  function FrameBuffer(gl, options) {
    classCallCheck(this, FrameBuffer);

    this._width = options.width;
    this._height = options.height;
    this._colorBufferWidth = this._width;
    this._colorBufferHeight = this._height;
    this._gl = gl;
    this._colorHandle = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._colorHandle);
    this._depthHandle = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthHandle);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this._width, this._height);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this._depthHandle);
    this._colorTexture = gl.createTexture();
    this._initColorBuffer();
  }

  createClass(FrameBuffer, [{
    key: "width",
    value: function width() {
      return this._width;
    }
  }, {
    key: "height",
    value: function height() {
      return this._height;
    }
  }, {
    key: "bind",
    value: function bind() {
      var gl = this._gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._colorHandle);
      gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthHandle);
      if (this._colorBufferWidth !== this._width || this._colorBufferHeight !== this._height) {
        this._resizeBuffers();
      }
      gl.viewport(0, 0, this._width, this._height);
    }
  }, {
    key: "colorTexture",
    value: function colorTexture() {
      return this._colorTexture;
    }
  }, {
    key: "_initColorBuffer",
    value: function _initColorBuffer() {
      this.bind();
      var gl = this._gl;
      gl.bindTexture(gl.TEXTURE_2D, this._colorTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this._width, this._height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._colorTexture, 0);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.bindTexture(gl.TEXTURE_2D, null);

      this.release();
    }
  }, {
    key: "_resizeBuffers",
    value: function _resizeBuffers() {
      var gl = this._gl;
      gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthHandle);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this._width, this._height);
      gl.bindTexture(gl.TEXTURE_2D, this._colorTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this._width, this._height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._colorTexture, 0);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this._depthHandle);
      gl.bindTexture(gl.TEXTURE_2D, null);
      this._colorBufferWidth = this._width;
      this._colorBufferHeight = this._height;
    }
  }, {
    key: "resize",
    value: function resize(width, height) {
      this._width = width;
      this._height = height;
    }
  }, {
    key: "release",
    value: function release() {
      var gl = this._gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    }
  }]);
  return FrameBuffer;
}();

var PoolAllocator = function () {
  function PoolAllocator(bufferType) {
    classCallCheck(this, PoolAllocator);

    this._freeArrays = [];
    this._bufferType = bufferType;
  }

  createClass(PoolAllocator, [{
    key: "request",
    value: function request(requestedLength) {
      var bestIndex = -1;
      var bestLength = null;
      for (var i = 0; i < this._freeArrays.length; ++i) {
        var free = this._freeArrays[i];
        var length = free.length;
        if (length >= requestedLength && (bestLength === null || length < bestLength)) {
          bestLength = length;
          bestIndex = i;
        }
      }
      if (bestIndex !== -1) {
        var result = this._freeArrays[bestIndex];
        this._freeArrays.splice(bestIndex, 1);
        return result;
      }
      return new this._bufferType(requestedLength);
    }
  }, {
    key: "release",
    value: function release(buffer) {
      this._freeArrays.push(buffer);
    }
  }]);
  return PoolAllocator;
}();

var _this = undefined;

var rgb = {
  create: create$6,
  scale: scale$6,
  copy: copy$6,
  clone: clone$6,
  fromValues: fromValues$6,
  mix: function mix(out, colorOne, colorTwo, t) {
    var oneMinusT = 1.0 - t;

    out[0] = colorOne[0] * t + colorTwo[0] * oneMinusT;
    out[1] = colorOne[1] * t + colorTwo[1] * oneMinusT;
    out[2] = colorOne[2] * t + colorTwo[2] * oneMinusT;
    out[3] = colorOne[3] * t + colorTwo[3] * oneMinusT;

    return out;
  }
};

var COLORS = {
  white: rgb.fromValues(1.0, 1.0, 1.0, 1.0),
  black: rgb.fromValues(0.0, 0.0, 0.0, 1.0),
  grey: rgb.fromValues(0.5, 0.5, 0.5, 1.0),
  lightgrey: rgb.fromValues(0.8, 0.8, 0.8, 1.0),
  darkgrey: rgb.fromValues(0.3, 0.3, 0.3, 1.0),
  red: rgb.fromValues(1.0, 0.0, 0.0, 1.0),
  darkred: rgb.fromValues(0.5, 0.0, 0.0, 1.0),
  lightred: rgb.fromValues(1.0, 0.5, 0.5, 1.0),
  green: rgb.fromValues(0.0, 1.0, 0.0, 1.0),
  darkgreen: rgb.fromValues(0.0, 0.5, 0.0, 1.0),
  lightgreen: rgb.fromValues(0.5, 1.0, 0.5, 1.0),
  blue: rgb.fromValues(0.0, 0.0, 1.0, 1.0),
  darkblue: rgb.fromValues(0.0, 0.0, 0.5, 1.0),
  lightblue: rgb.fromValues(0.5, 0.5, 1.0, 1.0),
  yellow: rgb.fromValues(1.0, 1.0, 0.0, 1.0),
  darkyellow: rgb.fromValues(0.5, 0.5, 0.0, 1.0),
  lightyellow: rgb.fromValues(1.0, 1.0, 0.5, 1.0),
  cyan: rgb.fromValues(0.0, 1.0, 1.0, 1.0),
  darkcyan: rgb.fromValues(0.0, 0.5, 0.5, 1.0),
  lightcyan: rgb.fromValues(0.5, 1.0, 1.0, 1.0),
  magenta: rgb.fromValues(1.0, 0.0, 1.0, 1.0),
  darkmagenta: rgb.fromValues(0.5, 0.0, 0.5, 1.0),
  lightmagenta: rgb.fromValues(1.0, 0.5, 1.0, 1.0),
  orange: rgb.fromValues(1.0, 0.5, 0.0, 1.0),
  darkorange: rgb.fromValues(0.5, 0.25, 0.0, 1.0),
  lightorange: rgb.fromValues(1.0, 0.75, 0.5, 1.0)
};

var hex2rgb = function hex2rgb(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;

  var r = void 0;
  var g = void 0;
  var b = void 0;
  var a = void 0;

  if (color.length === 4 || color.length === 5) {
    r = parseInt(color[1], 16);
    g = parseInt(color[2], 16);
    b = parseInt(color[3], 16);
    a = Math.round(alpha * 15);

    if (color.length === 5) {
      a = parseInt(color[4], 16);
    }

    var oneOver15 = 1 / 15.0;

    return rgb.fromValues(oneOver15 * r, oneOver15 * g, oneOver15 * b, oneOver15 * a);
  }

  if (color.length === 7 || color.length === 9) {
    r = parseInt(color.substr(1, 2), 16);
    g = parseInt(color.substr(3, 2), 16);
    b = parseInt(color.substr(5, 2), 16);
    a = Math.round(255 * alpha);

    if (color.length === 9) {
      a = parseInt(color.substr(7, 2), 16);
    }

    var oneOver255 = 1 / 255.0;

    return rgb.fromValues(oneOver255 * r, oneOver255 * g, oneOver255 * b, oneOver255 * a);
  }
};

var setColorPalette = function setColorPalette(customColors) {
  console.log("setting colors");

  COLORS = customColors;

  resetGradients();
};

// internal function to force various types into an RGBA quadruplet
var forceRGB = function forceRGB(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;

  if (typeof color === 'string') {
    var lookup = COLORS[color];

    if (lookup !== undefined) {
      color = rgb.clone(lookup);
      color[3] = alpha;
    }

    if (color.length > 0 && color[0] === '#') {
      return hex2rgb(color, alpha);
    }
  }

  // in case no alpha component is provided, default alpha to 1.0
  if (color.length === 3) {
    return [color[0], color[1], color[2], alpha];
  }

  return color;
};

var Gradient = function () {
  function Gradient(colors, stops) {
    classCallCheck(this, Gradient);

    this._colors = colors.map(function (color) {
      return forceRGB(color);
    });
    this._stops = stops;
  }

  createClass(Gradient, [{
    key: 'colorAt',
    value: function colorAt(out, value) {
      if (value <= this._stops[0]) {
        return copy$6(out, this._colors[0]);
      }

      if (value >= this._stops[this._stops.length - 1]) {
        return copy$6(out, this._colors[this._stops.length - 1]);
      }

      // could use a binary search here, but since most gradients
      // have a really small number of stops, that's not going to
      // help much.
      var lowerIndex = 0;

      for (var i = 1; i < this._stops.length; ++i) {
        if (this._stops[i] > value) {
          break;
        }

        lowerIndex = i;
      }

      var upperIndex = lowerIndex + 1;
      var lowerStop = this._stops[lowerIndex];
      var upperStop = this._stops[upperIndex];
      var t = (value - lowerStop) / (upperStop - lowerStop);

      return rgb.mix(out, this._colors[upperIndex], this._colors[lowerIndex], t);
    }
  }]);
  return Gradient;
}();

// creates a new gradient from the given set of colors.
//
// colors must be a valid list of colors.
//
// when stops is set to 'equal' or ommitted, then the color stops are
// assumed to be equi distant on the interval 0,1. otherwise, stops
// must be  a list of floating point numbers with the same length
// than colors.


var gradient = function gradient(colors) {
  var stops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'equal';

  if (typeof colors === 'string') {
    return GRADIENTS[colors];
  }

  if (stops === 'equal') {
    stops = colors.map(function (color, i) {
      return Number(i) / (colors.length - 1);
    });
  }

  return new Gradient(colors, stops);
};

var GRADIENTS = {
  rainbow: gradient(['blue', 'green', 'yellow', 'red']),
  reds: gradient(['lightred', 'darkred']),
  greens: gradient(['lightgreen', 'darkgreen']),
  blues: gradient(['lightblue', 'darkblue']),
  trafficlight: gradient(['green', 'yellow', 'red']),
  heatmap: gradient(['red', 'white', 'blue'])
};

var resetGradients = function resetGradients() {
  GRADIENTS = {
    rainbow: gradient(['blue', 'green', 'yellow', 'red']),
    reds: gradient(['lightred', 'darkred']),
    greens: gradient(['lightgreen', 'darkgreen']),
    blues: gradient(['lightblue', 'darkblue']),
    trafficlight: gradient(['green', 'yellow', 'red']),
    heatmap: gradient(['red', 'white', 'blue'])
  };
};

var ColorOp = function () {
  function ColorOp(colorFunc, beginFunc, endFunc) {
    classCallCheck(this, ColorOp);

    this.colorFor = colorFunc;
    this._beginFunc = beginFunc;
    this._endFunc = endFunc;
  }

  createClass(ColorOp, [{
    key: 'begin',
    value: function begin(obj) {
      if (this._beginFunc) {
        this._beginFunc(obj);
      }
    }
  }, {
    key: 'end',
    value: function end(obj) {
      if (this._endFunc) {
        this._endFunc(obj);
      }
    }
  }]);
  return ColorOp;
}();

var uniform = function uniform() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'white';

  color = forceRGB(color);

  return new ColorOp(function (atom, out, index) {
    out[index + 0] = color[0];
    out[index + 1] = color[1];
    out[index + 2] = color[2];
    out[index + 3] = color[3];
  });
};

var CPK_TABLE = {
  H: [0.87, 0.87, 0.87],
  C: [0.61, 0.61, 0.61],
  N: [0.00, 0.47, 0.84],
  O: [0.97, 0.18, 0.18],
  F: [0.12, 0.94, 0.12],
  CL: [0.12, 0.94, 0.12],
  BR: [0.60, 0.13, 0.00],
  I: [0.40, 0.00, 0.73],
  HE: [0.00, 1.00, 1.00],
  NE: [0.00, 1.00, 1.00],
  AR: [0.00, 1.00, 1.00],
  XE: [0.00, 1.00, 1.00],
  KR: [0.00, 1.00, 1.00],
  P: [1.00, 0.43, 0.13],
  S: [1.00, 0.73, 0.22],
  B: [1.00, 0.67, 0.47],
  LI: [0.47, 0.00, 1.00],
  NA: [0.47, 0.00, 1.00],
  K: [0.47, 0.00, 1.00],
  RB: [0.47, 0.00, 1.00],
  CS: [0.47, 0.00, 1.00],
  FR: [0.47, 0.00, 1.00],
  BE: [0.00, 0.47, 0.00],
  MG: [0.00, 0.47, 0.00],
  SR: [0.00, 0.47, 0.00],
  BA: [0.00, 0.47, 0.00],
  RA: [0.00, 0.47, 0.00],
  TI: [0.60, 0.60, 0.60],
  FE: [0.56, 0.31, 0.12]
};

var byElement = function byElement() {
  var palette = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CPK_TABLE;

  return new ColorOp(function (atom, out, index) {
    var ele = atom.element();
    var color = palette[ele];

    if (color !== undefined) {
      out[index] = color[0];
      out[index + 1] = color[1];
      out[index + 2] = color[2];
      out[index + 3] = 1.0;
      return out;
    }

    out[index] = 1;
    out[index + 1] = 0;
    out[index + 2] = 1;
    out[index + 3] = 1.0;

    return out;
  });
};

var bySS = function bySS(grad) {
  var palette = void 0;

  if (grad && grad._colors) {
    palette = {
      C: grad._colors[0],
      H: grad._colors[1],
      E: grad._colors[2]
    };
  } else if (grad) {
    palette = {
      C: forceRGB(grad.C),
      H: forceRGB(grad.H),
      E: forceRGB(grad.E)
    };
  } else {
    palette = {
      C: [0.8, 0.8, 0.8, 1.0],
      H: [0.6, 0.6, 0.9, 1.0],
      E: [0.2, 0.8, 0.2, 1.0]
    };
  }

  return new ColorOp(function (atom, out, index) {
    var ss = atom.residue().ss();
    var color = palette[ss];

    if (color !== undefined) {
      out[index] = color[0];
      out[index + 1] = color[1];
      out[index + 2] = color[2];
      out[index + 3] = color[3];
    }
  });
};

var rainbow = function rainbow() {
  var grad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gradient('rainbow');

  return new ColorOp(function (a, out, index) {
    var limits = _this.chainLimits[a.residue().chain().name()];
    var x = [1, 1, 1, 1];

    var t = 0.0;

    if (limits !== undefined) {
      var idx = a.residue().index();

      t = (idx - limits[0]) / (limits[1] - limits[0]);
    }

    grad.colorAt(x, t);
    out[index] = x[0];
    out[index + 1] = x[1];
    out[index + 2] = x[2];
    out[index + 3] = x[3];
  }, function (obj) {
    var chains = obj.chains();

    _this.chainLimits = {};

    chains.forEach(function (chain) {
      var bbTraces = chain.backboneTraces();

      if (bbTraces.length === 0) {
        return;
      }

      var minIndex = bbTraces[0].residueAt(0).index();
      var maxIndex = bbTraces[0].residueAt(bbTraces[0].length() - 1).index();

      bbTraces.forEach(function (trace) {
        minIndex = Math.min(minIndex, trace.residueAt(0).index());
        maxIndex = Math.max(maxIndex, trace.residueAt(trace.length() - 1).index());
      });

      if (minIndex !== maxIndex) {
        _this.chainLimits[chain.name()] = [minIndex, maxIndex];
      }
    });
  }, function () {
    _this.chainLimits = null;
  });
};

var ssSuccession = function ssSuccession() {
  var grad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gradient('rainbow');
  var coilColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'lightgrey';

  coilColor = forceRGB(coilColor);

  return new ColorOp(function (a, out, index) {
    var idx = a.residue().index();
    var limits = _this.chainLimits[a.residue().chain().name()];
    var ssIndex = limits.indices[idx];
    var x = [0, 0, 0, 0];

    var t = 0.0;

    if (ssIndex === -1) {
      out[index] = coilColor[0];
      out[index + 1] = coilColor[1];
      out[index + 2] = coilColor[2];
      out[index + 3] = coilColor[3];
      return;
    }

    if (limits.max !== null) {
      t = ssIndex / (limits.max > 0 ? limits.max : 1);
    }

    grad.colorAt(x, t);
    out[index] = x[0];
    out[index + 1] = x[1];
    out[index + 2] = x[2];
    out[index + 3] = x[3];
  }, function (obj) {
    var chains = obj.chains();

    _this.chainLimits = {};

    chains.forEach(function (chain) {
      var residues = chain.residues();
      var indices = {};

      var maxIndex = null;
      var lastSS = 'C';
      var ssIndex = 0;

      residues.forEach(function (residue) {
        var ss = residue.ss();

        if (ss === 'C') {
          if (lastSS !== 'C') {
            ssIndex++;
          }

          indices[residue.index()] = -1;
        } else {
          maxIndex = ssIndex;
          indices[residue.index()] = ssIndex;
        }

        lastSS = ss;
      });

      _this.chainLimits[chain.name()] = {
        indices: indices,
        max: maxIndex
      };
    });
  }, function () {
    _this.chainLimits = null;
  });
};

var byChain = function byChain() {
  var grad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gradient('rainbow');

  return new ColorOp(function (a, out, index) {
    var chainIndex = _this.chainIndices[a.residue().chain().name()];
    var t = chainIndex * _this.scale;
    var x = [0, 0, 0, 0];

    grad.colorAt(x, t);
    out[index + 0] = x[0];
    out[index + 1] = x[1];
    out[index + 2] = x[2];
    out[index + 3] = x[3];
  }, function (obj) {
    var chains = obj.chains();
    _this.chainIndices = {};

    chains.forEach(function (chain, i) {
      _this.chainIndices[chain.name()] = i;
    });

    _this.scale = chains.length > 1 ? 1.0 / (chains.length - 1) : 1.0;
  }, function () {
    _this.chainIndices = null;
  });
};

function getMinMaxRange(obj, iter, propName) {
  var min = null;
  var max = null;
  obj[iter](function (item) {
    var value = item.prop(propName);
    if (min === null && max === null) {
      min = max = value;
      return;
    }
    min = Math.min(min, value);
    max = Math.max(max, value);
  });
  return { min: min, max: max };
}

var gradColor = function () {
  var color = create$6();
  return function (out, index, grad, t) {
    grad.colorAt(color, t);
    out[index + 0] = color[0];
    out[index + 1] = color[1];
    out[index + 2] = color[2];
    out[index + 3] = color[3];
  };
}();

function colorByItemProp(propName) {
  var grad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gradient('rainbow');
  var range = arguments[2];
  var iter = arguments[3];
  var item = arguments[4];

  return new ColorOp(function (a, out, index) {
    var t = 0.0;
    if (this._min !== this._max) {
      t = (item(a).prop(propName) - this._min) / (this._max - this._min);
    }

    gradColor(out, index, grad, t);
  }, function (obj) {
    if (range !== undefined) {
      this._min = range[0];
      this._max = range[1];
      return;
    }
    range = getMinMaxRange(obj, iter, propName);
    this._min = range.min;
    this._max = range.max;
  });
}

var byAtomProp = function byAtomProp(propName, grad, range) {
  return colorByItemProp(propName, grad, range, 'eachAtom', function (a) {
    return a;
  });
};

var byResidueProp = function byResidueProp(propName, grad, range) {
  return colorByItemProp(propName, grad, range, 'eachResidue', function (a) {
    return a.residue();
  });
};

// linearly interpolates the array of colors and returns it as a Float32Array
// color must be an array containing a sequence of R,G,B triples.
var interpolateColor = function interpolateColor(colors, num) {
  var out = new Float32Array((num * (colors.length / 4 - 1) + 1) * 4);
  var bf = create$6();
  var af = create$6();
  var halfNum = num / 2;

  var index = 0;

  for (var i = 0; i < colors.length / 4 - 1; ++i) {
    set$6(bf, colors[4 * i + 0], colors[4 * i + 1], colors[4 * i + 2], colors[4 * i + 3]);
    set$6(af, colors[4 * i + 4], colors[4 * i + 5], colors[4 * i + 6], colors[4 * i + 7]);
    for (var j = 0; j < num; ++j) {
      var t = j < halfNum ? 0.0 : 1.0;
      out[index + 0] = bf[0] * (1 - t) + af[0] * t;
      out[index + 1] = bf[1] * (1 - t) + af[1] * t;
      out[index + 2] = bf[2] * (1 - t) + af[2] * t;
      out[index + 3] = bf[3] * (1 - t) + af[3] * t;
      index += 4;
    }
  }

  out[index + 0] = af[0];
  out[index + 1] = af[1];
  out[index + 2] = af[2];
  out[index + 3] = af[3];

  return out;
};



var color = Object.freeze({
	rgb: rgb,
	hex2rgb: hex2rgb,
	setColorPalette: setColorPalette,
	forceRGB: forceRGB,
	gradient: gradient,
	resetGradients: resetGradients,
	uniform: uniform,
	byElement: byElement,
	bySS: bySS,
	rainbow: rainbow,
	ssSuccession: ssSuccession,
	byChain: byChain,
	byAtomProp: byAtomProp,
	byResidueProp: byResidueProp,
	interpolateColor: interpolateColor
});

function floatArraysAreEqual(lhs, rhs) {
  if (lhs.length !== rhs.length) {
    return false;
  }
  for (var i = 0; i < lhs.length; ++i) {
    if (Math.abs(lhs[i] - rhs[i]) > 0.000001) {
      return false;
    }
  }
  return true;
}

// A camera, providing us with a view into the 3D worlds. Handles projection,
// and modelview matrices and controls the global render parameters such as
// shader and fog.

var Cam = function () {
  function Cam(gl) {
    classCallCheck(this, Cam);

    this._projection = create$3();
    this._camModelView = create$3();
    this._modelView = create$3();
    this._rotation = create$3();
    this._translation = create$3();
    this._near = 0.10;
    this._onCameraChangedListeners = [];
    this._far = 4000.0;
    this._fogNear = -5;
    this._fogFar = 50;
    this._fog = true;
    this._fovY = Math.PI * 45.0 / 180.0;
    this._fogColor = fromValues$5(1, 1, 1);
    this._outlineColor = fromValues$5(0.1, 0.1, 0.1);
    this._outlineWidth = 1.0;
    this._outlineEnabled = true;
    this._selectionColor = fromValues$6(0.1, 1.0, 0.1, 0.7);
    this._center = create$5();
    this._zoom = 50;
    this._screenDoorTransparency = false;
    this._updateProjectionMat = true;
    this._updateModelViewMat = true;
    this._upsamplingFactor = 1;
    this._gl = gl;
    this._currentShader = null;
    this._stateId = 0;
    this.setViewportSize(gl.viewportWidth, gl.viewportHeight);
  }

  createClass(Cam, [{
    key: '_incrementStateId',
    value: function _incrementStateId() {
      this._stateId += 1;
      if (this._stateId > 0xfffffffff) {
        this._stateId = 0;
      }
    }
  }, {
    key: 'setOutlineEnabled',
    value: function setOutlineEnabled(value) {
      this._outlineEnabled = value;
      this._incrementStateId();
    }
  }, {
    key: 'setScreenDoorTransparency',
    value: function setScreenDoorTransparency(value) {
      this._screenDoorTransparency = value;
      this._incrementStateId();
    }
  }, {
    key: 'setOutlineWidth',
    value: function setOutlineWidth(value) {
      if (this._outlineWidth !== value) {
        this._outlineWidth = value;
        this._incrementStateId();
      }
    }
  }, {
    key: 'addOnCameraChanged',
    value: function addOnCameraChanged(fn) {
      this._onCameraChangedListeners.push(fn);
    }
  }, {
    key: '_informOnCameraChangedListeners',
    value: function _informOnCameraChangedListeners() {
      var cam = this;
      this._onCameraChangedListeners.forEach(function (fn) {
        fn(cam);
      });
    }
  }, {
    key: 'setRotation',
    value: function setRotation(rot) {
      var update = false;
      if (rot.length === 16) {
        if (!floatArraysAreEqual(this._rotation, rot)) {
          copy$3(this._rotation, rot);
          update = true;
        }
      } else {
        undefined(this._rotation, rot);
        update = true;
      }
      if (update) {
        this._informOnCameraChangedListeners();
        this._updateModelViewMat = true;
      }
    }
  }, {
    key: 'upsamplingFactor',
    value: function upsamplingFactor() {
      return this._upsamplingFactor;
    }
  }, {
    key: 'setUpsamplingFactor',
    value: function setUpsamplingFactor(val) {
      if (this._upsamplingFactor !== val) {
        this._incrementStateId();
        this._upsamplingFactor = val;
        var x = this._upsamplingFactor / this._width;
        var y = this._upsamplingFactor / this._height;
        this._relativePixelSize = new Float32Array([x, y]);
      }
    }

    // returns the 3 main axes of the current camera rotation

  }, {
    key: 'mainAxes',
    value: function mainAxes() {
      return [fromValues$5(this._rotation[0], this._rotation[4], this._rotation[8]), fromValues$5(this._rotation[1], this._rotation[5], this._rotation[9]), fromValues$5(this._rotation[2], this._rotation[6], this._rotation[10])];
    }
  }, {
    key: 'fieldOfViewY',
    value: function fieldOfViewY() {
      return this._fovY;
    }
  }, {
    key: 'setFieldOfViewY',
    value: function setFieldOfViewY(value) {
      this._fovY = value;
      this._updateProjectionMat = true;
    }
  }, {
    key: 'aspectRatio',
    value: function aspectRatio() {
      return this._width / this._height;
    }
  }, {
    key: 'rotation',
    value: function rotation() {
      return this._rotation;
    }
  }, {
    key: '_updateIfRequired',
    value: function _updateIfRequired() {
      var updated = false;
      if (this._updateModelViewMat) {
        identity$3(this._camModelView);
        translate$2(this._camModelView, this._camModelView, [-this._center[0], -this._center[1], -this._center[2]]);
        multiply$3(this._camModelView, this._rotation, this._camModelView);
        identity$3(this._translation);
        translate$2(this._translation, this._translation, [0, 0, -this._zoom]);
        multiply$3(this._camModelView, this._translation, this._camModelView);
        updated = true;
      }
      if (this._updateProjectionMat) {
        identity$3(this._projection);
        perspective(this._projection, this._fovY, this._width / this._height, this._near, this._far);
        updated = true;
      }
      this._updateProjectionMat = false;
      this._updateModelViewMat = false;
      if (updated) {
        this._incrementStateId();
      }
      return updated;
    }
  }, {
    key: 'setViewportSize',
    value: function setViewportSize(width, height) {
      this._updateProjectionMat = true;
      this._width = width;
      this._height = height;
      this._relativePixelSize = new Float32Array([this._upsamplingFactor / width, this._upsamplingFactor / height]);
    }
  }, {
    key: 'viewportWidth',
    value: function viewportWidth() {
      return this._width;
    }
  }, {
    key: 'viewportHeight',
    value: function viewportHeight() {
      return this._height;
    }
  }, {
    key: 'setCenter',
    value: function setCenter(point) {
      if (!floatArraysAreEqual(this._center, point)) {
        this._updateModelViewMat = true;
        copy$5(this._center, point);
        this._informOnCameraChangedListeners();
      }
    }
  }, {
    key: 'fog',
    value: function fog(value) {
      if (value !== undefined && value !== this._fog) {
        this._fog = value;
        this._incrementStateId();
      }
      return this._fog;
    }
  }, {
    key: 'rotateZ',
    value: function rotateZ(delta) {
      var tm = create$3();
      identity$3(tm);
      this._updateModelViewMat = true;
      rotate$3(tm, tm, delta, [0, 0, 1]);
      multiply$3(this._rotation, tm, this._rotation);
      this._informOnCameraChangedListeners();
    }
  }, {
    key: 'rotateX',
    value: function rotateX(delta) {
      var tm = create$3();
      identity$3(tm);
      this._updateModelViewMat = true;
      rotate$3(tm, tm, delta, [1, 0, 0]);
      multiply$3(this._rotation, tm, this._rotation);
      this._informOnCameraChangedListeners();
    }
  }, {
    key: 'rotateY',
    value: function rotateY(delta) {
      var tm = create$3();
      identity$3(tm);
      this._updateModelViewMat = true;
      rotate$3(tm, tm, delta, [0, 1, 0]);
      multiply$3(this._rotation, tm, this._rotation);
      this._informOnCameraChangedListeners();
    }
  }, {
    key: 'panX',
    value: function panX(delta) {
      return this.panXY(delta, 0);
    }
  }, {
    key: 'panY',
    value: function panY(delta) {
      return this.panXY(0, delta);
    }
  }, {
    key: 'panXY',
    value: function panXY(deltaX, deltaY) {
      var invertRotation = create$3();
      var newCenter = create$5();
      transpose$2(invertRotation, this._rotation);
      this._updateModelViewMat = true;
      set$5(newCenter, -deltaX, deltaY, 0);
      transformMat4(newCenter, newCenter, invertRotation);
      add$5(newCenter, newCenter, this._center);
      this.setCenter(newCenter);
    }
  }, {
    key: 'nearOffset',
    value: function nearOffset() {
      return this._near;
    }
  }, {
    key: 'farOffset',
    value: function farOffset() {
      return this._far;
    }
  }, {
    key: 'setNearFar',
    value: function setNearFar(near, far) {
      if (near === this._near && far === this._far) {
        return;
      }
      this._near = near;
      this._far = far;
      this._updateProjectionMat = true;
    }
  }, {
    key: 'setFogNearFar',
    value: function setFogNearFar(near, far) {
      this._fogNear = near;
      this._fogFar = far;
      this._updateProjectionMat = true;
    }
  }, {
    key: 'setZoom',
    value: function setZoom(zoom) {
      if (Math.abs(this._zoom - zoom) > 0.00000001) {
        this._updateModelViewMat = true;
        this._zoom = zoom;
      }
      return this._zoom;
    }
  }, {
    key: 'zoom',
    value: function zoom(delta) {
      if (delta === undefined) {
        return this._zoom;
      }
      this._updateModelViewMat = true;
      var factor = 1.0 + delta * 0.1;
      this._zoom = Math.min(1000.0, Math.max(2.0, factor * this._zoom));
      this._informOnCameraChangedListeners();
      return this._zoom;
    }
  }, {
    key: 'center',
    value: function center() {
      return this._center;
    }
  }, {
    key: 'setFogColor',
    value: function setFogColor(color) {
      this._fogColor = clone$5(color);
    }
  }, {
    key: 'currentShader',
    value: function currentShader() {
      return this._currentShader;
    }
  }, {
    key: 'invalidateCurrentShader',
    value: function invalidateCurrentShader() {
      this._currentShader = null;
    }
  }, {
    key: 'setOutlineColor',
    value: function setOutlineColor(color) {
      this._outlineColor = clone$5(color);
    }
  }, {
    key: 'setSelectionColor',
    value: function setSelectionColor(color) {
      this._selectionColor = clone$5(color);
      if (color.length === 3) {
        this._selectionColor = fromValues$6(color[0], color[1], color[2], 0.7);
      } else {
        this._selectionColor = clone$6(color);
      }
      this._incrementStateId();
    }

    // sets all OpenGL parameters to make this camera active.
    //
    // among other things, it sets the follow uniforms on the shader:
    //
    // - projectionMat   - the 4x4 projection matrix
    // - modelviewMat    - the 4x4 modelview matrix
    // - rotationMat     - the rotational part of the modelview matrix
    // - fog             - boolean indicating whether fog is enabled
    // - fogNear,fogFar  - near and far offset of fog
    // - fogColor        - the color of fog
    // - outlineColor    - color to be used for the outline shader

  }, {
    key: 'bind',
    value: function bind(shader, additionalTransform) {
      var shaderChanged = false;
      var gl = this._gl;
      if (this._currentShader !== shader) {
        this._currentShader = shader;
        gl.useProgram(shader);
        shaderChanged = true;
      }
      shaderChanged = this._updateIfRequired() || shaderChanged;

      // in case additionalTransform is given, multiply camera model view
      // with the matrix and use the product as the model view matrix.
      if (additionalTransform) {
        multiply$3(this._modelView, this._camModelView, additionalTransform);
        gl.uniformMatrix4fv(shader.modelview, false, this._modelView);
      } else {
        gl.uniformMatrix4fv(shader.modelview, false, this._camModelView);
      }

      // in case nothing changed, there is no need for us to set any other
      // parameters.
      if (this._stateId === shader.stateId) {
        return;
      }
      shader.stateId = this._stateId;
      gl.uniformMatrix4fv(shader.projection, false, this._projection);
      if (shader.rotation) {
        gl.uniformMatrix4fv(shader.rotation, false, this._rotation);
      }
      gl.uniform1i(shader.fog, this._fog);
      var nearOffset = this._zoom;
      gl.uniform1f(shader.fogFar, this._fogFar + nearOffset);
      gl.uniform1f(shader.zoom, this._zoom);
      gl.uniform1f(shader.fogNear, this._fogNear + nearOffset);
      gl.uniform3fv(shader.fogColor, this._fogColor);
      gl.uniform3fv(shader.outlineColor, this._outlineColor);
      gl.uniform4fv(shader.selectionColor, this._selectionColor);
      gl.uniform2fv(shader.relativePixelSize, this._relativePixelSize);
      gl.uniform1f(shader.outlineWidth, this._outlineWidth);
      gl.uniform1i(shader.screenDoorTransparency, this._screenDoorTransparency);
      gl.uniform1i(shader.outlineEnabled, this._outlineEnabled);
    }
  }]);
  return Cam;
}();

var Touchhandler = function () {
  function Touchhandler(element, viewer, cam) {
    classCallCheck(this, Touchhandler);

    this._element = element;
    this._element.addEventListener('touchmove', this._touchMove.bind(this));
    this._element.addEventListener('touchstart', this._touchStart.bind(this));
    this._element.addEventListener('touchend', this._touchEnd.bind(this));
    this._element.addEventListener('touchcancel', this._touchEnd.bind(this));
    this._touchState = {
      scale: 1.0,
      rotation: 0.0,
      center: null
    };
    this._lastSingleTap = null;
    this._viewer = viewer;
    this._cam = cam;
  }

  // calculates the relevant touch/gesture properties based on previous touch
  // state and the new event. It returns the new state with deltaScale,
  // deltaRotation and deltaCenter attached than can be used to control the
  // camera.


  createClass(Touchhandler, [{
    key: '_extractEventAttributes',
    value: function _extractEventAttributes(previousState, event) {
      var state = {};
      state.center = getCenter(event.targetTouches);
      state.pointers = [];
      for (var i = 0; i < event.targetTouches.length; ++i) {
        var t = event.targetTouches[i];
        state.pointers.push({ x: t.clientX, y: t.clientY });
      }
      state.numTouches = event.targetTouches.length;
      state.rotation = 0;
      state.scale = 1.0;
      state.deltaScale = 0.0;
      state.deltaRotation = 0.0;

      if (previousState.center) {
        state.deltaCenter = {
          x: state.center.x - previousState.center.x,
          y: state.center.y - previousState.center.y
        };
      }

      if (previousState.numTouches !== 2 || state.numTouches !== 2) {
        return state;
      }
      if (previousState.initialPointers) {
        state.initialPointers = previousState.initialPointers;
      } else {
        state.initialPointers = previousState.pointers;
      }

      state.scale = getScale(state.initialPointers, state.pointers);
      state.deltaScale = state.scale - previousState.scale;
      state.rotation = getRotationAngle(state.initialPointers, state.pointers);
      state.deltaRotation = state.rotation - previousState.rotation;
      return state;
    }
  }, {
    key: '_touchMove',
    value: function _touchMove(event) {
      event.preventDefault();
      var newState = this._extractEventAttributes(this._touchState, event);
      var deltaScale = -newState.deltaScale * 4.0;
      if (deltaScale !== 0) {
        this._cam.zoom(deltaScale);
      }
      if (newState.numTouches === 2 && this._touchState.numTouches === 2) {
        // scale pan amount by current zoom value. This increases the camera
        // shift when far away from the image center.
        var speed = 0.002 * Math.tan(0.5 * this._cam.fieldOfViewY()) * this._cam.zoom();
        this._cam.panXY(newState.deltaCenter.x * speed, newState.deltaCenter.y * speed);
      }
      var deltaZRotation = -newState.deltaRotation;
      this._cam.rotateZ(deltaZRotation);
      // FIXME: ideally we would rotate the scene around the touch center.
      // This would feel more natural. Now when the touch center is far
      // away from the project center of the viewer, rotation is a little
      // awkward.
      if (newState.numTouches === 1 && this._touchState.numTouches === 1) {
        this._cam.rotateX(newState.deltaCenter.y * 0.005);
        this._cam.rotateY(newState.deltaCenter.x * 0.005);
      }
      this._viewer.requestRedraw();
      this._touchState = newState;
      this._lastSingleTap = null;
    }
  }, {
    key: '_touchStart',
    value: function _touchStart(event) {
      event.preventDefault();
      if (event.targetTouches.length === 1) {
        // detect double tap
        var now = new Date().getTime();
        if (this._lastSingleTap !== null) {
          var delta = now - this._lastSingleTap;
          if (delta < 300) {
            this._viewer._mouseHandler._mouseDoubleClick({
              clientX: event.targetTouches[0].clientX,
              clientY: event.targetTouches[0].clientY });
            now = null;
          }
        }
        this._lastSingleTap = now;
      } else {
        this._lastSingleTap = null;
      }
      this._touchState = this._extractEventAttributes(this._touchState, event);
    }
  }, {
    key: '_touchEnd',
    value: function _touchEnd(event) {
      event.preventDefault();
      // detect first tap
      if (this._lastSingleTap) {
        var rect = this._element.getBoundingClientRect();
        var pointer = this._touchState.pointers[0];
        var picked = this._viewer.pick({ x: pointer.x - rect.left, y: pointer.y - rect.top });
        this._viewer._dispatchEvent(event, 'click', picked);
      }
    }
  }]);
  return Touchhandler;
}();

function getCenter(touches) {
  var centerX = 0;
  var centerY = 0;

  for (var i = 0; i < touches.length; ++i) {
    centerX += touches[i].clientX;
    centerY += touches[i].clientY;
  }
  centerX /= touches.length;
  centerY /= touches.length;
  return { x: centerX, y: centerY };
}

function distance$3(a, b) {
  var dx = b.x - a.x;
  var dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function getScale(prevPointers, newPointers) {
  var prevD = distance$3(prevPointers[0], prevPointers[1]);
  var newD = distance$3(newPointers[0], newPointers[1]);
  return newD / (prevD === 0 ? 1 : prevD);
}

function getAngle(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.atan2(dy, dx);
}

function getRotationAngle(prevPointers, newPointers) {
  return getAngle(newPointers[1], newPointers[0]) - getAngle(prevPointers[1], prevPointers[0]);
}

var MouseHandler = function () {
  function MouseHandler(canvas, viewer, cam, animationTime) {
    classCallCheck(this, MouseHandler);

    this._viewer = viewer;
    this._canvas = canvas;
    this._cam = cam;
    this._canvas = canvas;
    this._animationTime = animationTime;
    this._lastMouseUpTime = null;

    this._boundListeners = {
      doubleClick: this._mouseDoubleClick.bind(this),
      wheel: this._mouseWheel.bind(this),
      down: this._mouseDown.bind(this),
      rotate: this._mouseRotate.bind(this),
      pan: this._mousePan.bind(this),
      up: this._mouseUp.bind(this)
    };

    this._canvas.on('wheel', this._boundListeners.wheel);
    this._canvas.on('dblclick', this._boundListeners.doubleClick);
    this._canvas.on('mousedown', this._boundListeners.down);
  }

  createClass(MouseHandler, [{
    key: '_centerOnClicked',
    value: function _centerOnClicked(picked) {
      if (picked === null) {
        return;
      }

      this._viewer.setCenter(picked.pos(), this._animationTime);
    }
  }, {
    key: 'setCam',
    value: function setCam(cam) {
      this._cam = cam;
    }
  }, {
    key: '_mouseUp',
    value: function _mouseUp(event) {
      var canvas = this._canvas;
      var currentTime = new Date().getTime();
      if ((this._lastMouseUpTime === null || currentTime - this._lastMouseUpTime > 300) & currentTime - this._lastMouseDownTime < 300) {
        var rect = this._canvas.domElement().getBoundingClientRect();
        var picked = this._viewer.pick({ x: event.clientX - rect.left, y: event.clientY - rect.top });
        this._viewer._dispatchEvent(event, 'click', picked);
      }

      this._lastMouseUpTime = currentTime;

      canvas.removeEventListener('mousemove', this._mouseRotateListener);
      canvas.removeEventListener('mousemove', this._mousePan.bind(this));
      canvas.removeEventListener('mouseup', this._mouseUpListener);
      document.removeEventListener('mouseup', this._mouseUpListener);
      document.removeEventListener('mousemove', this._mouseRotateListener);
      document.removeEventListener('mousemove', this._mousePanListener);
    }
  }, {
    key: '_mouseWheel',
    value: function _mouseWheel(event) {
      this._cam.zoom(event.deltaY < 0 ? 1 : -1);
      event.preventDefault();
      this._viewer.requestRedraw();
    }
  }, {
    key: '_mouseDoubleClick',
    value: function _mouseDoubleClick(event) {
      var rect = this._canvas.domElement().getBoundingClientRect();
      var picked = this._viewer.pick({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      this._viewer._dispatchEvent(event, 'doubleClick', picked);
      this._viewer.requestRedraw();
    }
  }, {
    key: '_mouseDown',
    value: function _mouseDown(event) {
      if (event.button !== 0 && event.button !== 1) {
        return;
      }
      this._lastMouseDownTime = new Date().getTime();
      event.preventDefault();
      if (event.shiftKey === true || event.button === 1) {
        this._canvas.on('mousemove', this._mousePanListener);
        document.addEventListener('mousemove', this._mousePanListener, false);
      } else {
        this._canvas.on('mousemove', this._mouseRotateListener);
        document.addEventListener('mousemove', this._mouseRotateListener, false);
      }
      this._canvas.on('mouseup', this._mouseUpListener);
      document.addEventListener('mouseup', this._mouseUpListener, false);
      this._lastMousePos = { x: event.pageX, y: event.pageY };
    }
  }, {
    key: '_mouseRotate',
    value: function _mouseRotate(event) {
      var newMousePos = { x: event.pageX, y: event.pageY };
      var delta = {
        x: newMousePos.x - this._lastMousePos.x,
        y: newMousePos.y - this._lastMousePos.y
      };

      var speed = 0.005;
      this._cam.rotateX(speed * delta.y);
      this._cam.rotateY(speed * delta.x);
      this._lastMousePos = newMousePos;
      this._viewer.requestRedraw();
    }
  }, {
    key: '_mousePan',
    value: function _mousePan(event) {
      var newMousePos = { x: event.pageX, y: event.pageY };
      var delta = {
        x: newMousePos.x - this._lastMousePos.x,
        y: newMousePos.y - this._lastMousePos.y
      };

      // adjust speed according to distance to camera center, it's not
      // perfect but gives good enough results.
      var speed = 0.002 * Math.tan(0.5 * this._cam.fieldOfViewY()) * this._cam.zoom();
      this._cam.panXY(speed * delta.x, speed * delta.y);
      this._lastMousePos = newMousePos;
      this._viewer.requestRedraw();
    }
  }]);
  return MouseHandler;
}();

function _isWebGLSupported(gl) {
  if (document.readyState !== "complete" && document.readyState !== "loaded" && document.readyState !== "interactive") {
    console.error('isWebGLSupported only works after DOMContentLoaded');
    return false;
  }

  if (gl === undefined) {
    try {
      var canvas = document.createElement("canvas");
      return Boolean(window.WebGLRenderingContext && canvas.getContext("experimental-webgl"));
    } catch (e) {
      return false;
    }
  }

  return Boolean(gl);
}

var Canvas = function () {
  function Canvas(parentElement, options) {
    classCallCheck(this, Canvas);

    this._width = options.width;
    this._antialias = options.antialias;
    this._height = options.height;
    this._resize = false;
    this._lastTimestamp = null;
    this._domElement = parentElement;
    this._initCanvas();
    this._backgroundColor = options.backgroundColor;
    this._forceManualAntialiasing = options.forceManualAntialiasing;
  }

  createClass(Canvas, [{
    key: "_ensureSize",
    value: function _ensureSize() {
      if (!this._resize) {
        return;
      }
      this._resize = false;
      var realWidth = this._width * this._samples;
      var realHeight = this._height * this._samples;
      this._realWidth = realWidth;
      this._realHeight = realHeight;
      this._gl.viewport(0, 0, realWidth, realHeight);
      this._canvas.width = realWidth;
      this._canvas.height = realHeight;
      if (this._samples > 1) {
        this._initManualAntialiasing(this._samples);
      }
    }

    // tells the canvas to resize. The resize does not happen immediately but is
    // delayed until the next redraw. This avoids flickering

  }, {
    key: "resize",
    value: function resize(width, height) {
      if (width === this._width && height === this._height) {
        return;
      }
      this._resize = true;
      this._width = width;
      this._height = height;
    }
  }, {
    key: "fitParent",
    value: function fitParent() {
      var parentRect = this._domElement.getBoundingClientRect();
      this.resize(parentRect.width, parentRect.height);
    }
  }, {
    key: "gl",
    value: function gl() {
      return this._gl;
    }

    // returns the content of the WebGL context as a data URL element which can be
    // inserted into an img element. This allows users to save a picture to disk

  }, {
    key: "imageData",
    value: function imageData() {
      return this._canvas.toDataURL();
    }
  }, {
    key: "_initContext",
    value: function _initContext() {
      try {
        var contextOpts = {
          antialias: this._antialias && !this._forceManualAntialiasing,
          preserveDrawingBuffer: true // for image export
        };
        this._gl = this._canvas.getContext('experimental-webgl', contextOpts);
      } catch (err) {
        console.error('WebGL not supported', err);
        return false;
      }

      if (!this._gl) {
        console.error('WebGL not supported');
        return false;
      }

      return true;
    }
  }, {
    key: "_initManualAntialiasing",
    value: function _initManualAntialiasing(samples) {
      var scale_factor = 1.0 / samples;
      var trans_x = -(1 - scale_factor) * 0.5 * this._realWidth;
      var trans_y = -(1 - scale_factor) * 0.5 * this._realHeight;
      var translate = 'translate(' + trans_x + 'px, ' + trans_y + 'px)';
      var scale = 'scale(' + scale_factor + ', ' + scale_factor + ')';
      var transform = translate + ' ' + scale;

      this._canvas.style.webkitTransform = transform;
      this._canvas.style.transform = transform;
      this._canvas.style.ieTransform = transform;
      this._canvas.width = this._realWidth;
      this._canvas.height = this._realHeight;
    }
  }, {
    key: "initGL",
    value: function initGL() {
      var samples = 1;
      if (!this._initContext()) {
        return false;
      }

      var gl = this._gl;
      if (!gl.getContextAttributes().antialias && this._forceManualAntialiasing && this._antialias) {
        samples = 2;
      }
      this._realWidth = this._width * samples;
      this._realHeight = this._height * samples;
      this._samples = samples;
      if (samples > 1) {
        this._initManualAntialiasing(samples);
      }
      gl.viewportWidth = this._realWidth;
      gl.viewportHeight = this._realHeight;

      gl.clearColor(this._backgroundColor[0], this._backgroundColor[1], this._backgroundColor[2], 1.0);
      gl.lineWidth(2.0);
      gl.cullFace(gl.FRONT);
      gl.enable(gl.CULL_FACE);
      gl.enable(gl.DEPTH_TEST);
      return true;
    }
  }, {
    key: "_shaderFromString",
    value: function _shaderFromString(shader_code, type, precision) {
      var shader;
      var gl = this._gl;
      if (type === 'fragment') {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
      } else if (type === 'vertex') {
        shader = gl.createShader(gl.VERTEX_SHADER);
      } else {
        console.error('could not determine type for shader');
        return null;
      }

      // replace the precision placeholder in shader source code with appropriate
      // value. See comment on top of shaders.js for details.
      var code = shader_code.replace('${PRECISION}', precision);
      gl.shaderSource(shader, code);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log(code);
        console.error(gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    }
  }, {
    key: "initShader",
    value: function initShader(vert_shader, frag_shader, precision) {
      var gl = this._gl;
      var fs = this._shaderFromString(frag_shader, 'fragment', precision);
      var vs = this._shaderFromString(vert_shader, 'vertex', precision);
      var shaderProgram = gl.createProgram();

      gl.attachShader(shaderProgram, vs);
      gl.attachShader(shaderProgram, fs);
      gl.linkProgram(shaderProgram);

      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('could not initialise shaders');
        console.error(gl.getShaderInfoLog(shaderProgram));
        return null;
      }

      // get vertex attribute location for the shader once to
      // avoid repeated calls to getAttribLocation/getUniformLocation
      var getAttribLoc = gl.getAttribLocation.bind(gl);
      var getUniformLoc = gl.getUniformLocation.bind(gl);
      shaderProgram.posAttrib = getAttribLoc(shaderProgram, 'attrPos');
      shaderProgram.colorAttrib = getAttribLoc(shaderProgram, 'attrColor');
      shaderProgram.normalAttrib = getAttribLoc(shaderProgram, 'attrNormal');
      shaderProgram.objIdAttrib = getAttribLoc(shaderProgram, 'attrObjId');
      shaderProgram.selectAttrib = getAttribLoc(shaderProgram, 'attrSelect');
      shaderProgram.symId = getUniformLoc(shaderProgram, 'symId');
      shaderProgram.projection = getUniformLoc(shaderProgram, 'projectionMat');
      shaderProgram.modelview = getUniformLoc(shaderProgram, 'modelviewMat');
      shaderProgram.rotation = getUniformLoc(shaderProgram, 'rotationMat');
      shaderProgram.fog = getUniformLoc(shaderProgram, 'fog');
      shaderProgram.fogFar = getUniformLoc(shaderProgram, 'fogFar');
      shaderProgram.fogNear = getUniformLoc(shaderProgram, 'fogNear');
      shaderProgram.fogColor = getUniformLoc(shaderProgram, 'fogColor');
      shaderProgram.outlineColor = getUniformLoc(shaderProgram, 'outlineColor');
      shaderProgram.outlineWidth = getUniformLoc(shaderProgram, 'outlineWidth');
      shaderProgram.relativePixelSize = getUniformLoc(shaderProgram, 'relativePixelSize');
      shaderProgram.screenDoorTransparency = getUniformLoc(shaderProgram, 'screenDoorTransparency');
      shaderProgram.selectionColor = getUniformLoc(shaderProgram, 'selectionColor');
      shaderProgram.pointSize = getUniformLoc(shaderProgram, 'pointSize');
      shaderProgram.zoom = getUniformLoc(shaderProgram, 'zoom');
      shaderProgram.outlineEnabled = getUniformLoc(shaderProgram, 'outlineEnabled');

      return shaderProgram;
    }

    // register event handler on canvas DOM element

  }, {
    key: "on",
    value: function on(name, handler) {
      this._canvas.addEventListener(name, handler, false);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(name, listener) {
      this._canvas.removeEventListener(name, listener, false);
    }

    // helper to register different event handler depending on whether we are
    // running in firefox or any other browser

  }, {
    key: "onWheel",
    value: function onWheel(firefoxHandler, handler) {
      if ('onwheel' in this._canvas) {
        this.on('wheel', firefoxHandler);
      } else {
        this.on('mousewheel', handler);
      }
    }
  }, {
    key: "domElement",
    value: function domElement() {
      return this._canvas;
    }

    // bind the canvas as the primary render target and prepare everything for
    // drawing.

  }, {
    key: "bind",
    value: function bind() {
      this._ensureSize();
      this._gl.viewport(0, 0, this._realWidth, this._realHeight);
    }

    // the current super sampling factor. At the moment either 1 or 2 is
    // returned, depending on whether manual antialiasing is enabled or not.

  }, {
    key: "superSamplingFactor",
    value: function superSamplingFactor() {
      return this._samples;
    }
  }, {
    key: "viewportWidth",
    value: function viewportWidth() {
      return this._realWidth;
    }
  }, {
    key: "viewportHeight",
    value: function viewportHeight() {
      return this._realHeight;
    }
  }, {
    key: "width",
    value: function width() {
      return this._width;
    }
  }, {
    key: "height",
    value: function height() {
      return this._height;
    }
  }, {
    key: "_initCanvas",
    value: function _initCanvas() {
      this._canvas = document.createElement('canvas');
      this._canvas.width = this._width;
      this._canvas.height = this._height;
      this._domElement.appendChild(this._canvas);
    }
  }, {
    key: "isWebGLSupported",
    value: function isWebGLSupported() {
      return _isWebGLSupported(this._gl);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._canvas.width = 1;
      this._canvas.height = 1;
      this._canvas.parentElement.removeChild(this._canvas);
      this._canvas = null;
    }
  }]);
  return Canvas;
}();

// A scene node holds a set of child nodes to be rendered on screen. Later on,
// the SceneNode might grow additional functionality commonly found in a scene
// graph, e.g. coordinate transformations.
var SceneNode = function () {
  function SceneNode(gl) {
    classCallCheck(this, SceneNode);

    this._children = [];
    this._visible = true;
    this._name = name || '';
    this._gl = gl;
    this._order = 1;
  }

  createClass(SceneNode, [{
    key: 'order',
    value: function order(_order) {
      if (_order !== undefined) {
        this._order = _order;
      }
      return this._order;
    }
  }, {
    key: 'add',
    value: function add(node) {
      this._children.push(node);
    }
  }, {
    key: 'draw',
    value: function draw(cam, shaderCatalog, style, pass) {
      for (var i = 0, e = this._children.length; i !== e; ++i) {
        this._children[i].draw(cam, shaderCatalog, style, pass);
      }
    }
  }, {
    key: 'show',
    value: function show() {
      this._visible = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this._visible = false;
    }
  }, {
    key: 'name',
    value: function (_name) {
      function name(_x) {
        return _name.apply(this, arguments);
      }

      name.toString = function () {
        return _name.toString();
      };

      return name;
    }(function (name) {
      if (name !== undefined) {
        this._name = name;
      }
      return this._name;
    })
  }, {
    key: 'destroy',
    value: function destroy() {
      for (var i = 0; i < this._children.length; ++i) {
        this._children[i].destroy();
      }
    }
  }, {
    key: 'visible',
    value: function visible() {
      return this._visible;
    }
  }]);
  return SceneNode;
}();

// calculates the signed angle of vectors a and b with respect to
// the reference normal c.
var signedAngle = function signedAngle(a, b, c) {
  var vector = create$5();

  cross(vector, a, b);

  return Math.atan2(dot$1(vector, c), dot$1(a, b));
};

// calculate a vector orthogonal to an input vector
var ortho$1 = function ortho(out, vec) {
  var tmp = create$5();

  copy$5(tmp, vec);

  if (Math.abs(vec[0]) < Math.abs(vec[1])) {
    if (Math.abs(vec[0]) < Math.abs(vec[2])) {
      tmp[0] += 1;
    } else {
      tmp[2] += 1;
    }
  } else {
    if (Math.abs(vec[1]) < Math.abs(vec[2])) {
      tmp[1] += 1;
    } else {
      tmp[2] += 1;
    }
  }
  return cross(out, vec, tmp);
};

// assumes that axis is normalized. don't expect  to get meaningful
// results when it's not
var axisRotation = function axisRotation(out, axis, angle) {
  var sa = Math.sin(angle);
  var ca = Math.cos(angle);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var xx = x * x;
  var xy = x * y;
  var xz = x * z;
  var yy = y * y;
  var yz = y * z;
  var zz = z * z;

  out[0] = xx + ca - xx * ca;
  out[1] = xy - ca * xy - sa * z;
  out[2] = xz - ca * xz + sa * y;
  out[3] = xy - ca * xy + sa * z;
  out[4] = yy + ca - ca * yy;
  out[5] = yz - ca * yz - sa * x;
  out[6] = xz - ca * xz - sa * y;
  out[7] = yz - ca * yz + sa * x;
  out[8] = zz + ca - ca * zz;

  return out;
};

var cubicHermiteInterpolate = function cubicHermiteInterpolate(out, p_k, m_k, p_kp1, m_kp1, t, index) {
  var p = create$5();
  var tt = t * t;
  var three_minus_two_t = 3.0 - 2.0 * t;
  var h01 = tt * three_minus_two_t;
  var h00 = 1.0 - h01;
  var h10 = tt * (t - 2.0) + t;
  var h11 = tt * (t - 1.0);
  copy$5(p, p_k);
  scale$5(p, p, h00);
  scaleAndAdd(p, p, m_k, h10);
  scaleAndAdd(p, p, p_kp1, h01);
  scaleAndAdd(p, p, m_kp1, h11);
  out[index] = p[0];
  out[index + 1] = p[1];
  out[index + 2] = p[2];
};

// returns the number of interpolation points for the given settings
var catmullRomSplineNumPoints = function catmullRomSplineNumPoints(numPoints, subdiv, circular) {
  if (circular) {
    return numPoints * subdiv;
  } else {
    return subdiv * (numPoints - 1) + 1;
  }
};

// interpolates the given list of points (stored in a Float32Array) with a
// Cubic Hermite spline using the method of Catmull and Rom to calculate the
// tangents.
var catmullRomSpline = function catmullRomSpline(points, numPoints, num, strength, circular, float32BufferPool) {
  circular = circular || false;
  strength = strength || 0.5;
  var out = null;
  var outLength = catmullRomSplineNumPoints(numPoints, num, circular) * 3;
  if (float32BufferPool) {
    out = float32BufferPool.request(outLength);
  } else {
    out = new Float32Array(outLength);
  }
  var index = 0;
  var delta_t = 1.0 / num;
  var m_k = create$5();
  var m_kp1 = create$5(); // tangents at k-1 and k+1
  var p_k = create$5();
  var p_kp1 = create$5();
  var p_kp2 = create$5();
  var p_kp3 = create$5();
  var i = void 0;
  var j = void 0;
  var e = void 0;

  set$5(p_kp1, points[0], points[1], points[2]);
  set$5(p_kp2, points[3], points[4], points[5]);
  if (circular) {
    set$5(p_k, points[points.length - 3], points[points.length - 2], points[points.length - 1]);
    subtract$4(m_k, p_kp2, p_k);
    scale$5(m_k, m_k, strength);
  } else {
    set$5(p_k, points[0], points[1], points[2]);
    set$5(m_k, 0, 0, 0);
  }
  for (i = 1, e = numPoints - 1; i < e; ++i) {
    set$5(p_kp3, points[3 * (i + 1)], points[3 * (i + 1) + 1], points[3 * (i + 1) + 2]);
    subtract$4(m_kp1, p_kp3, p_kp1);
    scale$5(m_kp1, m_kp1, strength);
    for (j = 0; j < num; ++j) {
      cubicHermiteInterpolate(out, p_kp1, m_k, p_kp2, m_kp1, delta_t * j, index);
      index += 3;
    }
    copy$5(p_k, p_kp1);
    copy$5(p_kp1, p_kp2);
    copy$5(p_kp2, p_kp3);
    copy$5(m_k, m_kp1);
  }
  if (circular) {
    set$5(p_kp3, points[0], points[1], points[3]);
    subtract$4(m_kp1, p_kp3, p_kp1);
    scale$5(m_kp1, m_kp1, strength);
  } else {
    set$5(m_kp1, 0, 0, 0);
  }
  for (j = 0; j < num; ++j) {
    cubicHermiteInterpolate(out, p_kp1, m_k, p_kp2, m_kp1, delta_t * j, index);
    index += 3;
  }
  if (!circular) {
    out[index] = points[3 * (numPoints - 1) + 0];
    out[index + 1] = points[3 * (numPoints - 1) + 1];
    out[index + 2] = points[3 * (numPoints - 1) + 2];
    return out;
  }
  copy$5(p_k, p_kp1);
  copy$5(p_kp1, p_kp2);
  copy$5(p_kp2, p_kp3);
  copy$5(m_k, m_kp1);
  set$5(p_kp3, points[3], points[4], points[5]);
  subtract$4(m_kp1, p_kp3, p_kp1);
  scale$5(m_kp1, m_kp1, strength);
  for (j = 0; j < num; ++j) {
    cubicHermiteInterpolate(out, p_kp1, m_k, p_kp2, m_kp1, delta_t * j, index);
    index += 3;
  }
  return out;
};

var Sphere = function () {
  function Sphere() {
    var center = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : create$5();
    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
    classCallCheck(this, Sphere);

    this._center = center;
    this._radius = radius;
  }

  createClass(Sphere, [{
    key: 'center',
    get: function get$$1() {
      return this._center;
    }
  }, {
    key: 'radius',
    get: function get$$1() {
      return this._radius;
    }
  }]);
  return Sphere;
}();

// returns a quaternion which, when converted to matrix form, contains the
// eigen-vectors of the symmetric matrix "a".
//
// Code adapted from http://www.melax.com/diag/
var diagonalizer = function diagonalizer(a) {
  var Q = create$2();
  var D = create$2();
  var tmp1 = create$2();
  var tmp2 = create$2();
  var jr = create$4();
  var offDiag = create$5();
  var magOffDiag = create$5();
  var maxsteps = 24; // certainly wont need that many.
  var q = fromValues$4(0, 0, 0, 1);
  for (var i = 0; i < maxsteps; ++i) {
    fromQuat(Q, q); // v*Q == q*v*conj(q)
    var transQ = transpose$1(tmp1, Q);
    multiply$2(D, Q, multiply$2(tmp2, a, transQ));
    set$5(offDiag, D[5], D[2], D[1]);
    set$5(magOffDiag, Math.abs(offDiag[0]), Math.abs(offDiag[1]), Math.abs(offDiag[2]));
    // get index of largest element off-diagonal element
    var k = void 0;

    if (magOffDiag[0] > magOffDiag[1] && magOffDiag[0] > magOffDiag[2]) {
      k = 0;
    } else if (magOffDiag[1] > magOffDiag[2]) {
      k = 1;
    } else {
      k = 2;
    }

    var k1 = (k + 1) % 3;
    var k2 = (k + 2) % 3;

    if (offDiag[k] === 0.0) {
      break; // diagonal already
    }
    var thet = (D[k2 * 3 + k2] - D[k1 * 3 + k1]) / (2.0 * offDiag[k]);
    var sgn = thet > 0.0 ? 1.0 : -1.0;
    thet *= sgn; // make it positive
    var div = thet + (thet < 1.E6 ? Math.sqrt(thet * thet + 1.0) : thet);
    var t = sgn / div;
    var c = 1.0 / Math.sqrt(t * t + 1.0);
    if (c === 1.0) {
      // no room for improvement - reached machine precision.
      break;
    }
    set$6(jr, 0, 0, 0, 0); // jacobi rotation for this iteration.
    // using 1/2 angle identity sin(a/2) = sqrt((1-cos(a))/2)
    jr[k] = sgn * Math.sqrt((1.0 - c) / 2.0);
    // since our quat-to-matrix convention was for v*M instead of M*v
    jr[k] *= -1.0;
    jr[3] = Math.sqrt(1.0 - jr[k] * jr[k]);
    if (jr[3] === 1.0) {
      break; // reached limits of floating point precision
    }
    q = multiply$4(q, q, jr);
    normalize$$1(q, q);
  }
  return q;
};

// derive a rotation matrix which rotates the z-axis onto tangent. when
// left is given and use_hint is true, x-axis is chosen to be as close
// as possible to left.
//
// upon returning, left will be modified to contain the updated left
// direction.
var buildRotation = function buildRotation(rotation, tangent, left, up, use_left_hint) {
  if (use_left_hint) {
    cross(up, tangent, left);
  } else {
    ortho$1(up, tangent);
  }

  cross(left, up, tangent);
  normalize$1(up, up);
  normalize$1(left, left);
  rotation[0] = left[0];
  rotation[1] = left[1];
  rotation[2] = left[2];

  rotation[3] = up[0];
  rotation[4] = up[1];
  rotation[5] = up[2];

  rotation[6] = tangent[0];
  rotation[7] = tangent[1];
  rotation[8] = tangent[2];
};

// linearly interpolates the array of values and returns it as an Float32Array
var interpolateScalars = function interpolateScalars(values, num) {
  var out = new Float32Array(num * (values.length - 1) + 1);
  var index = 0;
  var bf = 0.0;
  var af = 0.0;
  var delta = 1 / num;
  for (var i = 0; i < values.length - 1; ++i) {
    bf = values[i];
    af = values[i + 1];
    for (var j = 0; j < num; ++j) {
      var t = delta * j;
      out[index + 0] = bf * (1 - t) + af * t;
      index += 1;
    }
  }
  out[index + 0] = af;
  return out;
};

var ProtoSphere = function () {
  function ProtoSphere(stacks, arcs) {
    classCallCheck(this, ProtoSphere);

    this._arcs = arcs;
    this._stacks = stacks;
    this._indices = new Uint16Array(3 * arcs * stacks * 2);
    this._verts = new Float32Array(3 * arcs * stacks);
    var vert_angle = Math.PI / (stacks - 1);
    var horz_angle = Math.PI * 2.0 / arcs;
    var i;
    var j;
    for (i = 0; i < this._stacks; ++i) {
      var radius = Math.sin(i * vert_angle);
      var z = Math.cos(i * vert_angle);
      for (j = 0; j < this._arcs; ++j) {
        var nx = radius * Math.cos(j * horz_angle);
        var ny = radius * Math.sin(j * horz_angle);
        this._verts[3 * (j + i * this._arcs)] = nx;
        this._verts[3 * (j + i * this._arcs) + 1] = ny;
        this._verts[3 * (j + i * this._arcs) + 2] = z;
      }
    }
    var index = 0;
    for (i = 0; i < this._stacks - 1; ++i) {
      for (j = 0; j < this._arcs; ++j) {
        this._indices[index] = i * this._arcs + j;
        this._indices[index + 1] = i * this._arcs + (j + 1) % this._arcs;
        this._indices[index + 2] = (i + 1) * this._arcs + j;

        index += 3;

        this._indices[index] = i * this._arcs + (j + 1) % this._arcs;
        this._indices[index + 1] = (i + 1) * this._arcs + (j + 1) % this._arcs;
        this._indices[index + 2] = (i + 1) * this._arcs + j;
        index += 3;
      }
    }
  }

  createClass(ProtoSphere, [{
    key: 'addTransformed',
    value: function addTransformed(va, center, radius, color, objId) {
      var pos = create$5();
      var normal = create$5();
      var baseIndex = va.numVerts();
      for (var i = 0; i < this._stacks * this._arcs; ++i) {
        set$5(normal, this._verts[3 * i], this._verts[3 * i + 1], this._verts[3 * i + 2]);
        copy$5(pos, normal);
        scale$5(pos, pos, radius);
        add$5(pos, pos, center);
        va.addVertex(pos, normal, color, objId);
      }
      for (i = 0; i < this._indices.length / 3; ++i) {
        va.addTriangle(baseIndex + this._indices[i * 3], baseIndex + this._indices[i * 3 + 1], baseIndex + this._indices[i * 3 + 2]);
      }
    }
  }, {
    key: 'numIndices',
    value: function numIndices() {
      return this._indices.length;
    }
  }, {
    key: 'numVerts',
    value: function numVerts() {
      return this._verts.length / 3;
    }
  }]);
  return ProtoSphere;
}();

// A tube profile is a cross-section of a tube, e.g. a circle or a 'flat'
// square.
// They are used to control the style of helices, strands and coils for the
// cartoon render mode.
var TubeProfile = function () {
  function TubeProfile(points, num, strength) {
    classCallCheck(this, TubeProfile);

    var interpolated = catmullRomSpline(points, points.length / 3, num, strength, true);

    this._indices = new Uint16Array(interpolated.length * 2);
    this._verts = interpolated;
    this._normals = new Float32Array(interpolated.length);
    this._arcs = interpolated.length / 3;

    var normal = create$5();

    for (var i = 0; i < this._arcs; ++i) {
      var i_prev = i === 0 ? this._arcs - 1 : i - 1;
      var i_next = i === this._arcs - 1 ? 0 : i + 1;
      normal[0] = this._verts[3 * i_next + 1] - this._verts[3 * i_prev + 1];
      normal[1] = this._verts[3 * i_prev] - this._verts[3 * i_next];
      normalize$1(normal, normal);
      this._normals[3 * i] = normal[0];
      this._normals[3 * i + 1] = normal[1];
      this._normals[3 * i + 2] = normal[2];
    }

    for (i = 0; i < this._arcs; ++i) {
      this._indices[6 * i] = i;
      this._indices[6 * i + 1] = i + this._arcs;
      this._indices[6 * i + 2] = (i + 1) % this._arcs + this._arcs;
      this._indices[6 * i + 3] = i;
      this._indices[6 * i + 4] = (i + 1) % this._arcs + this._arcs;
      this._indices[6 * i + 5] = (i + 1) % this._arcs;
    }
  }

  createClass(TubeProfile, [{
    key: 'addTransformed',
    value: function addTransformed(vertArray, center, radius, rotation, color, first, offset, objId) {
      var pos = create$5();
      var normal = create$5();
      var arcs = this._arcs;
      var norms = this._normals;
      var verts = this._verts;
      var baseIndex = vertArray.numVerts() - arcs;
      for (var i = 0; i < arcs; ++i) {
        set$5(pos, radius * verts[3 * i], radius * verts[3 * i + 1], 0.0);
        transformMat3(pos, pos, rotation);
        add$5(pos, pos, center);
        set$5(normal, norms[3 * i], norms[3 * i + 1], 0.0);
        transformMat3(normal, normal, rotation);
        vertArray.addVertex(pos, normal, color, objId);
      }
      if (first) {
        return;
      }
      if (offset === 0) {
        // that's what happens most of the time, thus is has been optimized.
        for (i = 0; i < this._indices.length / 3; ++i) {
          vertArray.addTriangle(baseIndex + this._indices[i * 3], baseIndex + this._indices[i * 3 + 1], baseIndex + this._indices[i * 3 + 2]);
        }
        return;
      }
      for (i = 0; i < arcs; ++i) {
        vertArray.addTriangle(baseIndex + (i + offset) % arcs, baseIndex + i + arcs, baseIndex + (i + 1) % arcs + arcs);
        vertArray.addTriangle(baseIndex + (i + offset) % arcs, baseIndex + (i + 1) % arcs + arcs, baseIndex + (i + 1 + offset) % arcs);
      }
    }
  }]);
  return TubeProfile;
}();

var ProtoCylinder = function () {
  function ProtoCylinder(arcs) {
    classCallCheck(this, ProtoCylinder);

    this._arcs = arcs;
    this._indices = new Uint16Array(arcs * 3 * 2);
    this._verts = new Float32Array(3 * arcs * 2);
    this._normals = new Float32Array(3 * arcs * 2);
    var angle = Math.PI * 2 / this._arcs;
    for (var i = 0; i < this._arcs; ++i) {
      var cos_angle = Math.cos(angle * i);
      var sin_angle = Math.sin(angle * i);
      this._verts[3 * i] = cos_angle;
      this._verts[3 * i + 1] = sin_angle;
      this._verts[3 * i + 2] = -0.5;
      this._verts[3 * arcs + 3 * i] = cos_angle;
      this._verts[3 * arcs + 3 * i + 1] = sin_angle;
      this._verts[3 * arcs + 3 * i + 2] = 0.5;
      this._normals[3 * i] = cos_angle;
      this._normals[3 * i + 1] = sin_angle;
      this._normals[3 * arcs + 3 * i] = cos_angle;
      this._normals[3 * arcs + 3 * i + 1] = sin_angle;
    }
    for (i = 0; i < this._arcs; ++i) {
      this._indices[6 * i] = i % this._arcs;
      this._indices[6 * i + 1] = arcs + (i + 1) % this._arcs;
      this._indices[6 * i + 2] = (i + 1) % this._arcs;

      this._indices[6 * i + 3] = i % this._arcs;
      this._indices[6 * i + 4] = arcs + i % this._arcs;
      this._indices[6 * i + 5] = arcs + (i + 1) % this._arcs;
    }
  }

  createClass(ProtoCylinder, [{
    key: 'numVerts',
    value: function numVerts() {
      return this._verts.length / 3;
    }
  }, {
    key: 'numIndices',
    value: function numIndices() {
      return this._indices.length;
    }
  }, {
    key: 'addTransformed',
    value: function addTransformed(va, center, length, radius, rotation, colorOne, colorTwo, idOne, idTwo) {
      var pos = create$5();
      var normal = create$5();
      var baseIndex = va.numVerts();
      var verts = this._verts;
      var norms = this._normals;
      var arcs = this._arcs;
      for (var i = 0; i < 2 * arcs; ++i) {
        set$5(pos, radius * verts[3 * i], radius * verts[3 * i + 1], length * verts[3 * i + 2]);
        transformMat3(pos, pos, rotation);
        add$5(pos, pos, center);
        set$5(normal, norms[3 * i], norms[3 * i + 1], norms[3 * i + 2]);
        transformMat3(normal, normal, rotation);
        var objId = i < arcs ? idOne : idTwo;
        va.addVertex(pos, normal, i < arcs ? colorOne : colorTwo, objId);
      }
      var indices = this._indices;
      for (i = 0; i < indices.length / 3; ++i) {
        va.addTriangle(baseIndex + indices[i * 3], baseIndex + indices[i * 3 + 1], baseIndex + indices[i * 3 + 2]);
      }
    }
  }]);
  return ProtoCylinder;
}();

var VertexArrayBase = function () {
  function VertexArrayBase(gl, numVerts, float32Allocator) {
    classCallCheck(this, VertexArrayBase);

    this._gl = gl;
    this._vertBuffer = gl.createBuffer();
    this._float32Allocator = float32Allocator || null;
    this._ready = false;
    this._boundingSphere = null;
    var numFloats = this._FLOATS_PER_VERT * numVerts;
    this._vertData = float32Allocator.request(numFloats);
  }

  createClass(VertexArrayBase, [{
    key: 'setColor',
    value: function setColor(index, r, g, b, a) {
      var colorStart = index * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
      this._vertData[colorStart + 0] = r;
      this._vertData[colorStart + 1] = g;
      this._vertData[colorStart + 2] = b;
      this._vertData[colorStart + 3] = a;
      this._ready = false;
    }
  }, {
    key: 'getColor',
    value: function getColor(index, color) {
      var colorStart = index * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
      color[0] = this._vertData[colorStart + 0];
      color[1] = this._vertData[colorStart + 1];
      color[2] = this._vertData[colorStart + 2];
      color[3] = this._vertData[colorStart + 3];
      return color;
    }
  }, {
    key: 'setOpacity',
    value: function setOpacity(index, a) {
      var colorStart = index * this._FLOATS_PER_VERT + this._COLOR_OFFSET;
      this._vertData[colorStart + 3] = a;
      this._ready = false;
    }
  }, {
    key: 'setSelected',
    value: function setSelected(index, a) {
      var selected = index * this._FLOATS_PER_VERT + this._SELECT_OFFSET;
      this._vertData[selected] = a;
      this._ready = false;
    }
  }, {
    key: 'boundingSphere',
    value: function boundingSphere() {
      if (!this._boundingSphere) {
        this._boundingSphere = this._calculateBoundingSphere();
      }
      return this._boundingSphere;
    }
  }, {
    key: '_calculateBoundingSphere',
    value: function _calculateBoundingSphere() {
      var numVerts = this.numVerts();
      if (numVerts === 0) {
        return null;
      }
      var center = create$5();
      var index;
      var i;
      for (i = 0; i < numVerts; ++i) {
        index = i * this._FLOATS_PER_VERT;
        center[0] += this._vertData[index + 0];
        center[1] += this._vertData[index + 1];
        center[2] += this._vertData[index + 2];
      }
      scale$5(center, center, 1.0 / numVerts);
      var radiusSquare = 0.0;
      for (i = 0; i < numVerts; ++i) {
        index = i * this._FLOATS_PER_VERT;
        var dx = center[0] - this._vertData[index + 0];
        var dy = center[1] - this._vertData[index + 1];
        var dz = center[2] - this._vertData[index + 2];
        radiusSquare = Math.max(radiusSquare, dx * dx + dy * dy + dz * dz);
      }
      return new Sphere(center, Math.sqrt(radiusSquare));
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._gl.deleteBuffer(this._vertBuffer);
      this._float32Allocator.release(this._vertData);
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers() {
      this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vertBuffer);
      if (this._ready) {
        return;
      }
      this._gl.bufferData(this._gl.ARRAY_BUFFER, this._vertData, this._gl.STATIC_DRAW);
      this._ready = true;
    }

    // Helper method to calculate the squared bounding sphere radius of the
    // sphere centered on "sphereCenter" over multiple vertex arrays.

  }, {
    key: 'updateSquaredSphereRadius',
    value: function updateSquaredSphereRadius(sphereCenter, radius, transform) {
      var transformedCenter = create$5();
      var bounds = this.boundingSphere();
      if (!bounds) {
        return radius;
      }
      // Note: Math.max(radius, null) returns the radius for positive values
      // of radius, which is exactly what we want.
      if (transform) {
        transformMat4(transformedCenter, bounds.center(), transform);
        return Math.max(squaredDistance(transformedCenter, sphereCenter), radius);
      }

      var sphereRadSquare = bounds.radius() * bounds.radius();
      return Math.max(squaredDistance(bounds.center(), sphereCenter) + sphereRadSquare, radius);
    }
  }, {
    key: 'updateProjectionIntervals',
    value: function updateProjectionIntervals(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval, transform) {
      var transformedCenter = create$5();
      var bounds = this.boundingSphere();
      if (!bounds) {
        return;
      }
      if (transform) {
        transformMat4(transformedCenter, bounds.center(), transform);
      } else {
        copy$5(transformedCenter, bounds.center());
      }
      var xProjected = dot$1(xAxis, transformedCenter);
      var yProjected = dot$1(yAxis, transformedCenter);
      var zProjected = dot$1(zAxis, transformedCenter);
      xInterval.update(xProjected - bounds.radius());
      xInterval.update(xProjected + bounds.radius());
      yInterval.update(yProjected - bounds.radius());
      yInterval.update(yProjected + bounds.radius());
      zInterval.update(zProjected - bounds.radius());
      zInterval.update(zProjected + bounds.radius());
    }
  }]);
  return VertexArrayBase;
}();

var IndexedVertexArray = function (_VertexArrayBase) {
  inherits(IndexedVertexArray, _VertexArrayBase);

  function IndexedVertexArray(gl, numVerts, numIndices, float32Allocator, uint16Allocator) {
    classCallCheck(this, IndexedVertexArray);

    var _this = possibleConstructorReturn(this, (IndexedVertexArray.__proto__ || Object.getPrototypeOf(IndexedVertexArray)).call(this, gl, numVerts, float32Allocator));

    _this._FLOATS_PER_VERT = 12;
    _this._BYTES_PER_VERT = 12 * 4;
    _this._OBJID_OFFSET = 10;
    _this._OBJID_BYTE_OFFSET = 10 * 4;
    _this._SELECT_OFFSET = 11;
    _this._SELECT_BYTE_OFFSET = 11 * 4;
    _this._COLOR_OFFSET = 6;
    _this._COLOR_BYTE_OFFSET = 6 * 4;
    _this._NORMAL_OFFSET = 3;
    _this._NORMAL_BYTE_OFFSET = 3 * 4;
    _this._POS_OFFSET = 0;
    _this._POS_BYTE_OFFSET = 0 * 4;

    _this._indexBuffer = gl.createBuffer();
    _this._uint16Allocator = uint16Allocator;
    _this._numVerts = 0;
    _this._maxVerts = numVerts;
    _this._numTriangles = 0;
    _this._indexData = uint16Allocator.request(numIndices);
    return _this;
  }

  createClass(IndexedVertexArray, [{
    key: 'destroy',
    value: function destroy() {
      get(IndexedVertexArray.prototype.__proto__ || Object.getPrototypeOf(IndexedVertexArray.prototype), 'destroy', this).call(this);
      this._gl.deleteBuffer(this._indexBuffer);
      this._uint16Allocator.release(this._indexData);
    }
  }, {
    key: 'setIndexData',
    value: function setIndexData(data) {
      this._ready = false;
      this._numTriangles = data.length / 3;
      for (var i = 0; i < data.length; ++i) {
        this._indexData[i] = data[i];
      }
    }
  }, {
    key: 'setVertData',
    value: function setVertData(data) {
      this._ready = false;
      this._numVerts = data.length / this._FLOATS_PER_VERT;
      for (var i = 0; i < data.length; ++i) {
        this._vertData[i] = data[i];
      }
    }
  }, {
    key: 'numVerts',
    value: function numVerts() {
      return this._numVerts;
    }
  }, {
    key: 'maxVerts',
    value: function maxVerts() {
      return this._maxVerts;
    }
  }, {
    key: 'numIndices',
    value: function numIndices() {
      return this._numTriangles * 3;
    }
  }, {
    key: 'addVertex',
    value: function addVertex(pos, normal, color, objId) {
      if (this._numVerts === this._maxVerts) {
        console.error('maximum number of vertices reached');
        return;
      }
      var i = this._numVerts * this._FLOATS_PER_VERT;
      this._vertData[i++] = pos[0];
      this._vertData[i++] = pos[1];
      this._vertData[i++] = pos[2];
      this._vertData[i++] = normal[0];
      this._vertData[i++] = normal[1];
      this._vertData[i++] = normal[2];
      this._vertData[i++] = color[0];
      this._vertData[i++] = color[1];
      this._vertData[i++] = color[2];
      this._vertData[i++] = color[3];
      this._vertData[i++] = objId;
      this._vertData[i++] = 0.0; // select
      this._numVerts += 1;
      this._ready = false;
    }
  }, {
    key: 'addTriangle',
    value: function addTriangle(idx1, idx2, idx3) {
      var index = 3 * this._numTriangles;
      if (index + 2 >= this._indexData.length) {
        return;
      }
      this._indexData[index++] = idx1;
      this._indexData[index++] = idx2;
      this._indexData[index++] = idx3;
      this._numTriangles += 1;
      this._ready = false;
    }
  }, {
    key: 'bindBuffers',
    value: function bindBuffers() {
      var ready = this._ready;
      var gl = this._gl;
      get(IndexedVertexArray.prototype.__proto__ || Object.getPrototypeOf(IndexedVertexArray.prototype), 'bindBuffers', this).call(this);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
      if (ready) {
        return;
      }
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this._indexData, gl.STATIC_DRAW);
    }
  }, {
    key: 'bindAttribs',
    value: function bindAttribs(shader) {
      var gl = this._gl;
      var byteStride = this._BYTES_PER_VERT;
      gl.enableVertexAttribArray(shader.posAttrib);
      gl.vertexAttribPointer(shader.posAttrib, 3, gl.FLOAT, false, byteStride, this._POS_BYTE_OFFSET);
      if (shader.normalAttrib !== -1) {
        gl.enableVertexAttribArray(shader.normalAttrib);
        gl.vertexAttribPointer(shader.normalAttrib, 3, gl.FLOAT, false, byteStride, this._NORMAL_BYTE_OFFSET);
      }

      if (shader.colorAttrib !== -1) {
        gl.vertexAttribPointer(shader.colorAttrib, 4, gl.FLOAT, false, byteStride, this._COLOR_BYTE_OFFSET);
        gl.enableVertexAttribArray(shader.colorAttrib);
      }
      if (shader.objIdAttrib !== -1) {
        gl.vertexAttribPointer(shader.objIdAttrib, 1, gl.FLOAT, false, byteStride, this._OBJID_BYTE_OFFSET);
        gl.enableVertexAttribArray(shader.objIdAttrib);
      }
      if (shader.selectAttrib !== -1) {
        gl.vertexAttribPointer(shader.selectAttrib, 1, gl.FLOAT, false, byteStride, this._SELECT_BYTE_OFFSET);
        gl.enableVertexAttribArray(shader.selectAttrib);
      }
    }
  }, {
    key: 'releaseAttribs',
    value: function releaseAttribs(shader) {
      var gl = this._gl;
      gl.disableVertexAttribArray(shader.posAttrib);
      if (shader.colorAttrib !== -1) {
        gl.disableVertexAttribArray(shader.colorAttrib);
      }
      if (shader.normalAttrib !== -1) {
        gl.disableVertexAttribArray(shader.normalAttrib);
      }
      if (shader.objIdAttrib !== -1) {
        gl.disableVertexAttribArray(shader.objIdAttrib);
      }
      if (shader.selectAttrib !== -1) {
        gl.disableVertexAttribArray(shader.selectAttrib);
      }
    }
  }, {
    key: 'bind',
    value: function bind(shader) {
      this.bindBuffers();
      this.bindAttribs(shader);
    }

    // draws all triangles contained in the indexed vertex array using the
    // provided shader. requires a call to bind() first.

  }, {
    key: 'draw',
    value: function draw() {
      var gl = this._gl;
      gl.drawElements(gl.TRIANGLES, this._numTriangles * 3, gl.UNSIGNED_SHORT, 0);
    }
  }]);
  return IndexedVertexArray;
}(VertexArrayBase);

// number of ids to be allocated whenever we run out of objects. This would
// ideally depend on number of objects the user is going to create.
var ID_CHUNK_SIZE = 100;

// small helper with the same interface as IndexedVertexArray that can be used
// as a drop-in when the number of vertices/indices is not known in advance.

var DynamicIndexedVertexArray = function () {
  function DynamicIndexedVertexArray() {
    classCallCheck(this, DynamicIndexedVertexArray);

    this._vertData = [];
    this._indexData = [];
    this._numVerts = 0;
  }

  createClass(DynamicIndexedVertexArray, [{
    key: 'numVerts',
    value: function numVerts() {
      return this._numVerts;
    }
  }, {
    key: 'addVertex',
    value: function addVertex(pos, normal, color, objId) {
      this._numVerts += 1;
      this._vertData.push(pos[0], pos[1], pos[2], normal[0], normal[1], normal[2], color[0], color[1], color[2], color[3], objId, 0.0);
    }
  }, {
    key: 'addTriangle',
    value: function addTriangle(indexOne, indexTwo, indexThree) {
      this._indexData.push(indexOne, indexTwo, indexThree);
    }
  }, {
    key: 'numIndices',
    value: function numIndices() {
      return this._indexData.length;
    }
  }, {
    key: 'indexData',
    value: function indexData() {
      return this._indexData;
    }
  }, {
    key: 'vertData',
    value: function vertData() {
      return this._vertData;
    }
  }]);
  return DynamicIndexedVertexArray;
}();

// FIXME: these are duplicated from render.js and should be moved to a
// common module


function capTubeStart(va, baseIndex, numTubeVerts) {
  for (var i = 0; i < numTubeVerts - 1; ++i) {
    va.addTriangle(baseIndex, baseIndex + 1 + i, baseIndex + 2 + i);
  }
  va.addTriangle(baseIndex, baseIndex + numTubeVerts, baseIndex + 1);
}

function capTubeEnd(va, baseIndex, numTubeVerts) {
  var center = baseIndex + numTubeVerts;
  for (var i = 0; i < numTubeVerts - 1; ++i) {
    va.addTriangle(center, baseIndex + i + 1, baseIndex + i);
  }
  va.addTriangle(center, baseIndex, baseIndex + numTubeVerts - 1);
}

var CustomMesh = function (_SceneNode) {
  inherits(CustomMesh, _SceneNode);

  function CustomMesh(name, gl, float32Allocator, uint16Allocator, idPool) {
    classCallCheck(this, CustomMesh);

    var _this = possibleConstructorReturn(this, (CustomMesh.__proto__ || Object.getPrototypeOf(CustomMesh)).call(this, gl));

    _this._float32Allocator = float32Allocator;
    _this._uint16Allocator = uint16Allocator;
    _this._data = new DynamicIndexedVertexArray();
    _this._protoSphere = new ProtoSphere(8, 8);
    _this._protoCyl = new ProtoCylinder(8);
    _this._va = null;
    _this._idRanges = [];
    _this._idPool = idPool;
    _this._ready = false;
    _this._currentRange = null;
    return _this;
  }

  createClass(CustomMesh, [{
    key: 'updateSquaredSphereRadius',
    value: function updateSquaredSphereRadius(center, radius) {
      return radius;
    }
  }, {
    key: 'addTube',
    value: function addTube(start, end, radius, options) {
      var midPoint = create$5();
      var left = create$5();
      var up = create$5();
      var dir = create$5();
      var rotation = create$2();
      options = options || {};
      var color = forceRGB(options.color || 'white');
      var cap = true;
      if (options.cap !== undefined) {
        cap = options.cap;
      }
      subtract$4(dir, end, start);
      var length = length$1(dir);
      normalize$1(dir, dir);
      add$5(midPoint, start, end);
      scale$5(midPoint, midPoint, 0.5);
      buildRotation(rotation, dir, left, up, false);
      if (cap) {
        var startIndex = this._data.numVerts();
        this._data.addVertex(start, [-dir[0], -dir[1], -dir[2]], color, 0);
        capTubeStart(this._data, startIndex, 8);
      }
      var userData = options.userData !== undefined ? options.userData : null;
      console.log(userData);
      var objectId = this._nextObjectId({
        center: midPoint,
        userData: userData,
        geom: this
      });
      this._protoCyl.addTransformed(this._data, midPoint, length, radius, rotation, color, color, objectId, objectId);
      if (cap) {
        var baseIndex = this._data.numVerts();
        this._data.addVertex(end, dir, color, 0);
        capTubeEnd(this._data, baseIndex - 8, 8);
      }
      this._ready = false;
    }
  }, {
    key: '_nextObjectId',
    value: function _nextObjectId(data) {
      // because we have no idea how many different objects the user will
      // create we will just allocate the object ids in chunks of
      // ID_CHUNK_SIZE
      if (!this._currentRange || !this._currentRange.hasLeft()) {
        this._currentRange = this._idPool.getContinuousRange(ID_CHUNK_SIZE);
        this._idRanges.push(this._currentRange);
      }
      return this._currentRange.nextId(data);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      SceneNode.prototype.destroy.call(this);
      for (var i = 0; i < this._idRanges.length; ++i) {
        this._idRanges[i].recycle();
      }
    }
  }, {
    key: 'addSphere',
    value: function addSphere(center, radius, options) {
      options = options || {};
      var color = forceRGB(options.color || 'white');
      var userData = options.userData !== undefined ? options.userData : null;
      var objectId = this._nextObjectId({
        center: center,
        userData: userData,
        geom: this
      });
      this._protoSphere.addTransformed(this._data, center, radius, color, objectId);
      this._ready = false;
    }
  }, {
    key: '_prepareVertexArray',
    value: function _prepareVertexArray() {
      this._ready = true;
      if (this._va !== null) {
        this._va.destroy();
      }
      this._va = new IndexedVertexArray(this._gl, this._data.numVerts(), this._data.numIndices(), this._float32Allocator, this._uint16Allocator);
      // FIXME: find a better way to do this
      this._va.setIndexData(this._data.indexData());
      this._va.setVertData(this._data.vertData());
    }
  }, {
    key: 'draw',
    value: function draw(cam, shaderCatalog, style, pass) {
      if (!this._visible) {
        return;
      }
      if (!this._ready) {
        this._prepareVertexArray();
      }
      var shader = this.shaderForStyleAndPass(shaderCatalog, style, pass);
      if (!shader) {
        return;
      }
      cam.bind(shader);
      this._gl.uniform1i(shader.symId, 255);
      var va = this._va;
      va.bind(shader);
      va.draw();
      va.releaseAttribs(shader);
    }
  }, {
    key: 'shaderForStyleAndPass',
    value: function shaderForStyleAndPass(shaderCatalog, style, pass) {
      if (pass === 'normal') {
        if (style === 'hemilight') {
          return shaderCatalog.hemilight;
        } else {
          return shaderCatalog.phong;
        }
      }
      if (pass === 'select') {
        return shaderCatalog.select;
      }
      if (pass === 'outline') {
        return shaderCatalog.outline;
      }
      var shader = shaderCatalog[pass];
      return shader !== undefined ? shader : null;
    }
  }]);
  return CustomMesh;
}(SceneNode);

function smallestPowerOfTwo(size) {
  var s = 1;
  while (s < size) {
    s *= 2;
  }
  return s;
}

var TextLabel = function (_SceneNode) {
  inherits(TextLabel, _SceneNode);

  function TextLabel(gl, canvas, context, pos, text, options) {
    classCallCheck(this, TextLabel);

    var _this = possibleConstructorReturn(this, (TextLabel.__proto__ || Object.getPrototypeOf(TextLabel)).call(this, gl));

    var opts = options || {};
    _this._options = {};
    _this._options.fillStyle = opts.fillStyle || '#000';
    _this._options.backgroundAlpha = opts.backgroundAlpha || 0.0;
    _this._options.fontSize = opts.fontSize || 24;
    _this._options.font = opts.font || 'Verdana';
    _this._options.fontStyle = opts.fontStyle || 'normal';
    _this._options.fontColor = opts.fontColor || '#000';
    _this._order = 100;
    _this._pos = pos;
    _this._interleavedBuffer = _this._gl.createBuffer();
    _this._interleavedData = new Float32Array(5 * 6);

    _this._prepareText(canvas, context, text);

    var halfWidth = 0.5;
    var halfHeight = 0.5;
    _this._interleavedData[0] = pos[0];
    _this._interleavedData[1] = pos[1];
    _this._interleavedData[2] = pos[2];
    _this._interleavedData[3] = -halfWidth;
    _this._interleavedData[4] = -halfHeight;

    _this._interleavedData[5] = pos[0];
    _this._interleavedData[6] = pos[1];
    _this._interleavedData[7] = pos[2];
    _this._interleavedData[8] = halfWidth;
    _this._interleavedData[9] = halfHeight;

    _this._interleavedData[10] = pos[0];
    _this._interleavedData[11] = pos[1];
    _this._interleavedData[12] = pos[2];
    _this._interleavedData[13] = halfWidth;
    _this._interleavedData[14] = -halfHeight;

    _this._interleavedData[15] = pos[0];
    _this._interleavedData[16] = pos[1];
    _this._interleavedData[17] = pos[2];
    _this._interleavedData[18] = -halfWidth;
    _this._interleavedData[19] = -halfHeight;

    _this._interleavedData[20] = pos[0];
    _this._interleavedData[21] = pos[1];
    _this._interleavedData[22] = pos[2];
    _this._interleavedData[23] = -halfWidth;
    _this._interleavedData[24] = halfHeight;

    _this._interleavedData[25] = pos[0];
    _this._interleavedData[26] = pos[1];
    _this._interleavedData[27] = pos[2];
    _this._interleavedData[28] = halfWidth;
    _this._interleavedData[29] = halfHeight;
    return _this;
  }

  createClass(TextLabel, [{
    key: 'updateProjectionIntervals',
    value: function updateProjectionIntervals() {
      // text labels don't affect the projection interval. Don't do anything.
    }
  }, {
    key: 'updateSquaredSphereRadius',
    value: function updateSquaredSphereRadius(center, radius) {
      // text labels don't affect the bounding spheres.
      return radius;
    }
  }, {
    key: '_setupTextParameters',
    value: function _setupTextParameters(ctx) {
      ctx.fillStyle = this._options.fontColor;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      ctx.font = this._options.fontStyle + ' ' + this._options.fontSize + ' px ' + this._options.font;
    }
  }, {
    key: '_prepareText',
    value: function _prepareText(canvas, ctx, text) {
      this._setupTextParameters(ctx);
      var estimatedWidth = ctx.measureText(text).width;
      var estimatedHeight = this._options.fontSize;
      canvas.width = smallestPowerOfTwo(estimatedWidth);
      canvas.height = smallestPowerOfTwo(estimatedHeight);
      ctx.fillStyle = this._options.fillStyle;
      ctx.globalAlpha = this._options.backgroundAlpha;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this._setupTextParameters(ctx);
      ctx.globalAlpha = 1.0;
      ctx.lineWidth = 0.5;
      ctx.lineStyle = 'none';
      ctx.fillText(text, 0, canvas.height);
      ctx.strokeText(text, 0, canvas.height);
      /*
      // use the following code for testing purposes. for optimal visual
      // results, the pixels of the canvas must match one to one to pixels
      // in the 3D scene.
      ctx.fillStyle='black';
      for (var i = 0; i < canvas.width; i+=2) {
        for (var j = 0; j < canvas.height; j+=2) {
          ctx.fillRect(i + j%2, j, 1, 1);
        }
      }
      */
      this._texture = this._gl.createTexture();
      this._textureFromCanvas(this._texture, canvas);
      // these two variables give us the use portion of the canvas.
      this._xScale = estimatedWidth / canvas.width;
      this._yScale = estimatedHeight / canvas.height;
      this._width = estimatedWidth;
      this._height = estimatedHeight;
    }
  }, {
    key: '_textureFromCanvas',
    value: function _textureFromCanvas(targetTexture, srcCanvas) {
      var gl = this._gl;
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.bindTexture(gl.TEXTURE_2D, targetTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, srcCanvas);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
  }, {
    key: 'bind',
    value: function bind() {
      var gl = this._gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this._interleavedBuffer);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this._texture);
      if (this._ready) {
        return;
      }
      gl.bufferData(gl.ARRAY_BUFFER, this._interleavedData, gl.STATIC_DRAW);
      this._ready = true;
    }
  }, {
    key: 'draw',
    value: function draw(cam, shaderCatalog, style, pass) {
      if (!this._visible) {
        return;
      }

      if (pass !== 'normal') {
        return;
      }
      var shader = shaderCatalog.text;
      cam.bind(shader);
      this.bind();
      var gl = this._gl;
      var factor = cam.upsamplingFactor();
      gl.uniform1f(gl.getUniformLocation(shader, 'xScale'), this._xScale);
      gl.uniform1f(gl.getUniformLocation(shader, 'yScale'), this._yScale);
      gl.uniform1f(gl.getUniformLocation(shader, 'width'), factor * 2.0 * this._width / cam.viewportWidth());
      gl.uniform1f(gl.getUniformLocation(shader, 'height'), factor * 2.0 * this._height / cam.viewportHeight());
      gl.uniform1i(gl.getUniformLocation(shader, 'sampler'), 0);
      var vertAttrib = gl.getAttribLocation(shader, 'attrCenter');
      gl.enableVertexAttribArray(vertAttrib);
      gl.vertexAttribPointer(vertAttrib, 3, gl.FLOAT, false, 5 * 4, 0 * 4);
      var texAttrib = gl.getAttribLocation(shader, 'attrCorner');
      gl.vertexAttribPointer(texAttrib, 2, gl.FLOAT, false, 5 * 4, 3 * 4);
      gl.enableVertexAttribArray(texAttrib);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.disableVertexAttribArray(vertAttrib);
      gl.disableVertexAttribArray(texAttrib);
      gl.disable(gl.BLEND);
    }
  }]);
  return TextLabel;
}(SceneNode);

// During recoloring of a render style, most of the vertex attributes, e.g.
// normals and positions do not change. Only the color information for each
// vertex needs to be adjusted.
//
// To do that efficiently, we need store an association between ranges of
// vertices and atoms in the original structure. Worse, we also need to
// support render styles for which colors need to be interpolated, e.g.
// the smooth line trace, tube and cartoon render modes.
//
// The vertex association data for the atom-based render styles is managed
// by AtomVertexAssoc, whereas the trace-based render styles are managed
// by the TraceVertexAssoc class.

var AtomVertexAssoc = function () {
  function AtomVertexAssoc(structure, callColoringBeginEnd) {
    classCallCheck(this, AtomVertexAssoc);

    this._structure = structure;
    this._assocs = [];
    this._callBeginEnd = callColoringBeginEnd;
  }

  createClass(AtomVertexAssoc, [{
    key: 'addAssoc',
    value: function addAssoc(atom, va, vertStart, vertEnd) {
      this._assocs.push({
        atom: atom, vertexArray: va, vertStart: vertStart, vertEnd: vertEnd
      });
    }
  }, {
    key: 'recolor',
    value: function recolor(colorOp, view) {
      // allocate buffer to hold all colors of the view.
      var colorData = new Float32Array(view.atomCount() * 4);
      if (this._callBeginEnd) {
        // FIXME: does this need to be called on the complete structure or the
        // view?
        colorOp.begin(this._structure);
      }

      var atomMap = {};
      view.eachAtom(function (atom, index) {
        atomMap[atom.index()] = index;
        colorOp.colorFor(atom, colorData, index * 4);
      });
      if (this._callBeginEnd) {
        colorOp.end(this._structure);
      }
      // apply the color to the actual interleaved vertex array.
      for (var i = 0; i < this._assocs.length; ++i) {
        var assoc = this._assocs[i];
        var ai = atomMap[assoc.atom.index()];
        if (ai === undefined) {
          continue;
        }
        var r = colorData[ai * 4 + 0];
        var g = colorData[ai * 4 + 1];
        var b = colorData[ai * 4 + 2];
        var a = colorData[ai * 4 + 3];
        var va = assoc.vertexArray;
        for (var j = assoc.vertStart; j < assoc.vertEnd; ++j) {
          va.setColor(j, r, g, b, a);
        }
      }
    }
  }, {
    key: 'getColorForAtom',
    value: function getColorForAtom(atom, color) {
      // FIXME: this can potentially get slow when called for many atoms
      for (var i = 0; i < this._assocs.length; ++i) {
        var assoc = this._assocs[i];
        if (assoc.atom.full() === atom.full()) {
          // for atom-based color, the color for each atom is constant, so just
          // use any vertex to the determine color.
          return assoc.vertexArray.getColor(assoc.vertStart, color);
        }
      }
      return null;
    }
  }, {
    key: 'setSelection',
    value: function setSelection(view) {
      var atomMap = {};
      view.eachAtom(function (atom) {
        atomMap[atom.index()] = true;
      });

      for (var i = 0; i < this._assocs.length; ++i) {
        var assoc = this._assocs[i];
        var ai = atomMap[assoc.atom.index()];
        var selected = ai !== true ? 0.0 : 1.0;
        var va = assoc.vertexArray;
        for (var j = assoc.vertStart; j < assoc.vertEnd; ++j) {
          va.setSelected(j, selected);
        }
      }
    }
  }, {
    key: 'setOpacity',
    value: function setOpacity(val, view) {
      var atomMap = {};
      view.eachAtom(function (atom) {
        atomMap[atom.index()] = true;
      });
      // apply the color to the actual interleaved vertex array.
      for (var i = 0; i < this._assocs.length; ++i) {
        var assoc = this._assocs[i];
        var ai = atomMap[assoc.atom.index()];
        if (ai !== true) {
          continue;
        }
        var va = assoc.vertexArray;
        for (var j = assoc.vertStart; j < assoc.vertEnd; ++j) {
          va.setOpacity(j, val);
        }
      }
    }
  }]);
  return AtomVertexAssoc;
}();

// handles the association between a trace element, and sets of vertices.
var TraceVertexAssoc = function () {
  function TraceVertexAssoc(structure, interpolation, callColoringBeginEnd) {
    classCallCheck(this, TraceVertexAssoc);

    this._structure = structure;
    this._assocs = [];
    this._callBeginEnd = callColoringBeginEnd;
    this._interpolation = interpolation || 1;
    this._perResidueColors = {};
  }

  createClass(TraceVertexAssoc, [{
    key: 'setPerResidueColors',
    value: function setPerResidueColors(traceIndex, colors) {
      this._perResidueColors[traceIndex] = colors;
    }
  }, {
    key: 'addAssoc',
    value: function addAssoc(traceIndex, vertexArray, slice, vertStart, vertEnd) {
      this._assocs.push({
        traceIndex: traceIndex,
        slice: slice,
        vertStart: vertStart,
        vertEnd: vertEnd,
        vertexArray: vertexArray
      });
    }
  }, {
    key: 'recolor',
    value: function recolor(colorOp, view) {
      // FIXME: this function might create quite a few temporary buffers.
      // use buffer pool to avoid hitting the GC and having to go through
      // the slow creation of typed arrays.
      if (this._callBeginEnd) {
        // FIXME: does this need to be called on the complete structure?
        colorOp.begin(this._structure);
      }
      var colorData = [];
      var i;
      var j;
      var traces = this._structure.backboneTraces();
      console.assert(this._perResidueColors, "per-residue colors must be set for recoloring to work");
      for (i = 0; i < traces.length; ++i) {
        // get current residue colors
        var data = this._perResidueColors[i];
        console.assert(data, "no per-residue colors. Seriously, man?");
        var index = 0;
        var trace = traces[i];
        for (j = 0; j < trace.length(); ++j) {
          if (!view.containsResidue(trace.residueAt(j))) {
            index += 4;
            continue;
          }
          colorOp.colorFor(trace.centralAtomAt(j), data, index);
          index += 4;
        }
        if (this._interpolation > 1) {
          colorData.push(interpolateColor(data, this._interpolation));
        } else {
          colorData.push(data);
        }
      }

      // store the color in the actual interleaved vertex array.
      for (i = 0; i < this._assocs.length; ++i) {
        var assoc = this._assocs[i];
        var ai = assoc.slice;
        var newColors = colorData[assoc.traceIndex];
        var r = newColors[ai * 4];
        var g = newColors[ai * 4 + 1];
        var b = newColors[ai * 4 + 2];
        var a = newColors[ai * 4 + 3];
        var va = assoc.vertexArray;
        for (j = assoc.vertStart; j < assoc.vertEnd; ++j) {
          va.setColor(j, r, g, b, a);
        }
      }
      if (this._callBeginEnd) {
        colorOp.end(this._structure);
      }
    }
  }, {
    key: 'getColorForAtom',
    value: function getColorForAtom(atom, color) {
      // FIXME: this can potentially get slow when called for many atoms
      var i;
      var j;
      var traces = this._structure.backboneTraces();
      var residue = atom.full().residue();
      for (i = 0; i < traces.length; ++i) {
        var data = this._perResidueColors[i];
        var index = 0;
        var trace = traces[i];
        for (j = 0; j < trace.length(); ++j) {
          if (residue === trace.residueAt(j).full()) {
            color[0] = data[index + 0];
            color[1] = data[index + 1];
            color[2] = data[index + 2];
            color[3] = data[index + 3];
            return color;
          }
          index += 4;
        }
      }
      return null;
    }
  }, {
    key: 'setSelection',
    value: function setSelection(view) {
      var selData = [];
      var i;
      var j;
      var traces = this._structure.backboneTraces();
      for (i = 0; i < traces.length; ++i) {
        // get current residue colors
        var data = new Float32Array(this._perResidueColors[i].length);
        var index = 0;
        var trace = traces[i];
        for (j = 0; j < trace.length(); ++j) {
          var selected = view.containsResidue(trace.residueAt(j)) ? 1.0 : 0.0;
          data[index] = selected;
          index += 1;
        }
        if (this._interpolation > 1) {
          selData.push(interpolateScalars(data, this._interpolation));
        } else {
          selData.push(data);
        }
      }

      // store the color in the actual interleaved vertex array.
      for (i = 0; i < this._assocs.length; ++i) {
        var assoc = this._assocs[i];
        var ai = assoc.slice;
        var sel = selData[assoc.traceIndex];
        var a = sel[ai];
        var va = assoc.vertexArray;
        for (j = assoc.vertStart; j < assoc.vertEnd; ++j) {
          va.setSelected(j, a);
        }
      }
    }
  }, {
    key: 'setOpacity',
    value: function setOpacity(val, view) {
      var colorData = [];
      var i;
      var j;
      var traces = this._structure.backboneTraces();
      for (i = 0; i < traces.length; ++i) {
        // get current residue colors
        var data = this._perResidueColors[i];
        var index = 0;
        var trace = traces[i];
        for (j = 0; j < trace.length(); ++j) {
          if (!view.containsResidue(trace.residueAt(j))) {
            index += 4;
            continue;
          }
          data[index + 3] = val;
          index += 4;
        }
        if (this._interpolation > 1) {
          colorData.push(interpolateColor(data, this._interpolation));
        } else {
          colorData.push(data);
        }
      }

      // store the color in the actual interleaved vertex array.
      for (i = 0; i < this._assocs.length; ++i) {
        var assoc = this._assocs[i];
        var ai = assoc.slice;
        var newColors = colorData[assoc.traceIndex];
        var a = newColors[ai * 4 + 3];
        var va = assoc.vertexArray;
        for (j = assoc.vertStart; j < assoc.vertEnd; ++j) {
          va.setOpacity(j, a);
        }
      }
    }
  }]);
  return TraceVertexAssoc;
}();

// (unindexed) vertex array for line-based geometries

var VertexArray = function (_VertexArrayBase) {
  inherits(VertexArray, _VertexArrayBase);

  function VertexArray(gl, numVerts, float32Allocator) {
    classCallCheck(this, VertexArray);

    var _this = possibleConstructorReturn(this, (VertexArray.__proto__ || Object.getPrototypeOf(VertexArray)).call(this, gl, numVerts, float32Allocator));

    _this._FLOATS_PER_VERT = 9;
    _this._POS_OFFSET = 0;
    _this._COLOR_OFFSET = 3;
    _this._ID_OFFSET = 7;
    _this._SELECT_OFFSET = 8;


    _this._numVerts = 0;
    _this._primitiveType = _this._gl.LINES;
    return _this;
  }

  createClass(VertexArray, [{
    key: 'numVerts',
    value: function numVerts() {
      return this._numVerts;
    }
  }, {
    key: 'setDrawAsPoints',
    value: function setDrawAsPoints(enable) {
      if (enable) {
        this._primitiveType = this._gl.POINTS;
      } else {
        this._primitiveType = this._gl.LINES;
      }
    }
  }, {
    key: 'addPoint',
    value: function addPoint(pos, color, id) {
      var index = this._FLOATS_PER_VERT * this._numVerts;
      this._vertData[index++] = pos[0];
      this._vertData[index++] = pos[1];
      this._vertData[index++] = pos[2];
      this._vertData[index++] = color[0];
      this._vertData[index++] = color[1];
      this._vertData[index++] = color[2];
      this._vertData[index++] = color[3];
      this._vertData[index++] = id;
      this._vertData[index++] = 0.0;
      this._numVerts += 1;
      this._ready = false;
      this._boundingSphere = null;
    }
  }, {
    key: 'addLine',
    value: function addLine(startPos, startColor, endPos, endColor, idOne, idTwo) {
      this.addPoint(startPos, startColor, idOne);
      this.addPoint(endPos, endColor, idTwo);
    }
  }, {
    key: 'bindAttribs',
    value: function bindAttribs(shader) {
      this._gl.vertexAttribPointer(shader.posAttrib, 3, this._gl.FLOAT, false, this._FLOATS_PER_VERT * 4, this._POS_OFFSET * 4);
      if (shader.colorAttrib !== -1) {
        this._gl.vertexAttribPointer(shader.colorAttrib, 4, this._gl.FLOAT, false, this._FLOATS_PER_VERT * 4, this._COLOR_OFFSET * 4);
        this._gl.enableVertexAttribArray(shader.colorAttrib);
      }
      this._gl.enableVertexAttribArray(shader.posAttrib);
      if (shader.objIdAttrib !== -1) {
        this._gl.vertexAttribPointer(shader.objIdAttrib, 1, this._gl.FLOAT, false, this._FLOATS_PER_VERT * 4, this._ID_OFFSET * 4);
        this._gl.enableVertexAttribArray(shader.objIdAttrib);
      }
      if (shader.selectAttrib !== -1) {
        this._gl.vertexAttribPointer(shader.selectAttrib, 1, this._gl.FLOAT, false, this._FLOATS_PER_VERT * 4, this._SELECT_OFFSET * 4);
        this._gl.enableVertexAttribArray(shader.selectAttrib);
      }
    }
  }, {
    key: 'releaseAttribs',
    value: function releaseAttribs(shader) {
      this._gl.disableVertexAttribArray(shader.posAttrib);
      if (shader.colorAttrib !== -1) {
        this._gl.disableVertexAttribArray(shader.colorAttrib);
      }

      if (shader.objIdAttrib !== -1) {
        this._gl.disableVertexAttribArray(shader.objIdAttrib);
      }

      if (shader.selectAttrib !== -1) {
        this._gl.disableVertexAttribArray(shader.selectAttrib);
      }
    }
  }, {
    key: 'bind',
    value: function bind(shader) {
      this.bindBuffers();
      this.bindAttribs(shader);
    }

    // draws all triangles contained in the indexed vertex array using the
    // provided shader.

  }, {
    key: 'draw',
    value: function draw() {
      this._gl.drawArrays(this._primitiveType, 0, this._numVerts);
    }
  }]);
  return VertexArray;
}(VertexArrayBase);

var _this$1 = undefined;

// LineChainData and MeshChainData are two internal classes that add molecule-
// specific attributes and functionality to the IndexedVertexArray and
// VertexArray classes.
var BaseChain = {
  chain: function chain() {
    return _this$1._chain;
  },

  drawSymmetryRelated: function drawSymmetryRelated(cam, shader, transforms) {
    _this$1.bind(shader);
    for (var i = 0; i < transforms.length; ++i) {
      cam.bind(shader, transforms[i]);
      _this$1._gl.uniform1i(shader.symId, i);
      _this$1.draw();
    }
    _this$1.releaseAttribs(shader);
  }
};

var LineChainData = function (_VertexArray) {
  inherits(LineChainData, _VertexArray);

  function LineChainData(chain, gl, numVerts, float32Allocator) {
    classCallCheck(this, LineChainData);

    var _this2 = possibleConstructorReturn(this, (LineChainData.__proto__ || Object.getPrototypeOf(LineChainData)).call(this, gl, numVerts, float32Allocator));

    _this2.chain = BaseChain.chain.bind(BaseChain);
    _this2.drawSymmetryRelated = BaseChain.drawSymmetryRelated.bind(BaseChain);


    _this2._chain = chain;
    return _this2;
  }

  return LineChainData;
}(VertexArray);

var MeshChainData = function (_IndexedVertexArray) {
  inherits(MeshChainData, _IndexedVertexArray);

  function MeshChainData(chain, gl, numVerts, numIndices, float32Allocator, uint16Allocator) {
    classCallCheck(this, MeshChainData);

    var _this3 = possibleConstructorReturn(this, (MeshChainData.__proto__ || Object.getPrototypeOf(MeshChainData)).call(this, gl, numVerts, numIndices, float32Allocator, uint16Allocator));

    _this3.chain = BaseChain.chain.bind(BaseChain);
    _this3.drawSymmetryRelated = BaseChain.drawSymmetryRelated.bind(BaseChain);
    return _this3;
  }

  return MeshChainData;
}(IndexedVertexArray);

function eachCentralAtomAsym(structure, callback) {
  structure.eachResidue(function (residue) {
    var centralAtom = residue.centralAtom();
    if (centralAtom === null) {
      return;
    }
    callback(centralAtom, centralAtom.pos());
  });
}

var eachCentralAtomSym = function eachCentralAtomSym(structure, gens, callback) {
  var transformedPos = create$5();
  for (var i = 0; i < gens.length; ++i) {
    var gen = gens[i];
    var chains = structure.chainsByName(gen.chains());
    for (var j = 0; j < gen.matrices().length; ++j) {
      var matrix = gen.matrix(j);
      for (var k = 0; k < chains.length; ++k) {
        var chain = chains[k];
        for (var l = 0; l < chain.residues().length; ++l) {
          var centralAtom = chain.residues()[l].centralAtom();
          if (centralAtom === null) {
            continue;
          }
          transformMat4(transformedPos, centralAtom.pos(), matrix);
          callback(centralAtom, transformedPos);
        }
      }
    }
  }
};

var BaseGeom = function (_SceneNode) {
  inherits(BaseGeom, _SceneNode);

  function BaseGeom(gl) {
    classCallCheck(this, BaseGeom);

    var _this = possibleConstructorReturn(this, (BaseGeom.__proto__ || Object.getPrototypeOf(BaseGeom)).call(this, gl));

    _this._idRanges = [];
    _this._vertAssocs = [];
    _this._showRelated = null;
    _this._selection = null;
    return _this;
  }

  createClass(BaseGeom, [{
    key: 'setShowRelated',
    value: function setShowRelated(rel) {
      if (rel && rel !== 'asym') {
        if (this.structure().assembly(rel) === null) {
          console.error('no assembly with name', rel, '. Falling back to asymmetric unit');
          return;
        }
      }
      this._showRelated = rel;
      return rel;
    }
  }, {
    key: 'symWithIndex',
    value: function symWithIndex(index) {
      if (this.showRelated() === 'asym') {
        return null;
      }
      var assembly = this.structure().assembly(this.showRelated());
      if (!assembly) {
        return null;
      }
      var gen = assembly.generators();
      for (var i = 0; i < gen.length; ++i) {
        if (gen[i].matrices().length > index) {
          return gen[i].matrix(index);
        }
        index -= gen[i].matrices().length;
      }
      return null;
    }
  }, {
    key: 'showRelated',
    value: function showRelated() {
      return this._showRelated;
    }
  }, {
    key: 'select',
    value: function select(what) {
      return this.structure().select(what);
    }
  }, {
    key: 'structure',
    value: function structure() {
      return this._vertAssocs[0]._structure;
    }
  }, {
    key: 'getColorForAtom',
    value: function getColorForAtom(atom, color) {
      // FIXME: what to do in case there are multiple assocs?
      return this._vertAssocs[0].getColorForAtom(atom, color);
    }
  }, {
    key: 'addIdRange',
    value: function addIdRange(range) {
      this._idRanges.push(range);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      SceneNode.prototype.destroy.call(this);
      for (var i = 0; i < this._idRanges.length; ++i) {
        this._idRanges[i].recycle();
      }
    }
  }, {
    key: 'eachCentralAtom',
    value: function eachCentralAtom(callback) {
      var go = this;
      var structure = go.structure();
      var assembly = structure.assembly(go.showRelated());
      // in case there is no assembly, just loop over all the atoms contained
      // in the structure and invoke the callback as is
      if (assembly === null) {
        return eachCentralAtomAsym(structure, callback);
      }
      return eachCentralAtomSym(structure, assembly.generators(), callback);
    }
  }, {
    key: 'addVertAssoc',
    value: function addVertAssoc(assoc) {
      this._vertAssocs.push(assoc);
    }

    // returns all vertex arrays that contain geometry for one of the specified
    // chain names. Typically, there will only be one array for a given chain,
    // but for larger chains with mesh geometries a single chain may be split
    // across multiple vertex arrays.

  }, {
    key: '_vertArraysInvolving',
    value: function _vertArraysInvolving(chains) {
      var vertArrays = this.vertArrays();
      var selectedArrays = [];
      var set$$1 = {};
      for (var ci = 0; ci < chains.length; ++ci) {
        set$$1[chains[ci]] = true;
      }
      for (var i = 0; i < vertArrays.length; ++i) {
        if (set$$1[vertArrays[i].chain()] === true) {
          selectedArrays.push(vertArrays[i]);
        }
      }
      return selectedArrays;
    }

    // draws vertex arrays by using the symmetry generators contained in assembly

  }, {
    key: '_drawSymmetryRelated',
    value: function _drawSymmetryRelated(cam, shader, assembly) {
      var gens = assembly.generators();
      for (var i = 0; i < gens.length; ++i) {
        var gen = gens[i];
        var affectedVAs = this._vertArraysInvolving(gen.chains());
        this._drawVertArrays(cam, shader, affectedVAs, gen.matrices());
      }
    }
  }, {
    key: '_updateProjectionIntervalsAsym',
    value: function _updateProjectionIntervalsAsym(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval) {
      var vertArrays = this.vertArrays();
      for (var i = 0; i < vertArrays.length; ++i) {
        vertArrays[i].updateProjectionIntervals(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval);
      }
    }
  }, {
    key: 'updateProjectionIntervals',
    value: function updateProjectionIntervals(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval) {
      if (!this._visible) {
        return;
      }

      var showRelated = this.showRelated();
      if (showRelated === 'asym') {
        return this._updateProjectionIntervalsAsym(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval);
      }
      var assembly = this.structure().assembly(showRelated);
      // in case there is no assembly, fallback to asymmetric unit and bail out.
      var gens = assembly.generators();
      for (var i = 0; i < gens.length; ++i) {
        var gen = gens[i];
        var affectedVAs = this._vertArraysInvolving(gen.chains());
        for (var j = 0; j < gen.matrices().length; ++j) {
          for (var k = 0; k < affectedVAs.length; ++k) {
            var transform = gen.matrix(j);
            affectedVAs[k].updateProjectionIntervals(xAxis, yAxis, zAxis, xInterval, yInterval, zInterval, transform);
          }
        }
      }
    }

    // FIXME: investigate the performance cost of sharing code between
    // updateSquaredSphereRadius and updateProjectionIntervals

  }, {
    key: '_updateSquaredSphereRadiusAsym',
    value: function _updateSquaredSphereRadiusAsym(center, radius) {
      var vertArrays = this.vertArrays();
      for (var i = 0; i < vertArrays.length; ++i) {
        radius = vertArrays[i].updateSquaredSphereRadius(center, radius);
      }
      return radius;
    }
  }, {
    key: 'updateSquaredSphereRadius',
    value: function updateSquaredSphereRadius(center, radius) {
      if (!this._visible) {
        return radius;
      }
      var showRelated = this.showRelated();
      if (showRelated === 'asym') {
        return this._updateSquaredSphereRadiusAsym(center, radius);
      }
      var assembly = this.structure().assembly(showRelated);
      var gens = assembly.generators();
      for (var i = 0; i < gens.length; ++i) {
        var gen = gens[i];
        var affectedVAs = this._vertArraysInvolving(gen.chains());
        for (var j = 0; j < gen.matrices().length; ++j) {
          for (var k = 0; k < affectedVAs.length; ++k) {
            // FIXME: is this correct?
            // var transform = gen.matrix(j);
            radius = affectedVAs[k].updateSquaredSphereRadius(center, radius);
          }
        }
      }
      return radius;
    }
  }, {
    key: 'draw',
    value: function draw(cam, shaderCatalog, style, pass) {

      if (!this._visible) {
        return;
      }

      var shader = this.shaderForStyleAndPass(shaderCatalog, style, pass);

      if (!shader) {
        return;
      }
      var showRelated = this.showRelated();
      if (showRelated === 'asym') {
        return this._drawVertArrays(cam, shader, this.vertArrays(), null);
      }

      var assembly = this.structure().assembly(showRelated);
      return this._drawSymmetryRelated(cam, shader, assembly);
    }
  }, {
    key: 'colorBy',
    value: function colorBy(colorFunc, view) {
      console.time('BaseGeom.colorBy');
      this._ready = false;
      view = view || this.structure();
      for (var i = 0; i < this._vertAssocs.length; ++i) {
        this._vertAssocs[i].recolor(colorFunc, view);
      }
      console.timeEnd('BaseGeom.colorBy');
    }
  }, {
    key: 'setOpacity',
    value: function setOpacity(val, view) {
      console.time('BaseGeom.setOpacity');
      this._ready = false;
      view = view || this.structure();
      for (var i = 0; i < this._vertAssocs.length; ++i) {
        this._vertAssocs[i].setOpacity(val, view);
      }
      console.timeEnd('BaseGeom.setOpacity');
    }
  }, {
    key: 'setSelection',
    value: function setSelection(view) {
      console.time('BaseGeom.setSelection');
      this._selection = view;
      this._ready = false;
      for (var i = 0; i < this._vertAssocs.length; ++i) {
        this._vertAssocs[i].setSelection(view);
      }
      console.timeEnd('BaseGeom.setSelection');
    }
  }, {
    key: 'selection',
    value: function selection() {
      if (this._selection === null) {
        this._selection = this.structure().createEmptyView();
      }
      return this._selection;
    }
  }]);
  return BaseGeom;
}(SceneNode);

// an (indexed) mesh geometry container
// ------------------------------------------------------------------------
//
// stores the vertex data in interleaved format. not doing so has severe
// performance penalties in WebGL, and severe means orders of magnitude
// slower than using an interleaved array.
//
// the vertex data is stored in the following format;
//
// Px Py Pz Nx Ny Nz Cr Cg Cb Ca Id
//
// , where P is the position, N the normal and C the color information
// of the vertex.
//
// Uint16 index buffer limit
// -----------------------------------------------------------------------
//
// In WebGL, index arrays are restricted to uint16. The largest possible
// index value is smaller than the number of vertices required to display
// larger molecules. To work around this, MeshGeom allows to split the
// render geometry across multiple indexed vertex arrays.

var MeshGeom = function (_BaseGeom) {
  inherits(MeshGeom, _BaseGeom);

  function MeshGeom(gl, float32Allocator, uint16Allocator) {
    classCallCheck(this, MeshGeom);

    var _this = possibleConstructorReturn(this, (MeshGeom.__proto__ || Object.getPrototypeOf(MeshGeom)).call(this, gl));

    _this._indexedVAs = [];
    _this._float32Allocator = float32Allocator;
    _this._uint16Allocator = uint16Allocator;
    _this._remainingVerts = null;
    _this._remainingIndices = null;
    return _this;
  }

  createClass(MeshGeom, [{
    key: '_boundedVertArraySize',
    value: function _boundedVertArraySize(size) {
      return Math.min(65536, size);
    }
  }, {
    key: 'addChainVertArray',
    value: function addChainVertArray(chain, numVerts, numIndices) {
      this._remainingVerts = numVerts;
      this._remainingIndices = numIndices;
      var newVa = new MeshChainData(chain.name(), this._gl, this._boundedVertArraySize(numVerts), numIndices, this._float32Allocator, this._uint16Allocator);
      this._indexedVAs.push(newVa);
      return newVa;
    }
  }, {
    key: 'addVertArray',
    value: function addVertArray(numVerts, numIndices) {
      this._remainingVerts = numVerts;
      this._remainingIndices = numIndices;
      var newVa = new IndexedVertexArray(this._gl, this._boundedVertArraySize(numVerts), numIndices, this._float32Allocator, this._uint16Allocator);

      this._indexedVAs.push(newVa);
      return newVa;
    }

    // makes sure the current vertex array has at least space for numVerts more
    // vertices. If so, the current vertex array is returned. If not, a new
    // vertex array is created with as much space as possible:
    // - if there are still more than 2^16 vertices required for this mesh geom,
    //   a new vertex array with 2^16 vertices is returned
    // - if there are less than 2^16 vertices are required, a new vertex array
    //   with the number of remaining vertices is returned.
    //
    // Note: this depends on the total number of vertices provided to
    // addVertArray/addChainVertArray. In case there are too few vertices passed
    // to addVertArray/addChainVertArray, bad stuff will happen!

  }, {
    key: 'vertArrayWithSpaceFor',
    value: function vertArrayWithSpaceFor(numVerts) {
      var currentVa = this._indexedVAs[this._indexedVAs.length - 1];
      var remaining = currentVa.maxVerts() - currentVa.numVerts();
      if (remaining >= numVerts) {
        return currentVa;
      }
      this._remainingVerts -= currentVa.numVerts();
      this._remainingIndices -= currentVa.numIndices();
      numVerts = this._boundedVertArraySize(this._remainingVerts);
      var newVa = null;
      if (currentVa instanceof MeshChainData) {
        newVa = new MeshChainData(currentVa.chain(), this._gl, numVerts, this._remainingIndices, this._float32Allocator, this._uint16Allocator);
      } else {
        newVa = new IndexedVertexArray(this._gl, numVerts, this._remainingIndices, this._float32Allocator, this._uint16Allocator);
      }
      this._indexedVAs.push(newVa);
      return newVa;
    }
  }, {
    key: 'vertArray',
    value: function vertArray(index) {
      return this._indexedVAs[index];
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      get(MeshGeom.prototype.__proto__ || Object.getPrototypeOf(MeshGeom.prototype), 'destroy', this).call(this);
      for (var i = 0; i < this._indexedVAs.length; ++i) {
        this._indexedVAs[i].destroy();
      }
      this._indexedVAs = [];
    }
  }, {
    key: 'numVerts',
    value: function numVerts() {
      return this._indexedVAs[0].numVerts();
    }
  }, {
    key: 'shaderForStyleAndPass',
    value: function shaderForStyleAndPass(shaderCatalog, style, pass) {
      if (pass === 'normal') {
        if (style === 'hemilight') {
          return shaderCatalog.hemilight;
        } else {
          return shaderCatalog.phong;
        }
      }
      if (pass === 'select') {
        return shaderCatalog.select;
      }
      if (pass === 'outline') {
        return shaderCatalog.outline;
      }
      var shader = shaderCatalog[pass];
      return shader !== undefined ? shader : null;
    }
  }, {
    key: '_drawVertArrays',
    value: function _drawVertArrays(cam, shader, indexedVAs, additionalTransforms) {
      var i;
      if (additionalTransforms) {
        for (i = 0; i < indexedVAs.length; ++i) {
          indexedVAs[i].drawSymmetryRelated(cam, shader, additionalTransforms);
        }
      } else {
        cam.bind(shader);
        this._gl.uniform1i(shader.symId, 255);
        for (i = 0; i < indexedVAs.length; ++i) {
          indexedVAs[i].bind(shader);
          indexedVAs[i].draw();
          indexedVAs[i].releaseAttribs(shader);
        }
      }
    }
  }, {
    key: 'vertArrays',
    value: function vertArrays() {
      return this._indexedVAs;
    }
  }, {
    key: 'addVertex',
    value: function addVertex(pos, normal, color, objId) {
      var va = this._indexedVAs[0];
      va.addVertex(pos, normal, color, objId);
    }
  }, {
    key: 'addTriangle',
    value: function addTriangle(idx1, idx2, idx3) {
      var va = this._indexedVAs[0];
      va.addTriangle(idx1, idx2, idx3);
    }
  }]);
  return MeshGeom;
}(BaseGeom);

var BillboardGeom = function (_MeshGeom) {
  inherits(BillboardGeom, _MeshGeom);

  function BillboardGeom() {
    classCallCheck(this, BillboardGeom);
    return possibleConstructorReturn(this, (BillboardGeom.__proto__ || Object.getPrototypeOf(BillboardGeom)).apply(this, arguments));
  }

  createClass(BillboardGeom, [{
    key: 'draw',
    value: function draw(cam, shaderCatalog, style, pass) {
      // we need the back-faces for the outline rendering
      this._gl.disable(this._gl.CULL_FACE);
      MeshGeom.prototype.draw.call(this, cam, shaderCatalog, style, pass);
      this._gl.enable(this._gl.CULL_FACE);
    }
  }, {
    key: 'shaderForStyleAndPass',
    value: function shaderForStyleAndPass(shaderCatalog, style, pass) {
      // the normal pass contains render code for both the normal
      // and outline pass which is toggled on/off by a boolean
      // uniform.
      if (pass === 'normal') {
        return shaderCatalog.spheres;
      }

      if (pass === 'select') {
        return shaderCatalog.selectSpheres;
      }

      return null;
    }
  }]);
  return BillboardGeom;
}(MeshGeom);

// Holds geometrical data for objects rendered as lines. For each vertex,
// the color and position is stored in an interleaved format.

var LineGeom = function (_LineChainData) {
  inherits(LineGeom, _LineChainData);

  function LineGeom(gl, float32Allocator) {
    classCallCheck(this, LineGeom);

    var _this = possibleConstructorReturn(this, (LineGeom.__proto__ || Object.getPrototypeOf(LineGeom)).call(this, gl));

    _this._vertArrays = [];
    _this._float32Allocator = float32Allocator;
    _this._lineWidth = 0.5;
    _this._pointSize = 1.0;
    return _this;
  }

  createClass(LineGeom, [{
    key: 'addChainVertArray',
    value: function addChainVertArray(chain, numVerts) {
      var va = new LineChainData(chain.name(), this._gl, numVerts, this._float32Allocator);
      this._vertArrays.push(va);
      return va;
    }
  }, {
    key: 'setLineWidth',
    value: function setLineWidth(width) {
      this._lineWidth = width;
    }
  }, {
    key: 'setPointSize',
    value: function setPointSize(size) {
      this._pointSize = size;
    }
  }, {
    key: 'vertArrays',
    value: function vertArrays() {
      return this._vertArrays;
    }
  }, {
    key: 'shaderForStyleAndPass',
    value: function shaderForStyleAndPass(shaderCatalog, style, pass) {
      if (pass === 'outline') {
        return shaderCatalog.selectLines;
      }
      if (pass === 'select') {
        return shaderCatalog.select;
      }
      return shaderCatalog.lines;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      get(LineGeom.prototype.__proto__ || Object.getPrototypeOf(LineGeom.prototype), 'destroy', this).call(this);
      for (var i = 0; i < this._vertArrays.length; ++i) {
        this._vertArrays[i].destroy();
      }
      this._vertArrays = [];
    }
  }, {
    key: '_drawVertArrays',
    value: function _drawVertArrays(cam, shader, vertArrays, additionalTransforms) {
      var pointSizeMul = cam.upsamplingFactor();
      if (shader.selectAttrib !== -1) {
        pointSizeMul = 4.0 * cam.upsamplingFactor();
      }
      var i;
      if (additionalTransforms) {
        cam.bind(shader);
        this._gl.lineWidth(pointSizeMul * this._lineWidth);
        if (shader.pointSize) {
          this._gl.uniform1f(shader.pointSize, pointSizeMul * this._pointSize);
        }
        for (i = 0; i < vertArrays.length; ++i) {
          vertArrays[i].drawSymmetryRelated(cam, shader, additionalTransforms);
        }
      } else {
        cam.bind(shader);
        this._gl.lineWidth(pointSizeMul * this._lineWidth);
        this._gl.uniform1i(shader.symId, 255);
        if (shader.pointSize) {
          this._gl.uniform1f(shader.pointSize, pointSizeMul * this._pointSize);
        }
        for (i = 0; i < vertArrays.length; ++i) {
          vertArrays[i].bind(shader);
          vertArrays[i].draw();
          vertArrays[i].releaseAttribs(shader);
        }
      }
    }
  }, {
    key: 'vertArray',
    value: function vertArray() {
      return this._va;
    }
  }]);
  return LineGeom;
}(LineChainData);

var R = 0.6;
var R2 = 0.8071;
var COIL_POINTS = [-R, -R, 0, R, -R, 0, R, R, 0, -R, R, 0];

var HELIX_POINTS = [-6.0 * R, -0.9 * R2, 0, -5.8 * R, -1.0 * R2, 0, 5.8 * R, -1.0 * R2, 0, 6.0 * R, -0.9 * R2, 0, 6.0 * R, 0.9 * R2, 0, 5.8 * R, 1.0 * R2, 0, -5.8 * R, 1.0 * R2, 0, -6.0 * R, 0.9 * R2, 0];

var ARROW_POINTS = [-10.0 * R, -0.9 * R2, 0, -9.8 * R, -1.0 * R2, 0, 9.8 * R, -1.0 * R2, 0, 10.0 * R, -0.9 * R2, 0, 10.0 * R, 0.9 * R2, 0, 9.8 * R, 1.0 * R2, 0, -9.8 * R, 1.0 * R2, 0, -10.0 * R, 0.9 * R2, 0];

/* van der Waals radius by atom._element
 * from Royal Society of Chemistry
 * http://www.rsc.org/periodic-table/trends
*/
var VDW_RADIUS = {
  H: 1.1,
  C: 1.7,
  N: 1.55,
  O: 1.52,
  F: 1.47,
  CL: 1.75,
  BR: 1.85,
  I: 1.98,
  HE: 1.4,
  NE: 1.54,
  AR: 1.88,
  XE: 2.16,
  KR: 2.02,
  P: 1.8,
  S: 1.8,
  B: 1.92,
  LI: 1.82,
  NA: 2.27,
  K: 2.75,
  RB: 3.03,
  CS: 3.43,
  FR: 3.48,
  BE: 1.53,
  MG: 1.73,
  SR: 2.49,
  BA: 2.68,
  RA: 2.83,
  TI: 2.11,
  FE: 2.04,
  CU: 1.96
};

// performs an in-place smoothing over 3 consecutive positions.
var smoothStrandInplace = function smoothStrandInplace(p, from, to, length) {
  var bf = create$5();
  var af = create$5();
  var cf = create$5();
  from = Math.max(from, 1);
  to = Math.min(length - 1, to);
  var startIndex = 3 * (from - 1);
  set$5(bf, p[startIndex], p[startIndex + 1], p[startIndex + 2]);
  set$5(cf, p[3 * from], p[3 * from + 1], p[3 * from + 2]);
  for (var i = from; i < to; ++i) {
    startIndex = 3 * (i + 1);
    set$5(af, p[startIndex], p[startIndex + 1], p[startIndex + 2]);
    p[3 * i + 0] = af[0] * 0.25 + cf[0] * 0.50 + bf[0] * 0.25;
    p[3 * i + 1] = af[1] * 0.25 + cf[1] * 0.50 + bf[1] * 0.25;
    p[3 * i + 2] = af[2] * 0.25 + cf[2] * 0.50 + bf[2] * 0.25;
    copy$5(bf, cf);
    copy$5(cf, af);
  }
};

var spheresForChain = function spheresForChain(meshGeom, vertAssoc, opts, chain) {
  var color = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var atomCount = chain.atomCount();
  var idRange = opts.idPool.getContinuousRange(atomCount);
  meshGeom.addIdRange(idRange);
  var vertsPerSphere = opts.protoSphere.numVerts();
  var indicesPerSphere = opts.protoSphere.numIndices();
  var radius = 1.5 * opts.radiusMultiplier;
  meshGeom.addChainVertArray(chain, vertsPerSphere * atomCount, indicesPerSphere * atomCount);
  chain.eachAtom(function (atom) {
    var va = meshGeom.vertArrayWithSpaceFor(vertsPerSphere);
    opts.color.colorFor(atom, color, 0);
    var vertStart = va.numVerts();
    var objId = idRange.nextId({ geom: meshGeom, atom: atom });
    opts.protoSphere.addTransformed(va, atom.pos(), radius, color, objId);
    var vertEnd = va.numVerts();
    vertAssoc.addAssoc(atom, va, vertStart, vertEnd);
  });
};

var spheres = function spheres(structure, gl, opts) {
  console.time('spheres');
  var protoSphere = new ProtoSphere(opts.sphereDetail, opts.sphereDetail);
  opts.protoSphere = protoSphere;
  var geom = new MeshGeom(gl, opts.float32Allocator, opts.uint16Allocator);
  var vertAssoc = new AtomVertexAssoc(structure, true);
  geom.addVertAssoc(vertAssoc);
  geom.setShowRelated(opts.showRelated);
  opts.color.begin(structure);
  structure.eachChain(function (chain) {
    spheresForChain(geom, vertAssoc, opts, chain);
  });
  opts.color.end(structure);
  console.timeEnd('spheres');
  return geom;
};

var billboardedSpheresForChain = function billboardedSpheresForChain(meshGeom, vertAssoc, opts, chain) {
  var color = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var atomCount = chain.atomCount();
  var idRange = opts.idPool.getContinuousRange(atomCount);
  meshGeom.addIdRange(idRange);
  var vertsPerSphere = 4; // one quad per sphere
  var indicesPerSphere = 6; // two triangles per quad
  var radius = 1.5 * opts.radiusMultiplier;
  meshGeom.addChainVertArray(chain, vertsPerSphere * atomCount, indicesPerSphere * atomCount);
  chain.eachAtom(function (atom) {
    var va = meshGeom.vertArrayWithSpaceFor(vertsPerSphere);
    opts.color.colorFor(atom, color, 0);
    var objId = idRange.nextId({ geom: meshGeom, atom: atom });
    var vertStart = va.numVerts();
    var p = atom.pos();
    va.addVertex(p, [-1.0, -1.0, radius], color, objId);
    va.addVertex(p, [+1.0, +1.0, radius], color, objId);
    va.addVertex(p, [+1.0, -1.0, radius], color, objId);
    va.addVertex(p, [-1.0, +1.0, radius], color, objId);
    va.addTriangle(vertStart + 0, vertStart + 1, vertStart + 2);
    va.addTriangle(vertStart + 0, vertStart + 3, vertStart + 1);
    var vertEnd = va.numVerts();
    vertAssoc.addAssoc(atom, va, vertStart, vertEnd);
  });
};

var billboardedSpheres = function billboardedSpheres(structure, gl, opts) {
  console.time('billboardedSpheres');
  var geom = new BillboardGeom(gl, opts.float32Allocator, opts.uint16Allocator);
  var vertAssoc = new AtomVertexAssoc(structure, true);
  geom.addVertAssoc(vertAssoc);
  geom.setShowRelated(opts.showRelated);
  opts.color.begin(structure);
  structure.eachChain(function (chain) {
    billboardedSpheresForChain(geom, vertAssoc, opts, chain);
  });
  opts.color.end(structure);
  console.timeEnd('billboardedSpheres');
  return geom;
};

var ballsAndSticksForChain = function ballsAndSticksForChain(meshGeom, vertAssoc, opts, chain) {
  var midPoint = create$5();
  var dir = create$5();
  var color = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var left = create$5();
  var up = create$5();
  var rotation = create$2();
  // determine required number of vertices and indices for this chain
  var atomCount = chain.atomCount();
  var bondCount = 0;
  chain.eachAtom(function (a) {
    bondCount += a.bonds().length;
  });
  var numVerts = atomCount * opts.protoSphere.numVerts() + bondCount * opts.protoCyl.numVerts();
  var numIndices = atomCount * opts.protoSphere.numIndices() + bondCount * opts.protoCyl.numIndices();
  meshGeom.addChainVertArray(chain, numVerts, numIndices);
  var idRange = opts.idPool.getContinuousRange(atomCount);
  meshGeom.addIdRange(idRange);
  // generate geometry for each atom
  chain.eachAtom(function (atom) {
    var atomScale = opts.scaleByAtomRadius ? VDW_RADIUS[atom.element()] || 1 : 1;
    var atomRadius = opts.sphereRadius * atomScale;
    var atomVerts = opts.protoSphere.numVerts() + atom.bondCount() * opts.protoCyl.numVerts();
    var va = meshGeom.vertArrayWithSpaceFor(atomVerts);
    var vertStart = va.numVerts();
    var objId = idRange.nextId({ geom: meshGeom, atom: atom });

    opts.color.colorFor(atom, color, 0);
    opts.protoSphere.addTransformed(va, atom.pos(), atomRadius, color, objId);
    atom.eachBond(function (bond) {
      bond.mid_point(midPoint);
      subtract$4(dir, atom.pos(), midPoint);
      var length = length$1(dir);

      scale$5(dir, dir, 1.0 / length);

      buildRotation(rotation, dir, left, up, false);

      add$5(midPoint, midPoint, atom.pos());
      scale$5(midPoint, midPoint, 0.5);
      opts.protoCyl.addTransformed(va, midPoint, length, opts.cylRadius, rotation, color, color, objId, objId);
    });
    var vertEnd = va.numVerts();
    vertAssoc.addAssoc(atom, va, vertStart, vertEnd);
  });
};

var ballsAndSticks = function ballsAndSticks(structure, gl, opts) {
  console.time('ballsAndSticks');
  var vertAssoc = new AtomVertexAssoc(structure, true);
  var protoSphere = new ProtoSphere(opts.sphereDetail, opts.sphereDetail);
  var protoCyl = new ProtoCylinder(opts.arcDetail);
  opts.protoSphere = protoSphere;
  opts.protoCyl = protoCyl;
  var meshGeom = new MeshGeom(gl, opts.float32Allocator, opts.uint16Allocator);
  meshGeom.addVertAssoc(vertAssoc);
  meshGeom.setShowRelated(opts.showRelated);
  opts.color.begin(structure);
  structure.eachChain(function (chain) {
    ballsAndSticksForChain(meshGeom, vertAssoc, opts, chain);
  });
  opts.color.end(structure);
  console.timeEnd('ballsAndSticks');
  return meshGeom;
};

var pointsForChain = function pointsForChain(lineGeom, vertAssoc, chain, opts) {
  var clr = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var atomCount = chain.atomCount();
  var idRange = opts.idPool.getContinuousRange(atomCount);
  lineGeom.addIdRange(idRange);
  var va = lineGeom.addChainVertArray(chain, atomCount);
  va.setDrawAsPoints(true);
  chain.eachAtom(function (atom) {
    var vertStart = va.numVerts();
    opts.color.colorFor(atom, clr, 0);
    var objId = idRange.nextId({ geom: lineGeom, atom: atom });
    va.addPoint(atom.pos(), clr, objId);
    var vertEnd = va.numVerts();
    vertAssoc.addAssoc(atom, va, vertStart, vertEnd);
  });
};

var points = function points(structure, gl, opts) {
  console.time('points');
  var vertAssoc = new AtomVertexAssoc(structure, true);
  opts.color.begin(structure);
  var lineGeom = new LineGeom(gl, opts.float32Allocator);
  lineGeom.setPointSize(opts.pointSize);
  lineGeom.addVertAssoc(vertAssoc);
  lineGeom.setShowRelated(opts.showRelated);
  structure.eachChain(function (chain) {
    pointsForChain(lineGeom, vertAssoc, chain, opts);
  });
  opts.color.end(structure);
  console.timeEnd('points');
  return lineGeom;
};

var linesForChain = function linesForChain(lineGeom, vertAssoc, chain, opts) {
  var mp = create$5();
  var clr = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var lineCount = 0;
  var atomCount = chain.atomCount();
  var idRange = opts.idPool.getContinuousRange(atomCount);
  lineGeom.addIdRange(idRange);
  // determine number of required lines to draw the full structure
  chain.eachAtom(function (atom) {
    var numBonds = atom.bonds().length;
    if (numBonds) {
      lineCount += numBonds;
    } else {
      lineCount += 3;
    }
  });
  var va = lineGeom.addChainVertArray(chain, lineCount * 2);
  chain.eachAtom(function (atom) {
    // for atoms without bonds, we draw a small cross, otherwise these atoms
    // would be invisible on the screen.
    var vertStart = va.numVerts();
    var objId = idRange.nextId({ geom: lineGeom, atom: atom });
    if (atom.bonds().length) {
      atom.eachBond(function (bond) {
        bond.mid_point(mp);
        opts.color.colorFor(atom, clr, 0);
        va.addLine(atom.pos(), clr, mp, clr, objId, objId);
      });
    } else {
      var cs = 0.2;
      var pos = atom.pos();
      opts.color.colorFor(atom, clr, 0);
      va.addLine([pos[0] - cs, pos[1], pos[2]], clr, [pos[0] + cs, pos[1], pos[2]], clr, objId, objId);
      va.addLine([pos[0], pos[1] - cs, pos[2]], clr, [pos[0], pos[1] + cs, pos[2]], clr, objId, objId);
      va.addLine([pos[0], pos[1], pos[2] - cs], clr, [pos[0], pos[1], pos[2] + cs], clr, objId, objId);
    }
    var vertEnd = va.numVerts();
    vertAssoc.addAssoc(atom, va, vertStart, vertEnd);
  });
};

var lines = function lines(structure, gl, opts) {
  console.time('lines');
  var vertAssoc = new AtomVertexAssoc(structure, true);
  opts.color.begin(structure);
  var lineGeom = new LineGeom(gl, opts.float32Allocator);
  lineGeom.setLineWidth(opts.lineWidth);
  lineGeom.addVertAssoc(vertAssoc);
  lineGeom.setShowRelated(opts.showRelated);
  structure.eachChain(function (chain) {
    linesForChain(lineGeom, vertAssoc, chain, opts);
  });
  opts.color.end(structure);
  console.timeEnd('lines');
  return lineGeom;
};

var _lineTraceNumVerts = function _lineTraceNumVerts(traces) {
  var numVerts = 0;
  for (var i = 0; i < traces.length; ++i) {
    numVerts += 2 * (traces[i].length() - 1);
  }
  return numVerts;
};

var makeLineTrace = function makeLineTrace(lineGeom, vertAssoc, va, traceIndex, trace, opts) {
  var colorOne = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var colorTwo = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var posOne = create$5();
  var posTwo = create$5();
  vertAssoc.addAssoc(traceIndex, va, 0, va.numVerts(), va.numVerts() + 1);

  var colors = opts.float32Allocator.request(trace.length() * 4);
  var idRange = opts.idPool.getContinuousRange(trace.length());
  lineGeom.addIdRange(idRange);
  var idOne = idRange.nextId({
    geom: lineGeom,
    atom: trace.centralAtomAt(0),
    isTrace: true
  });
  var idTwo;
  for (var i = 1; i < trace.length(); ++i) {
    opts.color.colorFor(trace.centralAtomAt(i - 1), colorOne, 0);
    colors[(i - 1) * 4 + 0] = colorOne[0];
    colors[(i - 1) * 4 + 1] = colorOne[1];
    colors[(i - 1) * 4 + 2] = colorOne[2];
    colors[(i - 1) * 4 + 3] = colorOne[3];
    opts.color.colorFor(trace.centralAtomAt(i), colorTwo, 0);
    trace.posAt(posOne, i - 1);
    trace.posAt(posTwo, i);
    idTwo = idRange.nextId({
      geom: lineGeom, atom: trace.centralAtomAt(i), isTrace: true });
    va.addLine(posOne, colorOne, posTwo, colorTwo, idOne, idTwo);
    idOne = idTwo;
    idTwo = null;
    var vertEnd = va.numVerts();
    vertAssoc.addAssoc(traceIndex, va, i, vertEnd - 1, vertEnd + (i === trace.length() - 1 ? 0 : 1));
  }
  colors[trace.length() * 4 - 4] = colorTwo[0];
  colors[trace.length() * 4 - 3] = colorTwo[1];
  colors[trace.length() * 4 - 2] = colorTwo[2];
  colors[trace.length() * 4 - 1] = colorTwo[3];
  vertAssoc.setPerResidueColors(traceIndex, colors);
  return traceIndex + 1;
};

var lineTraceForChain = function lineTraceForChain(lineGeom, vertAssoc, opts, traceIndex, chain) {
  var backboneTraces = chain.backboneTraces();
  var numVerts = _lineTraceNumVerts(backboneTraces);
  var va = lineGeom.addChainVertArray(chain, numVerts);
  for (var i = 0; i < backboneTraces.length; ++i) {
    traceIndex = makeLineTrace(lineGeom, vertAssoc, va, traceIndex, backboneTraces[i], opts);
  }
  return traceIndex;
};

//--------------------------------------------------------------------------
// Some thoughts on trace-based render styles
//
//  * Backbone traces must be determined from the complete structure (Chain
//    as opposed to ChainView).
//
//  * For subsets, the trace must start midway between the residue before
//    the visible part, and end midway after the last visible residue.
//
//  * Curvature of trace subsets must be based on the full backbone trace.
//--------------------------------------------------------------------------
var lineTrace = function lineTrace(structure, gl, opts) {
  console.time('lineTrace');
  var vertAssoc = new TraceVertexAssoc(structure, 1, true);
  opts.color.begin(structure);
  var lineGeom = new LineGeom(gl, opts.float32Allocator);
  lineGeom.setLineWidth(opts.lineWidth);
  var traceIndex = 0;
  structure.eachChain(function (chain) {
    traceIndex = lineTraceForChain(lineGeom, vertAssoc, opts, traceIndex, chain);
  });
  lineGeom.addVertAssoc(vertAssoc);
  lineGeom.setShowRelated(opts.showRelated);
  opts.color.end(structure);
  console.timeEnd('lineTrace');
  return lineGeom;
};

var _slineNumVerts = function _slineNumVerts(traces, splineDetail) {
  var numVerts = 0;
  for (var i = 0; i < traces.length; ++i) {
    numVerts += 2 * (splineDetail * (traces[i].length() - 1) + 1);
  }
  return numVerts;
};

var slineMakeTrace = function slineMakeTrace(lineGeom, vertAssoc, va, opts, traceIndex, trace) {
  var posOne = create$5();
  var posTwo = create$5();
  var colorOne = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var colorTwo = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var firstSlice = trace.fullTraceIndex(0);
  var positions = opts.float32Allocator.request(trace.length() * 3);
  var colors = opts.float32Allocator.request(trace.length() * 4);
  var objIds = [];
  var i;
  var idRange = opts.idPool.getContinuousRange(trace.length());
  lineGeom.addIdRange(idRange);
  for (i = 0; i < trace.length(); ++i) {
    var atom = trace.centralAtomAt(i);
    trace.smoothPosAt(posOne, i, opts.strength);
    opts.color.colorFor(atom, colors, 4 * i);
    positions[i * 3] = posOne[0];
    positions[i * 3 + 1] = posOne[1];
    positions[i * 3 + 2] = posOne[2];
    objIds.push(idRange.nextId({
      geom: lineGeom,
      atom: atom,
      isTrace: true
    }));
  }
  var idStart = objIds[0];
  var idEnd = 0;
  var sdiv = catmullRomSpline(positions, trace.length(), opts.splineDetail, opts.strength, false, opts.float32Allocator);
  var interpColors = interpolateColor(colors, opts.splineDetail);
  var vertStart = va.numVerts();
  vertAssoc.addAssoc(traceIndex, va, firstSlice, vertStart, vertStart + 1);
  var halfSplineDetail = Math.floor(opts.splineDetail / 2);
  var steps = catmullRomSplineNumPoints(trace.length(), opts.splineDetail, false);
  for (i = 1; i < steps; ++i) {
    posOne[0] = sdiv[3 * (i - 1)];
    posOne[1] = sdiv[3 * (i - 1) + 1];
    posOne[2] = sdiv[3 * (i - 1) + 2];
    posTwo[0] = sdiv[3 * (i - 0)];
    posTwo[1] = sdiv[3 * (i - 0) + 1];
    posTwo[2] = sdiv[3 * (i - 0) + 2];

    colorOne[0] = interpColors[4 * (i - 1) + 0];
    colorOne[1] = interpColors[4 * (i - 1) + 1];
    colorOne[2] = interpColors[4 * (i - 1) + 2];
    colorOne[3] = interpColors[4 * (i - 1) + 3];

    colorTwo[0] = interpColors[4 * (i - 0) + 0];
    colorTwo[1] = interpColors[4 * (i - 0) + 1];
    colorTwo[2] = interpColors[4 * (i - 0) + 2];
    colorTwo[3] = interpColors[4 * (i - 0) + 3];
    var index = Math.floor((i + halfSplineDetail) / opts.splineDetail);
    idEnd = objIds[Math.min(objIds.length - 1, index)];
    va.addLine(posOne, colorOne, posTwo, colorTwo, idStart, idEnd);
    idStart = idEnd;
    var vertEnd = va.numVerts();
    vertAssoc.addAssoc(traceIndex, va, firstSlice + i, vertEnd - 1, vertEnd + (i === trace.length - 1 ? 0 : 1));
  }
  vertAssoc.setPerResidueColors(traceIndex, colors);
  opts.float32Allocator.release(positions);
  opts.float32Allocator.release(sdiv);
  return traceIndex + 1;
};

var slineForChain = function slineForChain(lineGeom, vertAssoc, opts, chain, traceIndex) {
  var backboneTraces = chain.backboneTraces();
  var numVerts = _slineNumVerts(backboneTraces, opts.splineDetail);
  var va = lineGeom.addChainVertArray(chain, numVerts);
  for (var i = 0; i < backboneTraces.length; ++i) {
    traceIndex = slineMakeTrace(lineGeom, vertAssoc, va, opts, traceIndex, backboneTraces[i]);
  }
  return traceIndex;
};

var sline = function sline(structure, gl, opts) {
  console.time('sline');
  opts.color.begin(structure);
  var vertAssoc = new TraceVertexAssoc(structure, opts.splineDetail, 1, true);
  var lineGeom = new LineGeom(gl, opts.float32Allocator);
  lineGeom.addVertAssoc(vertAssoc);
  lineGeom.setLineWidth(opts.lineWidth);
  lineGeom.setShowRelated(opts.showRelated);
  var traceIndex = 0;
  structure.eachChain(function (chain) {
    traceIndex = slineForChain(lineGeom, vertAssoc, opts, chain, traceIndex);
  });
  opts.color.end(structure);
  console.timeEnd('sline');
  return lineGeom;
};

var _traceNumVerts = function _traceNumVerts(traces, sphereNumVerts, cylNumVerts) {
  var numVerts = 0;
  for (var i = 0; i < traces.length; ++i) {
    numVerts += traces[i].length() * sphereNumVerts;
    numVerts += (traces[i].length() - 1) * cylNumVerts;
  }
  return numVerts;
};

var _traceNumIndices = function _traceNumIndices(traces, sphereNumIndices, cylNumIndices) {
  var numIndices = 0;
  for (var i = 0; i < traces.length; ++i) {
    numIndices += traces[i].length() * sphereNumIndices;
    numIndices += (traces[i].length() - 1) * cylNumIndices;
  }
  return numIndices;
};

var traceForChain = function traceForChain(meshGeom, vertAssoc, opts, traceIndex, chain) {
  // determine number of verts required to render the traces
  var traces = chain.backboneTraces();
  var numVerts = _traceNumVerts(traces, opts.protoSphere.numVerts(), opts.protoCyl.numVerts());
  var numIndices = _traceNumIndices(traces, opts.protoSphere.numIndices(), opts.protoCyl.numIndices());
  meshGeom.addChainVertArray(chain, numVerts, numIndices);
  for (var ti = 0; ti < traces.length; ++ti) {
    _renderSingleTrace(meshGeom, vertAssoc, traces[ti], traceIndex, opts);
    traceIndex++;
  }
  return traceIndex;
};

var trace = function trace(structure, gl, opts) {
  console.time('trace');

  opts.protoCyl = new ProtoCylinder(opts.arcDetail);
  opts.protoSphere = new ProtoSphere(opts.sphereDetail, opts.sphereDetail);

  var meshGeom = new MeshGeom(gl, opts.float32Allocator, opts.uint16Allocator);
  var vertAssoc = new TraceVertexAssoc(structure, 1, true);
  meshGeom.addVertAssoc(vertAssoc);
  meshGeom.setShowRelated(opts.showRelated);

  opts.color.begin(structure);
  var traceIndex = 0;
  structure.eachChain(function (chain) {
    traceIndex = traceForChain(meshGeom, vertAssoc, opts, traceIndex, chain);
  });
  opts.color.end(structure);

  console.timeEnd('trace');
  return meshGeom;
};

// calculates the number of vertices required for the cartoon and
// tube render styles
var _cartoonNumVerts = function _cartoonNumVerts(traces, vertsPerSlice, splineDetail) {
  var numVerts = 0;
  for (var i = 0; i < traces.length; ++i) {
    var traceVerts = ((traces[i].length() - 1) * splineDetail + 1) * vertsPerSlice;
    // in case there are more than 2^16 vertices for a single trace, we
    // need to manually split the trace in two and duplicate one of the
    // trace slices. Let's make room for some additional space...
    var splits = Math.ceil((traceVerts + 2) / 65536);
    numVerts += traceVerts + (splits - 1) * vertsPerSlice;
    // triangles for capping the tube
    numVerts += 2;
  }
  return numVerts;
};

var _cartoonNumIndices = function _cartoonNumIndices(traces, vertsPerSlice, splineDetail) {
  var numIndices = 0;
  for (var i = 0; i < traces.length; ++i) {
    numIndices += (traces[i].length() * splineDetail - 1) * vertsPerSlice * 6;
    // triangles for capping the tube
    numIndices += 2 * 3 * vertsPerSlice;
  }
  return numIndices;
};

// creates the capped cylinders for DNA/RNA pointing towards the end of the
// bases.
var _addNucleotideSticks = function _addNucleotideSticks(meshGeom, vertAssoc, traces, opts) {
  var rotation = create$2();
  var up = create$5();
  var left = create$5();
  var dir = create$5();
  var center = create$5();
  var color = create$6();
  var radius = opts.radius * 1.8;
  var vertsPerNucleotideStick = opts.protoCyl.numVerts() + 2 * opts.protoSphere.numVerts();
  for (var i = 0; i < traces.length; ++i) {
    var _trace = traces[i];
    var idRange = opts.idPool.getContinuousRange(_trace.length());
    meshGeom.addIdRange(idRange);
    for (var j = 0; j < _trace.length(); ++j) {
      var va = meshGeom.vertArrayWithSpaceFor(vertsPerNucleotideStick);
      var vertStart = va.numVerts();
      var residue = _trace.residueAt(j);
      var resName = residue.name();
      var startAtom = residue.atom('C3\'');
      var endAtom = null;
      if (resName === 'A' || resName === 'G' || resName === 'DA' || resName === 'DG') {
        endAtom = residue.atom('N1');
      } else {
        endAtom = residue.atom('N3');
      }
      if (endAtom === null || startAtom === null) {
        continue;
      }
      var objId = idRange.nextId({ geom: meshGeom, atom: endAtom, isTrace: true });
      add$5(center, startAtom.pos(), endAtom.pos());
      scale$5(center, center, 0.5);

      opts.color.colorFor(endAtom, color, 0);
      subtract$4(dir, endAtom.pos(), startAtom.pos());
      var length = length$1(dir);
      scale$5(dir, dir, 1.0 / length);
      buildRotation(rotation, dir, left, up, false);
      opts.protoCyl.addTransformed(va, center, length, radius, rotation, color, color, objId, objId);
      opts.protoSphere.addTransformed(va, endAtom.pos(), radius, color, objId);
      opts.protoSphere.addTransformed(va, startAtom.pos(), radius, color, objId);
      var vertEnd = va.numVerts();
      console.assert(vertEnd <= 65536, 'too many vertices');
      vertAssoc.addAssoc(endAtom, va, vertStart, vertEnd);
    }
  }
};

// generates the mesh geometry for displaying a single chain as either cartoon
// or tube (opts.forceTube === true).
var cartoonForChain = function cartoonForChain(meshGeom, vertAssoc, nucleotideAssoc, opts, traceIndex, chain) {
  var traces = chain.backboneTraces();
  var numVerts = _cartoonNumVerts(traces, opts.arcDetail * 4, opts.splineDetail);
  var numIndices = _cartoonNumIndices(traces, opts.arcDetail * 4, opts.splineDetail);
  // figure out which of the traces consist of nucleic acids. They require
  // additional space for rendering the sticks.
  var nucleicAcidTraces = [];
  var vertForBaseSticks = opts.protoCyl.numVerts() + 2 * opts.protoSphere.numVerts();
  var indicesForBaseSticks = opts.protoCyl.numIndices() + 2 * opts.protoSphere.numIndices();
  for (var i = 0; i < traces.length; ++i) {
    var trace = traces[i];
    if (trace.residueAt(0).isNucleotide()) {
      nucleicAcidTraces.push(trace);
      // each DNA/RNA base gets a double-capped cylinder
      numVerts += trace.length() * vertForBaseSticks;
      numIndices += trace.length() * indicesForBaseSticks;
    }
  }
  meshGeom.addChainVertArray(chain, numVerts, numIndices);
  for (var ti = 0; ti < traces.length; ++ti) {
    traceIndex = _cartoonForSingleTrace(meshGeom, vertAssoc, traces[ti], traceIndex, opts);
  }
  _addNucleotideSticks(meshGeom, nucleotideAssoc, nucleicAcidTraces, opts);
  return traceIndex;
};

var cartoon = function cartoon(structure, gl, opts) {
  console.time('cartoon');
  opts.arrowSkip = Math.floor(opts.splineDetail * 3 / 4);
  opts.coilProfile = new TubeProfile(COIL_POINTS, opts.arcDetail, 1.0);
  opts.arrowProfile = new TubeProfile(ARROW_POINTS, opts.arcDetail / 2, 0.1);
  opts.helixProfile = new TubeProfile(HELIX_POINTS, opts.arcDetail / 2, 0.1);
  opts.strandProfile = new TubeProfile(HELIX_POINTS, opts.arcDetail / 2, 0.1);
  opts.protoCyl = new ProtoCylinder(opts.arcDetail * 4);
  opts.protoSphere = new ProtoSphere(opts.arcDetail * 4, opts.arcDetail * 4);

  var meshGeom = new MeshGeom(gl, opts.float32Allocator, opts.uint16Allocator);
  var vertAssoc = new TraceVertexAssoc(structure, opts.splineDetail, true);
  meshGeom.addVertAssoc(vertAssoc);
  meshGeom.setShowRelated(opts.showRelated);

  opts.color.begin(structure);

  var traceIndex = 0;
  // the following vert-assoc is for rendering of DNA/RNA. Create vertex assoc
  // from N1/N3 atoms only, this will speed up recoloring later on, which when
  // performed on the complete structure, is slower than recalculating the
  // whole geometry.
  var selection = structure.select({ anames: ['N1', 'N3'] });
  var nucleotideAssoc = new AtomVertexAssoc(selection, true);
  meshGeom.addVertAssoc(nucleotideAssoc);
  structure.eachChain(function (chain) {
    traceIndex = cartoonForChain(meshGeom, vertAssoc, nucleotideAssoc, opts, traceIndex, chain);
  });

  opts.color.end(structure);
  console.timeEnd('cartoon');
  return meshGeom;
};

var surface = function surface(data, gl, opts) {
  var pos = create$5();
  var normal = create$5();
  var color = fromValues$6(0.8, 0.8, 0.8, 1.0);
  var offset = 0;
  /*var version = */data.getUint32(0);
  offset += 4;
  var numVerts = data.getUint32(offset);
  offset += 4;
  var vertexStride = 4 * 6;
  var facesDataStart = vertexStride * numVerts + offset;
  var numFaces = data.getUint32(facesDataStart);
  var meshGeom = new MeshGeom(gl, opts.float32Allocator, opts.uint16Allocator);
  meshGeom.setShowRelated('asym');
  var va = meshGeom.addVertArray(numVerts, numFaces * 3);
  var i;
  for (i = 0; i < numVerts; ++i) {
    set$5(pos, data.getFloat32(offset + 0), data.getFloat32(offset + 4), data.getFloat32(offset + 8));
    offset += 12;
    set$5(normal, data.getFloat32(offset + 0), data.getFloat32(offset + 4), data.getFloat32(offset + 8));
    offset += 12;
    va.addVertex(pos, normal, color, 0);
  }
  offset = facesDataStart + 4;
  for (i = 0; i < numFaces; ++i) {
    var idx0 = data.getUint32(offset + 0);
    var idx1 = data.getUint32(offset + 4);
    var idx2 = data.getUint32(offset + 8);
    offset += 12;
    va.addTriangle(idx0 - 1, idx2 - 1, idx1 - 1);
  }
  return meshGeom;
};

var _cartoonAddTube = function _cartoonAddTube(vertArray, pos, left, ss, tangent, color, radius, first, opts, offset, objId) {
  var rotation = create$2();
  var up = create$5();
  var prof = opts.coilProfile;
  if (ss !== 'C' && !opts.forceTube) {
    if (ss === 'H') {
      prof = opts.helixProfile;
    } else if (ss === 'E') {
      prof = opts.strandProfile;
    } else if (ss === 'A') {
      prof = opts.arrowProfile;
    }
  } else {
    if (first) {
      ortho$1(left, tangent);
    } else {
      cross(left, up, tangent);
    }
  }

  buildRotation(rotation, tangent, left, up, true);
  prof.addTransformed(vertArray, pos, radius, rotation, color, first, offset, objId);
};

// INTERNAL: fills positions, normals and colors from the information found in
// trace. The 3 arrays must already have the correct size (3*trace.length).
var _colorPosNormalsFromTrace = function _colorPosNormalsFromTrace(meshGeom, trace, colors, positions, normals, objIds, pool, opts) {
  var pos = create$5();
  var normal = create$5();
  var lastNormal = create$5();
  var strandStart = null;
  var strandEnd = null;
  var trace_length = trace.length();
  set$5(lastNormal, 0.0, 0.0, 0.0);
  for (var i = 0; i < trace_length; ++i) {
    objIds.push(pool.nextId({
      geom: meshGeom,
      atom: trace.centralAtomAt(i),
      isTrace: true
    }));
    trace.smoothPosAt(pos, i, opts.strength);
    positions[i * 3] = pos[0];
    positions[i * 3 + 1] = pos[1];
    positions[i * 3 + 2] = pos[2];

    trace.smoothNormalAt(normal, i, opts.strength);

    var atom = trace.centralAtomAt(i);
    opts.color.colorFor(atom, colors, i * 4);

    if (dot$1(normal, lastNormal) < 0) {
      scale$5(normal, normal, -1);
    }
    if (trace.residueAt(i).ss() === 'E' && !opts.forceTube && opts.smoothStrands) {
      if (strandStart === null) {
        strandStart = i;
      }
      strandEnd = i;
    }
    if (trace.residueAt(i).ss() === 'C' && strandStart !== null) {
      smoothStrandInplace(positions, strandStart, strandEnd, trace_length);
      smoothStrandInplace(normals, strandStart, strandEnd, trace_length);
      strandStart = null;
      strandEnd = null;
    }
    normals[i * 3] = positions[3 * i] + normal[0] + lastNormal[0];
    normals[i * 3 + 1] = positions[3 * i + 1] + normal[1] + lastNormal[1];
    normals[i * 3 + 2] = positions[3 * i + 2] + normal[2] + lastNormal[2];
    copy$5(lastNormal, normal);
  }
};

function capTubeStart$1(va, baseIndex, numTubeVerts) {
  for (var i = 0; i < numTubeVerts - 1; ++i) {
    va.addTriangle(baseIndex, baseIndex + 1 + i, baseIndex + 2 + i);
  }
  va.addTriangle(baseIndex, baseIndex + numTubeVerts, baseIndex + 1);
}

function capTubeEnd$1(va, baseIndex, numTubeVerts) {
  var center = baseIndex + numTubeVerts;
  for (var i = 0; i < numTubeVerts - 1; ++i) {
    va.addTriangle(center, baseIndex + i + 1, baseIndex + i);
  }
  va.addTriangle(center, baseIndex, baseIndex + numTubeVerts - 1);
}

// constructs a cartoon representation for a single consecutive backbone
// trace.
var _cartoonForSingleTrace = function _cartoonForSingleTrace(meshGeom, vertAssoc, trace, traceIndex, opts) {
  var tangent = create$5();
  var pos = create$5();
  var color = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var normal = create$5();
  var normal2 = create$5();
  var numVerts = _cartoonNumVerts([trace], opts.arcDetail * 4, opts.splineDetail);
  var positions = opts.float32Allocator.request(trace.length() * 3);
  var colors = opts.float32Allocator.request(trace.length() * 4);
  var normals = opts.float32Allocator.request(trace.length() * 3);

  var objIds = [];
  var idRange = opts.idPool.getContinuousRange(trace.length());
  meshGeom.addIdRange(idRange);
  _colorPosNormalsFromTrace(meshGeom, trace, colors, positions, normals, objIds, idRange, opts);
  var vertArray = meshGeom.vertArrayWithSpaceFor(numVerts);
  var sdiv = catmullRomSpline(positions, trace.length(), opts.splineDetail, opts.strength, false, opts.float32Allocator);
  var normalSdiv = catmullRomSpline(normals, trace.length(), opts.splineDetail, opts.strength, false, opts.float32Allocator);
  vertAssoc.setPerResidueColors(traceIndex, colors);
  var radius = opts.radius * (trace.residueAt(0).isAminoacid() ? 1.0 : 1.8);
  var interpColors = interpolateColor(colors, opts.splineDetail);
  // handle start of trace. this could be moved inside the for-loop, but
  // at the expense of a conditional inside the loop. unrolling is
  // slightly faster.
  //
  // we repeat the following steps for the start, central section and end
  // of the profile: (a) assign position, normal, tangent and color, (b)
  // add tube (or rectangular profile for helices and strands).
  set$5(tangent, sdiv[3] - sdiv[0], sdiv[4] - sdiv[1], sdiv[5] - sdiv[2]);
  set$5(pos, sdiv[0], sdiv[1], sdiv[2]);
  set$5(normal, normalSdiv[0] - sdiv[0], normalSdiv[1] - sdiv[1], normalSdiv[2] - sdiv[2]);
  normalize$1(tangent, tangent);
  normalize$1(normal, normal);
  set$6(color, interpColors[0], interpColors[1], interpColors[2], interpColors[3]);

  var vertStart = vertArray.numVerts();
  vertArray.addVertex(pos, [-tangent[0], -tangent[1], -tangent[2]], color, objIds[0]);

  var currentSS = trace.residueAt(0).ss();
  _cartoonAddTube(vertArray, pos, normal, currentSS, tangent, color, radius, true, opts, 0, objIds[0]);
  capTubeStart$1(vertArray, vertStart, opts.arcDetail * 4);
  var vertEnd = vertArray.numVerts();
  var slice = 0;
  vertAssoc.addAssoc(traceIndex, vertArray, slice, vertStart, vertEnd);
  slice += 1;
  var halfSplineDetail = Math.floor(opts.splineDetail / 2);

  // handle the bulk of the trace
  var steps = catmullRomSplineNumPoints(trace.length(), opts.splineDetail, false);

  var vertsPerSlice = opts.arcDetail * 4;
  for (var i = 1, e = steps; i < e; ++i) {
    // compute 3*i, 3*(i-1), 3*(i+1) once and reuse
    var ix3 = 3 * i;
    var ix4 = 4 * i;
    var ipox3 = 3 * (i + 1);
    var imox3 = 3 * (i - 1);

    set$5(pos, sdiv[ix3], sdiv[ix3 + 1], sdiv[ix3 + 2]);

    if (i === e - 1) {
      set$5(tangent, sdiv[ix3] - sdiv[imox3], sdiv[ix3 + 1] - sdiv[imox3 + 1], sdiv[ix3 + 2] - sdiv[imox3 + 2]);
    } else {
      set$5(tangent, sdiv[ipox3] - sdiv[imox3], sdiv[ipox3 + 1] - sdiv[imox3 + 1], sdiv[ipox3 + 2] - sdiv[imox3 + 2]);
    }
    normalize$1(tangent, tangent);
    set$6(color, interpColors[ix4], interpColors[ix4 + 1], interpColors[ix4 + 2], interpColors[ix4 + 3]);

    var offset = 0; // <- set special handling of coil to helix,strand
    //    transitions.
    var iCentered = i + opts.splineDetail / 2;
    var residueIndex = Math.floor(iCentered / opts.splineDetail);
    var prevResidueIndex = Math.floor((iCentered - 1) / opts.splineDetail);

    // used to determine whether we have to add an arrow profile. when the
    // current residue is the last strand residue, the arrow tip has to land
    // exactly on the first slice of the next residue. Because we would like
    // to have larger arrows we use multiple slices for the arrow (set to
    // 3/4 of splineDetail).
    var arrowEndIndex = Math.floor((iCentered + opts.arrowSkip) / opts.splineDetail);
    var drawArrow = false;
    var thisSS = trace.residueAt(residueIndex).ss();
    if (!opts.forceTube) {
      if (residueIndex !== prevResidueIndex) {
        // for helix and strand regions, we can't base the left vector
        // of the current residue on the previous one, since it determines
        // the orientation of the strand and helix profiles.
        //
        // frequently, the transition regions from coil to strand and helix
        // contain strong twists which severely hamper visual quality. there
        // is not problem however when transitioning from helix or strand
        // to coil or inside a helix or strand.
        //
        // to avoid these visual artifacts, we calculate the best fit between
        // the current normal and the normal "after" which gives us an offset
        // for stitching the two parts together.
        var prevSS = trace.residueAt(prevResidueIndex).ss();
        if (prevSS === 'C' && (thisSS === 'H' || thisSS === 'E')) {
          // we don't want to generate holes, so we have to make sure
          // the vertices of the rotated profile align with the previous
          // profile.
          set$5(normal2, normalSdiv[imox3] - sdiv[imox3], normalSdiv[imox3 + 1] - sdiv[imox3 + 1], normalSdiv[imox3 + 2] - sdiv[imox3 + 2]);
          normalize$1(normal2, normal2);
          var argAngle = 2 * Math.PI / (opts.arcDetail * 4);
          var _signedAngle = signedAngle(normal, normal2, tangent);
          offset = Math.round(_signedAngle / argAngle);
          offset = (offset + opts.arcDetail * 4) % (opts.arcDetail * 4);
        }
      }
      // figure out if we have to draw an arrow head
      if (arrowEndIndex !== residueIndex && arrowEndIndex < trace.length()) {
        var nextSS = trace.residueAt(arrowEndIndex).ss();
        if (nextSS === 'C' && thisSS === 'E') {
          drawArrow = true;
        }
      }
    }
    // only set normal *after* handling the coil -> helix,strand
    // transition, since we depend on the normal of the previous step.
    set$5(normal, normalSdiv[3 * i] - sdiv[ix3], normalSdiv[ix3 + 1] - sdiv[ix3 + 1], normalSdiv[ix3 + 2] - sdiv[ix3 + 2]);
    normalize$1(normal, normal);
    vertStart = vertArray.numVerts();
    var objIndex = Math.floor((i + halfSplineDetail) / opts.splineDetail);
    var objId = objIds[Math.min(objIds.length - 1, objIndex)];
    _cartoonAddTube(vertArray, pos, normal, thisSS, tangent, color, radius, false, opts, offset, objId);
    // in case we are running out of indices, start new vertex array and
    // duplicate last slice. If we are on the last slice, we only need one
    // additional vertex for the capping, otherwise we need a full slice
    // worth of vertices.
    var additionalVerts = i === e - 1 ? 1 : vertsPerSlice;
    if (vertArray.numVerts() + additionalVerts > vertArray.maxVerts()) {
      vertEnd = vertArray.numVerts();
      vertAssoc.addAssoc(traceIndex, vertArray, slice, vertStart, vertEnd);
      vertArray = meshGeom.vertArrayWithSpaceFor(additionalVerts);
      vertStart = 0;
      _cartoonAddTube(vertArray, pos, normal, thisSS, tangent, color, radius, true, opts, 0, objId);
    }
    if (drawArrow) {
      vertAssoc.addAssoc(traceIndex, vertArray, slice, vertStart, vertEnd);
      // FIXME: arrow has completely wrong normals. Profile normals are
      // generate perpendicular to the direction of the tube. The arrow
      // normals are anti-parallel to the direction of the tube.
      _cartoonAddTube(vertArray, pos, normal, 'A', tangent, color, radius, false, opts, 0, objId);
      // We skip a few profiles to get a larger arrow.
      i += opts.arrowSkip;
    }
    vertEnd = vertArray.numVerts();
    if (i === e - 1) {
      vertEnd += 1;
    }
    vertAssoc.addAssoc(traceIndex, vertArray, slice, vertStart, vertEnd);
    slice += 1;
    if (drawArrow) {
      slice += opts.arrowSkip;
    }
  }
  vertArray.addVertex(pos, tangent, color, objIds[objIds.length - 1]);
  capTubeEnd$1(vertArray, vertStart, opts.arcDetail * 4);
  opts.float32Allocator.release(normals);
  opts.float32Allocator.release(positions);
  return traceIndex + 1;
};

var _renderSingleTrace = function _renderSingleTrace(meshGeom, vertAssoc, trace, traceIndex, opts) {
  if (trace.length() === 0) {
    return;
  }
  var rotation = create$2();
  var dir = create$5();
  var left = create$5();
  var up = create$5();
  var midPoint = create$5();
  var caPrevPos = create$5();
  var caThisPos = create$5();
  var colorOne = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var colorTwo = fromValues$6(0.0, 0.0, 0.0, 1.0);
  var idRange = opts.idPool.getContinuousRange(trace.length());
  meshGeom.addIdRange(idRange);
  opts.color.colorFor(trace.centralAtomAt(0), colorOne, 0);
  var numVerts = _traceNumVerts([trace], opts.protoSphere.numVerts(), opts.protoCyl.numVerts());
  var remainingVerts = numVerts;
  var va = meshGeom.vertArrayWithSpaceFor(numVerts);
  var maxVerts = va.maxVerts();
  var vertStart = va.numVerts();
  trace.posAt(caPrevPos, 0);

  var idStart = idRange.nextId({
    geom: meshGeom,
    atom: trace.centralAtomAt(0),
    isTrace: true
  });
  var idEnd = 0;
  opts.protoSphere.addTransformed(va, caPrevPos, opts.radius, colorOne, idStart);
  var vertEnd = null;
  vertAssoc.addAssoc(traceIndex, va, 0, vertStart, vertEnd);
  var colors = opts.float32Allocator.request(trace.length() * 4);
  colors[0] = colorOne[0];
  colors[1] = colorOne[1];
  colors[2] = colorOne[2];
  colors[3] = colorOne[3];
  var vertsPerIteration = opts.protoCyl.numVerts() + opts.protoSphere.numVerts();
  for (var i = 1; i < trace.length(); ++i) {
    idEnd = idRange.nextId({
      geom: meshGeom,
      atom: trace.centralAtomAt(i),
      isTrace: true
    });
    trace.posAt(caPrevPos, i - 1);
    trace.posAt(caThisPos, i);
    opts.color.colorFor(trace.centralAtomAt(i), colorTwo, 0);
    colors[i * 4 + 0] = colorTwo[0];
    colors[i * 4 + 1] = colorTwo[1];
    colors[i * 4 + 2] = colorTwo[2];
    colors[i * 4 + 3] = colorTwo[3];

    subtract$4(dir, caThisPos, caPrevPos);
    var length = length$1(dir);

    scale$5(dir, dir, 1.0 / length);

    buildRotation(rotation, dir, left, up, false);

    copy$5(midPoint, caPrevPos);
    add$5(midPoint, midPoint, caThisPos);
    scale$5(midPoint, midPoint, 0.5);
    // make sure there is enough space in the vertex array, if not request a
    // new one.
    if (vertsPerIteration > maxVerts - va.numVerts()) {
      va = meshGeom.vertArrayWithSpaceFor(remainingVerts);
    }
    remainingVerts -= vertsPerIteration;
    var endSphere = va.numVerts();
    opts.protoCyl.addTransformed(va, midPoint, length, opts.radius, rotation, colorOne, colorTwo, idStart, idEnd);
    vertEnd = va.numVerts();
    vertEnd -= (vertEnd - endSphere) / 2;

    opts.protoSphere.addTransformed(va, caThisPos, opts.radius, colorTwo, idEnd);
    idStart = idEnd;
    vertAssoc.addAssoc(traceIndex, va, i, vertStart, vertEnd);
    vertStart = vertEnd;
    copy$5(colorOne, colorTwo);
  }
  vertAssoc.setPerResidueColors(traceIndex, colors);
  vertAssoc.addAssoc(traceIndex, va, trace.length() - 1, vertStart, va.numVerts());
};

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
var PRELUDE_FS = "\nprecision ${PRECISION} float;\nuniform bool screenDoorTransparency;\n\nvec4 handleAlpha(vec4 inColor) {\n  if (screenDoorTransparency) {\n    ivec2 pxCoord = ivec2(gl_FragCoord.xy);\n    ivec2 mod = pxCoord - (pxCoord/2) * 2;\n\n    if (inColor.a < 0.99 && (inColor.a < 0.01 || mod.x != 0 || mod.y != 0)) {\n      discard;\n    }\n\n    return vec4(inColor.rgb, 1.0);\n  } else {\n    if (inColor.a == 0.0) {\n      discard;\n    }\n\n    return inColor;\n  }\n}\n\nint intMod(int x, int y) {\n  int z = x/y;\n  return x-y*z;\n}\n\nuniform vec4 selectionColor;\n\nvec3 handleSelect(vec3 inColor, float vertSelect) {\n  return mix(inColor, selectionColor.rgb, step(0.5, vertSelect) * selectionColor.a);\n}\n\nuniform bool fog;\nuniform float fogNear;\nuniform float fogFar;\nuniform vec3 fogColor;\n\nvec3 handleFog(vec3 inColor) {\n  if (fog) {\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\n    float fogFactor = smoothstep(fogNear, fogFar, depth);\n\n    return mix(inColor, fogColor, fogFactor);\n  } else {\n    return inColor;\n  }\n}";

// line fragment shader, essentially uses the vertColor and adds some fog.
var LINES_FS = "\nvarying vec4 vertColor;\nvarying vec3 vertNormal;\n\nvoid main(void) {\n  gl_FragColor = handleAlpha(vertColor);\n  gl_FragColor.rgb = handleFog(gl_FragColor.rgb);\n}";

var SELECT_LINES_FS = "\nprecision ${PRECISION} float;\n\nvarying float vertSelect;\nvarying vec3 vertNormal;\nuniform float fogNear;\nuniform float fogFar;\nuniform vec3 fogColor;\nuniform bool fog;\nuniform vec4 selectionColor;\n\nvoid main(void) {\n  gl_FragColor = mix(vec4(0.0, 0.0, 0.0, 0.0),\n                     vec4(selectionColor.rgb, 1.0), vertSelect);\n  gl_FragColor.a = step(0.5, vertSelect);\n  if (gl_FragColor.a == 0.0) { discard; }\n  float depth = gl_FragCoord.z / gl_FragCoord.w;\n  if (fog) {\n    float fog_factor = smoothstep(fogNear, fogFar, depth);\n    gl_FragColor = mix(gl_FragColor, vec4(fogColor, gl_FragColor.w),\n                        fog_factor);\n  }\n}";

// hemilight vertex shader
var SELECT_LINES_VS = "\nattribute vec3 attrPos;\nattribute float attrSelect;\n\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nuniform float pointSize;\nvarying float vertSelect;\nvoid main(void) {\n  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);\n  gl_Position.z += gl_Position.w * 0.000001;\n  float distToCamera = vec4(modelviewMat * vec4(attrPos, 1.0)).z;\n  gl_PointSize = pointSize * 200.0 / abs(distToCamera);\n  vertSelect = attrSelect;\n}";

var SELECT_VS = "\nprecision ${PRECISION} float;\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nuniform float pointSize;\nattribute vec3 attrPos;\nattribute float attrObjId;\nattribute vec4 attrColor;\n\nvarying float objId;\nvarying float objAlpha;\n\nvoid main(void) {\n  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);\n  float distToCamera = vec4(modelviewMat * vec4(attrPos, 1.0)).z;\n  gl_PointSize = pointSize * 200.0 / abs(distToCamera);\n  objId = attrObjId;\n  objAlpha = attrColor.a;\n}";

var SELECT_FS = "\nprecision ${PRECISION} float;\n\nvarying float objId;\nvarying float objAlpha;\nuniform int symId;\n\nint intMod(int x, int y) {\n  int z = x/y;\n  return x-y*z;\n}\nvoid main(void) {\n  if (objAlpha == 0.0) { discard; }\n  // ints are only required to be 7bit...\n  int integralObjId = int(objId+0.5);\n  int red = intMod(integralObjId, 256);\n  integralObjId/=256;\n  int green = intMod(integralObjId, 256);\n  integralObjId/=256;\n  int blue = intMod(integralObjId, 256);\n  int alpha = symId;\n  gl_FragColor = vec4(float(red), float(green),\n                      float(blue), float(alpha))/255.0;\n}";

// hemilight vertex shader
var LINES_VS = "\nattribute vec3 attrPos;\nattribute vec4 attrColor;\n\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nvarying vec4 vertColor;\nuniform float pointSize;\nvoid main(void) {\n  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);\n  float distToCamera = vec4(modelviewMat * vec4(attrPos, 1.0)).z;\n  gl_PointSize = pointSize * 200.0 / abs(distToCamera);\n  vertColor = attrColor;\n}";

// hemilight fragment shader
var HEMILIGHT_FS = "\nvarying vec4 vertColor;\nvarying vec3 vertNormal;\nvarying float vertSelect;\n\nvoid main(void) {\n  float dp = dot(vertNormal, vec3(0.0, 0.0, 1.0));\n  float hemi = min(1.0, max(0.0, dp)*0.6+0.5);\n  gl_FragColor = vec4(vertColor.rgb*hemi, vertColor.a);\n  gl_FragColor.rgb = handleFog(handleSelect(gl_FragColor.rgb, vertSelect));\n  gl_FragColor = handleAlpha(gl_FragColor);\n}";

// phong fragment shader
var PHONG_FS = "\nvarying vec4 vertColor;\nvarying vec3 vertNormal;\nvarying vec3 vertPos;\nuniform float zoom;\nvarying float vertSelect;\n\nvoid main(void) {\n  vec3 eyePos = vec3(0.0, 0.0, zoom);\n  float dp = dot(vertNormal, normalize(eyePos - vertPos));\n  float hemi = min(1.0, max(0.3, dp)+0.2);\n  //hemi *= vertColor.a;\n  vec3 rgbColor = vertColor.rgb * hemi;\n  //gl_FragDepthEXT = gl_FragCoord.z;\n  rgbColor += min(vertColor.rgb, 0.8) * pow(max(0.0, dp), 18.0);\n  rgbColor = handleSelect(rgbColor, vertSelect);\n  gl_FragColor = vec4(clamp(rgbColor, 0.0, 1.0), vertColor.a);\n  gl_FragColor.rgb = handleFog(gl_FragColor.rgb);\n  gl_FragColor = handleAlpha(gl_FragColor);\n}";

// hemilight vertex shader
var HEMILIGHT_VS = "\nattribute vec3 attrPos;\nattribute vec4 attrColor;\nattribute vec3 attrNormal;\nattribute float attrSelect;\n\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nvarying vec4 vertColor;\nvarying vec3 vertNormal;\nvarying vec3 vertPos;\nvarying float vertSelect;\nvoid main(void) {\n  vertPos = (modelviewMat * vec4(attrPos, 1.0)).xyz;\n  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);\n  vec4 n = (modelviewMat * vec4(attrNormal, 0.0));\n  vertNormal = n.xyz;\n  vertColor = attrColor;\n  vertSelect = attrSelect;\n}";

// outline shader. mixes outlineColor with fogColor
var OUTLINE_FS = "\nvarying float vertAlpha;\nvarying float vertSelect;\n\nuniform vec3 outlineColor;\n\nvoid main() {\n  gl_FragColor = vec4(mix(outlineColor, selectionColor.rgb,\n                          step(0.5, vertSelect)),\n                      vertAlpha);\n  gl_FragColor.rgb = handleFog(gl_FragColor.rgb);\n  gl_FragColor = handleAlpha(gl_FragColor);\n}";

// outline vertex shader. Expands vertices along the (in-screen) xy
// components of the normals.
var OUTLINE_VS = "\nprecision ${PRECISION} float;\n\nattribute vec3 attrPos;\nattribute vec3 attrNormal;\nattribute vec4 attrColor;\nattribute float attrSelect;\n\nuniform vec3 outlineColor;\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nvarying float vertAlpha;\nvarying float vertSelect;\nuniform vec2 relativePixelSize;\nuniform float outlineWidth;\nuniform float outlineOffset;\n\nvoid main(void) {\n  gl_Position = projectionMat * modelviewMat * vec4(attrPos, 1.0);\n  vec4 normal = modelviewMat * vec4(attrNormal, 0.0);\n  vertAlpha = attrColor.a;\n  vertSelect = attrSelect;\n  vec2 expansion = relativePixelSize *\n       (outlineWidth + 2.0 * step(0.5, attrSelect));\n  vec2 offset = normal.xy * expansion;\n  gl_Position.xy += gl_Position.w * offset;\n  gl_Position.z += gl_Position.w * outlineOffset;\n}";

var TEXT_VS = "\nprecision ${PRECISION} float;\n\nattribute vec3 attrCenter;\nattribute vec2 attrCorner;\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nuniform mat4 rotationMat;\nvarying vec2 vertTex;\nuniform float width;\nuniform float height;\nvoid main() {\n  vec4 pos = modelviewMat* vec4(attrCenter, 1.0);\n  pos.z += 4.0;\n  gl_Position = projectionMat * pos;\n  gl_Position.xy += vec2(width,height)*attrCorner*gl_Position.w;\n  vertTex = (attrCorner+abs(attrCorner))/(2.0*abs(attrCorner));\n}";

var TEXT_FS = "\nprecision ${PRECISION} float;\n\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nuniform sampler2D sampler;\nuniform float xScale;\nuniform float yScale;\nvarying vec2 vertTex;\nvoid main() {\n  vec2 texCoord = vec2(vertTex.x*xScale, vertTex.y*yScale);\n  gl_FragColor = texture2D(sampler, texCoord);\n  if (gl_FragColor.a == 0.0) { discard; }\n}";

// spherical billboard fragment shader
var SPHERES_FS = "\n#extension GL_EXT_frag_depth: enable\n\nvarying vec2 vertTex;\nvarying vec4 vertCenter;\nvarying vec4 vertColor;\nvarying float vertSelect;\nvarying float radius;\nuniform mat4 projectionMat;\nuniform vec3 outlineColor;\nvarying float border;\nuniform bool outlineEnabled;\n\nvoid main(void) {\n  float zz = dot(vertTex, vertTex);\n  if (zz > 1.0)\n    discard;\n  vec3 normal = vec3(vertTex.x, vertTex.y, sqrt(1.0-zz));\n  vec3 pos = vertCenter.xyz + normal * radius;\n  float dp = normal.z;\n  float hemi = sqrt(min(1.0, max(0.3, dp) + 0.2));\n  vec4 projected = projectionMat * vec4(pos, 1.0);\n  float depth = projected.z / projected.w;\n  gl_FragDepthEXT = (depth + 1.0) * 0.5;\n  vec3 rgbColor = vertColor.rgb * hemi;\n  rgbColor += min(vertColor.rgb, 0.8) * pow(max(0.0, dp), 18.0);\n  if (outlineEnabled) {\n    rgbColor = mix(rgbColor * hemi, outlineColor, step(border, sqrt(zz)));\n  } else {\n    rgbColor *= hemi;\n  }\n  rgbColor = handleSelect(rgbColor, vertSelect);\n  vec4 fogged = vec4(handleFog(rgbColor), vertColor.a);\n  gl_FragColor = handleAlpha(fogged);\n}";

var SPHERES_VS = "\nprecision ${PRECISION} float;\nattribute vec3 attrPos;\nattribute vec4 attrColor;\nattribute vec3 attrNormal;\nattribute float attrSelect;\nuniform vec2 relativePixelSize;\nuniform float outlineWidth;\nvarying float radius;\n\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nuniform mat4 rotationMat;\nvarying vec4 vertColor;\nvarying vec2 vertTex;\nvarying float border;\nvarying vec4 vertCenter;\nvarying float vertSelect;\nvoid main() {\n  vec3 d = vec3(attrNormal.xy * attrNormal.z, 0.0);\n  vec4 rotated = vec4(d, 0.0)*rotationMat;\n  gl_Position = projectionMat * modelviewMat *\n                (vec4(attrPos, 1.0)+rotated);\n  vertTex = attrNormal.xy;\n  vertColor = attrColor;\n  vertSelect = attrSelect;\n  vertCenter = modelviewMat* vec4(attrPos, 1.0);\n  float dist = length((projectionMat * vertCenter).xy - gl_Position.xy);\n  float dd = dist / gl_Position.w;\n  border = 1.0 - outlineWidth * 1.4 * length(relativePixelSize)/dd;\n  radius = attrNormal.z;\n}";

// spherical billboard fragment shader
var SELECT_SPHERES_FS = "\n#extension GL_EXT_frag_depth: enable\n\nvarying vec2 vertTex;\nvarying vec4 vertCenter;\nvarying vec4 vertColor;\nuniform mat4 projectionMat;\nvarying float objId;\nvarying float radius;\nuniform int symId;\n\nvoid main(void) {\n  float zz = dot(vertTex, vertTex);\n  if (zz > 1.0)\n    discard;\n  vec3 normal = vec3(vertTex.x, vertTex.y, sqrt(1.0-zz));\n  vec3 pos = vertCenter.xyz + normal * radius;\n  vec4 projected = projectionMat * vec4(pos, 1.0);\n  float depth = projected.z / projected.w;\n  gl_FragDepthEXT = (depth + 1.0) * 0.5;\n  // ints are only required to be 7bit...\n  int integralObjId = int(objId+0.5);\n  int red = intMod(integralObjId, 256);\n  integralObjId/=256;\n  int green = intMod(integralObjId, 256);\n  integralObjId/=256;\n  int blue = intMod(integralObjId, 256);\n  int alpha = symId;\n  gl_FragColor = vec4(float(red), float(green),\n                      float(blue), float(alpha))/255.0;\n}";

var SELECT_SPHERES_VS = "\nprecision ${PRECISION} float;\nattribute vec3 attrPos;\nattribute vec4 attrColor;\nattribute vec3 attrNormal;\nattribute float attrObjId;\nvarying float radius;\n\nuniform mat4 projectionMat;\nuniform mat4 modelviewMat;\nuniform mat4 rotationMat;\nvarying vec2 vertTex;\nvarying vec4 vertCenter;\nvarying float objId;\nvoid main() {\n  vec3 d = vec3(attrNormal.xy * attrNormal.z, 0.0);\n  vec4 rotated = vec4(d, 0.0)*rotationMat;\n  //vec4 rotated = vec4(d, 0.0);\n  gl_Position = projectionMat * modelviewMat *\n                (vec4(attrPos, 1.0)+rotated);\n  vertTex = attrNormal.xy;\n  vertCenter = modelviewMat* vec4(attrPos, 1.0);\n  radius = attrNormal.z;\n  objId = attrObjId;\n}";

// base for all animations, e.g. position transitions, slerping etc.

var Animation = function () {
  function Animation(from, to, duration) {
    classCallCheck(this, Animation);

    this._from = from;
    this._to = to;
    this._duration = duration;
    this._left = duration;
    this._start = Date.now();
    this._looping = false;
    this._finished = false;
  }

  createClass(Animation, [{
    key: 'setLooping',
    value: function setLooping(looping) {
      this._looping = looping;
    }
  }, {
    key: 'step',
    value: function step(cam) {
      var now = Date.now();
      var elapsed = now - this._start;
      var t;
      if (this._duration === 0) {
        t = 1.0;
      } else {
        if (this._looping) {
          var times = Math.floor(elapsed / this._duration);
          t = (elapsed - times * this._duration) / this._duration;
        } else {
          elapsed = Math.min(this._duration, elapsed);
          t = elapsed / this._duration;
          this._finished = t === 1.0;
        }
      }
      this.apply(cam, t);
      return this._finished;
    }
  }, {
    key: 'apply',
    value: function apply(cam, t) {
      var smoothInterval = (1 - Math.cos(t * Math.PI)) / 2;
      this._current = this._from * (1 - smoothInterval) + this._to * smoothInterval;
      cam.setZoom(this._current);
    }
  }, {
    key: 'finished',
    value: function finished() {
      return this._finished;
    }
  }]);
  return Animation;
}();

var Move = function (_Animation) {
  inherits(Move, _Animation);

  function Move(from, to, duration) {
    classCallCheck(this, Move);

    var _this = possibleConstructorReturn(this, (Move.__proto__ || Object.getPrototypeOf(Move)).call(this, from, to, duration));

    _this._current = clone$5(from);
    return _this;
  }

  createClass(Move, [{
    key: 'apply',
    value: function apply(cam, t) {
      var smoothInterval = (1 - Math.cos(t * Math.PI)) / 2;
      lerp$1(this._current, this._from, this._to, smoothInterval);
      cam.setCenter(this._current);
    }
  }]);
  return Move;
}(Animation);

var Rotate = function (_Animation2) {
  inherits(Rotate, _Animation2);

  function Rotate(initialRotation, destinationRotation, duration) {
    classCallCheck(this, Rotate);

    var _this2 = possibleConstructorReturn(this, (Rotate.__proto__ || Object.getPrototypeOf(Rotate)).call(this, initialRotation, destinationRotation, duration));

    var initial = create$2();
    var to = create$2();
    fromMat4(initial, initialRotation);
    fromMat4(to, destinationRotation);
    var initialQuat = create$4();
    var toQuat = create$4();
    fromMat3(initialQuat, initial);
    fromMat3(toQuat, to);
    _this2._current = create$2();
    Animation.call(_this2, initialQuat, toQuat, duration);
    return _this2;
  }

  createClass(Rotate, [{
    key: 'apply',
    value: function apply(cam, t) {
      var quatRot = create$4();
      slerp(quatRot, this._from, this._to, t);
      fromQuat(this._current, quatRot);
      cam.setRotation(this._current);
    }
  }]);
  return Rotate;
}(Animation);

var RockAndRoll = function (_Animation3) {
  inherits(RockAndRoll, _Animation3);

  function RockAndRoll(axis, duration) {
    classCallCheck(this, RockAndRoll);

    var _this3 = possibleConstructorReturn(this, (RockAndRoll.__proto__ || Object.getPrototypeOf(RockAndRoll)).call(this, null, null, duration));

    _this3._axis = clone$5(axis);
    _this3.setLooping(true);
    _this3._previousAngle = 0.0;
    return _this3;
  }

  createClass(RockAndRoll, [{
    key: 'apply',
    value: function apply(cam, t) {
      var axisRot = create$2();
      var rotation = create$2();
      fromMat4(rotation, cam.rotation());
      var angle = 0.2 * Math.sin(2 * t * Math.PI);
      var deltaAngle = angle - this._previousAngle;
      this._previousAngle = angle;
      axisRotation(axisRot, this._axis, deltaAngle);
      multiply$2(rotation, axisRot, rotation);
      cam.setRotation(rotation);
    }
  }]);
  return RockAndRoll;
}(Animation);

var Spin = function (_Animation4) {
  inherits(Spin, _Animation4);

  function Spin(axis, speed) {
    classCallCheck(this, Spin);

    var duration = 1000 * (2 * Math.PI / speed);

    var _this4 = possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, null, null, duration));

    _this4._axis = clone$5(axis);
    _this4.setLooping(true);
    _this4._speed = speed;
    _this4._previousT = 0.0;
    return _this4;
  }

  createClass(Spin, [{
    key: 'apply',
    value: function apply(cam, t) {
      var axisRot = create$2();
      var rotation = create$2();
      fromMat4(rotation, cam.rotation());
      var angle = Math.PI * 2 * (t - this._previousT);
      this._previousT = t;
      axisRotation(axisRot, this._axis, angle);
      multiply$2(rotation, axisRot, rotation);
      cam.setRotation(rotation);
    }
  }, {
    key: 'setSpeed',
    value: function setSpeed(speed) {
      this._speed = speed;
      this._duration = 1000 * (2 * Math.PI / speed);
    }
  }, {
    key: 'setAxis',
    value: function setAxis(axis) {
      this._axis = axis;
    }
  }]);
  return Spin;
}(Animation);

var AnimationControl = function () {
  function AnimationControl() {
    classCallCheck(this, AnimationControl);

    this._animations = [];
  }

  // apply all currently active animations to the camera
  // returns true if there are pending animations.


  createClass(AnimationControl, [{
    key: 'run',
    value: function run(camera) {
      var time = Date.now();
      this._animations = this._animations.filter(function (anim) {
        return !anim.step(camera, time);
      });
      return this._animations.length > 0;
    }
  }, {
    key: 'add',
    value: function add(animation) {
      this._animations.push(animation);
    }
  }, {
    key: 'remove',
    value: function remove(animation) {
      this._animations = this._animations.filter(function (a) {
        return a !== animation;
      });
    }
  }]);
  return AnimationControl;
}();

function move(from, to, duration) {
  return new Move(from, to, duration);
}

function rotate$4(from, to, duration) {
  return new Rotate(from, to, duration);
}

function zoom(from, to, duration) {
  return new Animation(from, to, duration);
}

function spin(axis, speed) {
  return new Spin(axis, speed);
}

function rockAndRoll() {
  return new RockAndRoll([0, 1, 0], 2000);
}

function defaultComp(lhs, rhs) {
  return lhs < rhs;
}

// returns the index into the values array for the first value identical to
// *value*.
var binarySearch = function binarySearch(values, value, comp) {
  if (values.length === 0) {
    return -1;
  }

  comp = comp || defaultComp;
  var low = 0;
  var high = values.length;
  var mid = low + high >> 1;

  while (true) {
    var midValue = values[mid];
    if (comp(value, midValue)) {
      high = mid;
    } else if (comp(midValue, value)) {
      low = mid;
    } else {
      return mid;
    }
    var newMid = low + high >> 1;
    if (newMid === mid) {
      return -1;
    }
    mid = newMid;
  }
};

// returns the index of the first item in the list whose value is
// larger or equal than *value*.
var indexFirstLargerEqualThan = function indexFirstLargerEqualThan(values, value, comp) {
  comp = comp || defaultComp;
  if (values.length === 0 || comp(values[values.length - 1], value)) {
    return -1;
  }
  var low = 0;
  var high = values.length;
  var mid = low + high >> 1;

  while (true) {
    var midValue = values[mid];
    if (comp(value, midValue)) {
      // there might be other values larger than value with an index
      // lower than mid.
      high = mid;
    } else if (comp(midValue, value)) {
      low = mid + 1;
    } else {
      high = mid;
    }
    var newMid = low + high >> 1;
    if (newMid === mid) {
      return mid;
    }
    mid = newMid;
  }
};



var indexLastSmallerEqualThan = function indexLastSmallerEqualThan(values, value, comp) {
  comp = comp || defaultComp;
  if (values.length === 0 || comp(values[values.length - 1], value)) {
    return values.length - 1;
  }

  if (comp(value, values[0])) {
    return -1;
  }

  var low = 0;
  var high = values.length;
  var mid = low + high >> 1;

  while (true) {
    var midValue = values[mid];
    if (comp(value, midValue)) {
      high = mid;
    } else {
      low = mid;
    }
    var newMid = low + high >> 1;
    if (newMid === mid) {
      return mid;
    }
    mid = newMid;
  }
};

var Range = function () {
  function Range(min, max) {
    classCallCheck(this, Range);

    if (min === undefined || max === undefined) {
      this._empty = true;
      this._min = this._max = null;
    } else {
      this._empty = false;
      this._min = min;
      this._max = max;
    }
  }

  createClass(Range, [{
    key: "min",
    value: function min() {
      return this._min;
    }
  }, {
    key: "max",
    value: function max() {
      return this._max;
    }
  }, {
    key: "length",
    value: function length() {
      return this._max - this._min;
    }
  }, {
    key: "empty",
    value: function empty() {
      return this._empty;
    }
  }, {
    key: "center",
    value: function center() {
      return (this._max + this._min) * 0.5;
    }
  }, {
    key: "extend",
    value: function extend(amount) {
      this._min -= amount;
      this._max += amount;
    }
  }, {
    key: "update",
    value: function update(val) {
      if (!this._empty) {
        if (val < this._min) {
          this._min = val;
        } else if (val > this._max) {
          this._max = val;
        }
        return;
      }
      this._min = this._max = val;
      this._empty = false;
    }
  }]);
  return Range;
}();

var WEBGL_NOT_SUPPORTED = '<div style="vertical-align:middle; text-align:center;">\n<h1>WebGL not supported</h1><p>Your browser does not support WebGL.\nYou might want to try Chrome, Firefox, IE 11, or newer versions of Safari\n</p>\n<p>If you are using a recent version of one of the above browsers, your\ngraphic card might be blocked. Check the browser documentation for details\non how to unblock it.\n</p>\n</div>';

function isiOS() {
  return (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)
  );
}

function isAndroid() {
  return (/Android/ig.test(navigator.userAgent)
  );
}

function shouldUseHighPrecision(gl) {
  // high precision for shaders is only required on iOS, all the other browsers
  // are doing just fine with mediump.
  var highp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
  var highpSupported = Boolean(highp.precision);

  return highpSupported && (isiOS() || isAndroid());
}

function slabModeToStrategy(mode, options) {
  mode = mode || 'auto';
  if (mode === 'fixed') {
    return new FixedSlab(options);
  }

  if (mode === 'auto') {
    return new AutoSlab(options);
  }

  return null;
}

var PickedObject = function () {
  function PickedObject(target, node, symIndex, pos, object, transform, connectivity) {
    classCallCheck(this, PickedObject);

    this._pos = pos;
    this._target = target;
    this._node = node;
    this._symIndex = symIndex;
    this._legacyObject = object;
    this._legacyTransform = transform;
    this._connectivity = connectivity;
  }

  createClass(PickedObject, [{
    key: 'symIndex',
    value: function symIndex() {
      return this._symIndex;
    }
  }, {
    key: 'target',
    value: function target() {
      return this._target;
    }
  }, {
    key: 'pos',
    value: function pos() {
      return this._pos;
    }
  }, {
    key: 'connectivity',
    value: function connectivity() {
      return this._connectivity;
    }
  }, {
    key: 'node',
    value: function node() {
      return this._node;
    }
  }]);
  return PickedObject;
}();

var Viewer = function () {
  function Viewer(domElement, opts) {
    classCallCheck(this, Viewer);

    this._options = this._initOptions(opts, domElement);

    this._initialized = false;
    this._objects = [];
    this._domElement = domElement;
    this._redrawRequested = false;
    this._resize = false;
    this._lastTimestamp = null;
    this._objectIdManager = new UniqueObjectIdPool();
    // these two are set to the animation objects when spin/rockAndRoll
    // are active
    this._spin = null;
    this._rockAndRoll = null;

    this.listenerMap = {};

    this._animControl = new AnimationControl();
    this._initKeyboardInput();

    // NOTE: make sure to only request features supported by all browsers,
    // not only browsers that support WebGL in this constructor. WebGL
    // detection only happens in Viewer._initGL. Once this happened, we are
    // save to use whatever feature pleases us, e.g. typed arrays, 2D
    // contexts etc.
    this._initCanvas();

    this.quality(this._options.quality);

    if (this._options.click !== null) {
      this.on('click', this._options.click);
    }
    if (this._options.doubleClick !== null) {
      this.on('doubleClick', this._options.doubleClick);
    }

    var readyStates = ['complete', 'loaded', 'interactive'];

    if (readyStates.indexOf(document.readyState) !== -1) {
      this._initViewer();
    } else {
      document.addEventListener('DOMContentLoaded', this._initViewer.bind(this));
    }
  }

  createClass(Viewer, [{
    key: '_initOptions',
    value: function _initOptions(opts, domElement) {
      opts = opts || {};
      this._extensions = opts.extensions || [];
      this._extensions.forEach(function (ext) {
        if (ext.optionOverrides !== null) {
          Object.assign(opts, ext.optionOverrides());
        }
      });

      var options = {
        width: opts.width || 500,
        height: opts.height || 500,
        animateTime: opts.animateTime || 0,
        antialias: opts.antialias,
        forceManualAntialiasing: optValue(opts, 'forceManualAntialiasing', true),
        quality: optValue(opts, 'quality', 'low'),
        style: optValue(opts, 'style', 'hemilight'),
        background: forceRGB(opts.background || 'white'),
        slabMode: slabModeToStrategy(opts.slabMode),
        outline: optValue(opts, 'outline', true),
        outlineColor: forceRGB(optValue(opts, 'outlineColor', 'black')),
        outlineWidth: optValue(opts, 'outlineWidth', 1.5),
        selectionColor: forceRGB(optValue(opts, 'selectionColor', '#3f3'), 0.7),
        fov: optValue(opts, 'fov', 45.0),
        doubleClick: opts.doubleClick || 'center',
        click: opts.click,
        fog: optValue(opts, 'fog', true),
        transparency: optValue(opts, 'transparency', 'alpha')
      };
      var parentRect = domElement.getBoundingClientRect();
      if (options.width === 'auto') {
        options.width = parentRect.width;
      }
      if (options.height === 'auto') {
        options.height = parentRect.height;
      }
      return options;
    }

    // with rendering to avoid flickering.

  }, {
    key: '_ensureSize',
    value: function _ensureSize() {
      if (!this._resize) {
        return;
      }
      this._resize = false;
      this._cam.setViewportSize(this._canvas.viewportWidth(), this._canvas.viewportHeight());
      this._pickBuffer.resize(this._options.width, this._options.height);
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      if (width === this._options.width && height === this._options.height) {
        return;
      }
      this._canvas.resize(width, height);
      this._resize = true;
      this._options.width = width;
      this._options.height = height;
      this.requestRedraw();
    }
  }, {
    key: 'fitParent',
    value: function fitParent() {
      var parentRect = this._domElement.getBoundingClientRect();
      this.resize(parentRect.width, parentRect.height);
    }
  }, {
    key: 'gl',
    value: function gl() {
      return this._canvas.gl();
    }
  }, {
    key: 'ok',
    value: function ok() {
      return this._initialized;
    }
  }, {
    key: 'options',
    value: function options(optName, value) {
      if (value !== undefined) {
        this._options[optName] = value;
        if (optName === 'fog') {
          this._cam.fog(value);
          this.requestRedraw();
        } else if (optName === 'fov') {
          this._cam.setFieldOfViewY(value * Math.PI / 180.0);
        } else if (optName === 'selectionColor') {
          this._cam.setSelectionColor(forceRGB(value, 0.7));
        } else if (optName === 'outlineColor') {
          this._cam.setOutlineColorColor(forceRGB(value));
        } else if (optName === 'outlineWidth') {
          this._cam.setOutlineWidth(value + 0.0 /* force to float*/);
        } else if (optName === 'transparency') {
          var sd = value === 'screendoor';
          this._cam.setScreenDoorTransparency(sd);
        }
      }
      return this._options[optName];
    }
  }, {
    key: 'quality',
    value: function quality(qual) {
      if (qual === undefined) {
        return this._options.quality;
      }
      this._options.quality = qual;
      if (qual === 'high') {
        this._options.arcDetail = 4;
        this._options.sphereDetail = 16;
        this._options.splineDetail = 8;
      }
      if (qual === 'medium') {
        this._options.arcDetail = 2;
        this._options.sphereDetail = 10;
        this._options.splineDetail = 5;
      }
      if (qual === 'low') {
        this._options.arcDetail = 2;
        this._options.sphereDetail = 8;
        this._options.splineDetail = 3;
      }
      return this._options.quality;
    }

    // returns the content of the WebGL context as a data URL element which can be
    // inserted into an img element. This allows users to save a picture to disk

  }, {
    key: 'imageData',
    value: function imageData() {
      return this._canvas.imageData();
    }
  }, {
    key: '_initPickBuffer',
    value: function _initPickBuffer() {
      var fbOptions = {
        width: this._options.width, height: this._options.height
      };
      this._pickBuffer = new FrameBuffer(this._canvas.gl(), fbOptions);
    }
  }, {
    key: '_initViewer',
    value: function _initViewer() {
      if (!this._canvas.initGL()) {
        this._domElement.removeChild(this._canvas.domElement());
        this._domElement.innerHTML = WEBGL_NOT_SUPPORTED;
        this._domElement.style.width = this._options.width + 'px';
        this._domElement.style.height = this._options.height + 'px';
        return false;
      }

      this._initPickBuffer();
      this._2dcontext = this._textureCanvas.getContext('2d');
      this._float32Allocator = new PoolAllocator(Float32Array);
      this._uint16Allocator = new PoolAllocator(Uint16Array);
      this._cam = new Cam(this._canvas.gl());
      this._cam.setUpsamplingFactor(this._canvas.superSamplingFactor());
      this._cam.setOutlineWidth(this._options.outlineWidth);
      this._cam.setOutlineEnabled(this._options.outline);
      var sd = this._options.transparency === 'screendoor';
      this._cam.setScreenDoorTransparency(sd);
      this._cam.fog(this._options.fog);
      this._cam.setFogColor(this._options.background);
      this._cam.setOutlineColor(this._options.outlineColor);
      this._cam.setSelectionColor(this._options.selectionColor);
      this._cam.setFieldOfViewY(this._options.fov * Math.PI / 180.0);
      this._mouseHandler.setCam(this._cam);

      var c = this._canvas;
      var p = shouldUseHighPrecision(c.gl()) ? 'highp' : 'mediump';
      this._shaderCatalog = {
        hemilight: c.initShader(HEMILIGHT_VS, PRELUDE_FS + HEMILIGHT_FS, p),
        phong: c.initShader(HEMILIGHT_VS, PRELUDE_FS + PHONG_FS, p),
        outline: c.initShader(OUTLINE_VS, PRELUDE_FS + OUTLINE_FS, p),
        lines: c.initShader(LINES_VS, PRELUDE_FS + LINES_FS, p),
        text: c.initShader(TEXT_VS, TEXT_FS, p),
        selectLines: c.initShader(SELECT_LINES_VS, SELECT_LINES_FS, p),
        select: c.initShader(SELECT_VS, SELECT_FS, p)
      };
      if (c.gl().getExtension('EXT_frag_depth')) {
        this._shaderCatalog.spheres = c.initShader(SPHERES_VS, PRELUDE_FS + SPHERES_FS, p);
        this._shaderCatalog.selectSpheres = c.initShader(SELECT_SPHERES_VS, PRELUDE_FS + SELECT_SPHERES_FS, p);
      }
      this._boundDraw = this._draw.bind(this);
      this._touchHandler = new Touchhandler(this._canvas.domElement(), this, this._cam);
      var gl = c.gl();
      var outlineOffset = 0.0;
      // in case we have fewer than 24 depth bits, we need to add offset
      // the drawn outline a tiny bit, as otherwise the outline appears on
      // top of the actual geometry.
      if (gl.getParameter(gl.DEPTH_BITS) >= 24) {
        outlineOffset = 0.00001;
      }
      var outlineProg = this._shaderCatalog.outline;
      gl.useProgram(outlineProg);
      gl.uniform1f(gl.getUniformLocation(outlineProg, 'outlineOffset'), outlineOffset);
      var viewer = this;
      // call init on all registered extensions
      this._extensions.forEach(function (ext) {
        ext.init(viewer);
      });
      if (!this._initialized) {
        this._initialized = true;
        this._dispatchEvent({ 'name': 'viewerReadyEvent' }, 'viewerReady', this);
      }
      return true;
    }
  }, {
    key: 'requestRedraw',
    value: function requestRedraw() {
      if (this._redrawRequested) {
        return;
      }

      this._redrawRequested = true;
      requestAnimationFrame(this._boundDraw);
    }
  }, {
    key: 'boundingClientRect',
    value: function boundingClientRect() {
      return this._canvas.domElement().getBoundingClientRect();
    }
  }, {
    key: '_drawWithPass',
    value: function _drawWithPass(pass) {
      for (var i = 0, e = this._objects.length; i !== e; ++i) {
        this._objects[i].draw(this._cam, this._shaderCatalog, this._options.style, pass);
      }
    }
  }, {
    key: '_initKeyboardInput',
    value: function _initKeyboardInput() {
      if (isiOS() || isAndroid()) {
        this._keyInput = document;
        return;
      }

      // this function creates a textarea element inside a div with height
      // and width of zero. When the user clicks on the viewer, we set
      // focus on the text area to receive text input. This makes sure we
      // only capture keypress events when the viewer is focused.
      var zeroSizedDiv = document.createElement('div');
      zeroSizedDiv.setAttribute('style', 'overflow:hidden;width:0;height:0');
      this._keyInput = document.createElement('textarea');
      this._domElement.appendChild(zeroSizedDiv);
      zeroSizedDiv.appendChild(this._keyInput);
      this._keyInput.focus();
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this._keyInput !== document) {
        this._keyInput.focus();
      }
    }
  }, {
    key: '_initCanvas',
    value: function _initCanvas() {
      var canvasOptions = {
        antialias: this._options.antialias,
        forceManualAntialiasing: this._options.forceManualAntialiasing,
        height: this._options.height,
        width: this._options.width,
        backgroundColor: this._options.background
      };
      this._canvas = new Canvas(this._domElement, canvasOptions);
      this._textureCanvas = document.createElement('canvas');
      this._textureCanvas.style.display = 'none';
      this._domElement.appendChild(this._textureCanvas);
      this._mouseHandler = new MouseHandler(this._canvas, this, this._cam, this._options.animateTime);
      this._canvas.domElement().addEventListener('mousedown', this.focus.bind(this));
    }
  }, {
    key: 'translate',
    value: function translate(vector, ms) {
      var newCenter = create$5();
      var inverseRotation = create$3();
      ms |= 0;
      transpose$2(inverseRotation, this._cam.rotation());
      transformMat4(newCenter, vector, inverseRotation);
      subtract$4(newCenter, this._cam.center(), newCenter);
      if (ms === 0) {
        this._cam.setCenter(newCenter);
        this.requestRedraw();
        return;
      }
      this._animControl.add(move(this._cam.center(), clone$5(newCenter), ms));
      this.requestRedraw();
    }
  }, {
    key: 'rotate',
    value: function rotate$$1(axis, angle, ms) {
      var normalizedAxis = create$5();
      var targetRotation3 = create$2();
      var targetRotation4 = create$3();
      ms |= 0;
      normalize$1(normalizedAxis, axis);
      axisRotation(targetRotation3, normalizedAxis, angle);
      undefined(targetRotation4, targetRotation3);
      multiply$3(targetRotation4, targetRotation4, this._cam.rotation());
      if (ms === 0) {
        this._cam.setRotation(targetRotation4);
        this.requestRedraw();
        return;
      }

      this._animControl.add(rotate$4(this._cam.rotation(), targetRotation4, ms));
      this.requestRedraw();
    }
  }, {
    key: 'setRotation',
    value: function setRotation(rotation, ms) {
      ms |= 0;
      if (ms === 0) {
        this._cam.setRotation(rotation);
        this.requestRedraw();
        return;
      }
      // in case it's a mat3, convert to mat4
      var rotation4;
      if (rotation.length === 9) {
        rotation4 = create$3();
        undefined(rotation4, rotation);
      } else {
        rotation4 = clone$3(rotation);
      }
      this._animControl.add(rotate$4(this._cam.rotation(), rotation4, ms));
      this.requestRedraw();
    }
  }, {
    key: 'setCamera',
    value: function setCamera(rotation, center, zoomLevel, ms) {
      ms |= 0;
      this.setCenter(center, ms);
      this.setRotation(rotation, ms);
      this.setZoom(zoomLevel, ms);
    }

    // performs interpolation of current camera position

  }, {
    key: '_animateCam',
    value: function _animateCam() {
      var anotherRedraw = this._animControl.run(this._cam);
      if (anotherRedraw) {
        this.requestRedraw();
      }
    }
  }, {
    key: '_draw',
    value: function _draw() {
      if (this._canvas === null) {
        // only happens when viewer has been destroyed
        return;
      }
      this._redrawRequested = false;
      this._animateCam();
      this._canvas.bind();
      // must be called "after" canvas.bind(). we need to some of the properties
      // calculated in canvas._ensureSize()
      this._ensureSize();
      var gl = this._canvas.gl();
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      var newSlab = this._options.slabMode.update(this._objects, this._cam);
      if (newSlab !== null) {
        this._cam.setNearFar(newSlab.near, newSlab.far);
      }

      gl.enable(gl.CULL_FACE);
      if (this._options.outline) {
        gl.cullFace(gl.BACK);
        gl.enable(gl.CULL_FACE);
        this._drawWithPass('outline');
      }
      gl.cullFace(gl.FRONT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      this._drawWithPass('normal');
    }
  }, {
    key: 'setCenter',
    value: function setCenter(center, ms) {
      ms |= 0;
      if (ms === 0) {
        this._cam.setCenter(center);
        return;
      }
      this._animControl.add(move(this._cam.center(), clone$5(center), ms));
      this.requestRedraw();
    }
  }, {
    key: 'zoom',
    value: function zoom$$1() {
      return this._cam.zoom();
    }
  }, {
    key: 'setZoom',
    value: function setZoom(zoomLevel, ms) {
      ms |= 0;
      if (ms === 0) {
        this._cam.setZoom(zoomLevel);
        return;
      }
      this._animControl.add(zoom(this._cam.zoom(), zoomLevel, ms));
      this.requestRedraw();
    }
  }, {
    key: 'centerOn',
    value: function centerOn(what, ms) {
      this.setCenter(what.center(), ms);
    }
  }, {
    key: 'clear',
    value: function clear() {
      for (var i = 0; i < this._objects.length; ++i) {
        this._objects[i].destroy();
      }
      this._objects = [];
    }
  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if (eventName === 'keypress' || eventName === 'keydown' || eventName === 'keyup') {
        // attach keyboard events to key input text area. We will
        // only receive these events in case the text area has focus. Note that
        // _keyInput is set to the document in case we are running on a
        // tablet/phone as we wold pop up the on-screen keyboard otherwise.
        this._keyInput.addEventListener(eventName, callback, false);
        return;
      }
      if (eventName === 'viewpointChanged') {
        this._cam.addOnCameraChanged(callback);
        return;
      }
      if (eventName === 'mousemove' || eventName === 'mousedown' || eventName === 'mouseup') {
        this._canvas.domElement().addEventListener(eventName, callback, false);
      }

      var callbacks = this.listenerMap[eventName];
      if (typeof callbacks === 'undefined') {
        callbacks = [];
        this.listenerMap[eventName] = callbacks;
      }
      if (callback === 'center') {
        var _context;

        var cb = (_context = this._mouseHandler, this._mouseHandler._centerOnClicked).bind(_context);
        callbacks.push(cb);
      } else {
        callbacks.push(callback);
      }
      // in case viewer is already initialized, fire viewerReady immediately.
      // Otherwise, the callback would never be invoked in this case:
      //
      // document.addEventListener('DOMContentLoaded', function() {
      //    viewer = pv.Viewer(...);
      //    viewer.on('viewerReady', function(viewer) {
      //    });
      // });
      if (this._initialized && eventName === 'viewerReady') {
        // don't use dispatch here, we only want this very callback to be
        // invoked.
        callback(this, null);
      }
    }
  }, {
    key: '_dispatchEvent',
    value: function _dispatchEvent(event, newEventName, arg) {
      var callbacks = this.listenerMap[newEventName];
      if (callbacks) {
        callbacks.forEach(function (callback) {
          callback(arg, event);
        });
      }
    }

    /// simple dispatcher which allows to render using a certain style.
    //  will bail out if the render mode does not exist.

  }, {
    key: 'renderAs',
    value: function renderAs(name, structure, mode, opts) {
      var found = false;
      for (var i = 0; i < this.RENDER_MODES.length; ++i) {
        if (this.RENDER_MODES[i] === mode) {
          found = true;
          break;
        }
      }
      if (!found) {
        console.error('render mode', mode, 'not supported');
        return;
      }

      return this[mode](name, structure, opts);
    }
  }, {
    key: '_handleStandardMolOptions',
    value: function _handleStandardMolOptions(opts, structure) {
      opts = this._handleStandardOptions(opts);
      opts.showRelated = opts.showRelated || 'asym';
      if (opts.showRelated && opts.showRelated !== 'asym') {
        if (structure.assembly(opts.showRelated) === null) {
          console.error('no assembly with name', opts.showRelated, '. Falling back to asymmetric unit');
          opts.showRelated = 'asym';
        }
      }
      return opts;
    }
  }, {
    key: '_handleStandardOptions',
    value: function _handleStandardOptions(opts) {
      opts = Object.assign({}, opts);
      opts.float32Allocator = this._float32Allocator;
      opts.uint16Allocator = this._uint16Allocator;
      opts.idPool = this._objectIdManager;
      return opts;
    }
  }, {
    key: 'lineTrace',
    value: function lineTrace$$1(name, structure, opts) {
      var options = this._handleStandardMolOptions(opts, structure);
      options.color = options.color || uniform([1, 0, 1]);
      options.lineWidth = options.lineWidth || 4.0;

      var obj = lineTrace(structure, this._canvas.gl(), options);
      return this.add(name, obj);
    }
  }, {
    key: 'spheres',
    value: function spheres$$1(name, structure, opts) {
      var options = this._handleStandardMolOptions(opts, structure);
      options.color = options.color || byElement();
      options.sphereDetail = this.options('sphereDetail');
      options.radiusMultiplier = options.radiusMultiplier || 1.0;
      var obj;
      // in case we can write to the depth buffer from the fragment shader
      // (EXT_frag_depth) we can use billboarded spheres instead of creating
      // the full sphere geometry. That's faster AND looks better.
      if (this._canvas.gl().getExtension('EXT_frag_depth')) {
        obj = billboardedSpheres(structure, this._canvas.gl(), options);
      } else {
        obj = spheres(structure, this._canvas.gl(), options);
      }
      return this.add(name, obj);
    }
  }, {
    key: 'sline',
    value: function sline$$1(name, structure, opts) {
      var options = this._handleStandardMolOptions(opts, structure);
      options.color = options.color || uniform([1, 0, 1]);
      options.splineDetail = options.splineDetail || this.options('splineDetail');
      options.strength = options.strength || 1.0;
      options.lineWidth = options.lineWidth || 4.0;

      var obj = sline(structure, this._canvas.gl(), options);
      return this.add(name, obj);
    }
  }, {
    key: 'cartoon',
    value: function cartoon$$1(name, structure, opts) {
      var options = this._handleStandardMolOptions(opts, structure);
      options.color = options.color || bySS();
      options.strength = options.strength || 1.0;
      options.splineDetail = options.splineDetail || this.options('splineDetail');
      options.arcDetail = options.arcDetail || this.options('arcDetail');
      options.radius = options.radius || 0.3;
      options.forceTube = options.forceTube || false;
      options.smoothStrands = options.smoothStrands === undefined ? true : options.smoothStrands;
      var obj = cartoon(structure, this._canvas.gl(), options);
      var added = this.add(name, obj);
      return added;
    }
  }, {
    key: 'surface',
    value: function surface$$1(name, data, opts) {
      var options = this._handleStandardOptions(opts);
      var obj = surface(data, this._canvas.gl(), options);
      return this.add(name, obj);
    }

    // renders the protein using a smoothly interpolated tube, essentially
    // identical to the cartoon render mode, but without special treatment for
    // helices and strands.

  }, {
    key: 'tube',
    value: function tube(name, structure, opts) {
      opts = opts || {};
      opts.forceTube = true;
      return this.cartoon(name, structure, opts);
    }
  }, {
    key: 'ballsAndSticks',
    value: function ballsAndSticks$$1(name, structure, opts) {
      var options = this._handleStandardMolOptions(opts, structure);

      options.color = options.color || byElement();
      options.cylRadius = options.radius || options.cylRadius || 0.1;
      options.sphereRadius = options.radius || options.sphereRadius || 0.2;
      options.arcDetail = (options.arcDetail || this.options('arcDetail')) * 2;
      options.sphereDetail = options.sphereDetail || this.options('sphereDetail');
      options.scaleByAtomRadius = optValue(options, 'scaleByAtomRadius', true);

      var obj = ballsAndSticks(structure, this._canvas.gl(), options);
      return this.add(name, obj);
    }
  }, {
    key: 'lines',
    value: function lines$$1(name, structure, opts) {
      var options = this._handleStandardMolOptions(opts, structure);
      options.color = options.color || byElement();
      options.lineWidth = options.lineWidth || 4.0;
      var obj = lines(structure, this._canvas.gl(), options);
      return this.add(name, obj);
    }
  }, {
    key: 'points',
    value: function points$$1(name, structure, opts) {
      var options = this._handleStandardMolOptions(opts, structure);
      options.color = options.color || byElement();
      options.pointSize = options.pointSize || 1.0;
      var obj = points(structure, this._canvas.gl(), options);
      return this.add(name, obj);
    }
  }, {
    key: 'trace',
    value: function trace$$1(name, structure, opts) {
      var options = this._handleStandardMolOptions(opts, structure);
      options.color = options.color || uniform([1, 0, 0]);
      options.radius = options.radius || 0.3;
      options.arcDetail = (options.arcDetail || this.options('arcDetail')) * 2;
      options.sphereDetail = options.sphereDetail || this.options('sphereDetail');

      var obj = trace(structure, this._canvas.gl(), options);
      return this.add(name, obj);
    }
  }, {
    key: '_updateProjectionIntervals',
    value: function _updateProjectionIntervals(axes, intervals, structure) {
      structure.eachAtom(function (atom) {
        var pos = atom.pos();
        for (var i = 0; i < 3; ++i) {
          intervals[i].update(dot$1(pos, axes[i]));
        }
      });
      for (var i = 0; i < 3; ++i) {
        intervals[i].extend(1.5);
      }
    }
  }, {
    key: 'fitTo',
    value: function fitTo(what, ms) {
      var axes = this._cam.mainAxes();
      var intervals = [new Range(), new Range(), new Range()];
      if (what instanceof SceneNode) {
        what.updateProjectionIntervals(axes[0], axes[1], axes[2], intervals[0], intervals[1], intervals[2]);
      } else if (what.eachAtom !== undefined) {
        this._updateProjectionIntervals(axes, intervals, what);
      } else if (what.length !== undefined) {
        for (var i = 0; i < what.length; ++i) {
          this._updateProjectionIntervals(axes, intervals, what[i]);
        }
      }
      this._fitToIntervals(axes, intervals, ms);
    }
  }, {
    key: '_fitToIntervals',
    value: function _fitToIntervals(axes, intervals, ms) {
      if (intervals[0].empty() || intervals[1].empty() || intervals[2].empty()) {
        console.error('could not determine interval. No objects shown?');
        return;
      }
      var cx = intervals[0].center();
      var cy = intervals[1].center();
      var cz = intervals[2].center();
      var center = [cx * axes[0][0] + cy * axes[1][0] + cz * axes[2][0], cx * axes[0][1] + cy * axes[1][1] + cz * axes[2][1], cx * axes[0][2] + cy * axes[1][2] + cz * axes[2][2]];
      var fovY = this._cam.fieldOfViewY();
      var aspect = this._cam.aspectRatio();
      var inPlaneX = intervals[0].length() / aspect;
      var inPlaneY = intervals[1].length();
      var inPlane = Math.max(inPlaneX, inPlaneY) * 0.5;
      var distanceToFront = inPlane / Math.tan(0.5 * fovY);
      var newZoom = distanceToFront + 0.5 * intervals[2].length();
      var grace = 0.5;
      var near = Math.max(distanceToFront - grace, 0.1);
      var far = 2 * grace + distanceToFront + intervals[2].length();
      this._cam.setNearFar(near, far);
      var time = ms === undefined ? this._options.animateTime : ms | 0;
      this.setCamera(this._cam.rotation(), center, newZoom, time);
      this.requestRedraw();
    }

    // adapt the zoom level to fit the viewport to all visible objects.

  }, {
    key: 'autoZoom',
    value: function autoZoom(ms) {
      var axes = this._cam.mainAxes();
      var intervals = [new Range(), new Range(), new Range()];
      this.forEach(function (obj) {
        if (!obj.visible()) {
          return;
        }
        obj.updateProjectionIntervals(axes[0], axes[1], axes[2], intervals[0], intervals[1], intervals[2]);
      });
      this._fitToIntervals(axes, intervals, ms);
    }
  }, {
    key: 'autoSlab',
    value: function autoSlab() {
      var slab = this._options._slabMode.update(this._objects, this._cam);
      if (slab !== null) {
        this._cam.setNearFar(slab.near, slab.far);
      }
      this.requestRedraw();
    }

    // enable disable rock and rolling of camera

  }, {
    key: 'rockAndRoll',
    value: function rockAndRoll$$1(enable) {
      if (enable === undefined) {
        return this._rockAndRoll !== null;
      }

      if (enable) {
        if (this._rockAndRoll === null) {
          this._rockAndRoll = rockAndRoll();
          this._animControl.add(this._rockAndRoll);
          this.requestRedraw();
        }
        return true;
      }
      this._animControl.remove(this._rockAndRoll);
      this._rockAndRoll = null;
      this.requestRedraw();
      return false;
    }
  }, {
    key: 'spin',
    value: function spin$$1(speed, axis) {
      if (speed === undefined) {
        return this._spin !== null;
      }
      if (speed === false) {
        this._animControl.remove(this._spin);
        this._spin = null;
        this.requestRedraw();
        return false;
      }
      if (speed === true) {
        speed = Math.PI / 8;
      }
      axis = axis || [0, 1, 0];
      if (this._spin === null) {
        this._spin = spin(axis, speed);
        this._animControl.add(this._spin);
      } else {
        this._spin.setSpeed(speed);
        this._spin.setAxis(axis);
      }
      this.requestRedraw();
      return true;
    }
  }, {
    key: 'slabMode',
    value: function slabMode(mode, options) {
      options = options || {};
      var strategy = slabModeToStrategy(mode, options);
      var slab = strategy.update(this._objects, this._cam);
      if (slab !== null) {
        this._cam.setNearFar(slab.near, slab.far);
      }
      this._options.slabMode = strategy;
      this.requestRedraw();
    }
  }, {
    key: 'label',
    value: function label(name, text, pos, options) {
      var label = new TextLabel(this._canvas.gl(), this._textureCanvas, this._2dcontext, pos, text, options);
      this.add(name, label);
      return label;
    }
  }, {
    key: 'customMesh',
    value: function customMesh(name, opts) {
      var options = this._handleStandardOptions(opts);

      var mesh = new CustomMesh(name, this._canvas.gl(), options.float32Allocator, options.uint16Allocator, options.idPool);
      this.add(name, mesh);
      return mesh;
    }

    // INTERNAL: draws scene into offscreen pick buffer with the "select"
    // shader.

  }, {
    key: '_drawPickingScene',
    value: function _drawPickingScene() {
      var gl = this._canvas.gl();
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.disable(gl.BLEND);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.clearColor(this._options.background[0], this._options.background[1], this._options.background[2], 1.0);
      gl.cullFace(gl.FRONT);
      gl.enable(gl.CULL_FACE);
      this._drawWithPass('select');
    }
  }, {
    key: 'pick',
    value: function pick(pos) {
      this._pickBuffer.bind();
      this._drawPickingScene();
      var pixels = new Uint8Array(4);
      var gl = this._canvas.gl();
      gl.readPixels(pos.x, this._options.height - pos.y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      this._pickBuffer.release();
      if (pixels.data) {
        pixels = pixels.data;
      }
      var objId = pixels[0] | pixels[1] << 8 | pixels[2] << 16;
      var symIndex = pixels[3];

      var picked = this._objectIdManager.objectForId(objId);
      if (picked === undefined) {
        return null;
      }
      var transformedPos = create$5();
      var target = null;
      var transform = null;
      var connectivity = 'unknown';
      if (symIndex !== 255) {
        target = picked.atom;
        transform = picked.geom.symWithIndex(symIndex);
        transformMat4(transformedPos, picked.atom.pos(), transform);
        connectivity = picked.isTrace ? 'trace' : 'full';
      } else {
        if (picked.atom !== undefined) {
          target = picked.atom;
          transformedPos = picked.atom.pos();
          connectivity = picked.isTrace ? 'trace' : 'full';
        } else {
          target = picked.userData;
          transformedPos = picked.center;
        }
      }
      return new PickedObject(target, picked.geom, symIndex < 255 ? symIndex : null, transformedPos, picked, transform, connectivity);
    }
  }, {
    key: 'add',
    value: function add(name, obj) {
      obj.name(name);
      this._objects.push(obj);
      this._objects.sort(function (lhs, rhs) {
        return lhs.order() - rhs.order();
      });
      this.requestRedraw();
      return obj;
    }
  }, {
    key: '_globToRegex',
    value: function _globToRegex(glob) {
      var r = glob.replace('.', '\\.').replace('*', '.*');
      return new RegExp('^' + r + '$');
    }
  }, {
    key: 'forEach',
    value: function forEach() {
      var callback;
      var pattern = '*';

      if (arguments.length === 2) {
        callback = arguments[1];
        pattern = arguments[0];
      } else {
        callback = arguments[0];
      }
      var regex = this._globToRegex(pattern);
      for (var i = 0; i < this._objects.length; ++i) {
        var obj = this._objects[i];
        if (regex.test(obj.name())) {
          callback(obj, i);
        }
      }
    }
  }, {
    key: 'rotation',
    value: function rotation() {
      return this._cam.rotation();
    }
  }, {
    key: 'center',
    value: function center() {
      return this._cam.center();
    }
  }, {
    key: 'get',
    value: function get$$1(name) {
      for (var i = 0; i < this._objects.length; ++i) {
        if (this._objects[i].name() === name) {
          return this._objects[i];
        }
      }
      console.error('could not find object with name', name);
      return null;
    }
  }, {
    key: 'hide',
    value: function hide(glob) {
      this.forEach(glob, function (obj) {
        obj.hide();
      });
    }
  }, {
    key: 'show',
    value: function show(glob) {
      this.forEach(glob, function (obj) {
        obj.show();
      });
    }

    // remove all objects whose names match the provided glob pattern from
    // the viewer.

  }, {
    key: 'rm',
    value: function rm(glob) {
      var newObjects = [];
      var regex = this._globToRegex(glob);
      for (var i = 0; i < this._objects.length; ++i) {
        var obj = this._objects[i];
        if (!regex.test(obj.name())) {
          newObjects.push(obj);
        } else {
          obj.destroy();
        }
      }
      this._objects = newObjects;
    }
  }, {
    key: 'all',
    value: function all() {
      return this._objects;
    }
  }, {
    key: 'isWebGLSupported',
    value: function isWebGLSupported$$1() {
      return this._canvas.isWebGLSupported();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.clear();
      this._canvas.destroy();
      this._canvas = null;
    }
  }]);
  return Viewer;
}();

Viewer.RENDER_MODES = ['sline', 'lines', 'trace', 'lineTrace', 'cartoon', 'tube', 'spheres', 'ballsAndSticks', 'points'];
function optValue(opts, name, defaultValue) {
  if (name in opts) {
    return opts[name];
  }
  return defaultValue;
}

// a list of rotation/translation operators to be applied to certain chains,
// typically of the asymmetric unit.

var SymGenerator = function () {
  function SymGenerator(chains, matrices) {
    classCallCheck(this, SymGenerator);

    this._chains = chains || [];
    this._matrices = matrices || [];
  }

  createClass(SymGenerator, [{
    key: "addChain",
    value: function addChain(name) {
      this._chains.push(name);
    }
  }, {
    key: "chains",
    value: function chains() {
      return this._chains;
    }
  }, {
    key: "addMatrix",
    value: function addMatrix(matrix) {
      this._matrices.push(matrix);
    }
  }, {
    key: "matrices",
    value: function matrices() {
      return this._matrices;
    }
  }, {
    key: "matrix",
    value: function matrix(index) {
      return this._matrices[index];
    }
  }]);
  return SymGenerator;
}();

// contains the definition for how to construct a biological assembly from
// an asymmetric unit. Essentially a list of rotation/translation operators
// to be applied to chains of the asymmetric unit.
var Assembly = function () {
  function Assembly(name) {
    classCallCheck(this, Assembly);

    this._name = name;
    this._generators = [];
  }

  createClass(Assembly, [{
    key: "name",
    value: function name() {
      return this._name;
    }
  }, {
    key: "generators",
    value: function generators() {
      return this._generators;
    }
  }, {
    key: "generator",
    value: function generator(index) {
      return this._generators[index];
    }
  }, {
    key: "addGenerator",
    value: function addGenerator(gen) {
      this._generators.push(gen);
    }
  }]);
  return Assembly;
}();

var AtomBase = function () {
  function AtomBase() {
    classCallCheck(this, AtomBase);
  }

  createClass(AtomBase, [{
    key: 'bondCount',
    value: function bondCount() {
      return this.bonds().length;
    }
  }, {
    key: 'eachBond',
    value: function eachBond(callback) {
      var bonds = this.bonds();
      for (var i = 0, e = bonds.length; i < e; ++i) {
        callback(bonds[i]);
      }
    }
  }, {
    key: 'isConnectedTo',
    value: function isConnectedTo(otherAtom) {
      if (otherAtom === null) {
        return false;
      }
      var other = otherAtom.full();
      var me = this.full();
      var bonds = this.bonds();
      for (var i = 0, e = bonds.length; i < e; ++i) {
        var bond = bonds[i];
        if (bond.atom_one() === me && bond.atom_two() === other || bond.atom_one() === other && bond.atom_two() === me) {
          return true;
        }
      }
      return false;
    }
  }]);
  return AtomBase;
}();

var Atom = function (_AtomBase) {
  inherits(Atom, _AtomBase);

  function Atom(residue, name, pos, element, index, isHetatm, occupancy, tempFactor, serial) {
    classCallCheck(this, Atom);

    var _this = possibleConstructorReturn(this, (Atom.__proto__ || Object.getPrototypeOf(Atom)).call(this, residue, name, pos, element, index, isHetatm, occupancy, tempFactor, serial));

    _this._properties = {};
    _this._residue = residue;
    _this._bonds = [];
    _this._isHetatm = Boolean(isHetatm);
    _this._name = name;
    _this._pos = pos;
    _this._index = index;
    _this._element = element;
    _this._occupancy = occupancy !== undefined ? occupancy : null;
    _this._tempFactor = tempFactor !== undefined ? tempFactor : null;
    _this._serial = serial | 0;
    return _this;
  }

  createClass(Atom, [{
    key: 'addBond',
    value: function addBond(bond) {
      this._bonds.push(bond);
    }
  }, {
    key: 'name',
    value: function name() {
      return this._name;
    }
  }, {
    key: 'bonds',
    value: function bonds() {
      return this._bonds;
    }
  }, {
    key: 'residue',
    value: function residue() {
      return this._residue;
    }
  }, {
    key: 'structure',
    value: function structure() {
      return this._residue.structure();
    }
  }, {
    key: 'full',
    value: function full() {
      return this;
    }
  }, {
    key: 'qualifiedName',
    value: function qualifiedName() {
      return this.residue().qualifiedName() + '.' + this.name();
    }
  }, {
    key: 'pos',
    value: function pos() {
      return this._pos;
    }
  }, {
    key: 'setPos',
    value: function setPos(pos) {
      copy$5(this._pos, pos);
    }
  }, {
    key: 'element',
    value: function element() {
      return this._element;
    }
  }, {
    key: 'index',
    value: function index() {
      return this._index;
    }
  }, {
    key: 'occupancy',
    value: function occupancy() {
      return this._occupancy;
    }
  }, {
    key: 'tempFactor',
    value: function tempFactor() {
      return this._tempFactor;
    }
  }, {
    key: 'serial',
    value: function serial() {
      return this._serial;
    }
  }, {
    key: 'isHetatm',
    value: function isHetatm() {
      return this._isHetatm;
    }
  }, {
    key: 'prop',
    value: function prop(propName) {
      var fn = this[propName];
      if (fn !== undefined) {
        return fn.call(this);
      }
      var property = this._properties[propName];
      return property === undefined ? 0 : property;
    }
  }, {
    key: 'setProp',
    value: function setProp(propName, value) {
      this._properties[propName] = value;
    }
  }]);
  return Atom;
}(AtomBase);

var AtomView = function (_AtomBase2) {
  inherits(AtomView, _AtomBase2);

  function AtomView(resView, atom) {
    classCallCheck(this, AtomView);

    var _this2 = possibleConstructorReturn(this, (AtomView.__proto__ || Object.getPrototypeOf(AtomView)).call(this, resView, atom));

    _this2._resView = resView;
    _this2._atom = atom;
    _this2._bonds = [];
    return _this2;
  }

  createClass(AtomView, [{
    key: 'full',
    value: function full() {
      return this._atom;
    }
  }, {
    key: 'name',
    value: function name() {
      return this._atom.name();
    }
  }, {
    key: 'pos',
    value: function pos() {
      return this._atom.pos();
    }
  }, {
    key: 'element',
    value: function element() {
      return this._atom.element();
    }
  }, {
    key: 'residue',
    value: function residue() {
      return this._resView;
    }
  }, {
    key: 'bonds',
    value: function bonds() {
      return this._atom.bonds();
    }
  }, {
    key: 'index',
    value: function index() {
      return this._atom.index();
    }
  }, {
    key: 'occupancy',
    value: function occupancy() {
      return this._atom.occupancy();
    }
  }, {
    key: 'tempFactor',
    value: function tempFactor() {
      return this._atom.tempFactor();
    }
  }, {
    key: 'serial',
    value: function serial() {
      return this._atom.serial();
    }
  }, {
    key: 'qualifiedName',
    value: function qualifiedName() {
      return this._atom.qualifiedName();
    }
  }, {
    key: 'isHetatm',
    value: function isHetatm() {
      return this._atom.isHetatm();
    }
  }, {
    key: 'prop',
    value: function prop(propName) {
      return this._atom.prop(propName);
    }
  }, {
    key: 'setProp',
    value: function setProp(propName, value) {
      this._atom.setProp(propName, value);
    }
  }]);
  return AtomView;
}(AtomBase);

var ResidueBase = function () {
  function ResidueBase() {
    classCallCheck(this, ResidueBase);
  }

  createClass(ResidueBase, [{
    key: 'isWater',
    value: function isWater() {
      return this.name() === 'HOH' || this.name() === 'DOD';
    }
  }, {
    key: 'eachAtom',
    value: function eachAtom(callback, index) {
      index |= 0;
      for (var i = 0; i < this._atoms.length; i += 1) {
        if (callback(this._atoms[i], index) === false) {
          return false;
        }
        index += 1;
      }
      return index;
    }
  }, {
    key: 'qualifiedName',
    value: function qualifiedName() {
      var name = this.chain().name() + '.' + this.name() + this.num();
      if (this.insCode() === '\0') {
        return name;
      }
      return name + this.insCode();
    }
  }, {
    key: 'atom',
    value: function atom(index_or_name) {
      if (typeof index_or_name === 'string') {
        for (var i = 0; i < this._atoms.length; ++i) {
          if (this._atoms[i].name() === index_or_name) {
            return this._atoms[i];
          }
        }
        return null;
      }
      if (index_or_name >= this._atoms.length || index_or_name < 0) {
        return null;
      }
      return this._atoms[index_or_name];
    }

    // CA for amino acids, P for nucleotides, nucleosides

  }, {
    key: 'centralAtom',
    value: function centralAtom() {
      if (this.isAminoacid()) {
        return this.atom('CA');
      }
      if (this.isNucleotide()) {
        return this.atom('C3\'');
      }
      return null;
    }
  }, {
    key: 'center',
    value: function center() {
      var count = 0;
      var c = create$5();
      this.eachAtom(function (atom) {
        add$5(c, c, atom.pos());
        count += 1;
      });
      if (count > 0) {
        scale$5(c, c, 1.0 / count);
      }
      return c;
    }
  }, {
    key: 'isAminoacid',
    value: function isAminoacid() {
      return this._isAminoacid;
    }
  }, {
    key: 'isNucleotide',
    value: function isNucleotide() {
      return this._isNucleotide;
    }
  }]);
  return ResidueBase;
}();

var Residue = function (_ResidueBase) {
  inherits(Residue, _ResidueBase);

  function Residue(chain, name, num, insCode) {
    classCallCheck(this, Residue);

    var _this = possibleConstructorReturn(this, (Residue.__proto__ || Object.getPrototypeOf(Residue)).call(this, chain, name, num, insCode));

    _this._name = name;
    _this._num = num;
    _this._insCode = insCode;
    _this._atoms = [];
    _this._ss = 'C';
    _this._chain = chain;
    _this._isAminoacid = false;
    _this._isNucleotide = false;
    _this._index = chain.residues().length;
    _this._properties = {};
    return _this;
  }

  createClass(Residue, [{
    key: '_deduceType',
    value: function _deduceType() {
      this._isNucleotide = this.atom('P') !== null && this.atom('C3\'') !== null;
      this._isAminoacid = this.atom('N') !== null && this.atom('CA') !== null && this.atom('C') !== null && this.atom('O') !== null;
    }
  }, {
    key: 'name',
    value: function name() {
      return this._name;
    }
  }, {
    key: 'insCode',
    value: function insCode() {
      return this._insCode;
    }
  }, {
    key: 'num',
    value: function num() {
      return this._num;
    }
  }, {
    key: 'full',
    value: function full() {
      return this;
    }
  }, {
    key: 'addAtom',
    value: function addAtom(name, pos, element, isHetatm, occupancy, tempFactor, serial) {
      var atom = new Atom(this, name, pos, element, this.structure().nextAtomIndex(), isHetatm, occupancy, tempFactor, serial | 0);
      this._atoms.push(atom);
      return atom;
    }
  }, {
    key: 'ss',
    value: function ss() {
      return this._ss;
    }
  }, {
    key: 'setSS',
    value: function setSS(ss) {
      this._ss = ss;
    }
  }, {
    key: 'index',
    value: function index() {
      return this._index;
    }
  }, {
    key: 'atoms',
    value: function atoms() {
      return this._atoms;
    }
  }, {
    key: 'chain',
    value: function chain() {
      return this._chain;
    }
  }, {
    key: 'structure',
    value: function structure() {
      return this._chain.structure();
    }
  }, {
    key: 'prop',
    value: function prop(propName) {
      var fn = this[propName];
      if (fn !== undefined) {
        return fn.call(this);
      }
      var property = this._properties[propName];
      return property === undefined ? 0 : property;
    }
  }, {
    key: 'setProp',
    value: function setProp(propName, value) {
      this._properties[propName] = value;
    }
  }]);
  return Residue;
}(ResidueBase);

var ResidueView = function (_ResidueBase2) {
  inherits(ResidueView, _ResidueBase2);

  function ResidueView(chainView, residue) {
    classCallCheck(this, ResidueView);

    var _this2 = possibleConstructorReturn(this, (ResidueView.__proto__ || Object.getPrototypeOf(ResidueView)).call(this, chainView, residue));

    _this2._chainView = chainView;
    _this2._atoms = [];
    _this2._residue = residue;
    return _this2;
  }

  createClass(ResidueView, [{
    key: 'addAtom',
    value: function addAtom(atom, checkDuplicates) {
      if (checkDuplicates) {
        for (var i = 0; i < this._atoms.length; ++i) {
          var ai = this._atoms[i];
          if (ai.index() === atom.index()) {
            return ai;
          }
        }
      }
      var atomView = new AtomView(this, atom.full());
      this._atoms.push(atomView);
      return atomView;
    }
  }, {
    key: 'removeAtom',
    value: function removeAtom(atom) {
      var lengthBefore = this._atoms.length;
      this._atoms = this._atoms.filter(function (a) {
        return a.index() !== atom.index();
      });
      return lengthBefore !== this._atoms.length;
    }
  }, {
    key: 'full',
    value: function full() {
      return this._residue;
    }
  }, {
    key: 'num',
    value: function num() {
      return this._residue.num();
    }
  }, {
    key: 'insCode',
    value: function insCode() {
      return this._residue.insCode();
    }
  }, {
    key: 'ss',
    value: function ss() {
      return this._residue.ss();
    }
  }, {
    key: 'index',
    value: function index() {
      return this._residue.index();
    }
  }, {
    key: 'chain',
    value: function chain() {
      return this._chainView;
    }
  }, {
    key: 'name',
    value: function name() {
      return this._residue.name();
    }
  }, {
    key: 'atoms',
    value: function atoms() {
      return this._atoms;
    }
  }, {
    key: 'qualifiedName',
    value: function qualifiedName() {
      return this._residue.qualifiedName();
    }
  }, {
    key: 'containsResidue',
    value: function containsResidue(residue) {
      return this._residue.full() === residue.full();
    }
  }, {
    key: 'isAminoacid',
    value: function isAminoacid() {
      return this._residue.isAminoacid();
    }
  }, {
    key: 'isNucleotide',
    value: function isNucleotide() {
      return this._residue.isNucleotide();
    }
  }, {
    key: 'isWater',
    value: function isWater() {
      return this._residue.isWater();
    }
  }, {
    key: 'prop',
    value: function prop(propName) {
      return this._residue.prop(propName);
    }
  }, {
    key: 'setProp',
    value: function setProp(propName, value) {
      this._residue.setProp(propName, value);
    }
  }]);
  return ResidueView;
}(ResidueBase);

var BackboneTrace = function () {
  function BackboneTrace() {
    classCallCheck(this, BackboneTrace);

    this._trace = [];
  }

  createClass(BackboneTrace, [{
    key: 'push',
    value: function push(residue) {
      this._trace.push(residue);
    }
  }, {
    key: 'length',
    value: function length() {
      return this._trace.length;
    }
  }, {
    key: 'residueAt',
    value: function residueAt(index) {
      return this._trace[index];
    }
  }, {
    key: 'posAt',
    value: function posAt(out, index) {
      copy$5(out, this._trace[index].centralAtom().pos());
      return out;
    }

    // nothing needs to be done for the backbone trace.

  }, {
    key: 'smoothPosAt',
    value: function smoothPosAt(out, index) {
      return this.posAt(out, index);
    }
  }, {
    key: 'normalAt',
    value: function normalAt(out, index) {
      var residue = this._trace[index];
      if (residue.isAminoacid()) {
        subtract$4(out, residue.atom('O').pos(), residue.atom('C').pos());
      }
      normalize$1(out, out);
      return out;
    }
  }, {
    key: 'smoothNormalAt',
    value: function smoothNormalAt(out, index) {
      return this.normalAt(out, index);
    }
  }, {
    key: 'centralAtomAt',
    value: function centralAtomAt(index) {
      return this._trace[index].centralAtom();
    }
  }, {
    key: 'tangentAt',
    value: function tangentAt(out, index) {
      var posBefore = create$5();
      var posAfter = create$5();
      if (index > 0) {
        this.posAt(posBefore, index - 1);
      } else {
        this.posAt(posBefore, index);
      }
      if (index < this._trace.length - 1) {
        this.posAt(posAfter, index + 1);
      } else {
        this.posAt(posAfter, index);
      }
      subtract$4(out, posAfter, posBefore);
    }
  }, {
    key: 'fullTraceIndex',
    value: function fullTraceIndex(index) {
      return index;
    }
  }, {
    key: 'residues',
    value: function residues() {
      return this._trace;
    }
  }, {
    key: 'subsets',
    value: function subsets(residues) {
      // we assume that the residue list is ordered from N- to C-
      // terminus and we can traverse it in one go.
      var fullTraceIdx = 0;
      var listIdx = 0;
      var subsets = [];
      while (listIdx < residues.length && fullTraceIdx < this._trace.length) {
        // increase pointer until the residue indices match.
        var residueIndex = residues[listIdx].full().index();
        while (this._trace.length > fullTraceIdx && this._trace[fullTraceIdx].index() < residueIndex) {
          ++fullTraceIdx;
        }
        if (fullTraceIdx >= this._trace.length) {
          break;
        }
        var traceIndex = this._trace[fullTraceIdx].index();
        while (residues.length > listIdx && residues[listIdx].full().index() < traceIndex) {
          ++listIdx;
        }
        if (listIdx >= residues.length) {
          break;
        }
        var fullTraceBegin = fullTraceIdx;
        while (residues.length > listIdx && this._trace.length > fullTraceIdx && residues[listIdx].full().index() === this._trace[fullTraceIdx].index()) {
          ++listIdx;
          ++fullTraceIdx;
        }
        var fullTraceEnd = fullTraceIdx;
        subsets.push(new TraceSubset(this, fullTraceBegin, fullTraceEnd));
      }

      return subsets;
    }
  }]);
  return BackboneTrace;
}();

// a trace subset, e.g. the part of a trace contained in a view. End regions
// are handled automatically depending on whether the beginning/end of the
// trace subset coincides with the C- and N-terminus of the full trace.
var TraceSubset = function () {
  function TraceSubset(fullTrace, fullTraceBegin, fullTraceEnd) {
    classCallCheck(this, TraceSubset);

    this._fullTrace = fullTrace;
    this._fullTraceBegin = fullTraceBegin;
    this._fullTraceEnd = fullTraceEnd;
    this._isNTerminal = this._fullTraceBegin === 0;
    this._isCTerminal = this._fullTrace.length() === this._fullTraceEnd;
    var length = this._fullTraceEnd - this._fullTraceBegin;
    if (!this._isCTerminal) {
      ++length;
    }
    if (!this._isNTerminal) {
      ++length;
      this._fullTraceBegin -= 1;
    }
    this._length = length;
  }

  createClass(TraceSubset, [{
    key: 'length',
    value: function length() {
      return this._length;
    }
  }, {
    key: 'residueAt',
    value: function residueAt(index) {
      return this._fullTrace.residueAt(this._fullTraceBegin + index);
    }
  }, {
    key: 'residues',
    value: function residues() {
      var residues = [];
      for (var i = 0; i < this._length; ++i) {
        residues.push(this.residueAt(i));
      }
      return residues;
    }
  }, {
    key: '_interpolate',
    value: function _interpolate(out, indexOne, indexTwo, strength) {
      var tangentOne = create$5();
      var tangentTwo = create$5();
      this.tangentAt(tangentOne, indexOne);
      this.tangentAt(tangentTwo, indexTwo);
      scale$5(tangentOne, tangentOne, strength);
      scale$5(tangentTwo, tangentTwo, strength);
      cubicHermiteInterpolate(out, this.centralAtomAt(indexOne).pos(), tangentOne, this.centralAtomAt(indexTwo).pos(), tangentTwo, 0.5, 0);
      return out;
    }

    // like posAt, but interpolates the position for the ends with a Catmull-Rom
    // spline.

  }, {
    key: 'smoothPosAt',
    value: function smoothPosAt(out, index, strength) {
      if (index === 0 && !this._isNTerminal) {
        return this._interpolate(out, index, index + 1, strength);
      }
      if (index === this._length - 1 && !this._isCTerminal) {
        return this._interpolate(out, index - 1, index, strength);
      }
      var atom = this.centralAtomAt(index);
      copy$5(out, atom.pos());
      return out;
    }
  }, {
    key: 'smoothNormalAt',
    value: function smoothNormalAt(out, index) {
      this._fullTrace.normalAt(out, index + this._fullTraceBegin);
      return out;
    }
  }, {
    key: 'posAt',
    value: function posAt(out, index) {
      var atom = this.centralAtomAt(index);
      var atom2 = null;
      copy$5(out, atom.pos());
      if (index === 0 && !this._isNTerminal) {
        atom2 = this.centralAtomAt(index + 1);
        add$5(out, out, atom2.pos());
        scale$5(out, out, 0.5);
      }
      if (index === this._length - 1 && !this._isCTerminal) {
        atom2 = this.centralAtomAt(index - 1);
        add$5(out, out, atom2.pos());
        scale$5(out, out, 0.5);
      }
      return out;
    }
  }, {
    key: 'centralAtomAt',
    value: function centralAtomAt(index) {
      return this.residueAt(index).centralAtom();
    }
  }, {
    key: 'fullTraceIndex',
    value: function fullTraceIndex(index) {
      return this._fullTraceBegin + index;
    }
  }, {
    key: 'tangentAt',
    value: function tangentAt(out, index) {
      return this._fullTrace.tangentAt(out, index + this._fullTraceBegin);
    }
  }]);
  return TraceSubset;
}();

// combines the numeric part of the residue number with the insertion
// code and returns a single number. Note that this is completely safe
// and we do not have to worry about overflows, as for PDB files the
// range of permitted residue numbers is quite limited anyway.
function rnumInsCodeHash(num, insCode) {
  return num << 8 | insCode.charCodeAt(0);
}

function rnumComp(lhs, rhs) {
  return lhs.num() < rhs.num();
}

function numify(val) {
  return { num: function num() {
      return val;
    } };
}

var ChainBase = function () {
  function ChainBase() {
    classCallCheck(this, ChainBase);
  }

  createClass(ChainBase, [{
    key: 'eachAtom',
    value: function eachAtom(callback, index) {
      index |= 0;
      for (var i = 0; i < this._residues.length; i += 1) {
        index = this._residues[i].eachAtom(callback, index);
        if (index === false) {
          return false;
        }
      }
      return index;
    }
  }, {
    key: 'atomCount',
    value: function atomCount() {
      var count = 0;
      var residues = this.residues();
      for (var ri = 0; ri < residues.length; ++ri) {
        count += residues[ri].atoms().length;
      }
      return count;
    }
  }, {
    key: 'eachResidue',
    value: function eachResidue(callback) {
      for (var i = 0; i < this._residues.length; i += 1) {
        if (callback(this._residues[i]) === false) {
          return false;
        }
      }
    }
  }, {
    key: 'residues',
    value: function residues() {
      return this._residues;
    }
  }, {
    key: 'structure',
    value: function structure() {
      return this._structure;
    }
  }, {
    key: 'asView',
    value: function asView() {
      var view = this.structure().createEmptyView();
      view.addChain(this, true);
      return view;
    }
  }, {
    key: 'residueByRnum',
    value: function residueByRnum(rnum) {
      var residues = this.residues();
      if (this._rnumsOrdered) {
        var index = binarySearch(residues, numify(rnum), rnumComp);
        if (index === -1) {
          return null;
        }
        return residues[index];
      } else {
        for (var i = 0; i < residues.length; ++i) {
          if (residues[i].num() === rnum) {
            return residues[i];
          }
        }
        return null;
      }
    }
  }, {
    key: 'residuesInRnumRange',
    value: function residuesInRnumRange(start, end) {
      // FIXME: this currently only works with the numeric part, insertion
      // codes are not honoured.
      var matching = [];
      var i;
      var e;
      var residues = this.residues();
      if (this._rnumsOrdered === true) {
        // binary search our way to heaven
        var startIdx = indexFirstLargerEqualThan(residues, numify(start), rnumComp);
        if (startIdx === -1) {
          return matching;
        }
        var endIdx = indexLastSmallerEqualThan(residues, numify(end), rnumComp);
        if (endIdx === -1) {
          return matching;
        }
        for (i = startIdx; i <= endIdx; ++i) {
          matching.push(this._residues[i]);
        }
      } else {
        for (i = 0, e = residues.length; i !== e; ++i) {
          var res = residues[i];
          if (res.num() >= start && res.num() <= end) {
            matching.push(res);
          }
        }
      }
      return matching;
    }
  }, {
    key: 'prop',
    value: function prop(propName) {
      return this[propName]();
    }
  }]);
  return ChainBase;
}();

var Chain = function (_ChainBase) {
  inherits(Chain, _ChainBase);

  function Chain(structure, name) {
    classCallCheck(this, Chain);

    var _this = possibleConstructorReturn(this, (Chain.__proto__ || Object.getPrototypeOf(Chain)).call(this, structure, name));

    _this._structure = structure;
    _this._name = name;
    _this._cachedTraces = [];
    _this._residues = [];
    _this._rnumsOrdered = true;
    return _this;
  }

  createClass(Chain, [{
    key: 'name',
    value: function name() {
      return this._name;
    }
  }, {
    key: 'full',
    value: function full() {
      return this;
    }
  }, {
    key: 'addResidue',
    value: function addResidue(name, num, insCode) {
      insCode = insCode || '\0';
      var residue = new Residue(this, name, num, insCode);
      this._rnumsOrdered = checkRnumsOrdered(this._residues, this._rnumsOrdered, residue);
      this._residues.push(residue);
      return residue;
    }

    // assigns secondary structure to residues in range from_num to to_num.

  }, {
    key: 'assignSS',
    value: function assignSS(fromNumAndIns, toNumAndIns, ss) {
      // FIXME: when the chain numbers are completely ordered, perform binary
      // search to identify range of residues to assign secondary structure to.
      var from = rnumInsCodeHash(fromNumAndIns[0], fromNumAndIns[1]);
      var to = rnumInsCodeHash(toNumAndIns[0], toNumAndIns[1]);
      for (var i = 1; i < this._residues.length - 1; ++i) {
        var res = this._residues[i];
        // FIXME: we currently don't set the secondary structure of the last
        // residue of helices and sheets. that takes care of better transitions
        // between coils and helices. ideally, this should be done in the
        // cartoon renderer, NOT in this function.
        var combined = rnumInsCodeHash(res.num(), res.insCode());
        if (combined < from || combined >= to) {
          continue;
        }
        res.setSS(ss);
      }
    }

    // invokes a callback for each connected stretch of amino acids. these
    // stretches are used for all trace-based rendering styles, e.g. sline,
    // line_trace, tube, cartoon etc.

  }, {
    key: 'eachBackboneTrace',
    value: function eachBackboneTrace(callback) {
      this._cacheBackboneTraces();
      for (var i = 0; i < this._cachedTraces.length; ++i) {
        callback(this._cachedTraces[i]);
      }
    }
  }, {
    key: '_cacheBackboneTraces',
    value: function _cacheBackboneTraces() {
      if (this._cachedTraces.length > 0) {
        return;
      }
      var stretch = new BackboneTrace();
      // true when the stretch consists of amino acid residues, false
      // if the stretch consists of nucleotides, null otherwise.
      var aaStretch = null;
      for (var i = 0; i < this._residues.length; i += 1) {
        var residue = this._residues[i];
        var isAminoacid = residue.isAminoacid();
        var isNucleotide = residue.isNucleotide();
        if (aaStretch === true && !isAminoacid || aaStretch === false && !isNucleotide || aaStretch === null && !isNucleotide && !isAminoacid) {
          // a break in the trace: push stretch if there were enough residues
          // in it and create new backbone trace.
          addNonEmptyTrace(this._cachedTraces, stretch);
          aaStretch = null;
          stretch = new BackboneTrace();
          continue;
        }
        if (stretch.length() === 0) {
          stretch.push(residue);
          aaStretch = residue.isAminoacid();
          continue;
        }
        var prevResidue = this._residues[i - 1];
        if (shouldIntroduceTraceBreak(aaStretch, prevResidue, residue)) {
          addNonEmptyTrace(this._cachedTraces, stretch);
          stretch = new BackboneTrace();
        }
        stretch.push(residue);
      }
      addNonEmptyTrace(this._cachedTraces, stretch);
    }

    // returns all connected stretches of amino acids found in this chain as
    // a list.

  }, {
    key: 'backboneTraces',
    value: function backboneTraces() {
      var traces = [];
      this.eachBackboneTrace(function (trace) {
        traces.push(trace);
      });
      return traces;
    }
  }]);
  return Chain;
}(ChainBase);

// helper function to determine whether a trace break should be introduced
// between two residues of the same type (amino acid, or nucleotides).
//
// aaStretch: indicates whether the residues are to be treated as amino
// acids
function shouldIntroduceTraceBreak(aaStretch, prevResidue, thisResidue) {
  // these checks are on purpose more relaxed than the checks we use in
  // deriveConnectivity(). We don't really care about correctness of bond
  // lengths here. The only thing that matters is that the residues are
  // more or less close so that they could potentially be connected.
  var prevAtom;
  var thisAtom;

  if (aaStretch) {
    prevAtom = prevResidue.atom('C');
    thisAtom = thisResidue.atom('N');
  } else {
    prevAtom = prevResidue.atom('O3\'');
    thisAtom = thisResidue.atom('P');
  }

  // in case there is a bond, we don't introduce a chain break
  if (prevAtom.isConnectedTo(thisAtom)) {
    return false;
  }
  var sqrDist = squaredDistance(prevAtom.pos(), thisAtom.pos());
  return Math.abs(sqrDist - 1.5 * 1.5) > 1;
}

function addNonEmptyTrace(traces, trace) {
  if (trace.length() < 2) {
    return;
  }
  traces.push(trace);
}

function checkRnumsOrdered(residues, orderedFlag, newResidue) {
  if (residues.length === 0) {
    return true;
  }
  if (!orderedFlag) {
    return false;
  }
  var combinedRNum = rnumInsCodeHash(newResidue.num(), newResidue.insCode());
  var last = residues[residues.length - 1];
  var lastCombinedRNum = rnumInsCodeHash(last.num(), last.insCode());
  return lastCombinedRNum < combinedRNum;
}

var ChainView = function (_ChainBase2) {
  inherits(ChainView, _ChainBase2);

  function ChainView(molView, chain) {
    classCallCheck(this, ChainView);

    var _this2 = possibleConstructorReturn(this, (ChainView.__proto__ || Object.getPrototypeOf(ChainView)).call(this, molView, chain));

    _this2._chain = chain;
    _this2._residues = [];
    _this2._molView = molView;
    _this2._residueMap = {};
    _this2._rnumsOrdered = true;
    return _this2;
  }

  createClass(ChainView, [{
    key: 'addResidue',
    value: function addResidue(residue, recurse) {
      var resView = new ResidueView(this, residue.full());
      this._rnumsOrdered = checkRnumsOrdered(this._residues, this._rnumsOrdered, residue);
      this._residues.push(resView);
      this._residueMap[residue.full().index()] = resView;
      if (recurse) {
        var atoms = residue.atoms();
        for (var i = 0; i < atoms.length; ++i) {
          resView.addAtom(atoms[i].full(), false);
        }
      }
      return resView;
    }
  }, {
    key: 'addAtom',
    value: function addAtom(atom) {
      var resView = this._residueMap[atom.residue().full().index()];
      if (resView === undefined) {
        resView = this.addResidue(atom.residue());
      }
      return resView.addAtom(atom, true);
    }
  }, {
    key: 'removeAtom',
    value: function removeAtom(atom, removeEmptyResidues) {
      var resView = this._residueMap[atom.residue().full().index()];
      if (resView === undefined) {
        return false;
      }
      var removed = resView.removeAtom(atom);
      if (removed && resView.atoms().length === 0 && removeEmptyResidues) {
        delete this._residueMap[atom.residue().full().index()];
        // FIXME: this is terribly slow.
        this._residues = this._residues.filter(function (r) {
          return r !== resView;
        });
      }
      return removed;
    }
  }, {
    key: 'containsResidue',
    value: function containsResidue(residue) {
      var resView = this._residueMap[residue.full().index()];
      if (resView === undefined) {
        return false;
      }
      return resView.full() === residue.full();
    }
  }, {
    key: 'eachBackboneTrace',
    value: function eachBackboneTrace(callback) {
      // backbone traces for the view must be based on the the full
      // traces for the following reasons:
      //  - we must be able to display subsets with one residue in length,
      //    when they are part of a larger trace.
      //  - when a trace residue is not at the end, e.g. the C-terminal or
      //    N-terminal end of the full trace, the trace residue starts
      //    midway between the residue and the previous, and ends midway
      //    between the residue and the next.
      //  - the tangents for the Catmull-Rom spline depend on the residues
      //    before and after. Thus, to get the same curvature for a
      //    trace subset, the residues before and after must be taken
      //    into account.
      var fullTraces = this._chain.backboneTraces();

      for (var i = 0; i < fullTraces.length; ++i) {
        var subsets = fullTraces[i].subsets(this._residues);
        for (var j = 0; j < subsets.length; ++j) {
          callback(subsets[j]);
        }
      }
    }
  }, {
    key: 'backboneTraces',
    value: function backboneTraces() {
      var traces = [];
      this.eachBackboneTrace(function (trace) {
        traces.push(trace);
      });

      return traces;
    }
  }, {
    key: 'full',
    value: function full() {
      return this._chain;
    }
  }, {
    key: 'name',
    value: function name() {
      return this._chain.name();
    }
  }, {
    key: 'structure',
    value: function structure() {
      return this._molView;
    }
  }]);
  return ChainView;
}(ChainBase);

function Bond(atom_a, atom_b) {
  var self = {
    atom_one: atom_a,
    atom_two: atom_b
  };

  return {
    atom_one: function atom_one() {
      return self.atom_one;
    },
    atom_two: function atom_two() {
      return self.atom_two;
    },


    // calculates the mid-point between the two atom positions
    mid_point: function mid_point() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : create$5();

      add$5(out, self.atom_one.pos(), self.atom_two.pos());
      scale$5(out, out, 0.5);

      return out;
    }
  };
}

// atom covalent radii by element derived from Cambrige Structural Database.
// Source: http://profmokeur.ca/chemistry/covalent_radii.htm
var ELEMENT_COVALENT_RADII = {
  H: 0.31,
  HE: 0.28,
  LI: 1.28,
  BE: 0.96,
  B: 0.84,
  C: 0.76,
  N: 0.71,
  O: 0.66,
  F: 0.57,
  NE: 0.58,
  NA: 1.66,
  MG: 1.41,
  AL: 1.21,
  SI: 1.11,
  P: 1.07,
  S: 1.05,
  CL: 1.02,
  AR: 1.06,
  K: 2.03,
  CA: 1.76,
  SC: 1.70,
  TI: 1.60,
  V: 1.53,
  CR: 1.39,
  MN: 1.39,
  FE: 1.32,
  CO: 1.26,
  NI: 1.24,
  CU: 1.32,
  ZN: 1.22,
  GA: 1.22,
  GE: 1.20,
  AS: 1.19,
  SE: 1.20,
  BR: 1.20,
  KR: 1.16,
  RB: 2.20,
  SR: 1.95,
  Y: 1.90,
  ZR: 1.75,
  NB: 1.64,
  MO: 1.54,
  TC: 1.47,
  RU: 1.46,
  RH: 1.42,
  PD: 1.39,
  AG: 1.45,
  CD: 1.44,
  IN: 1.42,
  SN: 1.39,
  SB: 1.39,
  TE: 1.38,
  I: 1.39,
  XE: 1.40,
  CS: 2.44,
  BA: 2.15,
  LA: 2.07,
  CE: 2.04,
  PR: 2.03,
  ND: 2.01,
  PM: 1.99,
  SM: 1.98,
  EU: 1.98,
  GD: 1.96,
  TB: 1.94,
  DY: 1.92,
  HO: 1.92,
  ER: 1.89,
  TM: 1.90,
  YB: 1.87,
  LU: 1.87,
  HF: 1.75,
  TA: 1.70,
  W: 1.62,
  RE: 1.51,
  OS: 1.44,
  IR: 1.41,
  PT: 1.36,
  AU: 1.36,
  HG: 1.32,
  TL: 1.45,
  PB: 1.46,
  BI: 1.48,
  PO: 1.40,
  AT: 1.50,
  RN: 1.50,
  FR: 2.60,
  RA: 2.21,
  AC: 2.15,
  TH: 2.06,
  PA: 2.00,
  U: 1.96,
  NP: 1.90,
  PU: 1.87,
  AM: 1.80,
  CM: 1.69
};

function covalentRadius(ele) {
  if (!ele) {
    return null;
  }

  var r = ELEMENT_COVALENT_RADII[ele.toUpperCase()];

  if (r) {
    return r;
  }

  return 1.5;
}

function connectPeptides(structure, left, right) {
  var cAtom = left.atom('C');
  var nAtom = right.atom('N');
  if (cAtom && nAtom) {
    var sqrDist = squaredDistance(cAtom.pos(), nAtom.pos());
    if (sqrDist < 1.6 * 1.6) {
      structure.connect(nAtom, cAtom);
    }
  }
}

function connectNucleotides(structure, left, right) {
  var o3Prime = left.atom('O3\'');
  var pAtom = right.atom('P');
  if (o3Prime && pAtom) {
    var sqrDist = squaredDistance(o3Prime.pos(), pAtom.pos());
    // FIXME: make sure 1.7 is a good threshold here...
    if (sqrDist < 1.7 * 1.7) {
      structure.connect(o3Prime, pAtom);
    }
  }
}

var MolBase = function () {
  function MolBase() {
    classCallCheck(this, MolBase);
  }

  createClass(MolBase, [{
    key: 'eachResidue',
    value: function eachResidue(callback) {
      for (var i = 0; i < this._chains.length; i += 1) {
        if (this._chains[i].eachResidue(callback) === false) {
          return false;
        }
      }
    }
  }, {
    key: 'eachAtom',
    value: function eachAtom(callback, index) {
      index |= 0;
      for (var i = 0; i < this._chains.length; i += 1) {
        index = this._chains[i].eachAtom(callback, index);
        if (index === false) {
          return false;
        }
      }
    }
  }, {
    key: 'residueCount',
    value: function residueCount() {
      var chains = this.chains();
      var count = 0;
      for (var ci = 0; ci < chains.length; ++ci) {
        count += chains[ci].residues().length;
      }
      return count;
    }
  }, {
    key: 'eachChain',
    value: function eachChain(callback) {
      var chains = this.chains();
      for (var i = 0; i < chains.length; ++i) {
        if (callback(chains[i]) === false) {
          return;
        }
      }
    }
  }, {
    key: 'atomCount',
    value: function atomCount() {
      var chains = this.chains();
      var count = 0;
      for (var ci = 0; ci < chains.length; ++ci) {
        count += chains[ci].atomCount();
      }
      return count;
    }
  }, {
    key: 'atoms',
    value: function atoms() {
      var atoms = [];
      this.eachAtom(function (atom) {
        atoms.push(atom);
      });
      return atoms;
    }
  }, {
    key: 'atom',
    value: function atom(name) {
      var parts = name.split('.');
      var chain = this.chain(parts[0]);
      if (chain === null) {
        return null;
      }
      var residue = chain.residueByRnum(parseInt(parts[1], 10));
      if (residue === null) {
        return null;
      }
      return residue.atom(parts[2]);
    }
  }, {
    key: 'center',
    value: function center() {
      var sum = create$5();
      var count = 0;
      this.eachAtom(function (atom) {
        add$5(sum, sum, atom.pos());
        count += 1;
      });
      if (count) {
        scale$5(sum, sum, 1 / count);
      }
      return sum;
    }

    // returns a sphere containing all atoms part of this structure. This will
    // not calculate the minimal bounding sphere, just a good-enough
    // approximation.

  }, {
    key: 'boundingSphere',
    value: function boundingSphere() {
      var center = this.center();
      var radiusSquare = 0.0;
      this.eachAtom(function (atom) {
        radiusSquare = Math.max(radiusSquare, squaredDistance(center, atom.pos()));
      });
      return new geom.Sphere(center, Math.sqrt(radiusSquare));
    }

    // returns all backbone traces of all chains of this structure

  }, {
    key: 'backboneTraces',
    value: function backboneTraces() {
      var chains = this.chains();
      var traces = [];
      for (var i = 0; i < chains.length; ++i) {
        Array.prototype.push.apply(traces, chains[i].backboneTraces());
      }
      return traces;
    }
  }, {
    key: 'select',
    value: function (_select) {
      function select(_x) {
        return _select.apply(this, arguments);
      }

      select.toString = function () {
        return _select.toString();
      };

      return select;
    }(function (what) {
      if (what === 'protein') {
        return this.residueSelect(function (r) {
          return r.isAminoacid();
        });
      }

      if (what === 'water') {
        return this.residueSelect(function (r) {
          return r.isWater();
        });
      }

      if (what === 'ligand') {
        return this.residueSelect(function (r) {
          return !r.isAminoacid() && !r.isWater();
        });
      }

      if (what === 'polymer') {
        return select.polymer(this, new MolView(this));
      }
      // when what is not one of the simple strings above, we assume what
      // is a dictionary containing predicates which have to be fulfilled.
      return select.dict(this, new MolView(this), what || {});
    })
  }, {
    key: 'residueSelect',
    value: function residueSelect(predicate) {
      console.time('Mol.residueSelect');
      var view = new MolView(this.full());
      for (var ci = 0; ci < this._chains.length; ++ci) {
        var chain = this._chains[ci];
        var chainView = null;
        var residues = chain.residues();
        for (var ri = 0; ri < residues.length; ++ri) {
          if (predicate(residues[ri])) {
            if (!chainView) {
              chainView = view.addChain(chain, false);
            }
            chainView.addResidue(residues[ri], true);
          }
        }
      }
      console.timeEnd('Mol.residueSelect');
      return view;
    }
  }, {
    key: 'atomSelect',
    value: function atomSelect(predicate) {
      console.time('Mol.atomSelect');
      var view = new MolView(this.full());
      for (var ci = 0; ci < this._chains.length; ++ci) {
        var chain = this._chains[ci];
        var chainView = null;
        var residues = chain.residues();
        for (var ri = 0; ri < residues.length; ++ri) {
          var residueView = null;
          var residue = residues[ri];
          var atoms = residue.atoms();
          for (var ai = 0; ai < atoms.length; ++ai) {
            if (!predicate(atoms[ai])) {
              continue;
            }
            if (!chainView) {
              chainView = view.addChain(chain, false);
            }
            if (!residueView) {
              residueView = chainView.addResidue(residue, false);
            }
            residueView.addAtom(atoms[ai]);
          }
        }
      }
      console.timeEnd('Mol.atomSelect');
      return view;
    }
  }, {
    key: 'assembly',
    value: function assembly(id) {
      var assemblies = this.assemblies();
      for (var i = 0; i < assemblies.length; ++i) {
        if (assemblies[i].name() === id) {
          return assemblies[i];
        }
      }
      return null;
    }
  }, {
    key: 'chainsByName',
    value: function chainsByName(chainNames) {
      // build a map to avoid O(n^2) behavior. That's overkill when the list
      // of names is short but should give better performance when requesting
      // multiple chains.
      var chainMap = {};
      var chains = this.chains();
      for (var i = 0; i < chains.length; ++i) {
        chainMap[chains[i].name()] = chains[i];
      }
      var filteredChains = [];
      for (var j = 0; j < chainNames.length; ++j) {
        var filteredChain = chainMap[chainNames[j]];
        if (filteredChain !== undefined) {
          filteredChains.push(filteredChain);
        }
      }
      return filteredChains;
    }
  }, {
    key: 'selectWithin',
    value: function selectWithin(mol, options) {
      console.time('Mol.selectWithin');
      var dist = create$5();
      options = options || {};
      var radius = options.radius || 4.0;
      var radiusSqr = radius * radius;
      var matchResidues = !!options.matchResidues;
      var targetAtoms = [];
      mol.eachAtom(function (a) {
        targetAtoms.push(a);
      });

      var view = new MolView(this.full());
      var addedRes = null,
          addedChain = null;
      var chains = this.chains();
      var skipResidue = false;
      for (var ci = 0; ci < chains.length; ++ci) {
        var residues = chains[ci].residues();
        addedChain = null;
        for (var ri = 0; ri < residues.length; ++ri) {
          addedRes = null;
          skipResidue = false;
          var atoms = residues[ri].atoms();
          for (var ai = 0; ai < atoms.length; ++ai) {
            if (skipResidue) {
              break;
            }
            for (var wi = 0; wi < targetAtoms.length; ++wi) {
              subtract$4(dist, atoms[ai].pos(), targetAtoms[wi].pos());
              if (squaredLength$1(dist) > radiusSqr) {
                continue;
              }
              if (!addedChain) {
                addedChain = view.addChain(chains[ci].full(), false);
              }
              if (!addedRes) {
                addedRes = addedChain.addResidue(residues[ri].full(), matchResidues);
              }
              if (matchResidues) {
                skipResidue = true;
                break;
              }
              addedRes.addAtom(atoms[ai].full());
              break;
            }
          }
        }
      }
      console.timeEnd('Mol.selectWithin');
      return view;
    }
  }, {
    key: 'createEmptyView',
    value: function createEmptyView() {
      return new MolView(this.full());
    }
  }]);
  return MolBase;
}();

var Mol = function (_MolBase) {
  inherits(Mol, _MolBase);

  function Mol() {
    classCallCheck(this, Mol);

    var _this = possibleConstructorReturn(this, (Mol.__proto__ || Object.getPrototypeOf(Mol)).call(this));

    _this._chains = [];
    _this._assemblies = [];
    _this._nextAtomIndex = 0;
    return _this;
  }

  createClass(Mol, [{
    key: 'addAssembly',
    value: function addAssembly(assembly) {
      this._assemblies.push(assembly);
    }
  }, {
    key: 'setAssemblies',
    value: function setAssemblies(assemblies) {
      this._assemblies = assemblies;
    }
  }, {
    key: 'assemblies',
    value: function assemblies() {
      return this._assemblies;
    }
  }, {
    key: 'chains',
    value: function chains() {
      return this._chains;
    }
  }, {
    key: 'full',
    value: function full() {
      return this;
    }
  }, {
    key: 'containsResidue',
    value: function containsResidue(residue) {
      return residue.full().structure() === this;
    }
  }, {
    key: 'chainByName',
    value: function chainByName(name) {
      for (var i = 0; i < this._chains.length; ++i) {
        if (this._chains[i].name() === name) {
          return this._chains[i];
        }
      }
      return null;
    }

    // for backwards compatibility

  }, {
    key: 'chain',
    value: function chain(name) {
      return this.chainByName(name);
    }
  }, {
    key: 'nextAtomIndex',
    value: function nextAtomIndex() {
      var nextIndex = this._nextAtomIndex;
      this._nextAtomIndex += 1;
      return nextIndex;
    }
  }, {
    key: 'addChain',
    value: function addChain(name) {
      var chain = new Chain(this, name);
      this._chains.push(chain);
      return chain;
    }
  }, {
    key: 'connect',
    value: function connect(atom_a, atom_b) {
      var bond = new Bond(atom_a, atom_b);
      atom_a.addBond(bond);
      atom_b.addBond(bond);
      return bond;
    }

    // determine connectivity structure. for simplicity only connects atoms of the
    // same residue, peptide bonds and nucleotides

  }, {
    key: 'deriveConnectivity',
    value: function deriveConnectivity() {
      console.time('Mol.deriveConnectivity');
      var thisStructure = this;
      var prevResidue = null;
      this.eachResidue(function (res) {
        var sqrDist;
        var atoms = res.atoms();
        var numAtoms = atoms.length;
        for (var i = 0; i < numAtoms; i += 1) {
          var atomI = atoms[i];
          var posI = atomI.pos();
          var covalentI = covalentRadius(atomI.element());
          for (var j = 0; j < i; j += 1) {
            var atomJ = atoms[j];
            var covalentJ = covalentRadius(atomJ.element());
            sqrDist = squaredDistance(posI, atomJ.pos());
            var lower = covalentI + covalentJ - 0.30;
            var upper = covalentI + covalentJ + 0.30;
            if (sqrDist < upper * upper && sqrDist > lower * lower) {
              thisStructure.connect(atomI, atomJ);
            }
          }
        }
        res._deduceType();
        if (prevResidue !== null) {
          if (res.isAminoacid() && prevResidue.isAminoacid()) {
            connectPeptides(thisStructure, prevResidue, res);
          }
          if (res.isNucleotide() && prevResidue.isNucleotide()) {
            connectNucleotides(thisStructure, prevResidue, res);
          }
        }
        prevResidue = res;
      });
      console.timeEnd('Mol.deriveConnectivity');
    }
  }]);
  return Mol;
}(MolBase);

var MolView = function (_MolBase2) {
  inherits(MolView, _MolBase2);

  function MolView(mol) {
    classCallCheck(this, MolView);

    var _this2 = possibleConstructorReturn(this, (MolView.__proto__ || Object.getPrototypeOf(MolView)).call(this, mol));

    _this2._mol = mol;
    _this2._chains = [];
    return _this2;
  }

  createClass(MolView, [{
    key: 'full',
    value: function full() {
      return this._mol;
    }
  }, {
    key: 'assemblies',
    value: function assemblies() {
      return this._mol.assemblies();
    }

    // add chain to view

  }, {
    key: 'addChain',
    value: function addChain(chain, recurse) {
      var chainView = new ChainView(this, chain.full());
      this._chains.push(chainView);
      if (recurse) {
        var residues = chain.residues();
        for (var i = 0; i < residues.length; ++i) {
          chainView.addResidue(residues[i], true);
        }
      }
      return chainView;
    }
  }, {
    key: 'addAtom',
    value: function addAtom(atom) {
      var chain = this.chain(atom.residue().chain().name());
      if (chain === null) {
        chain = this.addChain(atom.residue().chain());
      }
      return chain.addAtom(atom);
    }
  }, {
    key: 'removeAtom',
    value: function removeAtom(atom, removeEmptyResiduesAndChains) {
      if (atom === null) {
        return false;
      }
      var chain = this.chain(atom.residue().chain().name());
      if (chain === null) {
        return false;
      }
      var removed = chain.removeAtom(atom, removeEmptyResiduesAndChains);
      if (removed && chain.residues().length === 0) {
        this._chains = this._chains.filter(function (c) {
          return c !== chain;
        });
      }
      return removed;
    }
  }, {
    key: 'containsResidue',
    value: function containsResidue(residue) {
      if (!residue) {
        return false;
      }
      var chain = this.chain(residue.chain().name());
      if (!chain) {
        return false;
      }
      return chain.containsResidue(residue);
    }
  }, {
    key: 'addResidues',
    value: function addResidues(residues, recurse) {
      var that = this;
      var chainsViews = {};
      residues.forEach(function (residue) {
        var chainName = residue.chain().name();
        if (typeof chainsViews[chainName] === 'undefined') {
          chainsViews[chainName] = that.addChain(residue.chain(), false);
        }
        chainsViews[chainName].addResidue(residue, recurse);
      });
      return chainsViews;
    }
  }, {
    key: 'chains',
    value: function chains() {
      return this._chains;
    }
  }, {
    key: 'chain',
    value: function chain(name) {
      for (var i = 0; i < this._chains.length; ++i) {
        if (this._chains[i].name() === name) {
          return this._chains[i];
        }
      }
      return null;
    }
  }]);
  return MolView;
}(MolBase);

var Remark350Reader = function () {
  function Remark350Reader() {
    classCallCheck(this, Remark350Reader);

    this._assemblies = {};
    this._current = null;
  }

  createClass(Remark350Reader, [{
    key: 'assemblies',
    value: function assemblies() {
      var assemblies = [];
      for (var c in this._assemblies) {
        if (this._assemblies.hasOwnProperty(c)) {
          // We are sure that obj[key] belongs to the object and was not
          // inherited.
          assemblies.push(this._assemblies[c]);
        }
      }
      return assemblies;
    }
  }, {
    key: 'assembly',
    value: function assembly(id) {
      return this._assemblies[id];
    }
  }, {
    key: 'nextLine',
    value: function nextLine(line) {
      line = line.substr(11);
      if (line[0] === 'B' && line.substr(0, 12) === 'BIOMOLECULE:') {
        var name = line.substr(13).trim();
        this._currentAssembly = new Assembly(name);
        this._assemblies[name] = this._currentAssembly;
        return;
      }
      if (line.substr(0, 30) === 'APPLY THE FOLLOWING TO CHAINS:' || line.substr(0, 30) === '                   AND CHAINS:') {
        var chains = line.substr(30).split(',');
        if (line[0] === 'A') {
          this._currentSymGen = new SymGenerator();
          this._currentAssembly.addGenerator(this._currentSymGen);
        }
        this._currentMatrix = create$3();
        for (var i = 0; i < chains.length; ++i) {
          var trimmedChainName = chains[i].trim();
          if (trimmedChainName.length) {
            this._currentSymGen.addChain(trimmedChainName);
          }
        }
        return;
      }
      if (line.substr(0, 7) === '  BIOMT') {
        var col = parseInt(line[7], 10) - 1;
        var offset = 0;
        // for PDB files with 100 or more BIOMT matrices, the columns are
        // shifted to the right by one digit (see PDB entry 1m4x, for
        // example). The offset increases by one for every additional
        // digit.
        while (line[12 + offset] !== ' ') {
          offset += 1;
        }
        var x = parseFloat(line.substr(13 + offset, 9));
        var y = parseFloat(line.substr(23 + offset, 9));
        var z = parseFloat(line.substr(33 + offset, 9));
        var w = parseFloat(line.substr(43 + offset, 14));
        this._currentMatrix[4 * 0 + col] = x;
        this._currentMatrix[4 * 1 + col] = y;
        this._currentMatrix[4 * 2 + col] = z;
        this._currentMatrix[4 * 3 + col] = w;
        if (col === 2) {
          this._currentSymGen.addMatrix(this._currentMatrix);
          this._currentMatrix = create$3();
        }
        return;
      }
    }
  }]);
  return Remark350Reader;
}();
// Very simple heuristic to determine the element from the atom name.
// This at the very least assume that people have the decency to follow
// the standard naming conventions for atom names when they are too
// lazy to write down elements
var guessAtomElementFromName = function guessAtomElementFromName(fourLetterName) {
  if (fourLetterName[0] !== ' ') {
    var trimmed = fourLetterName.trim();
    if (trimmed.length === 4) {
      // look for first character in range A-Z or a-z and use that
      // for the element.
      var i = 0;
      var charCode = trimmed.charCodeAt(i);
      while (i < 4 && (charCode < 65 || charCode > 122 || charCode > 90 && charCode < 97)) {
        ++i;
        charCode = trimmed.charCodeAt(i);
      }
      return trimmed[i];
    }
    // when first character is not empty and length is smaller than 4,
    // assume that it's either a heavy atom (CA, etc), or a hydrogen
    // name with a numeric prefix.  That's not always correct, though.
    var firstCharCode = trimmed.charCodeAt(0);
    if (firstCharCode >= 48 && firstCharCode <= 57) {
      // numeric prefix, so it's a hydrogen
      return trimmed[1];
    }

    return trimmed.substr(0, 2);
  }

  return fourLetterName[1];
};

var PDBReader = function () {
  // these are used as the return value of processLine()
  function PDBReader() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, PDBReader);
    this.CONTINUE = 1;
    this.MODEL_COMPLETE = 2;
    this.FILE_END = 3;
    this.ERROR = 4;

    this._helices = [];
    this._sheets = [];
    this._conect = [];
    this._serialToAtomMap = {};
    this._rosettaMode = false;
    this._structure = new Mol();
    this._remark350Reader = new Remark350Reader();
    this._currChain = null;
    this._currRes = null;
    this._currAtom = null;
    this._options = {};
    this._options.conectRecords = Boolean(options.conectRecords);
  }

  createClass(PDBReader, [{
    key: 'parseHelixRecord',
    value: function parseHelixRecord(line) {
      var frstNum = parseInt(line.substr(21, 4), 10);
      var frstInsCode = line[25] === ' ' ? '\0' : line[25];
      var lastNum = parseInt(line.substr(33, 4), 10);
      var lastInsCode = line[37] === ' ' ? '\0' : line[37];
      var chainName = line[19];
      this._helices.push({
        first: [frstNum, frstInsCode],
        last: [lastNum, lastInsCode],
        chainName: chainName
      });
      return true;
    }
  }, {
    key: 'parseRosettaAnnotation',
    value: function parseRosettaAnnotation(line) {
      // FIXME: for now this only works when there is one chain,
      // since the Rosetta format does not include any chain identifier.
      if (line.length < 5) {
        return this.CONTINUE;
      }
      var ss = line[5];
      var resNum = parseInt(line.substr(0, 5).trim(), 10);
      if (isNaN(resNum)) {
        console.error('could not parse residue number');
        return this.ERROR;
      }
      var secStructure = 'C';
      if (ss === 'H' || ss === 'E') {
        secStructure = ss;
      }
      if (this._structure.chains().length !== 1) {
        console.warn('multiple chains are present. arbitrarily', 'assigning secondary structure to the last chain.');
      }
      // for now just use the first chain
      var res = this._currChain.residueByRnum(resNum);
      if (res === null) {
        console.warn('could not find residue', resNum, 'in last chain.', 'Skipping ROSETTA secondary structure annotation');
        return this.CONTINUE;
      }
      res.setSS(secStructure);
      return this.CONTINUE;
    }
  }, {
    key: 'parseSheetRecord',
    value: function parseSheetRecord(line) {
      var frstNum = parseInt(line.substr(22, 4), 10);
      var frstInsCode = line[26] === ' ' ? '\0' : line[26];
      var lastNum = parseInt(line.substr(33, 4), 10);
      var lastInsCode = line[37] === ' ' ? '\0' : line[37];
      var chainName = line[21];
      this._sheets.push({
        first: [frstNum, frstInsCode],
        last: [lastNum, lastInsCode],
        chainName: chainName
      });
      return true;
    }
  }, {
    key: 'parseAndAddAtom',
    value: function parseAndAddAtom(line) {
      var alt_loc = line[16];
      if (alt_loc !== ' ' && alt_loc !== 'A') {
        return true;
      }
      var isHetatm = line[0] === 'H';
      var chainName = line[21];
      var resName = line.substr(17, 3).trim();
      var fullAtomName = line.substr(12, 4);
      var atomName = fullAtomName.trim();
      var rnumNum = parseInt(line.substr(22, 4), 10);

      if (Number.isNaN(rnumNum)) {
        rnumNum = 1;
      }
      var insCode = line[26] === ' ' ? '\0' : line[26];
      var updateResidue = false;
      var updateChain = false;
      if (!this._currChain || this._currChain.name() !== chainName) {
        updateChain = true;
        updateResidue = true;
      }
      if (!this._currRes || this._currRes.num() !== rnumNum || this._currRes.insCode() !== insCode) {
        updateResidue = true;
      }
      if (updateChain) {
        // residues of one chain might appear interspersed with residues from
        // other chains.
        this._currChain = this._structure.chain(chainName) || this._structure.addChain(chainName);
      }
      if (updateResidue) {
        this._currRes = this._currChain.addResidue(resName, rnumNum, insCode);
      }
      var pos = create$5();
      for (var i = 0; i < 3; ++i) {
        pos[i] = parseFloat(line.substr(30 + i * 8, 8));
      }
      var element = line.substr(76, 2).trim();
      if (element === '') {
        element = guessAtomElementFromName(fullAtomName);
      }
      var occupancy = parseFloat(line.substr(54, 6).trim());
      var tempFactor = parseFloat(line.substr(60, 6).trim());
      var serial = parseInt(line.substr(6, 5).trim(), 10);
      var atom = this._currRes.addAtom(atomName, pos, element, isHetatm, isNaN(occupancy) ? null : occupancy, isNaN(tempFactor) ? null : tempFactor, serial);
      // in case parseConect records is set to true, store away the atom serial
      if (this._options.conectRecords) {
        this._serialToAtomMap[serial] = atom;
      }
      return true;
    }
  }, {
    key: 'parseConectRecord',
    value: function parseConectRecord(line) {
      var atomSerial = parseInt(line.substr(6, 5).trim(), 10);
      var bondPartnerIds = [];
      for (var i = 0; i < 4; ++i) {
        var partnerId = parseInt(line.substr(11 + i * 5, 6).trim(), 10);
        if (isNaN(partnerId)) {
          continue;
        }
        // bonds are listed twice, so to avoid duplicate bonds, only keep bonds
        // with the lower serials as the first atom.
        if (partnerId > atomSerial) {
          continue;
        }
        bondPartnerIds.push(partnerId);
      }
      this._conect.push({ from: atomSerial, to: bondPartnerIds });
      return true;
    }
  }, {
    key: 'processLine',
    value: function processLine(line) {
      var recordName = line.substr(0, 6);
      if (recordName === 'ATOM  ' || recordName === 'HETATM') {
        return this.parseAndAddAtom(line) ? this.CONTINUE : this.ERROR;
      }
      if (recordName === 'REMARK') {
        // for now we are only interested in the biological assembly information
        // contained in remark 350.
        var remarkNumber = line.substr(7, 3);
        if (remarkNumber === '350') {
          this._remark350Reader.nextLine(line);
        }
        return this.CONTINUE;
      }
      if (recordName === 'HELIX ') {
        return this.parseHelixRecord(line) ? this.CONTINUE : this.ERROR;
      }
      if (recordName === 'SHEET ') {
        return this.parseSheetRecord(line) ? this.CONTINUE : this.ERROR;
      }
      if (this._options.conectRecords && recordName === 'CONECT') {
        return this.parseConectRecord(line) ? this.CONTINUE : this.ERROR;
      }
      if (recordName === 'END   ') {
        return this.FILE_END;
      }
      if (recordName === 'ENDMDL') {
        return this.MODEL_COMPLETE;
      }
      if (line.substr(0, 9) === 'complete:') {
        this._rosettaMode = true;
        return this.CONTINUE;
      }
      if (this._rosettaMode) {
        if (line.trim().length === 0) {
          // as soon as we hit an empty line, don't treat what comes after
          // as ROSETTA annotation
          this._rosettaMode = false;
          return this.CONTINUE;
        }
        return this.parseRosettaAnnotation(line);
      }
      return this.CONTINUE;
    }

    // called after parsing to perform any work that requires the complete
    // structure to be present:
    // (a) assigns the secondary structure information found in the helix
    // sheet records, (b) derives connectivity and (c) assigns assembly
    // information.

  }, {
    key: 'finish',
    value: function finish() {
      // check if we have at least one atom, if not return null
      if (this._currChain === null) {
        return null;
      }
      var chain = null;
      var i;
      for (i = 0; i < this._sheets.length; ++i) {
        var sheet = this._sheets[i];
        chain = this._structure.chain(sheet.chainName);
        if (chain) {
          chain.assignSS(sheet.first, sheet.last, 'E');
        }
      }
      for (i = 0; i < this._helices.length; ++i) {
        var helix = this._helices[i];
        chain = this._structure.chain(helix.chainName);
        if (chain) {
          chain.assignSS(helix.first, helix.last, 'H');
        }
      }
      this._structure.setAssemblies(this._remark350Reader.assemblies());
      if (this._options.conectRecords) {
        this._assignBondsFromConectRecords(this._structure);
      }
      this._structure.deriveConnectivity();
      console.log('imported', this._structure.chains().length, 'chain(s),', this._structure.residueCount(), 'residue(s)');
      var result = this._structure;
      this._structure = new Mol();
      this._currChain = null;
      this._currRes = null;
      this._currAtom = null;
      this._rosettaMode = false;
      return result;
    }
  }, {
    key: '_assignBondsFromConectRecords',
    value: function _assignBondsFromConectRecords(structure) {
      for (var i = 0; i < this._conect.length; ++i) {
        var record = this._conect[i];
        var fromAtom = this._serialToAtomMap[record.from];
        for (var j = 0; j < record.to.length; ++j) {
          var toAtom = this._serialToAtomMap[record.to[j]];
          structure.connect(fromAtom, toAtom);
        }
      }
    }
  }]);
  return PDBReader;
}();

var getLines = function getLines(data) {
  return data.split(/\r\n|\r|\n/g);
};

// a truly minimalistic PDB parser. It will die as soon as the input is
// not well-formed. it only reads ATOM, HETATM, HELIX, SHEET and REMARK
// 350 records, everything else is ignored. in case of multi-model
// files, only the first model is read.
//
// FIXME: load PDB currently spends a substantial amount of time creating
// the vec3 instances for the atom positions. it's possible that it's
// cheaper to initialize a bulk buffer once and create buffer views to
// that data for each atom position. since the atom's lifetime is bound to
// the parent structure, the buffer could be managed on that level and
// released once the structure is deleted.
var pdb = function pdb(text, options) {
  console.time('pdb');
  var opts = options || {};
  var lines = getLines(text);
  var reader = new PDBReader(opts);
  var structures = [];
  // depending on whether the loadAllModels flag is set process all models
  // in the PDB file
  for (var i = 0; i < lines.length; i++) {
    var result = reader.processLine(lines[i]);
    if (result === reader.ERROR) {
      console.timeEnd('pdb');
      return null;
    }
    if (result === reader.CONTINUE) {
      continue;
    }
    var struct = reader.finish();
    if (struct !== null) {
      structures.push(struct);
    }
    if (result === reader.MODEL_COMPLETE && opts.loadAllModels) {
      continue;
    }
    break;
  }
  var structure = reader.finish();
  if (structure !== null) {
    structures.push(structure);
  }
  console.timeEnd('pdb');
  if (opts.loadAllModels) {
    return structures;
  }
  return structures[0];
};

var SDFReader = function () {
  function SDFReader() {
    classCallCheck(this, SDFReader);

    this._structure = new Mol();
    this._reset();
    this._sawEnd = false;
  }

  createClass(SDFReader, [{
    key: 'processLine',
    value: function processLine(line) {
      var state = this._state;
      if (state < 3) {
        if (state === 0) {
          var trimmed = line.trim();
          if (trimmed.length === 0) {
            return false;
          }
          this._title = trimmed;
        }
        this._sawEnd = false;
        // header line
        this._state++;
        return true;
      }
      if (state === 3) {
        // atom/bond count
        this._expectedAtomCount = parseInt(line.substr(0, 3).trim(), 10);
        this._expectedBondCount = parseInt(line.substr(3, 3).trim(), 10);
        if (isNaN(this._expectedAtomCount) || isNaN(this._expectedBondCount)) {
          console.error('invalid bond definition');
          return false;
        }
        this._state++;
        // is there a better way to convert an int to a string?
        var chainName = '' + (this._structure.chains().length + 1);
        this._currentChain = this._structure.addChain(chainName);
        this._currentResidue = this._currentChain.addResidue(this._title, 1);
      }
      if (state === 4) {
        var pos = [0, 0, 0];
        for (var i = 0; i < 3; ++i) {
          pos[i] = parseFloat(line.substr(i * 10, 10).trim());
          if (isNaN(pos[i])) {
            console.error('invalid atom position');
            return false;
          }
        }
        var element = line.substr(31, 3).trim();
        this._currentResidue.addAtom(element, pos, element, false);
        this._atomCount++;
        if (this._atomCount === this._expectedAtomCount) {
          this._state++;
        }
      }
      if (state === 5) {
        var firstAtomIndex = parseInt(line.substr(0, 3).trim(), 10) - 1;
        var secondAtomIndex = parseInt(line.substr(3, 3).trim(), 10) - 1;
        if (isNaN(firstAtomIndex) || isNaN(secondAtomIndex)) {
          console.error('invalid bond definition');
          return false;
        }
        var atoms = this._currentResidue.atoms();
        this._structure.connect(atoms[firstAtomIndex], atoms[secondAtomIndex]);
        this._bondCount++;
        if (this._bondCount === this._expectedBondCount) {
          this._state++;
        }
      }
      if (line.substr(0, 6) === 'M  END') {
        this._sawEnd = true;
        this._state++;
      }
      if (line.substr(0, 4) === '$$$$') {
        this._reset();
      }
      return true;
    }
  }, {
    key: '_reset',
    value: function _reset() {
      this._state = 0;
      this._currentResidue = null;
      this._currentChain = null;
      this._expectedAtomCount = null;
      this._expectedBondount = null;
      this._atomCount = 0;
      this._bondCount = 0;
      this._title = '';
    }
  }, {
    key: 'finish',
    value: function finish() {
      if (!this._sawEnd) {
        console.error('truncated SDF file');
        return null;
      }

      return this._structure;
    }
  }]);
  return SDFReader;
}();

var CRDReader = function () {
  function CRDReader() {
    classCallCheck(this, CRDReader);

    this._structure = new Mol();
    this._reset();
    this._sawEnd = false;
  }

  createClass(CRDReader, [{
    key: 'processLine',
    value: function processLine(line) {
      if (line.length === 0 || line[0] === '*') {
        return true;
      }
      if (line.length < 52) {
        return true;
      }

      var aName = line.substr(16, 5);
      var rNum = parseInt(line.substr(6, 4).trim(), 10);
      var rName = line.substr(11, 3).trim();
      var pos = create$5();
      for (var i = 0; i < 3; ++i) {
        pos[i] = parseFloat(line.substr(20 + i * 10, 10).trim());
      }
      var cName = line[51];
      if (this._currentChain === null || this._currentChain.name() !== cName) {
        this._currentResidue = null;
        this._currentChain = this._structure.chain(cName);
        if (this._currentChain === null) {
          this._currentChain = this._structure.addChain(cName);
        }
      }
      if (this._currentResidue === null || this._currentResidue.num() !== rNum) {
        this._currentResidue = this._currentChain.addResidue(rName, rNum);
      }
      this._currentResidue.addAtom(aName.trim(), pos, aName[0], false, 1.00, 0.00);
      return true;
    }
  }, {
    key: '_reset',
    value: function _reset() {
      this._currentResidue = null;
      this._currentChain = null;
    }
  }, {
    key: 'finish',
    value: function finish() {
      this._structure.deriveConnectivity();
      return this._structure;
    }
  }]);
  return CRDReader;
}();

var sdf = function sdf(text) {
  console.time('sdf');
  var reader = new SDFReader();
  var lines = getLines(text);

  for (var i = 0; i < lines.length; i++) {
    if (!reader.processLine(lines[i])) {
      break;
    }
  }
  var structure = reader.finish();
  console.timeEnd('sdf');
  return structure;
};

var crd = function crd(text) {
  console.time('crd');
  var reader = new CRDReader();
  var lines = getLines(text);
  for (var i = 0; i < lines.length; i++) {
    if (!reader.processLine(lines[i])) {
      break;
    }
  }
  var structure = reader.finish();
  console.timeEnd('crd');
  return structure;
};

var fetch = function fetch(url, callback) {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", url, true);
  oReq.onload = function () {
    if (oReq.response) {
      callback(oReq.response);
    }
  };
  oReq.send(null);
};

var fetchPdb = function fetchPdb(url, callback, options) {
  fetch(url, function (data) {
    var structure = pdb(data, options);
    callback(structure);
  });
};

var fetchSdf = function fetchSdf(url, callback) {
  fetch(url, function (data) {
    var structure = sdf(data);
    callback(structure);
  });
};

var fetchCrd = function fetchCrd(url, callback) {
  fetch(url, function (data) {
    var structure = crd(data);
    callback(structure);
  });
};



var io = Object.freeze({
	Remark350Reader: Remark350Reader,
	guessAtomElementFromName: guessAtomElementFromName,
	pdb: pdb,
	sdf: sdf,
	crd: crd,
	fetchPdb: fetchPdb,
	fetchSdf: fetchSdf,
	fetchCrd: fetchCrd
});

var CoordGroup = function () {
  function CoordGroup(structure) {
    classCallCheck(this, CoordGroup);

    this._structure = structure;
    this._frames = [];
    this._title = '';
  }

  createClass(CoordGroup, [{
    key: 'addFrame',
    value: function addFrame(frame) {
      this._frames.push(frame);
    }
  }, {
    key: 'useFrame',
    value: function useFrame(frameIndex) {
      var frame = this._frames[frameIndex];
      this._structure.eachAtom(function (atom, index) {
        var offset = index * 3;
        set$5(atom.pos(), frame[offset + 0], frame[offset + 1], frame[offset + 2]);
      });
    }
  }, {
    key: 'title',
    set: function set$$1(value) {
      this._title = value;
    }
  }]);
  return CoordGroup;
}();

var dcd = function dcd(structure, data) {
  var cg = new CoordGroup(structure);
  var endianness = String.fromCharCode(data.getUint8(4)) + String.fromCharCode(data.getUint8(5)) + String.fromCharCode(data.getUint8(6)) + String.fromCharCode(data.getUint8(7));
  // FIXME: error handling and different dcd variants.
  // At the moment, this only works for a very small subset of files, I
  // can't even tell you which ones.
  var swapBytes = endianness === 'DROC';
  var current = 92;
  var titleLength = data.getUint32(current, swapBytes);
  current += 4;
  var title = '';
  var i;
  for (i = 0; i < titleLength; ++i) {
    title += String.fromCharCode(data.getUint8(current));
    current += 1;
  }

  cg.title = title;

  //var fAtomCount = data.getUint32(4 * 10, swapBytes);
  var numFrames = data.getUint32(4 * 2, swapBytes);
  var format = data.getUint32(4 * 21, swapBytes);
  var perFrameHeader = false;
  if (format !== 0) {
    perFrameHeader = data.getUint32(4 * 12, swapBytes) !== 0;
  }
  current += 8;
  var tAtomCount = data.getUint32(current, swapBytes);
  current += 8;

  // read individual frames
  for (i = 0; i < numFrames; ++i) {
    var frame = new Float32Array(3 * tAtomCount);
    if (perFrameHeader) {
      current += 56;
    }
    for (var k = 0; k < 3; ++k) {
      current += 4;
      for (var j = 0; j < tAtomCount; ++j) {
        var value = data.getFloat32(current, swapBytes);
        frame[j * 3 + k] = value;
        current += 4;
      }
      current += 4;
    }
    cg.addFrame(frame);
  }
  return cg;
};

function fetch$1(url, callback) {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", url, true);
  oReq.responseType = 'arraybuffer';
  oReq.onload = function () {
    if (oReq.response) {
      callback(new DataView(oReq.response));
    }
  };
  oReq.send(null);
}

var fetchDcd = function fetchDcd(url, structure, callback) {
  fetch$1(url, function (data) {
    var coordGroup = dcd(structure, data);
    callback(coordGroup);
  });
};



var traj = Object.freeze({
	CoordGroup: CoordGroup,
	fetchDcd: fetchDcd
});

function calculateCovariance(go, covariance) {
  var center = create$5();
  var shiftedPos = create$5();
  set$5(center, 0, 0, 0);
  var atomCount = 0;
  go.eachCentralAtom(function (atom, transformedPos) {
    add$5(center, center, transformedPos);
    atomCount += 1;
  });
  if (atomCount === 0) {
    return;
  }
  scale$5(center, center, 1.0 / atomCount);
  covariance[0] = 0;covariance[1] = 0;covariance[2] = 0;
  covariance[3] = 0;covariance[4] = 0;covariance[5] = 0;
  covariance[6] = 0;covariance[7] = 0;covariance[8] = 0;
  go.eachCentralAtom(function (atom, transformedPos) {
    subtract$4(shiftedPos, transformedPos, center);
    var x = shiftedPos[0];
    var y = shiftedPos[1];
    var z = shiftedPos[2];
    // No need to fill in covariance[3]/covariance[6]/covariance[7], the
    // matrix is symmetric.
    covariance[0] += y * y + z * z;
    covariance[1] -= x * y;
    covariance[2] -= x * z;
    covariance[5] -= y * z;
    covariance[4] += x * x + z * z;
    covariance[8] += x * x + y * y;
  });

  covariance[3] = covariance[1];
  covariance[6] = covariance[2];
  covariance[7] = covariance[5];
}

function principalAxes(go) {
  var covariance = create$2();
  var diag = create$2();
  var min = create$5();
  var max = create$5();
  var projected = create$5();
  var range = create$5();
  var x = create$5();
  var y = create$5();
  var z = create$5();
  calculateCovariance(go, covariance);
  var q = diagonalizer(covariance);
  fromQuat(diag, q);
  var first = true;
  go.eachCentralAtom(function (atom, transformedPos) {
    transformMat3(projected, transformedPos, diag);
    if (first) {
      copy$5(min, projected);
      copy$5(max, projected);
      first = false;
    } else {
      min(min, min, projected);
      max(max, max, projected);
    }
  });
  subtract$4(range, max, min);
  var axes = [[range[0], 0], [range[1], 1], [range[2], 2]];
  axes.sort(function (a, b) {
    return b[0] - a[0];
  });
  var xIndex = axes[0][1];
  var yIndex = axes[1][1];
  set$5(x, diag[xIndex + 0], diag[xIndex + 3], diag[xIndex + 6]);
  set$5(y, diag[yIndex + 0], diag[yIndex + 3], diag[yIndex + 6]);
  cross(z, x, y);
  var rotation = create$2();
  rotation[0] = x[0];rotation[1] = y[0];rotation[2] = z[0];
  rotation[3] = x[1];rotation[4] = y[1];rotation[5] = z[1];
  rotation[6] = x[2];rotation[7] = y[2];rotation[8] = z[2];
  return rotation;
}

var viewpoint = Object.freeze({
	principalAxes: principalAxes
});

var zhangSkolnickSS = function zhangSkolnickSS(trace, i, distances, delta) {
  var posOne = create$5();
  var posTwo = create$5();
  for (var j = Math.max(0, i - 2); j <= i; ++j) {
    for (var k = 2; k < 5; ++k) {
      if (j + k >= trace.length()) {
        continue;
      }
      var d = distance(trace.posAt(posOne, j), trace.posAt(posTwo, j + k));
      if (Math.abs(d - distances[k - 2]) > delta) {
        return false;
      }
    }
  }
  return true;
};

var isHelical = function isHelical(trace, i) {
  var helixDistances = [5.45, 5.18, 6.37];
  var helixDelta = 2.1;
  return zhangSkolnickSS(trace, i, helixDistances, helixDelta);
};

var isSheet = function isSheet(trace, i) {
  var sheetDistances = [6.1, 10.4, 13.0];
  var sheetDelta = 1.42;
  return zhangSkolnickSS(trace, i, sheetDistances, sheetDelta);
};

function traceAssignHelixSheet(trace) {
  for (var i = 0; i < trace.length(); ++i) {
    if (isHelical(trace, i)) {
      trace.residueAt(i).setSS('H');
      continue;
    }
    if (isSheet(trace, i)) {
      trace.residueAt(i).setSS('E');
      continue;
    }
    trace.residueAt(i).setSS('C');
  }
}

// assigns secondary structure information based on a simple and very fast
// algorithm published by Zhang and Skolnick in their TM-align paper.
// Reference:
//
// TM-align: a protein structure alignment algorithm based on the Tm-sutils
// (2005) NAR, 33(7) 2302-2309
function assignHelixSheet(structure) {
  console.time('mol.assignHelixSheet');
  var chains = structure.chains();
  for (var ci = 0; ci < chains.length; ++ci) {
    var chain = chains[ci];
    chain.eachBackboneTrace(traceAssignHelixSheet);
  }
  console.timeEnd('mol.assignHelixSheet');
}

/*
Shanti Rao sent me this routine by private email. I had to modify it
slightly to work on Arrays instead of using a Matrix object.
It is apparently translated from http://stitchpanorama.sourceforge.net/Python/svd.py
*/

function svd(A) {
  var temp;
  //Compute the thin SVD from G. H. Golub and C. Reinsch, Numer. Math. 14, 403-420 (1970)
  var prec = Math.pow(2, -52);
  var tolerance = 1.e-64 / prec;
  var itmax = 50;
  var c = 0;
  var i = 0;
  var j = 0;
  var k = 0;
  var l = 0;

  var u = A; // numeric.clone(A);
  var m = u.length;

  var n = u[0].length;

  if (m < n) {
    throw new Error("Need more rows than columns");
  }

  var e = new Array(n);
  var q = new Array(n);
  for (i = 0; i < n; i++) {
    e[i] = q[i] = 0.0;
  }

  var v = [];

  for (var i = 0; i < n; ++i) {
    var xxx = [];
    v.push([]);
    for (var j = 0; j < n; ++j) {
      xxx.push(0);
    }
    v.push(xxx);
  }

  function pythag(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (a > b) {
      return a * Math.sqrt(1.0 + b * b / a / a);
    } else if (b === 0.0) {
      return a;
    }

    return b * Math.sqrt(1.0 + a * a / b / b);
  }

  //Householder's reduction to bidiagonal form

  var f = 0.0;
  var g = 0.0;
  var h = 0.0;
  var x = 0.0;
  var y = 0.0;
  var z = 0.0;
  var s = 0.0;

  for (i = 0; i < n; i++) {
    e[i] = g;
    s = 0.0;
    l = i + 1;
    for (j = i; j < m; j++) {
      s += u[j][i] * u[j][i];
    }if (s <= tolerance) {
      g = 0.0;
    } else {
      f = u[i][i];
      g = Math.sqrt(s);
      if (f >= 0.0) g = -g;
      h = f * g - s;
      u[i][i] = f - g;
      for (j = l; j < n; j++) {
        s = 0.0;
        for (k = i; k < m; k++) {
          s += u[k][i] * u[k][j];
        }f = s / h;
        for (k = i; k < m; k++) {
          u[k][j] += f * u[k][i];
        }
      }
    }

    q[i] = g;
    s = 0.0;

    for (j = l; j < n; j++) {
      s = s + u[i][j] * u[i][j];
    }

    if (s <= tolerance) {
      g = 0.0;
    } else {
      f = u[i][i + 1];
      g = Math.sqrt(s);
      if (f >= 0.0) g = -g;
      h = f * g - s;
      u[i][i + 1] = f - g;
      for (j = l; j < n; j++) {
        e[j] = u[i][j] / h;
      }for (j = l; j < m; j++) {
        s = 0.0;
        for (k = l; k < n; k++) {
          s += u[j][k] * u[i][k];
        }for (k = l; k < n; k++) {
          u[j][k] += s * e[k];
        }
      }
    }

    y = Math.abs(q[i]) + Math.abs(e[i]);
    if (y > x) {
      x = y;
    }
  }

  // accumulation of right hand gtransformations
  for (i = n - 1; i !== -1; i += -1) {
    if (g !== 0.0) {
      h = g * u[i][i + 1];
      for (j = l; j < n; j++) {
        v[j][i] = u[i][j] / h;
      }for (j = l; j < n; j++) {
        s = 0.0;
        for (k = l; k < n; k++) {
          s += u[i][k] * v[k][j];
        }for (k = l; k < n; k++) {
          v[k][j] += s * v[k][i];
        }
      }
    }

    for (j = l; j < n; j++) {
      v[i][j] = 0;
      v[j][i] = 0;
    }

    v[i][i] = 1;
    g = e[i];
    l = i;
  }

  // accumulation of left hand transformations
  for (i = n - 1; i !== -1; i += -1) {
    l = i + 1;
    g = q[i];
    for (j = l; j < n; j++) {
      u[i][j] = 0;
    }if (g !== 0.0) {
      h = u[i][i] * g;
      for (j = l; j < n; j++) {
        s = 0.0;
        for (k = l; k < m; k++) {
          s += u[k][i] * u[k][j];
        }f = s / h;
        for (k = i; k < m; k++) {
          u[k][j] += f * u[k][i];
        }
      }

      for (j = i; j < m; j++) {
        u[j][i] = u[j][i] / g;
      }
    } else {
      for (j = i; j < m; j++) {
        u[j][i] = 0;
      }
    }
    u[i][i] += 1;
  }

  // diagonalization of the bidiagonal form
  prec = prec * x;

  for (k = n - 1; k !== -1; k += -1) {
    for (var iteration = 0; iteration < itmax; iteration++) {
      // test f splitting
      var test_convergence = false;
      for (l = k; l !== -1; l += -1) {
        if (Math.abs(e[l]) <= prec) {
          test_convergence = true;
          break;
        }

        if (Math.abs(q[l - 1]) <= prec) {
          break;
        }
      }

      if (!test_convergence) {
        // cancellation of e[l] if l>0
        c = 0.0;
        s = 1.0;
        var l1 = l - 1;

        for (i = l; i < k + 1; i++) {
          f = s * e[i];
          e[i] = c * e[i];
          if (Math.abs(f) <= prec) {
            break;
          }

          g = q[i];
          h = pythag(f, g);
          q[i] = h;
          c = g / h;
          s = -f / h;
          for (j = 0; j < m; j++) {
            y = u[j][l1];
            z = u[j][i];
            u[j][l1] = y * c + z * s;
            u[j][i] = -y * s + z * c;
          }
        }
      }

      // test f convergence
      z = q[k];
      if (l === k) {
        //convergence
        if (z < 0.0) {
          //q[k] is made non-negative
          q[k] = -z;
          for (j = 0; j < n; j++) {
            v[j][k] = -v[j][k];
          }
        }

        break;
        //break out of iteration loop and move on to next k value
      }
      if (iteration >= itmax - 1) {
        throw new Error('No convergence.');
      }
      // shift from bottom 2x2 minor
      x = q[l];
      y = q[k - 1];
      g = e[k - 1];
      h = e[k];
      f = ((y - z) * (y + z) + (g - h) * (g + h)) / (2.0 * h * y);
      g = pythag(f, 1.0);
      if (f < 0.0) {
        f = ((x - z) * (x + z) + h * (y / (f - g) - h)) / x;
      } else {
        f = ((x - z) * (x + z) + h * (y / (f + g) - h)) / x;
      }

      // next QR transformation
      c = 1.0;
      s = 1.0;
      for (i = l + 1; i < k + 1; i++) {
        g = e[i];
        y = q[i];
        h = s * g;
        g = c * g;
        z = pythag(f, h);
        e[i - 1] = z;
        c = f / z;
        s = h / z;
        f = x * c + g * s;
        g = -x * s + g * c;
        h = y * s;
        y = y * c;

        for (j = 0; j < n; j++) {
          x = v[j][i - 1];
          z = v[j][i];
          v[j][i - 1] = x * c + z * s;
          v[j][i] = -x * s + z * c;
        }

        z = pythag(f, h);
        q[i - 1] = z;
        c = f / z;
        s = h / z;
        f = c * g + s * y;
        x = -s * g + c * y;
        for (j = 0; j < m; j++) {
          y = u[j][i - 1];
          z = u[j][i];
          u[j][i - 1] = y * c + z * s;
          u[j][i] = -y * s + z * c;
        }
      }

      e[l] = 0.0;
      e[k] = f;
      q[k] = x;
    }
  }

  for (i = 0; i < q.length; i++) {
    if (q[i] < prec) q[i] = 0;
  }

  //sort eigenvalues
  for (i = 0; i < n; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (q[j] < q[i]) {
        c = q[j];
        q[j] = q[i];
        q[i] = c;

        for (k = 0; k < u.length; k++) {
          temp = u[k][i];
          u[k][i] = u[k][j];
          u[k][j] = temp;
        }

        for (k = 0; k < v.length; k++) {
          temp = v[k][i];
          v[k][i] = v[k][j];
          v[k][j] = temp;
        }

        i = j;
      }
    }
  }

  return {
    U: u,
    S: q,
    V: v
  };
}

var calculateCenter = function calculateCenter(atoms, center) {
  set$5(center, 0, 0, 0);

  if (atoms.length === 0) {
    return;
  }

  for (var i = 0; i < atoms.length; ++i) {
    var atom = atoms[i];
    add$5(center, center, atom.pos());
  }

  scale$5(center, center, 1.0 / atoms.length);
};

// calculate a covariance matrix from the deviations of the atoms of the subject
// and reference structure.
var calculateCov = function calculateCov(subjectAtoms, referenceAtoms, subjectCenter, referenceCenter, covariance) {
  var shiftedSubject = create$5();
  var shiftedReference = create$5();
  covariance[0] = 0;
  covariance[1] = 0;
  covariance[2] = 0;
  covariance[3] = 0;
  covariance[4] = 0;
  covariance[5] = 0;
  covariance[6] = 0;
  covariance[7] = 0;
  covariance[8] = 0;

  for (var i = 0; i < referenceAtoms.length; ++i) {
    subtract$4(shiftedSubject, subjectAtoms[i].pos(), subjectCenter);
    subtract$4(shiftedReference, referenceAtoms[i].pos(), referenceCenter);

    var ss = shiftedSubject;
    var sr = shiftedReference;
    covariance[0] += ss[0] * sr[0];
    covariance[1] += ss[0] * sr[1];
    covariance[2] += ss[0] * sr[2];

    covariance[3] += ss[1] * sr[0];
    covariance[4] += ss[1] * sr[1];
    covariance[5] += ss[1] * sr[2];

    covariance[6] += ss[2] * sr[0];
    covariance[7] += ss[2] * sr[1];
    covariance[8] += ss[2] * sr[2];
  }
};

var superpose = function superpose(structure, reference) {
  var referenceCenter = create$5();
  var subjectCenter = create$5();
  var shiftedPos = create$5();
  var rotation = create$2();
  var cov = create$2();
  var tmp = create$2();
  var uMat = create$2();
  var vMat = create$2();
  var subjectAtoms = structure.atoms();
  var referenceAtoms = reference.atoms();
  calculateCenter(referenceAtoms, referenceCenter);
  calculateCenter(subjectAtoms, subjectCenter);
  if (subjectAtoms.length !== referenceAtoms.length) {
    console.error('atom counts do not match (' + subjectAtoms.length + 'in structure vs ' + referenceAtoms.length + ' in reference)');
    return false;
  }
  if (subjectAtoms.length < 3) {
    console.error('at least 3 atoms are required for superposition');
    return false;
  }
  calculateCov(subjectAtoms, referenceAtoms, subjectCenter, referenceCenter, cov);
  // the SVD implementation assumes nested arrays as inputs instead of linear
  // arrays of length 9, so we need to convert between the two formats.
  var input = [[cov[0], cov[1], cov[2]], [cov[3], cov[4], cov[5]], [cov[6], cov[7], cov[8]]];
  var decomp = svd(input);
  uMat[0] = decomp.U[0][0];
  uMat[1] = decomp.U[0][1];
  uMat[2] = decomp.U[0][2];
  uMat[3] = decomp.U[1][0];
  uMat[4] = decomp.U[1][1];
  uMat[5] = decomp.U[1][2];
  uMat[6] = decomp.U[2][0];
  uMat[7] = decomp.U[2][1];
  uMat[8] = decomp.U[2][2];
  var detU = determinant$2(uMat);
  vMat[0] = decomp.V[0][0];
  vMat[1] = decomp.V[0][1];
  vMat[2] = decomp.V[0][2];
  vMat[3] = decomp.V[1][0];
  vMat[4] = decomp.V[1][1];
  vMat[5] = decomp.V[1][2];
  vMat[6] = decomp.V[2][0];
  vMat[7] = decomp.V[2][1];
  vMat[8] = decomp.V[2][2];
  var detV = determinant$2(vMat);
  identity$2(tmp);
  // in case the products of the determinant are smaller than zero, flip
  // one of the axis. If we don't do this, the resulting matrix is not a
  // rotation but a mirroring.
  if (detU * detV < 0.0) {
    console.log('determinants smaller than zero!');
    tmp[8] = -1;
    multiply$2(uMat, uMat, tmp);
  }
  console.log(str$2(uMat));
  multiply$2(rotation, transpose$1(vMat, vMat), uMat);
  //mat3.transpose(rotation, rotation);
  // apply transformation to all atoms
  var allAtoms = structure.full().atoms();
  for (var i = 0; i < allAtoms.length; ++i) {
    var atom = allAtoms[i];
    subtract$4(shiftedPos, atom.pos(), subjectCenter);
    transformMat3(shiftedPos, shiftedPos, rotation);
    add$5(shiftedPos, referenceCenter, shiftedPos);
    atom.setPos(shiftedPos);
  }
  return true;
};

// Parses different representations of a list of atom names and returns a
// set (a dictionary actually with elements contained in the set set to
// true) that describes the list.
//
//  * undefined/null to null. This translates to match any atom
//  * 'all' to null
//  * 'backbone' to { 'N', 'CA', 'C', 'O' }
//  * 'aname1, aname2' to { 'aname1', 'aname2' }
//  * ['aname1', 'aname2']  to  { 'aname1', 'aname2' }
function parseAtomNames(atoms) {
  var results = {};
  if (atoms === undefined || atoms === null || atoms === 'all') {
    return null;
  }
  if (atoms === 'backbone') {
    return { 'CA': true, 'C': true, 'O': true, 'N': true };
  }
  if (atoms.substr !== undefined) {
    var atomNames = atoms.split(',');
    for (var i = 0; i < atomNames.length; ++i) {
      results[atomNames[i].trim()] = true;
    }
    return results;
  } else {
    for (var _i = 0; _i < atoms.length; ++_i) {
      results[atoms[_i]] = true;
    }
    return results;
  }
}

function addAtomsPresentInBoth(inA, inB, outA, outB, atomSet) {
  var atomsA = inA.atoms();
  var atomsB = inB.atoms();
  for (var i = 0; i < atomsA.length; ++i) {
    var atomA = atomsA[i];
    if (atomSet !== null && atomSet[atomA.name()] !== true) {
      continue;
    }
    for (var j = 0; j < atomsB.length; ++j) {
      var atomB = atomsB[j];
      if (atomB.name() === atomA.name()) {
        outA.push(atomA);
        outB.push(atomB);
        break;
      }
    }
  }
}

function matchResidues(inA, inB, atoms, matchFn) {
  var outA = inA.full().createEmptyView();
  var outB = inB.full().createEmptyView();
  var numChains = Math.min(inA.chains().length, inB.chains().length);
  var atomSet = parseAtomNames(atoms);

  for (var i = 0; i < numChains; ++i) {
    var chainA = inA.chains()[i];
    var chainB = inB.chains()[i];
    var matchedResidues = matchFn(chainA, chainB);
    var residuesA = matchedResidues[0];
    var residuesB = matchedResidues[1];
    if (residuesA.length !== residuesB.length) {
      console.error('chains', chainA.name(), ' and', chainB.name(), ' do not contain the same number of residues.');
      return null;
    }

    var outChainA = outA.addChain(chainA);
    var outChainB = outB.addChain(chainB);
    for (var j = 0; j < residuesA.length; ++j) {
      var residueA = residuesA[j];
      var residueB = residuesB[j];
      var outAtomsA = [];
      var outAtomsB = [];
      addAtomsPresentInBoth(residueA, residueB, outAtomsA, outAtomsB, atomSet);
      if (outAtomsA.length === 0) {
        continue;
      }
      var outResidueA = outChainA.addResidue(residueA);
      var outResidueB = outChainB.addResidue(residueB);
      for (var k = 0; k < outAtomsA.length; ++k) {
        outResidueA.addAtom(outAtomsA[k]);
        outResidueB.addAtom(outAtomsB[k]);
      }
    }
  }
  return [outA, outB];
}

function matchResiduesByIndex(inA, inB, atoms) {
  return matchResidues(inA, inB, atoms, function (chainA, chainB) {
    return [chainA.residues(), chainB.residues()];
  });
}

function matchResiduesByNum(inA, inB, atoms) {
  return matchResidues(inA, inB, atoms, function (chainA, chainB) {
    var outA = [];
    var outB = [];
    var residuesA = chainA.residues();
    for (var i = 0; i < residuesA.length; ++i) {
      var resB = chainB.residueByRnum(residuesA[i].num());
      if (resB !== null) {
        outA.push(residuesA[i]);
        outB.push(resB);
      }
    }
    return [outA, outB];
  });
}

var index = {
  Viewer: Viewer,
  isWebGLSupported: _isWebGLSupported,
  io: io,
  traj: traj,
  color: color,
  mol: {
    Mol: Mol,
    MolView: MolView,
    assignHelixSheet: assignHelixSheet,
    superpose: superpose,
    matchResiduesByNum: matchResiduesByNum,
    matchResiduesByIndex: matchResiduesByIndex
  },
  vec3: vec3,
  vec4: vec4,
  mat3: mat3,
  mat4: mat4,
  quat: quat,
  viewpoint: viewpoint
};

return index;

})));
