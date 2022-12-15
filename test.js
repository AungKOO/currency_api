// for converting data to json format and write file to month.json
const fs = require('fs');
const data = {
    data: [
      {
        currencies: [{ rate: 2980, currency_format: "USD" }],
        yearMonth: "2022/12",
        day: "1",
      },
      {
          currencies: [{ rate: 2980, currency_format: "USD" }],
          yearMonth: "2022/12",
          day: "2",
        },
        {
          currencies: [{ rate: 2980, currency_format: "USD" }],
          yearMonth: "2022/12",
          day: "3",
        },
        {
          currencies: [{ rate: 2980, currency_format: "USD" }],
          yearMonth: "2022/12",
          day: "4",
        },

        {
            currencies: [{ rate: 2980, currency_format: "USD" }],
            yearMonth: "2022/12",
            day: "5",
          },
          {
            currencies: [{ rate: 2980, currency_format: "USD" }],
            yearMonth: "2022/12",
            day: "6",
          },        {
            currencies: [{ rate: 2980, currency_format: "USD" }],
            yearMonth: "2022/12",
            day: "7",
          },        {
            currencies: [{ rate: 2980, currency_format: "USD" }],
            yearMonth: "2022/12",
            day: "8",
          },        {
            currencies: [{ rate: 2980, currency_format: "USD" }],
            yearMonth: "2022/1",
            day: "9",
          },        {
            currencies: [{ rate: 2980, currency_format: "USD" }],
            yearMonth: "2022/1",
            day: "10",
          },        {
            currencies: [{ rate: 2980, currency_format: "USD" }],
            yearMonth: "2022/1",
            day: "11",
          },
  
    ],
  };

fs.writeFile("month.json", JSON.stringify(data), (err) => {
    if(err) {
        console.log(err)
    }
})
