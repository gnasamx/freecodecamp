:coffee:

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex `/z+/` matches the letter `z` when it appears one or more times in a row. It would find matches in all of the following strings:

```js
"z";
"zzzzzz";
"ABCzzzz";
"zzzzABC";
"abczzzzzzzzzzzzzzzzzzzzzabc";
```

But it does not find matches in the following strings since there are no letter z characters:

```js
"";
"ABC";
"abcabc";
```

:fire:

Write a `greedy` regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter `C`.
