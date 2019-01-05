:coffee:

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: `"` or `'` inside of your string?

In JavaScript, you can _escape_ a quote from considering it as an end of string quote by placing a backslash (`\`) in front of the quote.

```javascript
var sampleStr = 'Alan said, "Peter is learning JavaScript".';
```

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

```javascript
Alan said, "Peter is learning JavaScript".
```

:fire:

Use _backslashes_ to assign a string to the `myStr` variable so that if you were to print it to the console, you would see:

```javascript
I am a "double quoted" string inside "double quotes".
```
