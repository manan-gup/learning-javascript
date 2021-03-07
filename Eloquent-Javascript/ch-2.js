/* FizzBuzz
for (let i=1;i<=100;i++) {
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    } else if (i%3==0) {
        console.log("Fizz");
    } else if (i%5==0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} */

/* Print chess board pattern
let printBoard = size => {
    let board = "";
    for (let i=1;i<=size;i++) {
        for(let j=1;j<=size;j++) {
            if (i%2==0) {
                board += " #";
            } else {
                board += "# ";
            }
        }
        board += "\n";
    }
    console.log(board);
}
printBoard(4); */