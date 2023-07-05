let statusElements = document.querySelectorAll(".status");
function displayCheck(element) {
  if (element.classList.contains("markStatus")) {
    element.innerHTML = `<img src="./icon-check.svg" alt="iconCheck" />`;
  } else {
    element.innerHTML = "";
  }
}

function markElement(mark) {
  mark.classList.toggle("markStatus");
  mark.nextElementSibling.classList.toggle("markItemList");
  let arr;
  let iconCheckFromLocalStorage = localStorage.getItem("iconCheckId");
  if (iconCheckFromLocalStorage) {
    arr = JSON.parse(iconCheckFromLocalStorage);
  } else {
    arr = [];
  }
  let idMark = mark.id;
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