// function addition(a, b) {
//     console.log("Addition is ", a + b);
// }

// function subtraction(a, b) {
//     console.log("Subtraction is ", a - b);
// }

// function multiplication(a, b) {
//     console.log("Multiplication is ", a * b);
// }

// function division(a, b) {
//     console.log("Division is ", a / b);
// }

// let name = "Jaynesh Sarkar";

// module.exports = {
//     name,
//     addition,
//     subtraction,
//     multiplication,
//     division
// };

module.exports.addition = (a, b) => {
    console.log(a + b);
}

module.exports.substraction = (a, b) => {
    console.log(a - b);
}

module.exports.multiplication = (a, b) => {
    console.log(a * b);
}

module.exports.division = (a, b) => {
    console.log(a / b);
}

module.exports.name = "Jaynesh Sarkar";

/*
 {
        addition : Function(a,b),
        substraction : Function(a,b),
        multiplication : Function(a,b),
        division : Function(a,b),
        name : "Jaynesh Sarkar",
 }
*/