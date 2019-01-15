:coffee: :fire:

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

| Currency Unit       | Amount              |
| ------------------- | ------------------- |
| Penny               | \$0.01 (PENNY)      |
| Nickel              | \$0.05 (NICKEL)     |
| Dime                | \$0.1 (DIME)        |
| Quarter             | \$0.25 (QUARTER)    |
| Dollar              | \$1 (DOLLAR)        |
| Five Dollars        | \$5 (FIVE)          |
| Ten Dollars         | \$10 (TEN)          |
| Twenty Dollars      | \$20 (TWENTY)       |
| One-hundred Dollars | \$100 (ONE HUNDRED) |
