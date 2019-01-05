:coffee:

The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

```javascript
var ourStorage = {
  desk: {
    drawer: "stapler"
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
```

:fire:

Access the `myStorage` object and assign the contents of the `glove box` property to the `gloveBoxContents` variable. Use bracket notation for properties with a space in their name.
