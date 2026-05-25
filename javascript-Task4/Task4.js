//Task1
function checkExamEligibility(attendance, feesPaid) {
    if (attendance >= 75 && feesPaid) {
        return "Allowed for Exam";
    } else {
        return "Not Allowed";
    }
}

console.log(checkExamEligibility(80, true));

//Task2
let password = "Abc12345";

let hasUppercase = false;
let hasNumber = false;

for (let char of password) {
    if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
    }

    if (char >= '0' && char <= '9') {
        hasNumber = true;
    }
}

if (password.length >= 8 && hasUppercase && hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}

//Task3

let numbers = [10, 50, 80, 20, 90, 70];

let largest = numbers[0];
let secondLargest = numbers[0];

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(secondLargest);


//Task 4

let seats = [false, false, false, false, false, false, false, false, false, false];

let seatNumber = 3;

if (seats[seatNumber - 1]) {
    console.log("Seat Already Booked");
} else {
    seats[seatNumber - 1] = true;
    console.log("Seat Booked Successfully");
}

//Task 5
function withdraw(balance, amount) {
    if (amount > balance) {
        return "Insufficient Balance";
    }

    if ((balance - amount) < 1000) {
        return "Minimum Balance Must Be 1000";
    }

    return "Withdraw Successful";
}

console.log(withdraw(10000, 9500));

//Task 6

let products = ["iphone", "samsung", "realme", "oppo"];
let searchProduct = "realme";

let found = false;

for (let product of products) {
    if (product.toLowerCase() === searchProduct.toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}

//Task 7

let age = 20;
let hasVoterId = true;
let citizenship = "Indian";

if (age >= 18) {
    if (hasVoterId && citizenship === "Indian") {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible to Vote");
    }
} else {
    console.log("Not Eligible to Vote");
}

//Task 8

function calculateBill(foodPrice, gst, deliveryCharge, discount) {
    let gstAmount = (foodPrice * gst) / 100;

    let totalBill = foodPrice + gstAmount + deliveryCharge - discount;

    return totalBill;
}

let bill = calculateBill(400, 5, 50, 20);

console.log("Total Bill : ₹" + bill);

//Task 9

let word = "javascript";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

console.log(reversed);

//Task 10

let isLiked = false;
let totalLikes = 0;

function toggleLike() {
    isLiked = !isLiked;

    if (isLiked) {
        totalLikes++;
    } else {
        totalLikes--;
    }

    let status = isLiked ? "Liked ❤️" : "Like 🤍";

    console.log(status);
    console.log("Total Likes:", totalLikes);
}

toggleLike();
toggleLike();