/* Assignments 1 */

//2
/*
document.write("<h1>Page</h1>");
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontWeight = "bold";
*/
//3
/*
console.log("%cElzero %cWeb %cSchool" , "color:red; font-size:30px","color:blue; font-size:30px " ,"color:green;font-size:30px" );
*/
//4
/*
console.group("Group 1");
console.log("message one");
console.log("message two");
console.group("Child Group");   
console.log("message one");
console.log("message two");
console.group("Grand Child Group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("message one");
console.log("message two");
console.groupEnd();
*/
//5
/*
console.table(["Elzero","Ahmed", "Sameh"]);
*/
//6
//put it in a comment//

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 2 */

//1
/*
let NumberOne = 10;
let NumberTwo = 20;
console.log(NumberOne + '' + NumberTwo );
console.log(typeof `${NumberOne} "+" ${NumberTwo}`);
console.log(`${NumberOne}${NumberTwo}`);
console.log(typeof `${NumberOne} "+" ${NumberTwo}`);
console.log(NumberOne + '' + "\n" + NumberTwo );
console.log(`${NumberOne}
${NumberTwo}`);
*/

//2
/*
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
*/

//3

/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/

//4
/*
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_
*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 3 */

/*  challenge
let a = 10;
let b ="20";
let c =80;

 // Note that if you incremented a variable and write after that in same equation it will get incremented as (a) in console number 2
console.log(++a + +b++ + +c++ - +a++ +a);  // 11 . 20 . 80 - 11  == 100 -->    //a = 12    // b =21   c = 81
console.log(++a + -b + +c++ - -a++ + +a);  // (13 + -21) + (81 + 13) + 14  == 100    --> //a = 14  //b = 21  //c = 82
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);  //81 + 21 + (13 * 21) - (22 * 13) + (12 - 1) == 100
*/

//1

/*
// Replace ? With Arithmetic Operators
console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
*/

//2
/*
let num = 3;

// Solution One
//console.log(num + num); // 6

// Solution Two
//console.log(num * --num); // 6

// Soultion Three
//console.log(num++ + --num); // 6

// Soultion Four
//console.log(num * num - num++); // 6

// Solution Five
//console.log(num-- + ++num); // 6

// Solution Six
//console.log(num-- * num); // 6
*/

//4
/*
let points = 10;

points++ ;
points++ ;
points++ ;

console.log(points); // 13

points--;
points--;
points--;
points--;
points--;

console.log(points); // 8;
*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 4 */

//challenge
/*
let a = 1_00;
let b =2_00.5;
let c =1e2;
let d =2.4;

//smallest
console.log(Math.trunc(Math.min(a,b,c,d)));

//10000
console.log(Math.pow(a,Math.trunc(d)));

//d to int

console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(parseInt(d));

//use variable b, d
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));  //66.67 -> string
console.log(Math.ceil(Math.floor(b) / Math.ceil(d)));  //67 -> number
*/

//challenge 2
/*
let a = "Elzero Web School";

console.log() ;  //zero
*/
/*
//1


*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 5 */

/*
//challenge 1
let a = 10;

 a < 10 ? console.log(10): a>=10 && a <=40 ? console.log("10 to 40") : a>40? console.log("> 40") : console.log("unknown");

 //challenge 2

let st = "Elzero Web School";

if((st.repeat(2).length).toString() === "34")
{
    console.log("Good");
}

//challenge 3

if( (st.includes('W' || 'w')?'w':0) ==='w')
{
    console.log("Good");
}


//challenge 4

if( st !== "string")
{
    console.log("Good");
}

//challenge 4

if(  st.replace(st,"number") === "number")
{
    console.log("Good");
}

//challenge 5

if( st.slice(0,6).repeat(2) === "ElzeroElzero")
{
    console.log("Good");
}

//challenge 6

let jop = "Developer";
let salary = 0;

switch (jop)
{
    case "Manager":
        console.log(salary = 8000);
        break;
    case "Developer":
    case  "Designer":
        console.log(salary = 7000);
        break;
    case "IT":
    case  "Support":
        console.log(salary = 6000);
        break;
    default:
        console.log(salary=4000);
}
*/

//1
/*
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(!-50 >= +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(! "10" < 10); // true
console.log(! 20 == false); // true
*/

// 2
/*
let num1 = 10;
let num2 = 20;

console.log(10 < 20); // true
console.log(10!=20); // true
console.log(10 >! 20); // true
console.log(!(10 > 20)); // true
console.log(!20<10); // true
console.log(!(10==20)); // true
*/

//3
/*
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
*/

//4

/*
let num = 90; // "009"


if(num > 100)
    console.log("00" + num);
else if(num > 10 && num <100)
    console.log(`0${num}`);
else if(num >= 100)
    console.log(num);
*/

//5
/*
let num1 = 9;
let str = "9";
let str2 = "20";


if(num1 === str)
{
    console.log("1- "+num1 +" Is The Same Value As " +str);
}
if(num1 == str)
{
    console.log("2- "+num1 +" Is The Same Value As " +str +" But Not The Same Type");
}
if(num1 != str2)
{
    console.log("3- " +num1 +" Is The Same Value As " +str2 +" But Not The Same Type");
}
if(num1 == str2)
{
    console.log("4- "+num1 +" Is The Same Type As " +str2 +" But Not The Same Value");
}
*/

//6

/*
let num1 = 10;
let num2 = 30;
let num3 = "30";

if(num3>num1 && typeof(num3)!= typeof(num2))
    if(num3>num1 && typeof(num3) != typeof(num2) && num3 == num3)
    if(num3 != num1 && typeof(num3) != typeof(num1) && num3 == num3)
{
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}
*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 6 */

