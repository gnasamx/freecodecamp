:coffee: :cactus:

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word `"the"` in the string `"The dog chased the cat"`, you could use the following regular expression: `/the/`. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the `.test()` method. The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```

:fire:

Apply the regex `myRegex` on the string `myString` using the `.test()` method.
