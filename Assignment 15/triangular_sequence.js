function triangle(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  function cumulativeSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += triangle(i);
    }
    return sum;
  }
  
  console.log(cumulativeSum(1)); // Output: 1
  console.log(cumulativeSum(6)); // Output: 56
  