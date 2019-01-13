:coffee:

The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.

With that information, we'll need to revisit the `getTea` function from last challenge to handle various tea requests. We can modify `getTea` to accept a function as a parameter to be able to change the type of tea it prepares. This makes getTea more flexible, and gives the programmer more control when client requests change.

But first, let's cover some functional terminology:

:zap: _Callbacks_ are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter`, the callback function tells JavaScript the criteria for how to filter an array.

:zpa: Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called _first class functions_. In JavaScript, all functions are first class functions.

:zap: The functions that take a function as an argument, or return a function as a return value are called _higher order functions_.

:zap: When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a _lambda_.

:fire:

Prepare 27 cups of green tea and 13 cups of black tea and store them in `tea4GreenTeamFCC` and `tea4BlackTeamFCC` variables, respectively. Note that the `getTea` function has been modified so it now takes a function as the first argument.

Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.
