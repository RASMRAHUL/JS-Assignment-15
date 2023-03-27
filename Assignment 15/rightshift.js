function rightShift(num, shift) {
    if (shift <= 0) {
      return num;
    } else {
      return rightShift(Math.floor(num / 2), shift - 1);
    }
  }
  
  console.log(rightShift(32, 3)); // Output: 2
  