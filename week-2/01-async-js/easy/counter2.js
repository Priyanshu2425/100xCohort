// let counter = 0;
// while(true){
//     let sum = 0;
//     for(let i = 0; i < 1300100000; i++){
//         sum += i;
//     }
//     counter++;
//     console.log(counter);
// }

let count = 1;
function counter(){
    console.log(count);
    count++;
    setTimeout(counter, 1000);
}

counter();