let statusElements = document.querySelectorAll(".status");
let tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
let idMark;
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

statusElements.forEach((element) => {
  displayCheck(element);
});
