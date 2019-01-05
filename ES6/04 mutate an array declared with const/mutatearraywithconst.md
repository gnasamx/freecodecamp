:coffee: :star:

The `const` declaration has many use cases in modern JavaScript.

Some :sunglasses: developers prefer to assign all their variables using `const` by default, unless they know they will need to reassign the value. Only in that case, they use `let`.

:zap: :fire: However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

```javascript
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```

As you can see, you can mutate the object `[5, 6, 7]` itself and the variable s will still point to the altered array `[5, 6, 45]`. Like all arrays, the array elements in `s` are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

:fire:

An array is declared as const `s = [5, 7, 2]`. Change the array to `[2, 5, 7]` using various element assignment.
