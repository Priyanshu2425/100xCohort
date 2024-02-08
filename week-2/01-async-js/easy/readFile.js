let fs = require("fs")
fs.readFile("./week-2/01-async-js/easy/3-read-from-file.md", "utf-8", (err, data)=>{
        console.log(data);
    });
    