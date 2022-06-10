 
CHAP31-34

//part1
var rightNow = new Date();
document.write(rightNow)

//part2
var months = ['jan','feb','march','apr','may','june','july','august','sept','oct','nov','dec']
var newDate = new Date()
var currentMonth = newDate.getMonth()
var monthWords = months[currentMonth]
alert(monthWords)

//part3

var date = new Date();
var a = date.toString()
var c = a.slice(0,3)
document.write(c)

//part4
var dateToday = new Date();
var str = dateToday.toString();
var check = str.slice(0,3)
if (check ==="sat" || check ==="sun"){
    alert("Its a funday")
}
else{
    alert("Not a funday")
}

//part5
var day = new Date();
var daysOfMonth = day.getDay()
if (daysOfMonth< 16){
    alert("First 15  days of the months")
}

else{
    alert("Last days of the month")
}

//part6
var today = new Date();
alert("Current Date:" + " " + today)
var todayTime = today.getTime();
alert("Time in Miliseconds:" + " "+ todayTime)
var minutes = todayTime/(1000*60)

alert("Time in Minutes from jan1 1970: " + " " +  minutes)


//part7
var d = new Date();
var Hours = d.getHours()

if(Hours < 12){
    alert("Before Noon AM")
}

else{
    alert("PM")
}

//part8
var laterDate = new Date("June 30,2020")
alert("LaterDate:" + " " + laterDate)


//part9

var todayDate = new Date()
var RDate = new Date("June 18,2015")
var miliseconds = todayDate.getTime()
var miliseconds2 = RDate.getTime()
var difference = miliseconds-miliseconds2
var daysTillRamadan =Math.floor(difference/(1000*60*60*24)) 
alert("Days passed till 2015 ramadan are" +" " + daysTillRamadan )

//part10
var refDate = new Date("December 05, 2015 22:50:16")
var prevDate = new Date("January 01, 2015")
var refTime = refDate.getTime()
var prevTime = prevDate.getTime()
var diffInmili = refDate-prevDate
var second = Math.ceil(diffInmili/(1000*60))
alert("The Seconds passed since beginning of 2015 are" + " " + second)


//part11

var currentDate = new Date();
document.write(currentDate)
var hourAgo=new Date()
var hours = hourAgo.getHours()
hourAgo.setHours(hours-1)
document.write("1 hour ago it was" + " " +hourAgo)


Assignments of Chapters 35-38
// Task 1
function dateTime () {
    var date = new Date();
    document.write(date + "<br>");
}
dateTime();
// Task 2
function nameGreeter (fname, lname) {
    document.write("Welcome " + fname + " " + lname + "<br>");
}
nameGreeter("Syed Talha", "Askari");
// Task 3
function add (num1, num2) {
    return num1 + num2;
}
var num1 = +prompt("Enter First Number: ");
var num2 = +prompt("Enter Second Number: ");
var sum = add(num1, num2);
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
// Task 4
function calc (num1, num2, op) {
    switch(op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            var div = num1 / num2;
            return div.toFixed(2);
        case "%":
            return num1 % num2;
        default:
            return 0;
    }
}
alert("Options:\n +. Addition\n -. Subtraction\n *. Multiplication\n /. Division\n %. Remainder");
var num1 = +prompt("Enter First Number: ");
var num2 = +prompt("Enter Second Number: ");
var op = prompt("Enter Operator: ");
var ans = calc(num1, num2, op);
if (ans === 0) {
    document.write("Invalid<br>");
}
else {
    document.write(num1 + " " + op + " " + num2 + " " + " = " + ans + "<br>");
}
// Task 5
function square(num) {
    return num * num;
}
var num = +prompt("Enter Number: ");
var sqr = square(num);
document.write("Square of " + num + " is " + sqr + "<br>");
// Task 6
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else if (n < 0) {
        return -1;
    }
    else  {
        return n * fact(n - 1);
    }
}
var n = +prompt("Enter Number: ");
var f = fact(n);
if (f === -1) {
    document.write("Negative Number Factorials are not possible<br>");
}
else {
    document.write("Factorial of " + n + " is " + f + "<br>");
}
// Task 7
function count(start, end) {
    for (start; start <= end; start++) {
        document.write(start + "<br>");
    }
}
var start = +prompt("Enter starting number: ");
var end = +prompt("Enter ending number: ");
count(start, end);
// Task 8
function calculateSquare(num) {
    return num * num;
}
function calculateHypotenuse(base, perpendicular) {
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular)).toFixed(2);
}
var base = +prompt("Enter Base: ");
var perpendicular = +prompt("Enter Perpendicular: ");
document.write("Hypotenuse of Base: " + base + " and " + perpendicular + " is " + calculateHypotenuse(base, perpendicular) + "<br>");
// Task 9
function area(width, height) {
    return width * height;
}
var height = +prompt("Enter height: ");
var A = area(43, height);
document.write("Area of a triangle of width = 43 and height = " + height + " is " + A + "<br>");
// Task 10
function palindrome(str) {
    var revStr = str.split("").reverse().join("");
    if (str === revStr) {
        document.write("Given string \"" + str + "\" is a palindrome<br>");
    }
    else {
        document.write("Given string \"" + str + "\" is not a palindrome<br>");
    }
}
var str = prompt("Enter a phrase: ");
palindrome(str)
 
 
 
 
 //   Chapter # 21 -25

