:coffee:

In the last challenge, you searched for the word `"Hello"` using the regular expression `/Hello/`. That regex searched for a literal match of the string `"Hello"`. Here's another example searching for a literal match of the string `"Kevin"`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
```

Any other forms of `"Kevin"` will not match. For example, the regex `/Kevin/` will not match `"kevin"` or `"KEVIN"`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
```

A future challenge will show how to match those other forms as well.

:fire:

Complete the regex `waldoRegex` to find `"Waldo"` in the string `waldoIsHiding` with a literal match.
