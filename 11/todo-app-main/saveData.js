const input = document.querySelector("input");
const list = document.querySelector(".list");
const btnAll = document.querySelector(".all");
const btnActive = document.querySelector(".active");
const btnCompleted = document.querySelector(".completed");
const listAll = document.querySelector(".listItems ");
const clearBtn = document.querySelector(".clear");
let id = parseInt(localStorage.getItem("id")) || 0;
let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
let idMark;

input.addEventListener("click", () => {
  input.value = "";
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let valueInput = e.target.value;
    if (valueInput === "") {
      return;
    } else {
      const task = {
        id: id,
        task: valueInput,
        status: "all",
      };
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      id++;
      localStorage.setItem("id", id);
      tasksFromLocalStorage = tasks; //actualizam in timp real
      data();
      statusCheck();
      displayOptionList();
      input.value = "";
      listAll.classList.remove("hiddenClass");
    }
  }
});
function data() {
  let tasksFromLocalStorage = localStorage.getItem("tasks");
  let tasks = JSON.parse(tasksFromLocalStorage);
  if (tasksFromLocalStorage) {
    let html = "";
    tasks.forEach((task, index) => {
      console.log(task);
      let arr = localStorage.getItem("iconCheckId");
      let listItemHTML = `
        <li class="listDarkTheme">
          <div id=${
            task.id
          } class="status statusDarkTheme statusDarkThemeHover ${
        arr ? (arr.includes(task.id) ? "markStatus" : "") : ""
      }" onclick="markElement(this)"></div>
          <div id=${task.id} class="toDo ${
        arr ? (arr.includes(task.id) ? " markItemList" : "") : ""
      }">${task.task}</div>
          <div class="close" onclick="deleteElement(${index})">
            <img src="./icon-cross.svg" alt="iconCross" />
          </div>
        </li>
      `;
      html += listItemHTML;
    });
    list.innerHTML = html;
  }
}

data();

function deleteElement(index) {
  let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
  tasksFromLocalStorage.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksFromLocalStorage));
  statusCheck();
  if (tasksFromLocalStorage.length === 0) {
    localStorage.setItem("id", "0");
    id = 0;
    listAll.classList.add("hiddenClass");
  }
  tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || []; //actualizam
  data();
  statusCheck();
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

/*
btnAll.addEventListener("click", () => {
  list.innerHTML = "";
  let tasksFromLocalStorage = localStorage.getItem("tasks");
  let tasks = JSON.parse(tasksFromLocalStorage);
  if (tasksFromLocalStorage) {
    let html = "";
    tasks.forEach((task, index) => {
      console.log(task);
      let arr = localStorage.getItem("iconCheckId");
      let listItemHTML = `
        <li class="listDarkTheme">
          <div id=${
            task.id
          } class="status statusDarkTheme statusDarkThemeHover ${
        arr ? (arr.includes(task.id) ? "markStatus" : "") : ""
      }" onclick="markElement(this)"></div>
          <div id=${task.id} class="toDo ${
        arr ? (arr.includes(task.id) ? " markItemList" : "") : ""
      }">${task.task}</div>
          <div class="close" onclick="deleteElement(${index})">
            <img src="./icon-cross.svg" alt="iconCross" />
          </div>
        </li>
      `;
      html += listItemHTML;
    });
    list.innerHTML = html;
  }
  statusCheck();
});

btnActive.addEventListener("click", () => {
  let completedTasksHTML = "";
  tasksFromLocalStorage.forEach((element) => {
    if (element.status === "all") {
      completedTasksHTML += `
      <li class="listDarkTheme">
         <div class="status statusDarkTheme statusDarkThemeHover "></div>
         <div class="toDo ">${element.task}</div>
         <div class="close">
           <img src="./icon-cross.svg" alt="iconCross" />
         </div>
       </li>
     `;
    }
  });
  list.innerHTML = completedTasksHTML;
});

btnCompleted.addEventListener("click", () => {
  tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
  let completedTasksHTML = "";
  tasksFromLocalStorage.forEach((element) => {
    if (element.status == "markTask") {
      completedTasksHTML += `
        <li class="listDarkTheme">
           <div class="status statusDarkTheme statusDarkThemeHover markStatus"></div>
           <div class="toDo markItemList">${element.task}</div>
           <div class="close">
             <img src="./icon-cross.svg" alt="iconCross" />
           </div>
         </li>
       `;
    }
  });
  list.innerHTML = completedTasksHTML;
  statusCheck();
});
*/
clearBtn.addEventListener("click", () => {
  tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
  let clearTaskMark = tasksFromLocalStorage.filter((element) => {
    return element.status !== "markTask";
  });
  localStorage.setItem("tasks", JSON.stringify(clearTaskMark));
  tasksFromLocalStorage = clearTaskMark;
  data();
  statusCheck();
  displayOptionList();
});


function displayCheck(element) {
  if (element.classList.contains("markStatus")) {
    element.innerHTML = `<img src="./icon-check.svg" alt="iconCheck" />`;

    tasksFromLocalStorage.map((element) => {
      if (element.id == idMark) {
        element.status = "markTask";
        localStorage.setItem("tasks", JSON.stringify(tasksFromLocalStorage));
      }
    });
  } else {
    element.innerHTML = "";
    tasksFromLocalStorage.map((element) => {
      if (element.id == idMark) {
        element.status = "all";
        localStorage.setItem("tasks", JSON.stringify(tasksFromLocalStorage));
      }
    });
  }
}

function markElement(mark) {
  idMark = mark.id;
  mark.classList.toggle("markStatus");
  mark.nextElementSibling.classList.toggle("markItemList");
  let arr;
  let iconCheckFromLocalStorage = localStorage.getItem("iconCheckId");
  if (iconCheckFromLocalStorage) {
    arr = JSON.parse(iconCheckFromLocalStorage);
  } else {
    arr = [];
  }
  if (arr.includes(idMark)) {
    let index = arr.indexOf(idMark);
    arr.splice(index, 1);
  } else {
    arr.push(idMark);
  }
  localStorage.setItem("iconCheckId", JSON.stringify(arr));
  displayCheck(mark); //actualizam in timp real
}

function statusCheck() {
  let statusElements = document.querySelectorAll(".status");
  statusElements.forEach((element) => {
    displayCheck(element);
  });
}
statusCheck();