// Task #1
// var fName  = prompt("Enter your first name");
// var lName  = prompt("Enter your last name");
// var fullName= fName + lName;
// alert("Welcome " + "" +fullName +" " + "to this site"); 

// Task#2
//   var fPhone = prompt("Enter your favourite mobile model");
//   var phoneLength = fPhone.length;
//   document.write("My favourite Phone is:" + " " + fPhone + "<br>");
//   document.write("Length of string :" + " " + phoneLength);


// Task#3
//   var word ="Pakistan";
//   var wordIndex = word.indexOf('n');
//   document.write("String:" + " " + word + "<br>");
//   document.write("Index of 'n':" + " " + wordIndex);

// Task#4
//   var word ="Hello World";
//   var wordLastIndex = word.lastIndexOf('l');
//   document.write("String:" + " " + word + "<br>");
//   document.write("Last Index Of 'l':" + " " + wordLastIndex);

// Task#5
// var word = "Pakistani";
// var wordIndex = word.charAt('3');
// document.write("String:" + " " + word + "<br>");
// document.write("Character at index 3 is:" + " " + wordIndex);

// Task#6
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" " + lastName);
// alert("Welcome to our website" + " " + fullName);

// Task#7
//   var city = " Hyderabad";
//   var replace = city.replace('Hyder', 'Islam');
//   document.write("City:" + " " + city + "<br>");
//   document.write("After replacement:" + " " + replace);

// Task#8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newText = message.replace(/and/g, "&");
// document.write(newText);

// Task#9
//   var string = '472';
//   document.write("Value:" + " " + string + "<br>");
//   document.write("Type:" + " " + typeof(string)+ "<br>");
//   var number = Number(string);
//   document.write("Value:"+ " " + number + "<br>");
//   document.write("Type:" + " " + typeof(number));

// Task#10
// var word = prompt("Please type a word", "Type word here");
// var upperCase = word.toUpperCase();
// document.write("User input: " + word + "<br>" );
// document.write("Upper case: " + upperCase);


// Task#11

// var word = prompt("Please type a word", "Type word here");
// var firstChar = word.slice(0,1);
// var otherChars = word.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var titleCase = firstChar + otherChars;
// document.write("User input: " + word);
// document.write("<br>Title case: " + titleCase);

// Task#12

// var num = 35.36;
// var convetToString = num.toString();
// document.write("Number: " + num + "<br>");
// var string = convetToString.replace(".","");
// document.write("Result:" + " " + string);

// Task#14

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var convertToLower = search.toLowerCase();
// if (bakeryItems .indexOf(convertToLower) != -1)
// {
//     document.write(convertToLower + " is <strong>available</strong> at index " + bakeryItems .indexOf(convertToLower) + " in our bakery");
// }

// else
// {
//     document.write("We are sorry " + convertToLower + " is <strong>not available</strong> in our bakery");
// }

// Task#16
// var university = "University of Karachi";
// var splitUni = university.split("");
// for (var i=0;i<splitUni.length;i++)
// {
//     document.write("<br>" + splitUni[i]);
// }

// Task#17
//   var input = prompt("Enter any word");
//   var length = input.length;
//   var index = input.charAt(length-1);
//   document.write("User Input:" + " " + input+ "<br>");
//   document.write("Last character of  input:" + " " + index);

