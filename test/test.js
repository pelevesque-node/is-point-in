/* global describe, it */
'use strict'

const expect = require('chai').expect
const isPointIn = require('../index')

describe('#isPointIn', () => {
  describe('#rectangle()', () => {
    it('should return true when the point is inside the rectangle', () => {
      const x = 5
      const y = 5
      const x1 = 0
      const y1 = 0
      const x2 = 10
      const y2 = 10
      const result = isPointIn.rectangle(x, y, x1, y1, x2, y2)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when the point is outside the rectangle', () => {
      const x = 15
      const y = 15
      const x1 = 0
      const y1 = 0
      const x2 = 10
      const y2 = 10
      const result = isPointIn.rectangle(x, y, x1, y1, x2, y2)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('#circle()', () => {
    it('should return true when the point is inside the circle', () => {
      const x = -3.75
      const y = 3.2
      const cx = 0
      const cy = 0
      const cr = 5
      const result = isPointIn.circle(x, y, cx, cy, cr)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when the point is outside the circle', () => {
      const x = -3.84
      const y = 3.22
      const cx = 0
      const cy = 0
      const cr = 5
      const result = isPointIn.circle(x, y, cx, cy, cr)
      const expected = false
      expect(result).to.equal(expected)
    })
  })
})
