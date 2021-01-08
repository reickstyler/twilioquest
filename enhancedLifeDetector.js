const argumentValue = process.argv[2];
const numberValue = Number(argumentValue);

if (numberValue === 0) {
    console.log("alive")
} else if (numberValue === 1) {
    console.log("flowering")
} else if (numberValue === 2) {
    console.log("shedding")
} else {
    console.log("other")
}