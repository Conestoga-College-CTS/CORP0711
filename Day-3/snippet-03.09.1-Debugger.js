function calculateSum(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
      print(`Adding: ${numbers[i]}`); // Log intermediate values
      sum += numbers[i]; // Add each number to sum
  }
  
  return sum;
}

function print(data){
  console.log(data);
}
// Test the function
const numbersArray = [10, 20, 30, 40, 50];
const result = calculateSum(numbersArray);

console.log("Total Sum:", result);

