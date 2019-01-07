:coffee:

Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.

:fire:

The function `raiseToPower` raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of `power` is the expected 8.
