:coffee:

You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a `"bark"` property to `ourDog`:

```javascript
ourDog.bark = "bow-wow";
```

or

```javascript
ourDog["bark"] = "bow-wow";
```

Now when we evaluate `ourDog.bark`, we'll get his bark, "bow-wow".

:fire:

Add a `"bark"` property to `myDog` and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
