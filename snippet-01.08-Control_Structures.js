// Conditional Statements: if, if-else, if-else-if, switch
let score = 85;
if (score > 80) {
  console.log("Congratulations! You passed with distinction.");
}

let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}

let number = 2;
if (number === 1) {
  console.log("One");
}
else if (number === 2) {

  console.log("Two");
}
else {
  console.log("Another number");
}

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}

// Loops - for, while, do-while
for (let i = 0; i < 5; i++) {
  console.log(`Number ${i}`);
}

let i = 0;
while (i < 5) {
  console.log(`Number ${i}`);
  i++;
}

let j = 0;
do {
  console.log(`Number ${j}`);
  j++;
} while (j < 5);
