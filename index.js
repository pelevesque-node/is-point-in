'use strict'

exports.rectangle = (x, y, x1, y1, x2, y2) =>
  (x >= x1 && x <= x2 && y >= y1 && y <= y2)

exports.circle = (x, y, cx, cy, cr) =>
  Math.pow(x - cx, 2) + Math.pow(y - cy, 2) <= Math.pow(cr, 2)

module.exports = exports