//challenge
/*
let zero = 0;
let counter =3;
let my =["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

console.log(my.slice(zero,counter++).reverse());
console.log(my.slice(zero++,counter).reverse()); //zero=1   counter =4
console.log((my.slice(zero,(counter))[zero--]).slice(zero,(--counter)-(++zero)) + (my.slice(zero,(--counter))[--zero]).slice(counter)) ; //Elzero   //counter=2   //zero=0
console.log((my.slice(zero,counter)[++zero]).slice((++counter)+(zero),(++counter)+(zero)) + (my.slice(zero,counter))[(--counter - zero)].slice(--zero,(--counter-(++zero))));  //"rO"  //zer =1 coun =3
*/

//1
/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
console.log(myFriends.slice(0,3));

// Method 2
console.log(myFriends.splice(0,3));
*/

//2
/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// Write Your Code Here
console.log(friends.splice(1,2)); // ["Eman", "Osama"]
*/

//3
/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]
*/

//4
/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log((words.reverse())[0][0].slice(2).toUpperCase()); // ZERO
*/

//5
/*
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

console.log( haystack[1] == needle ? "found":"no");
console.log( haystack[1] = needle[0] ? "found":"no");
console.log();
*/

/*
//6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1,arr2).sort();   // A B C D E F X Y
allArrs = allArrs.slice(arr2.length);  //  F X Y
allArrs = (allArrs[arr1.length-arr1.length] + allArrs[arr2.length-arr1.length]+ allArrs[--arr1.length]).toLowerCase() ;  // fxy
console.log(allArrs); // fxy
*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 7 */

//challenge
/*
let myAdmins =["Ahmed","Osama","Sayed","Stop","Samera"];
let myEmployees = ["Amgad" , "Samah" , "Ameer" , "Omar" , "Othman" , "Amany" , "Samia"];

document.write(`<div>We Have X Admins</div>`);

for(let i=0; i<myAdmins.length; i++)
{
    if(myAdmins[i] === "Stop")
    {
       myAdmins.splice([i]);
       break;
    }
}

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`);

for(let i=0; i<myAdmins.length;i++)
{
    let a =0;
    document.write(`<p>- the admin for team ${i+1} is <b style="color: red">${myAdmins[i]}</b></p>`)
    document.write(`<h2>team members:</h2>`);
    for(let j=0; j<myEmployees.length;j++)
    {
        if(myEmployees[j][0] === myAdmins[i][0])
        {
            a++;
            document.write(`<p>- ${a} ${myEmployees[j]}</p>`);
        }
    }
    document.write(`<hr>`);
}
*/

//1
/*
let start = 10;
let end = 100;
let exclude = 40;

// Output
for(let i=start; i<=end;i=i+start)
{
 ;
    if(i === exclude)
    {
        continue;
    }
    console.log(i);
}
 */

//2
/*
let start = 10;
let end = 0;
let stop = 3;

for(let i=start; i>=end;i--)
{
        if (i <start)
        {
            console.log(end.toString()+ i);
        }else{
            console.log(i);
        }
        if(i === stop)
        {
            break;
        }
}
 */

//3
/*
let start = 1;
let end = 6;
let breaker = 2;

for(let i =start; i<=end; i++)
{
    let a = end;
    console.log(i);
    console.log("--" + breaker.toString());
    console.log("--" +(a - breaker).toString())
}
 */

//4
/*
let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    index -= jump;
    if (index < (jump + jump))
   {
       break;
   }
}
 */

//5
/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let a =letter.length;
for (let i=(letter.length - letter.length); i<friends.length; i++)
{

    if(friends[i][letter.length - letter.length] === letter.toUpperCase())
    {
        continue;
    }

    console.log(a + "-" + friends[i]);
    a++;
}

 */

//6
/*
let start = 0;
let swappedName = "elZerO";

for(let i =start; i<swappedName.length;i++)
{
    if(swappedName[i] === swappedName[i].toUpperCase())
    {
      swappedName=swappedName.replace(swappedName[i],swappedName[i].toLowerCase());
    }
    else if(swappedName[i] === swappedName[i].toLowerCase())
    {
        swappedName= swappedName.replace(swappedName[i],swappedName[i].toUpperCase());
    }
}
console.log(swappedName);
*/

//7
/*
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
for (let i =(++start); i<mix.length;i++)
{
    if(typeof mix[i] == "string")
    {
        continue;
    }
    console.log(mix[i]);
}

 */

//8
/*
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let a=1;
while (counter < friends.length)
{
    if(friends[counter][index] === 'A' || typeof friends[counter] === "number")
    {
        counter += 1;
        continue;
    }
    console.log("-" + a +" "+ friends[counter]);
    counter+=1;
    a++;
}
 */

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 8 */

//challenge

/*
function ShowDetails(a,b,c)
{
    let name;
    let age ;
    let bool;

    let x = [a,b,c];
        for(let i=0; i<3; i++)
        {
             typeof x[i] === "string"? name = x[i] : typeof x[i] === "number" ? age = x[i] : bool = x[i];
        }
        if(bool === true)
            bool = "you are available for hire";
        else
            bool = "you are not available for hire";

        console.log(`Hello ${name}, your age is ${age}, ${bool}`);
}

ShowDetails(38, "osama" , false);

 */

//1
/*
function sayHello(theName, theGender) {
    if(theGender === undefined)
    {
        console.log(`hello ${theName}`);
    }else
    console.log(`hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName} `);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

/*
function calculate(firstNum, secondNum, operation) {
    if(secondNum === undefined)
    {
        console.log("Second Number Not Found");
    }
    else if(operation ==='multiply')
    {
        console.log(firstNum * secondNum );
    }else if(operation === "subtract")
    {
        console.log(firstNum - secondNum );
    }else {
        console.log(firstNum + secondNum );
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
 */

