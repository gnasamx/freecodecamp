:coffee:

The last challenge used the plus `+` sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the `asterisk` or star: `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

:fire:

Create a regex `chewieRegex` that uses the `*` character to match all the upper and lower `"a"` characters in `chewieQuote`. Your regex does not need flags, and it should not match any of the other quotes.
