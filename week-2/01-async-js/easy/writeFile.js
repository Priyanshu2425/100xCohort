const fs = require('fs');

let data = "This is the data that is to be written to the dummy.txt file";
fs.writeFile("./week-2/01-async-js/easy/dummy.txt", data, (err)=>{
    if(err) console.log(err);
    else console.log("written successfully");
});

fs.readFile("./week-2/01-async-js/easy/dummy.txt", "utf-8", (err, data)=>{
    console.log(data);
})
