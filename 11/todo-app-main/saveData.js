const input = document.querySelector("input");
const list = document.querySelector(".list");
const btnAll = document.querySelector(".all");
const btnActive = document.querySelector(".active");
const btnCompleted = document.querySelector(".completed");
const statusItems = document.querySelector(".status");
let id = parseInt(localStorage.getItem("id")) || 0;

input.addEventListener("click", () => {
  input.value = "";
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let valueInput = e.target.value;
    if (valueInput === "") {
      return;
    } else {
      localStorage.setItem(id, input.value);
      list.innerHTML += getItemLocalStorage(id);
      id++;
      localStorage.setItem("id", id);
      input.value = "";
      displayOptionList();
    }
  }
});

function data() {
  for (let i = 0; i < id; i++) {
    if (localStorage.getItem(i) !== null) {
      list.innerHTML += getItemLocalStorage(i);
    }
  }
}
data();
function getItemLocalStorage(id) {
  let arr = localStorage.getItem("iconCheckId");
  return `
    <li class="listDarkTheme">
    <div id=${id} class="status statusDarkTheme statusDarkThemeHover ${
    arr ? (arr.includes(id) ? "markStatus" : "") : ""
  }" onclick="markElement(this)"></div>
      <div id=${id} class="toDo ${
    arr ? (arr.includes(id) ? " markItemList" : "") : ""
  }">${localStorage.getItem(id)}</div>
      <div class="close" onclick="deleteElement(this.previousElementSibling)">
        <img src="./icon-cross.svg" alt="iconCross" />
      </div>
    </li>
    `;
}

function deleteElement(element) {
  element.parentNode.remove();
  let prevElem = element.id;
  localStorage.removeItem(prevElem);
  li = document.querySelectorAll("li");
  displayOptionList();
}

function displayOptionList() {
  li = document.querySelectorAll("li");
  let numberList = document.querySelector(".numberList");
  numberList.innerHTML = li.length;
  let lenghtList = li.length;
  let optionList = document.querySelector(".optionList");
  if (lenghtList > 0) {
    optionList.classList.remove("hiddenClass");
  } else {
    optionList.classList.add("hiddenClass");
  }
}
displayOptionList();

btnAll.addEventListener("click", () => {
  list.innerHTML = "";
  data();
});

btnActive.addEventListener("click", () => {
  const elementsWithoutMarkStatus = document.querySelectorAll(".status:not(.markStatus)");
  let activeTasksHTML = "";
  elementsWithoutMarkStatus.forEach((element) => {
    let activeElement = element.nextElementSibling;
    let activeTask = activeElement.textContent;
    activeTasksHTML += `
      <li class="listDarkTheme">
        <div class="status statusDarkTheme statusDarkThemeHover"></div>
        <div class="toDo">${activeTask}</div>
        <div class="close">
          <img src="./icon-cross.svg" alt="iconCross" />
        </div>
      </li>
    `;
  });
  list.innerHTML = activeTasksHTML;
});

btnCompleted.addEventListener("click", () => {
  const markStatusClass = document.querySelectorAll(".markStatus");
  let completedTasksHTML = "";
  markStatusClass.forEach((element) => {
    let completedElement = element.nextElementSibling;
    let completedTask = completedElement.textContent;
    completedTasksHTML += `
      <li class="listDarkTheme">
        <div class="status statusDarkTheme statusDarkThemeHover markStatus"></div>
        <div class="toDo markItemList">${completedTask}</div>
        <div class="close">
          <img src="./icon-cross.svg" alt="iconCross" />
        </div>
      </li>
    `;
  });
  list.innerHTML = completedTasksHTML;
});
