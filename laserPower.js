function calculatePower(powerSettings) {
  let totalPower = 0;
  let powerTimesTwo = [];

  powerSettings.map((i) => {
    i *= 2;
    powerTimesTwo.push(i); // [2, 6, 16]
  });

  totalPower = powerTimesTwo.reduce((sum, current) => sum + current, 0);
  return totalPower;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower); // should be 24
