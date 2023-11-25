/* #1

//find element by id
    let myidelement  = document.getElementById("my-div");
    console.log(myidelement);

//find element by name
    let myTagElements = document.getElementsByTagName("p");
    console.log(myTagElements);
    console.log(myTagElements[0]);

  
//find element by class name

let myClassElement = document.getElementsByClassName("my-span");
console.log(myClassElement[0]);


//find element by any thing

let myqueryelement = document.querySelector(".my-span");
let myqueryelement2 = document.querySelector("div");
let myqueryAllelement = document.querySelectorAll(".my-span");
console.log(myqueryelement);
console.log(myqueryelement2);
console.log(myqueryAllelement[1]);

//other selectors

console.log(document.body);
console.log(document.title);
console.log(document.forms);
console.log(document.forms[0].one.value);
console.log(document.links[0].href);
*/

/*--------------------------------------*/

/*2

let myelement = document.querySelector(".js");

console.log(myelement);
console.log("inner html: " + myelement.innerHTML);
console.log("inner text: " +myelement.innerText);
console.log("text content: " +myelement.textContent);

myelement.innerHTML = "text from <span>Ezz</span>";
console.log("inner html: " + myelement.innerHTML);
console.log("text content: " +myelement.textContent);
console.log("inner text: " +myelement.innerText);

//reach an image

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";   

// reach a link

let mylink = document.querySelector(".link");

console.log(mylink.getAttribute("class"));     //get attributes
console.log(mylink.getAttribute("href"));

mylink.setAttribute("href" , "https://twitter.com");    //set attributes
mylink.setAttribute("title" , "twitter");
console.log(mylink.getAttribute("href"));
*/

/*--------------------------------------*/
/*3*/

/*
DOM [CHECK ATTRBUTES]

-element.attributes
-element.hasAttribute
-element.hasAttributes
-element.removeAttribute
*/

/*
console.log(document.getElementsByTagName("p")[0].attributes);    //return all the attributes in the first p

let myP = document.getElementsByTagName("p")[0];

if(myP.hasAttribute("data-src"))
{
    if(myP.getAttribute("data-src") === ""){
        myP.removeAttribute("data-src");    //remove attribute
    }else {
        myP.setAttribute("data-src" , "New Value");
    }
}else{

    console.log(`not found`);
}

if(myP.hasAttributes()){
    console.log(`has Attributes`);
}

if(document.getElementsByTagName("div")[0].hasAttributes()){
    console.log(`has attributes`);
}
else{
    console.log(`no attributes`);
}
*/

/*--------------------------------------*/
/*4*/

/*
DOM[CREATE ELEMENTS]

-CreateElement
-CreateComment
-CreateTextNode
-CreateAttribute
-AppendChild


let myelement = document.createElement("div");   //created a <div>
let myAttr = document.createAttribute("data-custom");   //made an attribute
let mytext = document.createTextNode("Product One");    //made a text
let mycomment = document.createComment("this is div");

myelement.className = "product";    //created a class inside the div
myelement.setAttributeNode(myAttr);   //passed an empty attribute
myelement.setAttribute("data-test" , "Testing");    //set a new attribute with its value

//append text to element
myelement.appendChild(mytext);

//append comment to element
myelement.appendChild(mycomment);

//append element to body
document.body.appendChild(myelement);

console.log(myelement);

*/

/*--------------------------------------*/
/*5*/

//challenge
/*
for(let i=0; i<10; i++)
{
let main = document.createElement("div");
let p = document.createElement("p");
let h3 = document.createElement("h3");
let hr = document.createElement("hr");

let Ptxt = document.createTextNode("this is p :" + i);
let h3txt = document.createTextNode("this is h3 :" + i);

p.appendChild(Ptxt);
h3.appendChild(h3txt);
main.appendChild(p);
main.appendChild(h3);
main.className = "my product";

document.body.appendChild(main);
document.body.appendChild(hr);
}
*/

/*--------------------------------------*/
/*6*/

/*
DOM[Deal with Childern]
-childern
-childNodes
-firstchild
-lastchild
-firstelementchild
-lastelementchild
 

let myelement = document.querySelector("div");

console.log(myelement);

console.log(myelement.children);   //prints the elements only

console.log(myelement.children[0]);

console.log(myelement.childNodes);  //prints everything even the spaces

console.log(myelement.firstChild);   //return the first child whatever it is even the space
console.log(myelement.lastChild);      //return the last child whatever it is even the space

console.log(myelement.firstElementChild);  //prints the first element
console.log(myelement.lastElementChild);  //prints the last element

*/
/*--------------------------------------*/
/*7*/

