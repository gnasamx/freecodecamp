:coffee: :star:

We saw earlier how spread operator can effectively spread, or unpack, the contents of the array.

We can do something similar with objects as well. _Destructuring_ assignment is special syntax for neatly assigning values taken directly from an object to variables.

Consider the following ES5 code:

```javascript
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```

Here's the same assignment statement with ES6 destructuring syntax:

```javascript
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
```

If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that freedom as well.

```javascript
const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54
```

You may read it as "get the field `x` and copy the value into `a`," and so on.

:fire:

Use destructuring to obtain the average temperature for tomorrow from the input object `AVG_TEMPERATURES`, and assign value with key `tomorrow` to `tempOfTomorrow` in line.
