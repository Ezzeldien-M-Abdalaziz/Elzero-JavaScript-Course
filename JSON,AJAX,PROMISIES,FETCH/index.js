let mybutt = document.querySelector(".butt");
let animal = document.querySelector(".animal");

let page = 1;
mybutt.addEventListener("click" , function(e){
    let ourrequest = new XMLHttpRequest();
ourrequest.open("GET" ,`https://learnwebcode.github.io/json-example/animals-${page}.json` );
    ourrequest.onload = function(){
        let ourData = JSON.parse(ourrequest.responseText);
        renderHTML(ourData);
    }
    ourrequest.send();
    page++;
    if(page>3)
    mybutt.classList.add("hideMe");
});

function renderHTML(data){
    let htmlstring = "";
    for(let i=0; i<data.length; i++){
        htmlstring+= "<p>" + data[i].name + "is a " + data[i].species;
    }
    animal.insertAdjacentHTML('beforeend' , htmlstring);
}




let ourrequest = new XMLHttpRequest();
ourrequest.open("GET" ,`https://learnwebcode.github.io/json-example/animals-1.json` );

ourrequest.onload = function(){
    let x = JSON.parse(ourrequest.responseText);
    console.log(x);
}
ourrequest.send();


