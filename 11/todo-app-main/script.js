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
const remove = document.querySelectorAll(".close");
const numberList = document.querySelector(".numberList");
const contentList = document.querySelector("ul");
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
  removeClass(container, "containerDarkTheme");
  addClass(container, "containerLightTheme");
  removeClass(inputForm, "inputFormDarkTheme");
  addClass(inputForm, "inputFormLightTheme");
  addClass(input, "inputLightTheme");
  statusCircle.forEach((element) => {
    removeClass(element, "statusDarkTheme");
    addClass(element, "statusLightTheme");
    addClass(element, "statusLightThemeHover");
    removeClass(element, "statusDarkThemeHover");
  });
  removeClass(listItems, "listItemsDarkTheme");
  addClass(listItems, "listItemsLightTheme");
  addClass(listItems, "listItemsLightTheme");
  listTag.forEach((li) => {
    removeClass(li, "listDarkTheme");
    addClass(li, "listLightTheme");
  });
  for (let i = 0; i < optionList.length; i++) {
    removeClass(optionList[i], "hoverDarkTheme");
    addClass(optionList[i], "hoverLightTheme");
  }
}

function darkTheme() {
  toDoApp.style.backgroundImage = 'url("./bg-desktop-dark.jpg")';
  addClass(container, "containerDarkTheme");
  removeClass(container, "containerLightTheme");
  removeClass(inputForm, "inputFormLightTheme");
  addClass(inputForm, "inputFormDarkTheme");
  removeClass(input, "inputLightTheme");
  statusCircle.forEach((element) => {
    removeClass(element, "statusLightTheme");
    addClass(element, "statusDarkTheme");
    removeClass(element, "statusLightThemeHover");
    addClass(element, "statusDarkThemeHover");
  });
  addClass(listItems, "listItemsDarkTheme");
  removeClass(listItems, "listItemsLightTheme");
  listTag.forEach((li) => {
    addClass(li, "listDarkTheme");
    removeClass(li, "listLightTheme");
  });
  for (let i = 0; i < optionList.length; i++) {
    addClass(optionList[i], "hoverDarkTheme");
    removeClass(optionList[i], "hoverLightTheme");
  }
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

// active function

function activeOptionList() {
  for (let i = 0; i < optionList.length - 1; i++) {
    optionList[i].addEventListener("click", () => {
      for (let j = 0; j < optionList.length; j++) {
        optionList[j].classList.remove("activeClass");
      }
      optionList[i].classList.add("activeClass");
    });
  }
}

activeOptionList();

/*LIST EVENIMENTS*/

statusCircle.forEach((circle, index) => {
  if (index > 0) {
    circle.addEventListener("click", () => {
      circle.classList.toggle("markStatus");
      circle.nextElementSibling.classList.toggle("markItemList");
      if (circle.classList.contains("markStatus")) {
        circle.innerHTML = `<img src="./icon-check.svg" alt="iconCheck" />`;
      } else {
        circle.innerHTML = "";
      }
    });
  }
});

// toDo List

console.log(input.value);

function situationList() {
  listItems.innerHTML =
    '<p class="notFound">There are currently no tasks...</p>';
}

remove.forEach((elementX) => {
  numberList.innerHTML = listTag.length;
  elementX.addEventListener("click", () => {
    console.log("close");
    elementX.parentNode.remove();
    numberItems(numberList);
  });
});

input.addEventListener("click", () => {
  input.value = "";
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      let valueInput = e.target.value;
      if (valueInput === "") {
        return;
      } else {
        contentList.innerHTML += `
                <li class="listDarkTheme">
                <div class="status statusDarkTheme statusDarkThemeHover"></div>
                <div class="toDo">${valueInput}</div>
                <div class="close">
                  <img src="./icon-cross.svg" alt="iconCross" />
                </div>
              </li>
             `;
    

        input.value = "";
        numberItems(numberList);
      }
    }
  });
});

function numberItems(elementHtml) {
  const listTag = document.querySelectorAll("li");
  elementHtml.innerHTML = listTag.length;
}
