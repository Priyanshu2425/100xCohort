const fs = require('fs');

let dataRead = undefined;
async function getData(){
    let response = await fs.readFile("./week-2/01-async-js/medium/fileCleaner.txt");
    console.log(response);
}

getData();
console.log(dataRead);