function changeEnough(change, amountDue) {
    const [quarters, dimes, nickels, pennies] = change;
    const totalChange = quarters * 0.25 + dimes * 0.1 + nickels * 0.05 + pennies * 0.01;
    return totalChange >= amountDue;
  }
  console.log(changeEnough([2, 100, 0, 0], 14.11)); // false
  console.log(changeEnough([0, 0, 20, 5], 0.75)); // true
  console.log(changeEnough([30, 40, 20, 5], 12.55)); // true
    