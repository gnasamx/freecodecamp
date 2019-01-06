:coffee:

So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called _negated character sets_.

To create a negated character set, you place a caret character (`^`) after the opening bracket and before the characters you do not want to match.

For example, `/[^aeiou]/gi` matches all characters that are not a vowel. Note that characters like `.`, `!`, `[`, `@`, `/` and white space are matched - the negated vowel character set only excludes the vowel characters.

:fire:

Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
