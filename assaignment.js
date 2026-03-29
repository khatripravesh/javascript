// 1. Grade 

    let myScore = 94;

    if (myScore > 90) {
        console.log("A");
    } else if (myScore >= 80 && myScore <= 90) {
        console.log("B");
    } else {
        console.log("C");
    }



// 2. Triangle 
for (let i = 1; i <= 10; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "2";
    }
    console.log(line);
}


// 3. Fibonacci Sequence
let num1 = 0;
let num2 = 1;

for (let i = 1; i <= 5; i++) {
    if (i === 1) {
        console.log(num1);
    } else if (i === 2) {
        console.log(num2);
    } else {
        let next = num1 + num2;
        console.log(next);
        num1 = num2;
        num2 = next;
    }
}