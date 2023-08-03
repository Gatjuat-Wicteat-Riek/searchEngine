const head =document.getElementById('head');
//console.log(head)
head.style.color= "red";
const listMade =document.getElementsByClassName('list-play');
console.log(listMade);
let i;
//styling elemnents
for(i=0; i<listMade.length; i++){
    listMade[i].style.color="blue";
    listMade[i].style.fontSize='1.5rem';
    listMade[i].style.lineSpacing="5px";

}
//adding elements
const ul =document.querySelector("ul");
const li= document.createElement("li");
ul.append(li);
console.log();
li.innerText="Aavator"
li.setAttribute("class", "list-play")
li.style.color="blue";
li.style.fontSize='1.5rem';
