const argumentValue = process.argv[2];
const numberValue = Number(argumentValue);

if (numberValue === 0) {
    console.log("alive")
} else {
    console.log("other")
}