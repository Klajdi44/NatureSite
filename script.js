const nav = document.querySelector("nav");
const openMenu = document.querySelector(".burgerWrapper");

openMenu.addEventListener("click", displayBlock);

function displayBlock() {
  nav.classList.toggle("toggler");
}

nav.addEventListener("click", closeNav);

function closeNav(e) {
  if (e.target != "nav"); {
    nav.classList.toggle("toggler");
  }
}

//to Do list 

const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const ul = document.getElementById("ulList");

addBtn.addEventListener("click", createNewLi);
input.addEventListener("keypress", createNewLiAfterKeyPress);



function createNewLi() {
  // i am putting it into an if function because if i didnt when if i pressed the add button then a delete button would be generated from nowhere.
  if (input.value.length > 0) {
    const newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(input.value));
    ul.appendChild(newLi);

    const delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("Delete"));
    newLi.appendChild(delBtn);
    delBtn.classList.add("delBtn");
    newLi.classList.add("li");
    input.value = "";

    //delete item; 
    delBtn.addEventListener("click", delItem);

    function delItem(e) {
      e.target.parentElement.remove();
    }
  }

}

//create list when enter is pressed too
function createNewLiAfterKeyPress(e) {

  if (input.value.length > 0 && e.keyCode === 13) {
    createNewLi();
  }
}