/* 
    DOM[Events]      // they can be written in the JS file or the HTML file

use events on HTML
use events on JS
--- onclick
--- oncontextmenu
--- onmouseenter
--- onmouseleave

--- onload
--- onscroll
--- onresize

--- onfocus
--- onblur
--- onsubmit


let mybtn = document.getElementById("btn");    //it works with the anonymous function 

mybtn.onclick = function()
{
    console.log("clicked");
}
*/

/*--------------------------------------*/
/*8*/
/*
let userinput = document.querySelector("[name = 'username']"); //get the username input
let ageinput = document.querySelector("[name = 'age']"); //get the age input

document.forms[0].onsubmit = function (e) {
  let uservalid = false;
  let agevalid = false;

  if (userinput.value !== "" && userinput.value.length <= 10) {
    uservalid = true;
  }
  if (ageinput.value !== "") {
    agevalid = true;
  }
  if (uservalid === false || agevalid === false) {
    e.preventDefault();
  }
};

document.links[0].onclick = function (event) {
  console.log(event); //prints in the console the type of the event
  event.preventDefault();
};
*/
/*--------------------------------------*/
/*9*/

/*
    DOM[EVENTS SIMULATION]
    -click
    -focus
    -blur
*/
/*
let two = document.querySelector(".two");
let one = document.querySelector(".one");

window.onload = function () {
  //when the window reload
  two.focus();
};

one.onblur = function () {
  //when leave the input one
  document.links[0].click();
};

//challenge

one.oninput = function () {
  if (one.value.length > 0) {
    two.focus();
  }
};
*/

/*--------------------------------------*/
/*10*/

/*
DOM[Class List]
-ClassList
--Length
--contains
--item(index)
--add
--remove
--toggle


let ele = document.getElementById("my-div");
console.log(ele.classList);
console.log(typeof ele.classList);
console.log(ele.classList.contains("osama"));   //checks if the class exists in the element
console.log(ele.classList.contains("show"));
console.log(ele.classList.item("3"));   //return the name of the class in the index 3 

ele.onclick = function()
{
  ele.classList.add("add-one" , "add-two"); //Adds classes to the element
  ele.classList.remove("one" , "two");  //remove classes of the element
  ele.classList.toggle("ezz");    //removes if found ,, adds if not found
}

console.log(ele.classList.length);   //return the length of the classlist
*/

/*--------------------------------------*/
/*11*/

/*
DOM [CSS]
-style
--cssText
--removeProperty(property name) [inline, stylesheet]
--setProperty(propertyName , value,Priority)
*/
/*
let element = document.getElementById("my-div");

element.style.color = "red";    
element.style.fontWeight = "bold"; 

element.style.cssText = "font-weight: bold; color:green; opacity:0.9";   //use csstext to write all the styling in one line

// edits the inline style
element.style.removeProperty("color");
element.style.setProperty("font-size" ,"40px" , "important");

// edits the stylesheet
console.log(document.styleSheets[0].cssRules[0].style.removeProperty("line-height"));   //documnet.stylesheets return an array of all the stylesheet available ,, cssRules are the styles form every block
console.log(document.styleSheets[0].cssRules[0].style.setProperty("background-color", "red"));

*/

/*--------------------------------------*/
/*12*/

/*
DOM [Deal with elements]

-before [element || string]
-after [element || string]
-append [element || string]
-prepend [element || string]
-remove
*/

/*
let element = document.getElementById("my-div");
let createdp = document.createElement("p");


element.before("hello form JS");   //put the text before the element
//element.after("hello form JS");   //put the text after the element

element.append(" sss");   //adds text to the end of the element
element.prepend("bla ");   //adds text to the first of the element
element.remove();   //removes the element entirly  **** "better than display none in css because the use user cant change it" *****
*/

/*--------------------------------------*/
/*13*/

/*
DOM [Traversing]
-nextSibling
-perviousSibling
-nextElementSibling
-previousElementSibling
-parentElement
*/

/*
let span = document.querySelector(".two");

console.log(span.nextSibling);   //prints the next thing after the span even the comments
console.log(span.nextElementSibling);   //prints the next element after the span

console.log(span.previousSibling);   //prints the previous thing after the span even the comments
console.log(span.previousElementSibling);   //prints the previous element after the span

console.log(span.parentElement);   //prints the parentElement
*/