// Task#18

// var string = "The quick brown fox jumps over the lazy dog.";
// var stringInLowerCase = string.toLowerCase();
// var count = (stringInLowerCase.match(/the/g)).length;
// document.write("Text: " + string);
// document.write("<br>There are "+count+" occurence(s) of the word 'the'");

// Chapter # 26 -30

// Task#1

// var num = +prompt("Enter a positiver integer");
// var roundOffValue = Math.round(num);
// var floorValue = Math.floor(num);
// var ceilValue = Math.ceil(num);
// document.write("number: "+num);
// document.write("<br>round Off value: "+roundOffValue);
// document.write("<br>floor value: "+floorValue);
// document.write("<br>ceil value: "+ceilValue);

// Task#2
//   var input = +prompt("Enter a negative floating point");
//   var sign = Math.sign(input);
//   var roundOff = Math.round(input);
//   var floor = Math.floor(input);
//   var ceil = Math.ceil(input);
//   if(sign===-1){
//     document.write("number" + " " + input + "<br>");
//     document.write("round Off value :" + " " + roundOff + "<br>");
//     document.write("float value:" + " " + floor  + "<br>");
//     document.write("ceil value:" + " " + ceil);
//   }       
//   else{
//     alert("Enter a negative floating point");
//   }

// Task#3
//   var number = +prompt("Enter a number");
//   var absoulteValue = Math.abs(number);
//   document.write("The absolute value of" + " " + number + " "+ "is " + " " + absoulteValue);

// Task#4
//   var dice = "random dice";
//   var random = Math.floor(Math.random()*6 + 1);
//   document.write(dice + " " + random);

// Task#5
//   var coin= "random coin value:";
//   var head = "Head";
//   var tail = "Tail";
//   var random = Math.floor(Math.random()*2 +1);
//   if(random ===2){
//     document.write("2"+ "<br>" + coin +" " + head);
//   }
//   else{
//     document.write("1" + "<br>" + coin + " " + tail);
//   }
  
// Task#6
//   var num = "random number between 1 and 100:";
//   var random = Math.floor (Math.random()*100 +1);
//   document.write(num + " " + random);

// Task#7

// var num = prompt("Enter your weight in Kilograms");
// var weight =  parseFloat(num);
// var totalWeight = weight + 8.3;
// document.write("The weight of user is " + totalWeight + " kilograms");

//Task#8

// Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user

