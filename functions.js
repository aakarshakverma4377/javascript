// Simple function (no input, no return)
// function greet(hello) {
//     console.log("Hello, welcome to Javascript!");
// }
//
// greet();

// // Function with Parameters (input)
// function zeus(name) {
//     console.log("Hello, " + name + "!");
// }
//
// zeus('Aakarshak');

// //Function with Return Value
// function add(a, b) {
//     return a + b;
// }
//
// let sum = add(59, 97);
// console.log(sum);

// Real-life Style
function calculateBill(amount, taxRate) {
    let tax = amount * taxRate;
    let total = amount + tax;
    return total;
}

let finalAmount = calculateBill(1000000, 0.18); // 1000 with 18% tax
console.log("Final Bill: " + finalAmount);