/*--------------------------------------*/
/*14*/

/*
DOM [Cloning]
--cloneNode(deep)
 */
/*
let myP = document.querySelector("p").cloneNode(true);  //takes a clone of the element "empty argument = false" means it takes only the element without its textcontent
let mydiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;   //we have to change the id because the id cant be repeated

mydiv.appendChild(myP);
*/

/*--------------------------------------*/
/*15*/

/**
 * DOM [Add Event Listener]
 * addEventListener
 * use Without On
 * Attach Multiple Events
 * Error Test

  -Search
  --Capture & Bubbling Javascript
  --removeEventListener
 */

  /*
 let myP = document.querySelector("p");

 myP.onclick = function()        
 {
  console.log("message form onclick1");
 };

 myP.onclick = function()        //normal event  cant be repeated "it will override the one before"  &&  will not print an error if we passed a wrong argument and will simpily not work instead
 {
  console.log("message form onclick2");
 };



/*-----------------------------------------------------------------

 myP.addEventListener("click" , function (){
  console.log("Message From Onclick 1 event");
 });

 myP.addEventListener("click" , function (){   //eventlistener will not override and will print them both && it will return an error if we passed wrong argument
  console.log("Message From Onclick 2 event");
 });

 /*----------------------------------------------------------- 

 myP.onclick = function(){
 let newp =  myP.cloneNode(true);
  newp.className = "Clone";
  document.body.appendChild(newp); 
 };

  let cloned = document.querySelector(".clone");

  //cloned.onclick = function (){     // ERROR  because the element is not acutally in the page
   //   console.log("i am cloned");
 // };


 document.addEventListener("click", function (e){      //we use the addEventListener with the target to get the clone 
  if(e.target.className === "Clone")      
  {
    console.log("i am cloned");
  }

 });

 */

//challenge

/*
 //header ------------

let header = document.createElement("div");
let headerH = document.createElement("h2");
let divList = document.createElement("div");
let headerP = document.createElement("p");
let headerP2 = document.createElement("p");
let headerP3 = document.createElement("p");
let headerP4 = document.createElement("p");

header.className = "header";
divList.className = "List";
headerH.textContent = "Ezzeldien";
headerP.textContent = "Home";
headerP2.textContent = "about";
headerP3.textContent = "service";
headerP4.textContent = "Contact";

//append p's to the list div
divList.appendChild(headerP);
divList.appendChild(headerP2);
divList.appendChild(headerP3);
divList.appendChild(headerP4);

//append the divList and the h2 to the header div
header.appendChild(headerH);
header.appendChild(divList);

//append to body
document.body.appendChild(header);

//style
document.body.style.cssText = "background-color:#F5F5F5; padding:0; margin:0;";
header.style.cssText = "padding-right:15px; padding-left:15px;font-size:20px; font-weight:bold; background-color:white; height:80px; color:#1A5D1A; display:flex; align-items: center; justify-content: space-between; ";
divList.style.cssText = "display:flex; gap:15px; flex-direction: row;";

//-------ITEMS

let Itmes = document.createElement("div");
Itmes.style.cssText = "padding: 15px; padding-left:50px; display: flex; flex-direction: row; flex-wrap: wrap;  flex-basis: 1fr; row-gap: 10px; gap: 20px;"

for(let i=1; i<=15; i++)
{
  //creation
  let ItemDiv = document.createElement("div");
  let itemH = document.createElement("h2");
  let itemP = document.createElement("p");
  ItemDiv.className = `item-${i}`;

  //content
  itemP.textContent = "Product";
  itemH.textContent = `${i}`;

  //styling
  ItemDiv.style.cssText = "flex-basis: calc(95%/3); background-color: white; border-radius:5px; text-align: center;"

  //appending
  ItemDiv.appendChild(itemH);
  ItemDiv.appendChild(itemP);
  Itmes.appendChild(ItemDiv);
}
document.body.appendChild(Itmes);

//-------FOOTER
  let footer = document.createElement("div");
  let footerH = document.createElement("h2");

  footerH.textContent = "COPYWRITE 2023";
  footer.appendChild(footerH);

  footer.style.cssText = "position:absolute; bottom:0; background-color:#1A5D1A; text-align:center; width:100%; color:white";

  document.body.appendChild(footer);
  */