//3
/*
function ageInTime(theAge) {
    if(theAge > 10 || theAge < 100) {
        console.log("in months = " +theAge*12);
        console.log("in weeks = " + theAge*12*4);
        console.log("in days = " + theAge*12*4*7);
        console.log("in hours = " + theAge*12*4*7*60);
    }
    else {
        console.log(" Age Out Of Range");

    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

 */

//4
/*
function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for(let i=startYear; i<=endYear; i++)
    {
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);
*/

//5
/*
function multiply(...numbers)
{
    let result=1;

        for (let i=0; i<numbers.length; i++) {
            if(typeof numbers[i] === "string")
                numbers[i] = 1;
            Number(result *= parseInt(numbers[i]));
        }

    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/
//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 9 */

//challenge 1
/*let names = function (...names){
    return `${typeof names[0]} [${names.join("],[")}] => Done!`;
}

let names =(...names) => `${typeof names[0]} [${names.join("],[")}] => Done!`;
console.log(names("Osama", "Mohamed" , "Ali" , "Ibrahim"));
*/

//challenge 2
/*
let MyNumbers = [20,50,10,60];
let calc = (one,two,...nums) => one+two+nums[0];

console.log(calc(10,MyNumbers[1],MyNumbers[0]));  //80
*/

//1
/*
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let nameParts = zName.split(' ');
        let firstName = nameParts[0];
        let lastNameInitial = nameParts[nameParts.length-1].charAt(0).toUpperCase() + '.';
        return firstName + ' ' + lastNameInitial;
    }
    function ageWithMessage(zAge) {
        let age = zAge.match(/\d+/)[0];
        return 'Your Age Is ' + age;
    }
    function countryTwoLetters(zCountry) {
        let twoLetters = zCountry.substring(0, 2).toUpperCase();
        return 'You Live In ' + twoLetters;
    }
    function fullDetails() {
        let name = namePattern(zName);
        let ageMessage = ageWithMessage(zAge);
        let country = countryTwoLetters(zCountry);
        return 'Hello ' + name + ', ' + ageMessage + ', ' + country;
    }
    return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt")); // Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria")); // Hello Ahmed A., Your Age Is 32, You Live In SY
*/

//2
/*

itsMe = _ => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

urlCreate=(protocol, web, tld) =>`${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

//3

/*
function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
        };
    };
}

let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;


console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

//4
/*
function specialMix(...data) {
    var a=0;
    var c ='';
for(var i =0; i<data.length; i++)
{
    if(typeof data[i] === "number")
    {
        a+=data[i];
    }
        for(var j=0; j<data[i].length;j++)
        {
            if(!isNaN(data[i][j]))
            {
                c += data[i][j];
            }
        }

    a += Number(c);
    c='';

    }
    if(a === 0)
    {
        return "All Is Strings";
    }else
    {
        return a;
    }
}


console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 10 */

//challenge
/*
let mystring = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = mystring.split(",").map(ele => !isNaN(ele) ? "" : ele === '_' ? " " : ele )
.filter(ele => ele !== mystring[mystring.length-true]).map((a) => a.length > !false ? a = a[0] : a ).join(""); 

console.log(solution);
*/

//1
/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let sol = mix.map(a => !isNaN(a) ? "" : a ).reduce((a,b) => a+b);
console.log(sol);
*/

//2
/*
let myString = "EElllzzzzzzzeroo";

let sol = myString.split("").filter(function(ele,b,myString){

        return ele != myString[b+1]; 

}).join(""); 

console.log(sol);
*/

//3
/*
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let sol = myArray.reduce((a,b)=> a+b).split('').filter(a => a!==',').join('');
console.log(sol);
*/

//4

/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let sol = numsAndStrings.filter(a=> !isNaN(a)).map(a=> a * -1);
// [-1, -10, 10, 20, -5, -3]
console.log(sol);
*/

//5

/*
let nums = [2, 12, 11, 5, 10, 1, 99];
let sol = nums.reduce((acc,curr) => curr % 2 != 0 ? curr + acc : curr * acc ,1);
console.log(sol);
*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 11 */

//1
/*
let member = new Object({
    name : "Ezzeldien",
    age : 25,
    country:"Egypt",
    fullDetails:function(){
        return `My Name is ${this.name}, My age is ${member.age}, I live in ${this.country}`;
    }
});

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
*/

//2
/*
let objMethodOne = {
    property : "method One"
};

console.log(objMethodOne.property); // "Method One"

let objMethodTwo = new Object({
    property : "method two"
});

console.log(objMethodTwo.property); // "Method Two"

let objMethodThree =  Object.assign({property:"method three"});

console.log(objMethodThree.property); // "Method Three"

let objMethodFour = Object.create({property:"method four"});

console.log(objMethodFour.property); // "Method Four"
*/

//3

/*
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};


let finalObject = Object.assign({},threeNums,twoNums);
finalObject.a = a;

console.log(finalObject);
*/

//4

