:coffee:

In the last two challenges, we learned about the equality operator (`==`) and the strict equality operator (`===`). Let's do a quick review and practice using these operators some more.

:zap: If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

```javascript
3 == "3"; // returns true because JavaScript performs type conversion from string to number
3 === "3"; // returns false because the types are different and type conversion is not performed
```

Note
In JavaScript, you can determine the type of a variable or a value with the `typeof` operator, as follows:

```javascript
typeof 3; // returns 'number'
typeof "3"; // returns 'string'
```

:fire:

The `compareEquality` function in the editor compares two values using the \__equality operator_. Modify the function so that it returns `"Equal"` only when the values are strictly equal.
