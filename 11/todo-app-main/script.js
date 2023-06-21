const elementsTheme = document.querySelectorAll(".theme");
const sun = document.querySelector(".iconSun");
const moon = document.querySelector(".iconMoon");

// selectors for themes
const toDoApp = document.querySelector(".toDoApp");
const container = document.querySelector(".container");
const inputForm = document.querySelector(".inputForm");
const input = document.querySelector(".input");
const statusCircle = document.querySelectorAll(".status");
const listItems = document.querySelector(".listItems");
const listTag = document.querySelectorAll("li");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const clearCompletedDarkTheme = document.querySelector(".clear");
let optionList = [all, active, completed, clearCompletedDarkTheme];

function setupTheme() {
  moon.addEventListener("click", () => {
    moon.classList.add("hiddenClass");
    sun.classList.remove("hiddenClass");
    lightTheme();
  });
  sun.addEventListener("click", () => {
    sun.classList.add("hiddenClass");
    moon.classList.remove("hiddenClass");
    darkTheme();
  });
}
setupTheme();

function lightTheme() {
  toDoApp.style.backgroundImage = 'url("./bg-desktop-light.jpg")';
  container.classList.remove("containerDarkTheme");
  container.classList.add("containerLightTheme");
  inputForm.classList.remove("inputFormDarkTheme");
  inputForm.classList.add("inputFormLightTheme");
  input.classList.add("inputLightTheme");
  statusCircle.forEach((element) => {
    element.classList.remove("statusDarkTheme");
    element.classList.add("statusLightTheme");
    element.classList.add("statusLightThemeHover");
    element.classList.remove("statusDarkThemeHover");
  });
  listItems.classList.remove("listItemsDarkTheme");
  listItems.classList.add("listItemsLightTheme");
  listTag.forEach((li) => {
    li.classList.remove("listDarkTheme");
    li.classList.add("listLightTheme");
  });
  for (let i = 0; i < optionList.length; i++) {
    optionList[i].classList.remove("hoverDarkTheme");
    optionList[i].classList.add("hoverLightTheme");
  }
}

function darkTheme() {
  toDoApp.style.backgroundImage = 'url("./bg-desktop-dark.jpg")';
  container.classList.add("containerDarkTheme");
  container.classList.remove("containerLightTheme");
  inputForm.classList.remove("inputFormLightTheme");
  inputForm.classList.add("inputFormDarkTheme");
  input.classList.remove("inputLightTheme");
  statusCircle.forEach((element) => {
    element.classList.remove("statusLightTheme");
    element.classList.add("statusDarkTheme");
    element.classList.remove("statusLightThemeHover");
    element.classList.add("statusDarkThemeHover");
  });
  listItems.classList.add("listItemsDarkTheme");
  listItems.classList.remove("listItemsLightTheme");
  listTag.forEach((li) => {
    li.classList.add("listDarkTheme");
    li.classList.remove("listLightTheme");
  });
  for (let i = 0; i < optionList.length; i++) {
    optionList[i].classList.add("hoverDarkTheme");
    optionList[i].classList.remove("hoverLightTheme");
  }
}

// active function

function activeOptionList(){
    for(let i = 0; i < optionList.length-1; i++) {
        optionList[i].addEventListener('click', ()=>{
            for(let j = 0; j < optionList.length; j++) {
                optionList[j].classList.remove('activeClass')
            }
            optionList[i].classList.add('activeClass');
        })
    }
}

activeOptionList()

// toDo List

const contentList = document.querySelector("ul");
console.log(input.value);

function situationList() {
  if (!contentList.childElementCount) {
    contentList.innerHTML =
      '<p class="notFound">There are currently no tasks...</p>';
  }
}
situationList();

input.addEventListener("click", () => {
  input.value = "";
//   const notFound = document.querySelector(".notFound");
//   notFound.style.display = "none";
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      let valueInput = e.target.value;
      contentList.innerHTML += `
           <li class="listDarkTheme">
                <div class="status statusDarkTheme"></div>
                <div class="toDo">${valueInput}</div>
                <div class="close">
                  <img src="./icon-cross.svg" alt="iconCross" />
                </div>
              </li>
           `;
      input.value = "";
    }
  });
});
