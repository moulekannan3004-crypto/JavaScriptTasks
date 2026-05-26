//Employee Bonus Filter (filter(), map())
let employees = [
  { name: "john", salary: 200000 },
  { name: "rahul", salary: 500000 },
  { name: "siva", salary: 700000 }
];

employees
  .filter(emp => emp.salary > 300000)
  .map(emp => console.log(`Congrats ${emp.name}`));


 // Shopping Cart Total (reduce())
let cart = [1200, 3400, 500, 999];

let total = cart.reduce((sum, item) => sum + item, 0);

console.log(total);


//Login Username Formatter (slice(), toUpperCase())
let user = "naveen";

let formatted =
  user.slice(0, 1).toUpperCase() +
  user.slice(1);

console.log(formatted);


//OTP Checker (includes())
let otp = "560890";

if (otp.includes("0")) {
  console.log("Valid OTP");
} else {
  console.log("Invalid OTP");
}


//Food Delivery App (push(), pop())
let orders = ["burger", "pizza"];

orders.push("shawarma");
orders.pop();

console.log(orders);


//Attendance Checker (every())
let marks = [40, 50, 70, 80];

let result = marks.every(mark => mark >= 35);

console.log(result);


//Find VIP Customer (find())
let customer = [
  { name: "arun", purchase: 5000 },
  { name: "vijay", purchase: 15000 },
  { name: "surya", purchase: 25000 }
];

let vip = customer.find(c => c.purchase > 10000);

console.log(vip.name);


//Reverse Chat Message (split(), reverse(), join())
let msg = "hello";

let reversed = msg.split("").reverse().join("");

console.log(reversed);


//Remove Duplicate Product (indexOf())
let products = ["tv", "laptop", "mobile", "watch"];

let position = products.indexOf("mobile");

console.log(position);


//Student Rank Sort (sort())
let marks = [99, 45, 12, 67, 89];

marks.sort((a, b) => a - b);

console.log(marks);


//Movie Search (some())
let movies = ["Jailer", "Leo", "Vikram"];

let exists = movies.some(movie => movie === "Leo");

console.log(exists);


//Hide Mobile Number (slice())
let num = "6383366774";

let lastFour = num.slice(-4);

console.log(lastFour);


//Online Exam Result (Ternary Operator)
let mark = 78;

let result = mark >= 35 ? "Pass" : "Fail";

console.log(result);


//Cab Booking Price (function, return)
function totalFare(baseFare, extraKm) {
  return baseFare + extraKm;
}

console.log(totalFare(100, 50));


//Instagram Hashtag Generator (replaceAll())
let tag = "web developer";

let hashtag = tag.replaceAll(" ", "_");

console.log(hashtag);


//Netflix Kids Content (filter())
let movies = [
  { name: "A", age: 13 },
  { name: "B", age: 18 },
  { name: "C", age: 10 }
];

let kidsMovies = movies.filter(movie => movie.age < 18);

kidsMovies.forEach(movie => console.log(movie.name));


//E-commerce Product Search (startsWith())
let product = "iphone";

console.log(product.startsWith("i"));


//WhatsApp Group Names (forEach())
let groups = ["office", "friends", "family"];

groups.forEach((group, index) => {
  console.log(`${index + 1} ${group}`);
});


//Salary Highest Finder (reduce())
let salary = [20000, 50000, 70000, 10000];

let highest = salary.reduce((max, value) =>
  value > max ? value : max
);

console.log(highest);


//Password Security Checker (length, includes())
let password = "navi@123";

if (password.includes("@") && password.length >= 8) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}