/*
// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
      publisher: "NIS America",
      price: 40,
    },
    "Titan Quest": {
      publisher: "THQ",
      bestThree: {
        one: "Immortal Throne",
        two: "Ragnarök",
        three: "Atlantis",
      },
      price: 50,
    },
    YS: {
      publisher: "Falcom",
      bestThree: {
        one: "Oath in Felghana",
        two: "Ark Of Napishtim",
        three: "origin",
      },
      price: 40,
    },
  };

  // Code One => How To Get Object Length ?
  let objectLength = Object.keys(myFavGames).length;   //get the length of the object
 
  let games = Object.keys(myFavGames);    //extract the keys into an array
  let games_values = Object.values(myFavGames);   //extract the values into an array


  for (let i = 0; i < objectLength; i++) {
    //console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);   //another solution 
    console.log(`The Game Name Is ${games[i]}`);
    //console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);    //another solution
    console.log(`The Publisher Is ${games_values[i].publisher}`);
    //console.log(`The Price Is ${Object.values(myFavGames)[i]}`);    //another solution 
    console.log(`The Price Is ${games_values[i].price}`);
  
    // Check If Nested Object Has Property (bestThree)

    if ((games_values[i].bestThree)) {
      console.log("- Game Has Releases");
      console.log(`First => ${games_values[i].bestThree.one}`);
      console.log(`Second => ${games_values[i].bestThree.two}`);
      console.log(`Third => ${games_values[i].bestThree.three}`);
    }
    console.log("#".repeat(20));
}
  
  // Ouput
  
  "The Game Name Is Trinity Universe"
  "The Publisher Is NIS America"
  "The Price Is 40"
  "####################"
  "The Game Name Is Titan Quest"
  "The Publisher Is THQ"
  "The Price Is 50"
  "- Game Has Releases"
  "First => Immortal Throne"
  "Second => Ragnarök"
  "Third => Atlantis"
  "####################"
  "The Game Name Is YS"
  "The Publisher Is Falcom"
  "The Price Is 40"
  "- Game Has Releases"
  "First => Oath in Felghana"
  "Second => Ark Of Napishtim"
  "Third => origin"
  "####################"
    */

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 12 */

//1

/*
let e1 = document.querySelector(".element");
let e2 = document.querySelector("#elzero");
let e3 = document.querySelector("div");
let e4 = document.querySelector("[name = 'js']");
let e5 = document.querySelectorAll(".element");
let e6 = document.querySelectorAll("#elzero");
let e7 = document.querySelectorAll("div");
let e8 = document.querySelectorAll("[name = 'js']");
let e9 = document.getElementById("elzero");
let e10 = document.getElementsByClassName("element");
let e11 = document.getElementsByTagName("div");
let e12 = document.getElementsByTagNameNS("*","*");
let e13 = document.body.childNodes[5];
let e14 = document.body.firstElementChild;
let e15 = document.body.lastElementChild.previousSibling.previousSibling;

console.log(e1);
console.log(e2);
console.log(e3);
console.log(e4);
console.log(e5[0]);
console.log(e6[0]);
console.log(e7[0]);
console.log(e8[0]);
console.log(e9);
console.log(e10[0]);
console.log(e11[0]);
console.log(e12[5]);
console.log(e13);
console.log(e14);
console.log(e15);
*/

//2
/*
let element = document.querySelectorAll("img");
let num = document.querySelectorAll("div").length;

for(let i=0; i<num; i++){
    element[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    element[i].setAttribute("alt","Elzero Logo");
}
*/

//3
/*
const inputField = document.querySelector("[name = 'dollar']");
const resultElement = document.querySelector('.result');

inputField.oninput = function(){
  const inputValue = inputField.value;
  const convertedValue = Math.ceil(inputValue * 15.69 ); // conversion rate from USD to EGP
  resultElement.textContent = `${inputValue} USD Dollar = ${convertedValue} Egyptian Pound`;
};

*/

//4

/*
let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");
let num = document.querySelectorAll("div");
let t = div1.getAttribute("title");
let t2 =  div2.getAttribute("title");

let div1T = div1.textContent;
let div2T = div2.textContent;
div1.textContent = div2T;
div2.textContent = `${div1T} ${num.length} `;
div1.setAttribute("title" , t2);
div2.setAttribute("title" , t);
*/

    //5

/*
let imgg = document.querySelectorAll("[decoding='async']");

for(let i=0; i<imgg.length; i++)
{
    if(imgg[i].getAttribute("alt"))
    {
        imgg[i].setAttribute("alt" , "Old");
    }else{
        imgg[i].setAttribute("alt" , "Elzero New");
    }
}
*/

//6 /*important*/

/*
//style documnet
document.forms[0].style.cssText = "display:flex; align-items:center; justify-content:center; flex-direction:column; gap:15px; margin-top:10px";
document.body.style.cssText = "background-color:#F5F5F5; padding:0; margin:0;font-size: 30px;font-weight: bold;";
//style inputs
let myinputs = document.querySelectorAll("input");
myinputs[0].style.cssText = "padding: 10px; background-color:#F6F4EB; width:350px;border:1px grey solid; border-radius:5px;"; 
myinputs[1].style.cssText = "padding: 10px; background-color:#F6F4EB; width:350px;border:1px grey solid; border-radius:5px;"; 
myinputs[2].style.cssText = "padding: 10px; background-color:#6096B4;color:white; width:300px;border:1px #6096B4 solid; border-radius:10px;";
//style selector
let myselect = document.querySelector("select");
myselect.style.cssText = "padding: 10px; background-color:#F6F4EB; width:350px;border:1px grey solid; border-radius:5px;"; 

//Event
let inputButt = document.querySelector("[name = 'create']");
let myoptions = document.querySelectorAll("option");
let ParentDiv = document.querySelector(".results");
ParentDiv.style.cssText = "display:flex; gap:5px ;flex-direction:row; align-items:center; flex-wrap: wrap; margin:10px; justify-content:center;"
document.forms[0].addEventListener('submit' , function(e){

    //remove elements before adding new ones
    let children = ParentDiv.querySelectorAll('*');
    children.forEach(function(child){
        child.remove();
    });

    //add element
    for(let i=0; i<myinputs[0].value; i++)
    {

        if(myselect.value === myoptions[0].value)
        {
        let newDiv = document.createElement("div");
        newDiv.textContent = `${myinputs[1].value}(I am Div)`;
        newDiv.className = `DivKing`;
        newDiv.id = `id-${i}`;
        newDiv.style.cssText = "padding: 10px; background-color:#FF8B13; width:250px;border:1px white solid; border-radius:5px;font-size:25px; text-align:center; color:white;";
        ParentDiv.appendChild(newDiv);
        }
        else
        {
            let newsection = document.createElement("section");
            newsection.textContent = `${myinputs[1].value}(I am Section)`;
            newsection.className = `SectionKing`;
            newsection.id = `id-${i}`;
            newsection.style.cssText = "padding: 10px; background-color:#FF6000; width:250px;border:1px white solid; border-radius:5px;font-size:25px; text-align:center; color:white;";
            ParentDiv.appendChild(newsection);
        }
    }
    e.preventDefault(); //to prevent the page from reloading
});
*/

