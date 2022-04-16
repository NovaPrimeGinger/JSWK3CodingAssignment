var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log((ages[ages.length - 1]) - ages[0]);
//answer to 1a logs: 90
//Now adding a new age to the array
//I am 27
//Hello graders!
ages.push(27);
console.log(ages[ages.length - 1] - ages[0]);
//added new age and repeated 1a resulting in 24
var sumOfAges = ages.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sumOfAges);
//this was a test for myself to see if what im thinking about will work 
// while(ages = true) {
//     console.log(sumOfAges / (ages.length));
// }
// woops infinite loop!
for(let i = (ages.length - 1); i < ages.length; i++) {
    console.log(sumOfAges / (ages.length))
}
//answer to 1c logs 28.55
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var lengths = names.map(function(element){
    return element.length;
});
var sumOfNames = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sumOfNames);
for(let i = (ages.length - 1); i < ages.length; i++) {
    console.log(sumOfNames / (names.length))
}
//answer to 2a logs 3.83
for(let i = (names.length - 1); i < names.length; i++) {
    console.log(names.join(' '))
}
//answer to 2b logs
console.log(lengths);
//I kind of already did #5 with my variable lengths, but I will do it with a loop instead of an array method
for(let i = (names.length - 1); i < names.length; i++) {
    var namesLength = names.map(function(element){
        return element.length;
});
};
console.log(namesLength);
console.log(names);
//I just did this because the 6 in front was throwing me off
for(let i = (namesLength.length - 1); i < namesLength.length; i++) {
    var sumOfNameLengths = lengths.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
    });
};
console.log(sumOfNameLengths);
//Answer 6 logs 23
function repeatWord(str, num) {
    var repeatedWord = "";
  while (num > 0) {
    repeatedWord += str;
    num--;
  }
  console.log(repeatedWord);
};
repeatWord('Pizza', 2);
//Pizza Pizza!
var firstName = 'Justin';
var lastName = 'Trammell';
function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log(createFullName('Justin', 'Trammell'))

var sumOfArray = 0;
var ages2 = [9, 10, 100, 54]
function moreThan100(ages2) {
    for (var i = 0; i < ages2.length; i++) {
        sumOfArray += ages2[i]
      };
    if (sumOfArray > 100) {
        console.log(true)
    }
};
moreThan100(ages2);
//That problem took me so long
function sumOfArr(ages2) {
    for (var i = 0; i < ages2.length; i++) {
        sumOfArray += ages2[i]
    }
    console.log((sumOfArray) / (ages2.length));
}
sumOfArr(ages2);
var a = [3, 2, 11];
var sumOfA = 0;
var sumOfB = 0;
var b = [8, 5, 2];
function isFirstGreater(a, b) {
    for (var i = 0; i < a.length; i++) {
        sumOfA += a[i];
    }
    for (var i = 0; i < a.length; i++) {
        sumOfB += b[i];
    }
    if (((sumOfA) / (a.length)) > ((sumOfB) / (b.length))) {
        console.log(true)
    }
}
isFirstGreater(a, b);
var isHotOutside = true
var moneyInPocket = 20
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && (moneyInPocket > 10.50)) {
        console.log(true)
    }
};
function Jarvis (fullName, powerOn) {
    if ((fullname = 'Tony Stark') && (powerOn = true)) {
        alert('Hello, Mr.Stark, what can I do for you?')
    }
};
//I made this to access the Jarvis program if power is turned on and the user name is 'Tony Stark'
//I really like Marvel movies!
