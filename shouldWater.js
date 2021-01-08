const plantLifeValue = Number(process.argv[2]);
const drynessValue = Number(process.argv[3]);

if (plantLifeValue === 0 && drynessValue > 10) {
    console.log("WATER")
}