//8  /*important*/
/*
let add = document.querySelector("[name='classes-to-add']");
let remove = document.querySelector("[name='classes-to-remove']");
let list = document.querySelector(".classes-list")
let result = list.querySelector("div");
result.textContent = "No Classes To show";

add.addEventListener("blur",function(){  
    let arr = add.value.split(" ").sort();   //to make an array of classes
    if(arr != '')    //to make sure that it doesn't make an empty class
    {
        result.textContent = "";
        for(let i=0; i<arr.length;i++){
            let spann = document.createElement("span");
            spann.textContent = arr[i];
            result.appendChild(spann);
        }
    }
    add.value = null;  //to remove value 
});


remove.addEventListener("blur",function(){ 
    let myspans = document.querySelectorAll("span");  //to get the spans that has been created
    let arr = remove.value.split(" ").sort();
    if(arr != "")
    {
        for(let i=0; i<arr.length;i++){
            if(arr[i].toLowerCase() === myspans[i].textContent)
            myspans[i].remove();
        }
    }
    if(result.childNodes.length === 0)
{
    result.textContent = "No Classes To show";
}else{
    result.textContent = "null";
}
});
*/

//9

/*
//remove paragraph
let myp = document.querySelector("p");
myp.remove();

//add previous div
let preDiv = document.createElement("div");
preDiv.textContent = "Start";
preDiv.className = "start";
preDiv.title = "Start Element";
preDiv.setAttribute("data-value","start");

//add end div
let endDiv = document.createElement("div");
endDiv.textContent = "End";
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.setAttribute("data-value","end");

//one way
/*
let mydiv = document.querySelector(".our-element");  
mydiv.before(preDiv);   //respect all the comments and spaces
mydiv.after(endDiv);
*/

//another way
/*
let existingDiv = document.body.childNodes[0];  //mydiv
document.body.insertBefore(preDiv,existingDiv);   //don't respect the comments and spaces
document.body.appendChild(endDiv);
*/

//10
/*
let mydiv = document.querySelector("div");
let myword = (mydiv.lastChild.textContent.split('\n').join('').trim());  //removes newline and spaces
console.log(myword);
*/

//11
/*
let elements = document.body.getElementsByTagName('*');    //the way to get all the elements 

document.body.addEventListener("click" , function(e){
    let target = e.target;      //returns which element has clicked on

    for(let i=0;i<elements.length;i++)
    {
        if(elements[i] === target)
        {
            console.log("this is : " + elements[i].tagName);
        }
    }

});
*/


//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 13 BOM*/

//1
/*
let num = prompt( "Print Number From - To");
let arr = num.split("-");

let narr = arr.map(str => parseInt(str));
console.log(narr.sort((a, b) => a - b));

for(let i = narr[0]; i <= narr[1]; i++)
{
    console.log(i);
}
*/

/*
let c = [5,4,8,6,2];
c = c.sort((function(a,b){              //to sort in desending order
    console.log(a);
    console.log(b);
    return b-a;
}));
console.log(c);
*/


//2   /*important*/ 
/*

let mydiv = document.querySelector("div");
let mybut = document.querySelector("button");
let myh = document.querySelector("h1");

mydiv.style.cssText = "width:400px;height:100px; background-color:yellow; font-weight:bold; text-align:center; position:relative; border-radius:5px;top:100px;left:400px; display:none;";
mybut.style.cssText = "position:absolute; right:-7px; background-color:red; color:white; border:none; border-radius:50%;cursor:pointer; top:-7px; width:25px;height:25px;";
myh.style.cssText = "padding-top:30px;";

setTimeout(function(){
    mydiv.style.cssText = "width:400px;height:100px; background-color:yellow; font-weight:bold; text-align:center; position:relative; border-radius:5px;top:100px;left:400px; display:block;";
}, 3000);

mybut.addEventListener("click" , function(){
    mydiv.style.opacity = "0";
    mydiv.style.transform = "translate(0,-50%)";
    mydiv.style.transition = "transform 2s ease , opacity 1.5s";
    setTimeout(function(){
    mydiv.remove();
    },2000);
});
 */

//3 , 4
/*
let mydiv = document.querySelector("div");
mydiv.style.cssText = "font-size:50px; position:relative; top:200px; text-align:center; font-weight:bold";

function countDown(){
    mydiv.textContent -=1;
    if(mydiv.textContent == 0)
    {
        clearInterval(counter);
        location.href = "https://Elzero.org";
    }   
}
let counter = setInterval(countDown , 1000);
*/

//5
/*
let mydiv = document.querySelector("div");
mydiv.style.cssText = "font-size:50px; position:relative; top:200px; text-align:center; font-weight:bold";

function countDown(){
    mydiv.textContent -=1;
    if(mydiv.textContent == 5)
    {
        window.open("https://Elzero.org","" , "width:100px; height:100px");

    }
    if(mydiv.textContent == 0)
    {
        clearInterval(counter);
    }
}
let counter = setInterval(countDown , 1000);
*/

