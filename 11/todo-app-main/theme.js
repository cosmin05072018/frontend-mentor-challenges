const sun = document.querySelector(".iconSun");
const moon = document.querySelector(".iconMoon");
const toDoApp = document.querySelector(".toDoApp");
const container = document.querySelector(".container");
const inputForm = document.querySelector(".inputForm");
const inputElement = document.querySelector(".input");
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
  removeClass(container, "containerDarkTheme");
  addClass(container, "containerLightTheme");
  removeClass(inputForm, "inputFormDarkTheme");
  addClass(inputForm, "inputFormLightTheme");
  addClass(inputElement, "inputLightTheme");
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
  removeClass(inputElement, "inputLightTheme");
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