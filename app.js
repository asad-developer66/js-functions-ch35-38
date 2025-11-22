//   Question 1:


// Write a function that displays current date & time in your browser.


// Answer 


// function showDateTime() {
//     let now = new Date();
//     document.write(now);
// }
// showDateTime();




//   Question 2:


// Write a function that takes first & last name and greets the user.


// Answer 


// function greet(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     document.write("Hello " + fullName + "!");
// }
// greet("Muhammad", "Ajmal");








//   Question 3:

// Write a function that adds two user-input numbers and returns the sum.


// Answer 


// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// let result = addNumbers(+prompt("Num 1:"), +prompt("Num 2:"));
// document.write("Sum = " + result);






//   Question 4:

// Calculator function (num1, num2, operator).

 

// Answer 



// function calculator(num1, num2, operator) {
//     if (operator === "+") return num1 + num2;
//     if (operator === "-") return num1 - num2;
//     if (operator === "*") return num1 * num2;
//     if (operator === "/") return num1 / num2;
//     return "Invalid Operator";
// }

// let result = calculator(5, 3, "+");
// document.write("Result = " + result);







//   Question 5:

// Write a function that squares its argument.


// Answer 



// function square(num) {
//     return num * num;
// }
// document.write(square(5)); 


//   Question 6:


// Write a function that computes factorial of a number.




// Answer 




// function factorial(n) {
//     let f = 1;
//     for (let i = 1; i <= n; i++) {
//         f *= i;
//     }
//     return f;
// }
// document.write(factorial(5)); 








//   Question 7:



// Write a function that takes start & end number and displays counting.


// Answer 


// function counting(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting(1, 10);









//   Question 8:



// Nested function to compute hypotenuse.


// Answer 



// function calculateHypotenuse(base, perp) {
//     function calculateSquare(x) {
//         return x * x;
//     }

//     let hypSq = calculateSquare(base) + calculateSquare(perp);
//     let hyp = Math.sqrt(hypSq);
//     return hyp;
// }

// document.write(calculateHypotenuse(3, 4)); 







//   Question 9:


// Function that calculates area of rectangle.


// Answer 


// function area(width, height) {
//     return width * height;
// }
// document.write(area(5, 10));






//   Question 10:


// Function that checks a string is palindrome or not.



// Answer 



// function isPalindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// document.write(isPalindrome("madam")); 




//   Question 11:


// Function that converts first letter of each word to uppercase.


// Answer 



// function capitalizeWords(str) {
//     let words = str.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// document.write(capitalizeWords("the quick brown fox"));





//   Question 12:



// Function that finds longest word in string.


// Answer 



// function longestWord(str) {
//     let words = str.split(" ");
//     let longest = words[0];

//     for (let i = 1; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }
//     return longest;
// }

// document.write(longestWord("Web Development Tutorial"));





//   Question 13:



// Function that counts occurrences of a letter in a string.


// Answer 



// function countLetter(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }

// document.write(countLetter("JSResourceS.com", "o")); 




//   Question 14:



// The Geometrizer — circle circumference & area.

// Answer 




// function calcCircumference(r) {
//     let circumference = 2 * Math.PI * r;
//     document.write("The circumference is " + circumference + "<br>");
// }

// function calcArea(r) {
//     let area = Math.PI * r * r;
//     document.write("The area is " + area);
// }

// calcCircumference(5);
// calcArea(5);

