//6
/*
//select Fonts
let SelectFonts = document.querySelector("#Fonts");
let optionsFonts = SelectFonts.querySelectorAll("option");

//SelectColors
let SelectColors = document.querySelector("#colors");
let optionsColors = SelectColors.querySelectorAll("option");

//select Fontssizes
let SelectFontsSize = document.querySelector("#FontSize");
let optionsFontsSize = SelectFontsSize.querySelectorAll("option");


//h2
let h2 = document.querySelector("h2");
h2.style.fontFamily = optionsFonts[0].value;
h2.style.color = optionsColors[0].value;
h2.style.fontSize = `${optionsFontsSize[1].value}px`;

//local storage

if(window.localStorage.getItem("color")){
    h2.style.color = window.localStorage.getItem("color"); 
    SelectColors.value = window.localStorage.getItem("color");
}
if(window.localStorage.getItem("fontfamily")){
    h2.style.fontFamily = window.localStorage.getItem("fontfamily");
    SelectFonts.value = window.localStorage.getItem("fontfamily");

}
if(window.localStorage.getItem("fontsize")){
    h2.style.fontSize = `${window.localStorage.getItem("fontsize")}px`; 
    SelectFontsSize.value = window.localStorage.getItem("fontsize");

}


    SelectColors.addEventListener("change" , (e)=>{
        let target = e.target;
        h2.style.color = target.value;
        window.localStorage.setItem("color" , target.value);
    });

    SelectFonts.addEventListener("change" , (e)=>{
        let target = e.target;
        h2.style.fontFamily = target.value;
        window.localStorage.setItem("fontfamily" , target.value);

    });

    SelectFontsSize.addEventListener("change" , (e)=>{
        let target = e.target;
        h2.style.fontSize = `${target.value}px`;
        window.localStorage.setItem("fontsize" , target.value);

    });
*/

//7
//number 1
/*
let myform = document.querySelector("form");
let inputs = myform.querySelectorAll("input");
let select = document.querySelector("select");
let options = select.querySelectorAll("option");
let tasks = {};

if(JSON.parse(sessionStorage.getItem("inputs"))){
    let tasks = JSON.parse(sessionStorage.getItem("inputs"));
    
    inputs.forEach(input => {
        if(tasks.hasOwnProperty(input.id)){
            input.value = tasks[input.id];
        }
    });
}
if(sessionStorage.getItem("option")){
    let a = sessionStorage.getItem("option");
    select.value = a;
}

inputs.forEach(input=>{
    input.addEventListener("input" , (e) => {
        //e.preventDefault(); //prevent reloading from the form
        if(input.value){
            if(tasks.hasOwnProperty(input.id)){
                tasks[input.id]  = input.value;
            }else{
                tasks[input.id] = input.value;
            }

            window.sessionStorage.setItem("inputs", JSON.stringify(tasks));
        }
    });
   
});

select.addEventListener("change" , (e) =>{
    let target =  e.target ;
    sessionStorage.setItem("option" , target.value);
})
*/

//sessionStorage.clear();

//number 2  important
/*
let myform = document.querySelector("form");
let inputs = myform.querySelectorAll("input");
let select = document.querySelector("select");
let options = select.querySelectorAll("option");
let tasks = {};

if (JSON.parse(sessionStorage.getItem("inputs"))) {
  tasks = JSON.parse(sessionStorage.getItem("inputs"));

  inputs.forEach((input) => {
    if (tasks.hasOwnProperty(input.id)) {
      input.value = tasks[input.id];
    }
  });
}



if (sessionStorage.getItem("option")) {
  let a = sessionStorage.getItem("option");
  select.value = a;
}

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (input.value.trim() !== "") {
      tasks[input.id] = input.value;
    } else {
      delete tasks[input.id];
    }

    window.sessionStorage.setItem("inputs", JSON.stringify(tasks));
  });

  // Set the initial value of the input if it exists in tasks
  if (tasks.hasOwnProperty(input.id)) {
    input.value = tasks[input.id];
  }
});

select.addEventListener("change", (e) => {
  let target = e.target;
  sessionStorage.setItem("option", target.value);
});

*/
//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 14 */

//challenge

/*bad solution */

// let chosen = 1;

// let myFriends = [
// {title:"Osama" , age:39 , available:true , skills:["HTML" , "CSS"]},
// {title:"Ahmed" , age:25 , available:false , skills:["Python" , "Django"]},
// {title:"Sayed" , age:33 , available:true , skills:["PHP" , "Laravel"]},
// ];



// let [{title:name1 , age:age1 , available:available1, skills:[ , skill1]} ,
//      {title:name2 , age:age2 , available:available2, skills:[ , skill2]} ,
//      {title:name3 , age:age3 , available:available3, skills:[ , skill3]}] = myFriends;



//      switch (chosen) {
//         case 1:
//             myFriends[chosen-true].available === true ? available1 = "Available" : available1 = "Not Available";
//         console.log(name1),
//         console.log(age1),
//         console.log(available1),
//         console.log(skill1)
//             break;
//             case 2:
//                 myFriends[chosen-true].available === true ? available2 = "Available" : available2 = "Not Available";
//             console.log(name2),
//             console.log(age2),
//             console.log(available2),
//             console.log(skill2)
//             break;
//             case 3:
//                 myFriends[chosen-true].available === true ? available3 = "Available" : available3 = "Not Available";
//             console.log(name3),
//             console.log(age3),
//             console.log(available3),
//             console.log(skill3)
//             break;
//             default:
//                 console.log("Not Found");
//                 break;
//      }

/*good solution */

/*
     let chosen = 1;

let myFriends = [
{title:"Osama" , age:39 , available:true , skills:["HTML" , "CSS"]},
{title:"Ahmed" , age:25 , available:false , skills:["Python" , "Django"]},
{title:"Sayed" , age:33 , available:true , skills:["PHP" , "Laravel"]},
];

const friend = myFriends[chosen - 1];

const { title, age, available:V, skills: [,skill] } = friend;

console.log(title);
console.log(age);
console.log(V ? "Available" : "Not Available");
console.log(skill);
*/

