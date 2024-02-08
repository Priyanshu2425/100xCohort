setInterval(()=>{
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    console.log(`${hour}:${minutes}:${seconds} `);
    console.log(`${hour>12?hour-12:hour}:${minutes}:${seconds}\n`);
}, 1000);

