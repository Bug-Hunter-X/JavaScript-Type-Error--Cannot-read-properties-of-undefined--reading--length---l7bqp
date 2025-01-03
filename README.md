# JavaScript Type Error: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error and its solution. The `bug.js` file contains code that throws a `TypeError` when an undefined value is passed to a function that attempts to access its `length` property. The `bugSolution.js` file provides a corrected version of the code that handles undefined inputs gracefully.

## Bug Description

The bug occurs when the `foo` function receives `undefined` as input. Attempting to access `x.length` when `x` is undefined results in a `TypeError`. 

## Solution

The solution involves explicitly checking for `undefined` (or `null`) and handling this case appropriately, avoiding the attempt to access the `length` property of an undefined value.