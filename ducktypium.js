class Ducktypium {
    constructor(color) {
      this.requiredColors = ["red", "blue", "yellow"];
      this.color = color.toLowerCase();
      if (!this.requiredColors.includes(this.color)) {
				throw Error("Color is not red, blue, or yellow.")
      }
      this.calibrationSequence = [];
    }

    refract(refractColor) {
			this.refractColor = refractColor.toLowerCase();
			if (!this.requiredColors.includes(this.refractColor)) {
				throw Error("Color is not red, blue, or yellow.")
      }

			if (this.refractColor === this.color) {
				return this.color;
			} else if (this.refractColor === "red" && this.color === "blue") {
				return "purple";
			} else if (this.refractColor === "blue" && this.color === "red") {
				return "purple";
			}	else if (this.refractColor === "red" && this.color === "yellow") {
				return "orange";
			} else if (this.refractColor === "yellow" && this.color === "red") {
				return "orange";
			}	else if (this.refractColor === "yellow" && this.color === "blue") {
				return "green";
			} else if (this.refractColor === "blue" && this.color === "yellow") {
				return "green";
			}
    }

    calibrate(numberArray) {
			this.array = numberArray;
			this.array.sort();
			this.calibrationSequence = this.array.map(num => num * 3);
    }
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const dt = new Ducktypium('red');
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract('blue')); // prints 'purple'
  console.log(dt.refract('red')); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]