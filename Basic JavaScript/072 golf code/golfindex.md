:coffee: :fire:

In the game of golf each hole has a _par_ meaning the average number of _strokes_ a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below _par_ your _strokes_ are, there is a different nickname.

Your function will be passed _par_ and _strokes_ arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

| Strokes     | Return         |
| ----------- | -------------- |
| 1           | "Hole-in-one!" |
| <= par - 2  | "Eagle"        |
| par - 1     | "Birdie"       |
| par         | "Par"          |
| par + 1     | "Bogey"        |
| par + 2     | "Double Bogey" |
| (>=par) + 3 | "Go Home!"     |

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
