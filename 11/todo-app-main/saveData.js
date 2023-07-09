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

      data();
      input.value = "";
      displayOptionList();
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
          <div id=${task.id} class="status statusDarkTheme statusDarkThemeHover ${
        arr ? (arr.includes(task.id) ? "markStatus" : "") : ""
      }" onclick="markElement(this)"></div>
          <div id=${task.id} class="toDo ${
        arr ? (arr.includes(task.id) ? " markItemList" : "") : ""
      }">${task.task}</div>
          <div class="close" onclick="deleteElement( ${index})">
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
// function getItemLocalStorage(id, element) {
//   let arr = localStorage.getItem("iconCheckId");
//   return `
//     <li class="listDarkTheme">
//     <div id=${id} class="status statusDarkTheme statusDarkThemeHover ${
//     arr ? (arr.includes(id) ? "markStatus" : "") : ""
//   }" onclick="markElement(this)"></div>
//       <div id=${id} class="toDo ${
//     arr ? (arr.includes(id) ? " markItemList" : "") : ""
//   }">${element}</div>
//       <div class="close" onclick="deleteElement(this.previousElementSibling)">
//         <img src="./icon-cross.svg" alt="iconCross" />
//       </div>
//     </li>
//     `;
// }
function deleteElement(index) {
  console.log(index)
  // let elementId = element.id;
  // element.parentNode.remove();
  // displayOptionList();
  // let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
  // tasksFromLocalStorage.splice(elementId, 1);
  // localStorage.setItem("tasks", JSON.stringify(tasksFromLocalStorage));
  // if (tasksFromLocalStorage.length === 0) {
  //   localStorage.setItem("id", "0"); // Setăm id-ul la valoarea 0
  //   id = 0;
  // }
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
  data();
});

btnActive.addEventListener("click", () => {
  const elementsWithoutMarkStatus = document.querySelectorAll(
    ".status:not(.markStatus)"
  );
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
  console.log(markStatusClass);
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
*/
