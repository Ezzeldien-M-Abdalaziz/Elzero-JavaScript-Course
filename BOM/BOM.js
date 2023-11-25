//1
/*
[Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data


// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

//let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");
//console.log(promptMsg);
*/

//2

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)


// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

function sayMsg(user, age,num) {
  console.log(`Iam Message For ${user} Age Is : ${age} and have ${num}`);
}

let counter = setTimeout(sayMsg, 3000, "Osama", 38 ,6);
*/

//3

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)


// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let h = document.querySelector("h1");
h.style.cssText = "text-align:center; padding-top:30%; font-size:100px; color:red";

function countdown() {
  h.innerHTML -= 1;
  if (h.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);
*/


//4

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()


//console.log(location);
//console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

*/

//5

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()     //the window has to be opend by js
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

//setTimeout(function () {
 // window.open("", "_self", "", false);
//}, 2000);

//setTimeout(function () {
  //.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
//}, 2000);


//6
/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

//7

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);
/*
myButt = document.querySelector("button");

window.onscroll = function(){
  if(window.scrollY >= 600)
  {
          myButt.style.display = "block";
  }else{
    myButt.style.display = "none";
  }
};

myButt.onclick = function(){
    window.scrollTo({
      top:0,
      behavior : "smooth"
    });
};
*/

//8

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/
/*

// Set
//  window.localStorage.setItem("color", "#F00");
//window.localStorage.fontWeight = "bold";
//window.localStorage["fontSize"] = "20px";

// Get
//console.log(window.localStorage.getItem("color"));
//console.log(window.localStorage.color);
//console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
//console.log(window.localStorage.key(1));

// Set Color In Page
//document.body.style.backgroundColor = window.localStorage.getItem("color");

//console.log(window.localStorage);
//console.log(typeof window.localStorage);
*/


//9  //important

/*
let myul = document.querySelector("ul");
let mylis = document.querySelectorAll("li");
let myresult = document.querySelector("div");

if(window.localStorage.getItem("color"))
{
  myresult.style.backgroundColor = window.localStorage.getItem("color");   //assign the color in the localstorage to the result background
  mylis.forEach((li)=>{   //a loop to remove the active class 
    li.classList.remove("active");
  });

 document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");   //get the li by the data-color selector and assign the class to it

}


//one way
mylis.forEach((li) => {
  li.addEventListener("click" , (e) =>{
  let target = e.currentTarget;    //used with more than selector

    mylis.forEach((li)=>{   //a loop to remove the active class 
      li.classList.remove("active");
    });

      target.classList.add("active");    // add the active class ,,, "we can use either li or target"
      myresult.style.cssText = "background-color:" + target.dataset.color;    
      
      window.localStorage.setItem("color",target.dataset.color)
    
  });
});


//another way
/*
myul.onclick = function(e){
  let target = e.target;  //used with one selector
  for(let i=0; i<myli.length;i++)
  {
    if(myli[i] === target )
    {
      for(let j =0; j<myli.length;j++)
      {
        myli[j].className = "";
      }
      myli[i].className = "active";
      myresult.style.cssText = "background-color:" + target.dataset.color;
      window.localStorage.setItem("color",target.dataset.color)
    }
  }
};
*/
//window.localStorage.clear();

//10

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

//document.querySelector(".name").onblur = function () {
  // console.log(this.value);
 // window.localStorage.setItem("input-name", this.value);
//};  


//Challenge


// Function to delete a task
function deleteTask(li, id) {
  li.remove();
  tasks = tasks.filter((task) => task.id !== id);
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
  updateParentHeight();

  if (tasks.length === 0) {
    window.localStorage.removeItem("tasks");
  }
}

// Function to update the parent height
function updateParentHeight() {
  parent.style.height = `${ul.childNodes.length * 40}px`;
  
}

// Create the ul element
let ul = document.createElement("ul");
ul.style.cssText =
  "position: absolute; top:5px; right:9px; margin:0; display: flex; flex-direction:column; justify-content:center; align-items:center; gap:10px;";

// Get the parent container
let parent = document.querySelector(".tasks");
parent.appendChild(ul);

// Get the add button and input element
let add = document.querySelector(".add");
let input = document.querySelector(".input");

// Initialize the tasks array
let tasks = [];

// Check for tasks in local storage
if (JSON.parse(window.localStorage.getItem("tasks"))) {
  tasks = JSON.parse(window.localStorage.getItem("tasks"));
  tasks.forEach((task) => {
    let li = createTaskElement(task.title, task.id);
    ul.appendChild(li);
  });
  updateParentHeight();
}

