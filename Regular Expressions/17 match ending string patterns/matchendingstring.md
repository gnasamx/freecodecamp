:coffee:

In the last challenge, you learned to use the `caret` character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the `dollar sign` character `$` at the end of the regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
```

:fire:

Use the anchor character (`$`) to match the string `"caboose"` at the end of the string caboose.
