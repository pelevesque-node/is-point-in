[![Build Status](https://travis-ci.org/pelevesque/is-point-in.svg?branch=master)](https://travis-ci.org/pelevesque/is-point-in)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/is-point-in/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/is-point-in?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# is-point-in

Checks if a point is inside a shape.

## Node Repository

[https://www.npmjs.com/package/@pelevesque/is-point-in](https://www.npmjs.com/package/@pelevesque/is-point-in)

## Installation

`npm install @pelevesque/is-point-in`

## Tests

### Standard Style & Unit Tests

`npm test`

### Standard Style & Unit Tests & Coverage

`npm run cover`

## Methods

- `rectangle` Checks if a point is inside a rectangle.
- `circle` Checks if a point is inside a circle.

## Usage

### Initialization

#### Requiring the Entire Module

```js
const IsPointIn = require('@pelevesque/is-point-in')
```

#### Requiring a Specific Method

```js
const IsPointInRectangle = require('@pelevesque/is-point-in').rectangle
```

### Rectangle

```js
// point
const x = 10
const y = 10

// rectangle
const x1 = 5
const y1 = 5
const x2 = 15
const y2 = 15

const result = IsPointIn.rectangle(x, y, x1, y1, x2, y2)
// result === true
```

### Circle

```js
// point
const x = -3.84
const y = 3.22

// circle
const cx = 0
const cy = 0
const cRadius = 5

const result = IsPointIn.circle(x, y, cx, cy, cRadius)
// result === false
```