// Function to create a task element
function createTaskElement(title, id) {
  let li = document.createElement("li");
  li.style.cssText =
    "padding:0 10px; display:flex;justify-content:space-between;align-items:center; background-color:white;height:30px; border-radius:5px; outline:none; width:360px; list-style:none;margin:0";
  li.setAttribute("Id", id);
  li.textContent = title;

  let deleteButton = document.createElement("button");
  deleteButton.style.cssText =
    "background-color:red; color:white; width:50px; border:none; border-radius:5px;cursor:pointer;";
  deleteButton.textContent = "Delete";

  li.appendChild(deleteButton);

  //delete event
  deleteButton.addEventListener("click", (event) => {
    const li = event.target.closest("li");   //we assign the li to a variable and then pass it to the delete function but we can also remove the line li.remove() from the delete function and put it here.
    if (!li) return;

    const id = li.getAttribute("Id");
    deleteTask(li, id);   //when the event trigried the deletetask func delets the li from the parent an local storage
  });

  return li;
}

// Event listener for the add button
add.addEventListener("click", () => {
  if (input.value) {
    let id = Math.random().toString(); // Generate a unique ID
    let li = createTaskElement(input.value, id);
    ul.appendChild(li);

    tasks.push({ id, title: input.value });
    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = ""; // Clear the input field
    updateParentHeight();
  }
});



//my speagiti code 

/*    
let parent = document.querySelector(".tasks");
//the ul
let ul = document.createElement("ul");
ul.style.cssText =" position: absolute; top:5px; right:9px; margin:0; display: flex; flex-direction:column; justify-content:center; align-items:center; gap:10px;";
parent.appendChild(ul);

let add = document.querySelector(".add");
let input = document.querySelector(".input");
let tasks = [];
let h = 0;

//check for local storage
if(JSON.parse(window.localStorage.getItem("tasks")))
{
    tasks = JSON.parse(window.localStorage.getItem("tasks"));
    tasks.forEach((task) => {
      let li = document.createElement("li");
      li.style.cssText =  "padding:0 10px; display:flex;justify-content:space-between;align-items:center; background-color:white;height:30px; border-radius:5px; outline:none; width:360px; list-style:none;margin:0";
      li.setAttribute("Id",task.id);
      li.textContent = task.title;
      //the button
      let butt = document.createElement("button");
      butt.style.cssText = "background-color:red; color:white; width:50px; border:none; border-radius:5px;cursor:pointer;";
      butt.textContent = "Delete";
      //the append
      li.appendChild(butt);
      ul.appendChild(li);
      parent.style.height = `${h+=40}px`;

      butt.addEventListener("click", ()=>{
        parent.style.height = `${h-=40}px`;
        li.remove();
        //insure the default height
        if(ul.childNodes.length ==0)
        parent.style.height = "40px";

      //remove from local storage
      const id = li.getAttribute("Id");
      tasks = tasks.filter((task) => task.id !== id);
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      if(tasks.length ===0)
      window.localStorage.clear();

      }); 
    });
}


add.addEventListener("click" , ()=>{

  if(input.value)
  {
    
    //set the li's
    let li = document.createElement("li");
    li.style.cssText =  "padding:0 10px; display:flex;justify-content:space-between;align-items:center; background-color:white;height:30px; border-radius:5px; outline:none; width:360px; list-style:none;margin:0";
    li.setAttribute("Id",Math.random().toString());
    li.textContent = input.value;
    //the button
    let butt = document.createElement("button");
    butt.style.cssText = "background-color:red; color:white; width:50px; border:none; border-radius:5px;cursor:pointer;";
    butt.textContent = "Delete";
    //the append
    li.appendChild(butt);
    ul.appendChild(li);
    //local storage
    let title = input.value;
    let id = li.getAttribute("Id");
    tasks.push({id,title});
    window.localStorage.setItem("tasks" , JSON.stringify(tasks));

    //parent height
    parent.style.height = `${h+=40}px`;

    //butt fucntion
    butt.addEventListener("click", ()=>{
      parent.style.height = `${h-=40}px`;
      li.remove();
      //insure the default height
      if(ul.childNodes.length ==0)
      parent.style.height = "40px";

    //remove from local storage
      const id = li.getAttribute("Id");
      tasks = tasks.filter((task) => task.id !== id);
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
      if(tasks.length ===0)
      window.localStorage.clear();
    
    }); 
  }
});
*/