import * as fs from "fs/promises"

async function getMonthlyRate(id: string) {

    const month = id.substring(4,6)  // * get month 
    console.log(`month: ${month} ${id}`)
    if (parseInt(month) === 11) {
        return fs.readFile("month.json")
    .then(data => JSON.parse(data.toString())).catch(e => console.log(e));
    }
    else {
        return Promise.reject("invalid month")
    }
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