:coffee: :rocket:

As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

In other words, `map` is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

It would teach us a lot about map to try to implement a version of it that behaves exactly like the `Array.prototype.map()` with a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

:fire:

Write your own `Array.prototype.myMap()`, which should behave exactly like `Array.prototype.map()`. You may use a `for` loop or the `forEach` method.