/************************************************************ */

//1
/*
let myNumbers = [1, 2, 3, 4, 5];

const [a, , , ,e] = myNumbers;

console.log(a * e); // 5
*/

//2
/*
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

const [a,b,c,[d,e,[f,g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
*/

//3
/*
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let arr = [arr3[1] , arr2[0] , arr1[0]];
// Write Your Destructuring Assignment Here
const [a,b,c] = arr;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
*/

//4
/*
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  // Write Your Destructuring Assignment Here
  const {age:a,working:w,country:c,hobbies:[h1, , h3]} = member;
  
  console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  
  console.log(`I Live in ${c}`);
  // I Live in Egypt
  
  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming
*/

//5
/*
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};
let keys = Object.keys(game.releases);
let values = Object.values(game.releases);
console.log(keys);
console.log(values);

// Write Your Destructuring Assignment/s Here
const {title:t, developer:d} = game;
const [o,a, ori] = keys;
const [[u,j] , {US:u_price , JAP:j_price} , or] = values;
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
*/

//6

/*
let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

const friend = myFriends[chosen-true];
let {title:t ,age:a ,available:av , skills:[ ,c] } = friend;
console.log(t);
console.log(a);
console.log(av? av="Available" : "Not Available");
console.log(c);
// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 15 */
//1
/*
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(setOfNumbers.size);
*/

//2
/*
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let sett = new Set(myFriends.sort());
console.log(sett);
*/

//3
/*
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
  let mapp = new Map(Object.entries(myInfo));
  console.log(mapp);
  console.log(mapp.size);
  console.log(mapp.has('role'));
  */

  //4
/*
  let theNumber = 100020003000;  
  console.log(parseInt(Array.from(new Set([...theNumber.toString()].filter((e)=>e>0))).join('')));
  */

  //5
/*
  let theName = "Elzero";
console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(''));
console.log(Array(...theName));
*/

//6

/*
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let nums = chars.filter((e)=> !isNaN(e));
let newchars = chars.filter((e)=>isNaN(e));
let newarr = [...nums , ...newchars];
newarr.copyWithin(0,nums.length,(nums.length + nums.length));

console.log(newarr);
*/

//7
/*
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

//Way 1
const newarr1 = [...numsOne , ...numsTwo];
console.log(newarr1);
//Way 2
const newarr2 = [];
numsOne.forEach(e => newarr2.push(e));
numsTwo.forEach(e => newarr2.push(e));
console.log(newarr2);
//Way 3
const newarr3 = numsOne.concat(numsTwo);    
console.log(newarr3);
*/

//8

let n1 = [10, 30, 10, 20];  //10,30,20
let n2 = [30, 20, 10];   //30,20,10       =60

// Needed Output
210

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 16 */

//1
/*
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
//let rgx = /\d+:\w+:\d+:\d+:\d+:\d+:\d+:\d+/ig;
let rgx = /(\w+:*)+/ig;
let rgxx = /[\w:]+/ig;
console.log(ip.match(rgx));
console.log(ip.match(rgxx));
*/

//2
/*
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let rgx = /Os(\d+)*O/ig;
console.log(specialNames.match(rgx));
// Output
// ['Os10O', 'OsO', 'Os100O']
*/

//3
/*
let phone = "+(995)-123 (4567)";
let rgx = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
console.log(phone.match(rgx));
*/


//4

// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;   


// // /https? => get http and maybe s or not;
// // :\ => get the : ;
// // \/\/ => get the // ;

// // (?:[-\w]+) => zero or one of : ;


//5
/*
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d(\/|\s-\s|\s)\d+(\/|\s-\s|\s)\d+/g;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
*/

//6

// let url1 = 'elzero.com';
// let url2 = 'http://elzero.net';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /\w+\W+\w+.\w+(.\w+)*/ig;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 17 OOP */

//1
/*
class Car{
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
      }
      run(){
        return `${this.n} is running now`;
      }
      stop(){
        return `${this.n} is stopped`;
      }
      info(){
        return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
      }
}

class Mercides extends Car{
    constructor(name, model, price,horses) {
        super(name, model, price);
        this.h = horses
      }
}
let car1 = new Mercides("mercides" , 2023 , 2000000 , 300);

console.log(car1.info());
console.log(car1.stop());
*/

//2
/*
class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }
  
  class Tablet extends Phone{
    constructor(name, serial, price,size){
        super(name, serial, price);
        this.s = size || "Unknown";
    }
    fullDetails(){
        return `The name is ${this.name} , the serial is ${this.serial} , the price is ${this.price} , the size is ${this.s}`;
    }
  }
  // Write Tablet Class Here
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9
  
  console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5
  
  console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown
*/

//3
/*
// Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
    }
    #change(){
        this.#c = String(this.#c).replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,'$1-$2-$3-$4');
        return this.#c;
    }
    get showData(){
        return `Hello ${this.u} Your Credit Card Number Is ${this.#change()}`
    }
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined
*/

//4
/*
// Write Your Code Here

String.prototype.addLove = () =>"I Love Elzero Web School";
// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School
*/