var guess = +prompt("Enter a number between 1 and 10");
var secretNumber = Math.floor(Math.random() * 10) + 1;
if (guess === secretNumber) 
{
alert("Well done! Correct answer");
}
if (guess !== secretNumber) 
{
    alert("Try again!");






// Chapter # 09 ------ 11 



        //    Question 01 

//  var city = prompt("Enter the name of city")
//  if (city == "karachi" || city == "Karachi") {
//      alert("Welcome to the city of lights")
//  }



//         Question 02

// var gender = prompt("Enter your gender")
// if (gender == "male" || gender == "Male") {
//     alert("Good Morning Sir")
// } else if (gender == "female" || gender == "Female") {
//     alert("Good Morning Ma’am")
// }



//        Question  03  

// var color = prompt("Enter the color")
// color = color.toLowerCase()

// if (color == "red") {
//     alert("Vehicles must Stop")
// } else if (color == "green") {
//     alert("Vehicles move now")
// } else if (color == "yellow") {
//     alert("Vehicles should get ready to move")
// } else {
//     alert("Invalid color")
// }



//            Question 04

// var remFuel = +prompt("Enter the amount of remaining fuel in Litres")

// if (remFuel < 0.25) {
//     alert("Please Refill the fuel in your car")
// }



//          Question 05


// "A"

// var a = 4;
// if (++a === 5) {
//     alert("given condition for the variable is true");
// }

// given consition is true because the value is equal to 5 


//                    "B" 
// var b = 82;
// if (b++ === 83) {
//     alert("given consdition for the variable is true")
// }

//   condition is not true because the value is not equals to 83 at this point 


//                     "C" 
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true")
// }
// if (c === 13) {
//     alert("condition 2 is true")
// }
// if (++c < 14) {
//     alert("condition 3 is true")
// }

// if (c === 14) {
//     alert("condition 4 is true")

// }

//    condition 2 is true 


//            "D" 
// var materialCost = 2000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals")
// }

//          the consition is true 


//            "E" 
// if (true) {
//     alert("True")
// }
// if (false) {
//     alert("False")
// }

//          the condition is true 


//              "F" 


// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

//         the condition is true 



//            Question 06

// var marksObtain = +prompt("Enter the marks obtained in 3 subject")
// var totalMarks = +prompt("Enter the total marks")
// var percentage = marksObtain / totalMarks * 100

// document.write("<b> MARKS SHEET </b><br>")
// document.write("Marks obtained: " + marksObtain + "<br>")
// document.write("Total marks: " + totalMarks + "<br>")
// document.write("Percentage: " + percentage + "%" + "<br>")


// if (percentage >= 80) {
//     document.write("Grade: A-one" + "<br>")
//     document.write("Remarks: Excellent" + "<br>")
// } else if (percentage >= 70) {
//     document.write("Grade: A" + "<br>")
//     document.write("Remarks: Good" + "<br>")
// } else if (percentage >= 60) {
//     document.write("Grade: B" + "<br>")
//     document.write("Remarks: You need to improve" + "<br>")
// } else if (percentage < 60) {
//     document.write("Grade: Fail" + "<br>")
//     document.write("Remarks: Sorry" + "<br>")
// }



//             Question 07

// var secretNumber = 5
// var guess = +prompt("Enter the Secret number ranging 1-10")

// if (guess === secretNumber) {
//     alert("Bingo! Correct Answer")

// } else if (guess === ++secretNumber) {
//     alert("Close enough to the correct answer")

// } else if (guess = --secretNumber) {
//     console.log("Close enough to the correct answer")
// }



//             Question 08


// var number = +prompt("Enter the number")
// if (number % 3 === 0) {
//     alert(number + "is divisible by 3")

// } else {
//     alert("The given number does not divisible by 3")
// }



//             Question 09


// var num = +prompt("Enter the number")

// if (num % 2 === 0) {
//     alert(num + " is an Even number")
// } else if (num % 2 != 0) {
//     alert(num + " is an Odd number")
// }


//             Question 10


// var temp = +prompt("Enter the temperature in Celcius")

// if (temp >= 40) {
//     alert("It's very hot")
// } else if (temp > 30) {
//     alert("Weather is normal")
// } else if (temp > 20) {
//     alert("Weather is Cool today")
// } else if (temp > 10) {
//     alert("OMG! Weather today is very cool")
// }



//              Question 11

// var firstNumber = +prompt("Enter the first number")
// var secondNumber = +prompt("Enter the second number")
// var operation = prompt("Enter the operation to perform +,-.*,/")

// if (operation == "+") {
//     console.log("The sum of two numbers is " + firstNumber + secondNumber)
// } else if (operation == "-") {
//     console.log("The difference of two numbers is " + firstNumber - secondNumber)
// } else if (operation == "*") {
//     console.log("The product of two numbers is " + firstNumber * secondNumber)
// } else if (operation == "/") {
//     console.log("The division of two numbers is " + firstNumber / secondNumber)
// }



            //   Chapter # 12 ----- 13

        
//          Question 01


// var numb = prompt("Enter Number or String")
// if (numb === "A") {
//     alert("A = 65 & this is Upercase")
// } else if (numb === "a") {
//     alert("a = 97 & this is lowercase")
// } else if (numb === "Z") {
//     alert("Z = 90 & this is upercase")
// } else if (numb === "z") {
//     alert("z = 122 & this is lowercase")
// }



//         Question 02

// var abc = +prompt("Enter 1st number")
// var meo = +prompt("Enter 2nd num")
// if (abc > meo) {
//     console.log(abc + " is larger number")
// } else(meo + " is larger")



//         Question 03

// var num = +prompt("Enter a number")
// if (num > 0) {
//     console.log("Number is Positive")
// } else {
//     console.log("Number is Negative")
// }



//        Question 04


// var input = prompt("Enter a character:");
// if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
//     alert("Its a vowel");
// } else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
//     alert("Its a consonant");
// } else {
//     alert("Invalid input please enter an alphabet");
// }


//          Question 05

// var password = "123"
// var confrimPass = prompt("Enter your password")
// if (confrimPass.toLowerCase() == password) {
//     console.log("password is right")
// } else {
//     console.log("password is incorrect")
// }



//         Question 06  

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day"
// } else {
//     greeting = "Good evening";
// }



//          Question 07

// var time1 = prompt("Enter time like this 12:00 pm")

// if (time1 >= 0000 && time1 <= 1200) {
//     alert("Good Morning")
// } else if (time1 >= 1200 && time1 <= 1700) {
//     alert("Good Afternoon")
// } else if (time1 >= 1700 && time1 <= 2100) {
//     alert("Good Evening")
// } else if (time1 >= 2100 && time1 <= 2359) {
//     alert("Good Night")
// }



                //   Chpter # 14 ---- 16


//          Question 01

// var student_name = []
// student_name.push("xyz")


//            Question 02

// var student = [{}]





//           Question 03

// var str = ["Hello World"]
// console.log(str)



//            Question 04

// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(number)



//          Question 05

// var boolean = [true, false]
// console.log(boolean)



//            Question 06

// var mix = ["Pakistan", 3227, true]
// console.log(mix)



//            Question 07

// var quali1 = ["SSC", "HSC", "BCS", "B.COM", "BBA", "MSC", "M.Phil", "PhD"]
// document.write("<b> Qualification </b><br>")
// document.write("1)" + quali1[0] + " <br>")
// document.write("2)" + quali1[1] + " <br>")
// document.write("3)" + quali1[2] + " <br>")
// document.write("4)" + quali1[3] + " <br>")
// document.write("5)" + quali1[4] + " <br>")
// document.write("6)" + quali1[5] + " <br>")
// document.write("7)" + quali1[6] + " <br>")
// document.write("8)" + quali1[7] + " <br>")





//              Question 09

// var colors = ["Red", "White", "blue", "grey"]
// console.log(colors)

//             (A)  


// var add_Color_start = prompt("what color he/she wants to add to the beginning")
// colors.unshift(add_Color_start)

//            (B) 


// var add_Color_End = prompt("what color he/she wants to add to the End")
// colors.push(add_Color_End)

//           (C) 


// colors.push("Pink", "Black")
// console.log(colors)

//           (D) 


// colors.shift()

//          (E)  


// colors.pop()

//             (F)  


// var del_Color_start = prompt("what color he/she wants to delete to the beginning")
// colors.shift(del_Color_start)

//              (G) 


// var del_Color_End = prompt("what color he/she wants to delete to the End")
// colors.pop(del_Color_End)



//          Question 10  

// var score = [320, 230, 420, 180]
// document.write("Score of Students: " + score)
// var ascending = score.sort()
// document.write("Ordered Score of students: " + ascending)



//           Question 11


//           method 01

// var citiesList = ["Karachi", "Lahore", "Peshawar", "Quetta"]
// console.log("Cities list: " + citiesList)
// var selectedCities = [citiesList[1] + " and " + citiesList[2]]
// console.log("Selected Cities: " + selectedCities)

//           method 02

// var cityName = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
// var newOne = cityName.slice(1, 3)


//           Question 12


// var arr = ['This', 'is', 'my', 'cat']
// arr.join(" ")



            //   Chapter # 17 ----  20


//                    Question 01


var multiArrEmpty = [
    [],
    []
]

//                   Question 02

var multiArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]

//                    Question 03


for (var i = 1; i <= 10; i++) {
    document.write(i + " <br>")
}


//                  Question 04


var table = +prompt("Please enter table number")
var length = +prompt("Please enter length of table")

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>")
}

//              Question 05




//                Question 06


//              Section (A)

document.write(" <h2>a. Counting: </h2>")
for (var i = 1; i <= 15; i++) {
    document.write(i + ",")

}


//               Section (B)  

document.write(" <h2>b. Reverse Counting: </h2> ")
for (var i = 10; i >= 1; i--) {
    document.write(i + ",")
}


//              Section (C)

document.write(" <h2>c. Even</h2>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ",")
}

//              Section (D)

document.write(" <h2>d. odd </h2>")
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + ",")
}

//                 Section (D)

document.write("<h2>e. Series </h2>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + "K,")
}


//            Question 10

document.write("<h2>5 Ranging</h2>")
for (var i = 5; i <= 100; i = i + 5) {
    document.write(i + ",")
}


        

       