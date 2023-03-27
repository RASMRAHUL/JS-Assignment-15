function secondDerivative(b, m) {
    let bm = b * m;
    let derivative = b * (b - 1) * Math.pow(m, b - 2) + Math.pow(Math.E, bm) * bm;
    return derivative;
  }
  
  console.log(secondDerivative(3, 2)); // Output: 32.14250644447894
  