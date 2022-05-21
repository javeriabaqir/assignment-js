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