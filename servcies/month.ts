const fs = require("fs");

async function getMonthlyRate() {
  await fs.readFile("month.json", (err: any, data: any) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      let result = JSON.parse(data);
      console.log("Result: ", result);
      return result;
    }
  });
}
export default getMonthlyRate;
