const fs = require('fs');
fs.readFile('month.json', (err, data) => {
    let result = JSON.parse(data)
    console.log(result)
})