//5
/*
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  Object.defineProperties(myObj,{
    score:{
        writable:false,
        enumerable:true,
        configurable:true,
    },
    id:{
        writable:false,
        enumerable:false,
        configurable:true,
    },
    country:{
        configurable:true,
    }
  });
  delete myObj.country;
  // Write Your Code Here
  
  myObj.score = 500;
  
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }
  console.log(myObj);
  
  // Needed Output
  
//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}
*/


  // Tests***********************
  /*
// class Supers{
//     #Salary;
//     constructor(id,name,age,gender,salary){
//         this.id = `##0${id}`;
//         this.gender = gender;
//         this.name = `${gender==="male"?"mr":"mrs"}:${name}`;
//         this.age = age>40?`senior/${age}`:`Junior/${age}`;
//         this.#Salary = salary;
//     }
//     info(){
//         return `name:${this.name}\n
//                 gender:${this.gender}\n
//                 id:${this.id}\n
//                 age:${this.age}\n
//                 salary:${this.#Salary * 5}`;
//     }
// }

// class admin extends Supers{
//     constructor(id,name,age,gender,salary,permisson){
//         super(id,name,age,gender,salary)
//         this.p = permisson;
//     }
// }



// let one = new Supers(46852,"Ezz",25,"male",2000);
// let two = new admin(85588,"ahmed",45,"male",3000);

// console.log(one.info());
// console.log(two.info());
// console.log(one);
// console.log(two);

// Object.prototype.l = function(v){
//     return `.${this}.`;
// }
// console.log(one);
// console.log(one.l());
// console.log(two.l());

// let s = "Sss";

// console.log(s.l());

// for(let p in one){
//     console.log(p , one[p]);
// }
*/

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 18 */

//1
/*
let birthday = new Date("29 nov 1998");
let date = new Date();
console.log(birthday);
console.log(date);
console.log((date-birthday)/1000/60/60/24/365);
*/

//2
/*
 let time = new Date();
 time.setTime(0 - (1000*60*60*3) + 1000 + (1000*60*60*24*365*10) +(1000*60*60*24*2));
console.log(time);

// // Needed Output
"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
*/

//3
/*
// Needed Output
let date = new Date();

date.setTime(Date.now() - (1000*60*60*24*30));
date.setDate(31);
console.log(date);

let dateArr = [["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]]

console.log(`Previous Month Is ${dateArr[0][date.getMonth()]} And Last Day Is ${date.getDate()}`);

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"
*/

//4
/*
let birthday1 = new Date("Nov 29, 98");
let birthday2 = new Date();
birthday2.setTime((1000*60*60*24*365*29)-1000*60*60*24*26- 1000*60*60*3);
let birthday3 = new Date();
birthday3.setFullYear(1998);
birthday3.setMonth(10);
birthday3.setDate(29);
birthday3.setHours(0);
birthday3.setMinutes(0);
birthday3.setSeconds(0);
console.log(birthday1);
console.log(birthday2);
console.log(birthday3);

// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
*/

//5
/*
function generat(num){
   let start = performance.now();
   console.log(start);
   for(let i = 0; i<num; i++){
       console.log(` i:${i}`);
    }
    let end = performance.now();
    console.log(end);
    let measure = end - start; 
    return Math.round(measure);
}

console.log(generat(99999));

// Needed Output
"Loop Took 1921 Milliseconds."
*/

//6
/*
// Write Your Generator Function Here
function* gen(){
    let index=Math.round(Math.random()*1000);
    
   while(true){
    yield index;
    index = Math.round(Math.random()*1000);
   }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
*/

//7
/*
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }

  // Write Your Generator Function Here
  function* genAll(){
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
  }

  let generator = genAll();
  
  console.log(generator.next()); // {value: 1, done: false}
  console.log(generator.next()); // {value: 2, done: false}
  console.log(generator.next()); // {value: 3, done: false}
  console.log(generator.next()); // {value: 4, done: false}
  console.log(generator.next()); // {value: 5, done: false}
  console.log(generator.next()); // {value: "A", done: false}
  console.log(generator.next()); // {value: "B", done: false}
  console.log(generator.next()); // {value: "C", done: false}
  console.log(generator.next()); // {value: "D", done: false}
*/

//8

//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 19 */
/*
//2 , 3 ,4
let ajax = new XMLHttpRequest();
ajax.open("GET" , "./test.json");
ajax.send();

   ajax.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200)
       console.log(ajax.response);
       console.log("******************************************************************************************");
   }




  ajax.addEventListener("load" , function(){
     console.log("Data loaded");
     let articales = JSON.parse(ajax.responseText);
     for(let i in articales){
        articales[i]["section"] = "all";
     }
     console.log(articales);
     let b = JSON.stringify(articales);
     console.log(b);

     console.log("******************************************************************************************");
     let final = JSON.parse(b);
     console.log(final);
     let datadiv = document.createElement("div");
     datadiv.id = "data";

     for(let i in final){
     let div = document.createElement("div");
     let h2 = document.createElement("h2");
     h2.textContent = final[i]["name"];
     let p = document.createElement("p")
     p.textContent = final[i]["section"];
     let p2 = document.createElement("p")
     p2.textContent = final[i]["address"];
     let p3 = document.createElement("p")
     p3.textContent = final[i]["content"];

     div.appendChild(h2);
     div.appendChild(p);
     div.appendChild(p2);
     div.appendChild(p3);
     datadiv.appendChild(div);
     }
     datadiv.style.backgroundColor = "yellow";
  document.body.appendChild(datadiv);
  });

*/
  
//------------------------------------------------------------------------------------------------------------------------//
/* Assignments 20 */


let pr = new Promise((resolveFunction , rejectFunction) =>{
    let emp = ["s","a","x","z"];
    if(emp.length === 41){
        resolveFunction(emp);
    }else{
        rejectFunction(Error("sxsxs"));
    }
});

pr.then(
    (resolveValue) => {
        resolveValue.length = 2;
        return resolveValue; 
}
).then(
    (resolveValue) => {
        resolveValue.length = 1;
        return resolveValue; 
}
).then(
    (resolveValue) => {
        resolveValue.length = 1;
        console.log(resolveValue);   
}
).catch((rejectedReason) => console.log(rejectedReason)).finally(console.log("the operation is done"));
