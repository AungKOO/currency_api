import * as fs from "fs/promises"

async function getMonthlyRate() {
    return fs.readFile("month.json")
    .then(data => JSON.parse(data.toString()));
}
export default getMonthlyRate;





// (err: any, data: any) => {
//   if (err) {
//     console.log(err);
//     return err;
//   } else {
//     let result = JSON.parse(data);
//     console.log("Result: ", result);
//     return result;
//   }
// }