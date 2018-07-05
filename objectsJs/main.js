// OBJECTS JAVASCRIPT

// Objects are a collection of properties and methods

//Syntax

// This is one way of doing it.
var students = new Object();

// the square brackets [] are an operator that takes the students object and sets the property, in this case a string.  

students["FirstName"] = "Sukhveer"; // objects always have name value pairs

students["Class"] = "JavaScript"; 

students["Grade"] = "Distinction";

students["Array"] = "Test";

// console.log(students);

// console.log(students.FirstName);

// having a nested object (object within an object)
students.address = new Object();

// still have to call the first object, because that's where your new object is sitting

//the dot precedence works from left to right which mean we can continuously add more. 
students.address.town = "Slough";

// console.log(students);

students.address.street = "London Road";

// if you wish to add an object, within an object, within the initial object, this is how you'd do it. Declare the first 2/3 objects and set it to a new object

students.address.street = new Object(); //1

students.address.street.checking = "test"; //2

// console.log(students.address.street.checking); //3

// console.log(students.address.street);

// The above is one way of declaring an object

//2nd way of declaring a number: 

// equivalent to new Object
var student1 = { // whenever we use the {} the parser will view it as a new object. 
    
    firstName: "Sukhveer",
    secondName: "Sangha",
    
    address: { // you can declare a new object within the object by declaring the new object and using the curly brackets.
        
        doorNumber: "254",
        streetName: "London Road",
        postCode: "SL3 7HT"
        
    }
    
}

function greeting(){
    
    console.log("Good morning " + student1.firstName); 
    
}

// greeting();

student1.dob = {
    
    dayOfBirth: "1",
    monthOfBirth: "January",
    yearOfBirth: "1990",
    placeOfBirth: "Ealing"
    
}

// console.log(student1.dob.dayOfBirth);


// activity1 - create an object with three properties and declare them. 

var continents = {
    
    southAmerica: "Argentina, Brazil, Chile...",
    northAmerica: "USA, Canada, Mexico...",
    europe: "UK, France, Italy..."
    
}

function geography(){
    
    console.log(continents.southAmerica + continents.northAmerica + continents.europe);
    
}

// geography();


var continents2 = new Object();

continents2["southAmerica"] = "Columbia, Chile, Peru...";
continents2["northAmerica"] = "Panama, Costa Rica, Alaska";
continents2["asia"] = "India, China, Japan";

// console.log(continents2.southAmerica + continents2.northAmerica + continents2.asia);


// Task 2 - Create an object and output each object in a concatenated string onto the webpage

// And // Task 3 (add the html doc on click) - Create an object with properties and a method(function) - Access the method (with the result in the window). 


// And// Task 4 - Create an object within an object (nested) and display the nested object property on to the webpage. 


//var weekend = {
//    
//    friday: "lounge and watch some tele",
//    saturday: "hit the gym and catch the footy",
//    sunday: "do some coding challenges and work on a project"
//    
//}
//
//weekend.friFood = {
//    
//    breakfast: "Porridge with a chopped banana.",
//    dinner: "Salmon with veg and perhaps roast potatoes."
//    
//}
//
//weekend.satFood = {
//    
//    breakfast: "Scrambled egg and beans on toast.",
//    dinner: "Chicken and veg!"
//    
//}
//
//weekend.sunFood = {
//    
//    breakfast: "Full-english",
//    dinner: "Something healthy"
//    
//}
//
//
//var clickFriday = document.getElementById("friday").addEventListener('click', thisFriday);
//
//function thisFriday (){
//    
//    document.getElementById("fri").innerHTML = "Tomorrow night I will " + weekend.friday + ".";
//    console.log("Tomorrow night I will " + weekend.friday + ".");
//    
//}
//
//var fridayB = document.getElementById("fridayBreakfast").addEventListener('click', fridayBreakfast);
//
//function fridayBreakfast (){
//    
//    document.getElementById("friBrekkie").innerHTML = "Friday morning I will have " + weekend.friFood.breakfast + ".";
//    console.log(weekend.friFood.breakfast);
//    
//}
//
//var fridayD = 
//document.getElementById("fridayDinner").addEventListener('click', fridayDinner);
//
//function fridayDinner (){
//    
//    document.getElementById("friDinner").innerHTML = "For dinner I'll probably fancy " + weekend.friFood.dinner + ".";
//    console.log(weekend.friFood.dinner);
//    
//}
//
//var clickSaturday = document.getElementById("saturday").addEventListener('click', thisSaturday);
//
//function thisSaturday (){
//    
//    document.getElementById("sat").innerHTML = "The next day I would like to " + weekend.saturday + ".";
//    console.log("The next day I would like to " + weekend.saturday + ".");
//    
//}
//
//var saturdayB = document.getElementById("saturdayBreakfast").addEventListener('click', saturdayBreakfast);
//
//function saturdayBreakfast (){
//    
//    document.getElementById("satBrekkie").innerHTML = "The next morning I would like to have " + weekend.satFood.breakfast + ".";
//    console.log(weekend.satFood.breakfast);
//    
//}
//
//var saturdayD = document.getElementById("saturdayDinner").addEventListener('click', saturdayDinner);
//
//function saturdayDinner (){
//    
//    document.getElementById("satDinner").innerHTML = "For dinner it will have to be... " + weekend.satFood.dinner + ".";
//    console.log(weekend.satFood.dinner);
//    
//}
//
//var clickSunday = document.getElementById("sunday").addEventListener('click', thisSunday);
//
//function thisSunday (){
//    
//    document.getElementById("sun").innerHTML = "Finally " + weekend.sunday + " before Monday!";
//    console.log("Finally " + weekend.sunday + " before Monday!");
//    
//}
//
//var sundayB = document.getElementById("sundayBreakfast").addEventListener('click', sundayBreakfast);
//
//function sundayBreakfast (){
//    
//    document.getElementById("sunBrekkie").innerHTML = "A good start to a chilling Sunday should include... " + weekend.sunFood.breakfast + " before a busy day!";
//    console.log(weekend.sunFood.breakfast);
//    
//}
//
//var sundayD = document.getElementById("sundayDinner").addEventListener('click', sundayDinner);
//
//function sundayDinner (){
//    
//    document.getElementById("sunDinner").innerHTML = "Not sure but " + weekend.sunFood.dinner;
//    console.log(weekend.sunFood.dinner);
//}

// thisWeekend();

// Task 5 - build an object constructor - 
//      - Create 2 instances of the object
//      - Display the properties of the object instances onto the webpage.
//
//var restaurant = new Object();
//
//restaurant.name = "Lucky's Taba";
//restaurant.seats = 50;
//restaurant.booked = 30;
//
//var checkReservation = document.getElementById("reserve").addEventListener('click', restaurantAvailability);
//
//function restaurantAvailability(){
//    
//    document.getElementById("check").innerHTML = "The number of seats available are " + (restaurant.seats - restaurant.booked);
//}
//

// JavaScript Quiz Project










