let statusElements = document.querySelectorAll(".status");


statusElements.forEach((element)=>{
  if (element.classList.contains("markStatus")) {
    element.innerHTML = `<img src="./icon-check.svg" alt="iconCheck" />`;
  } else {
    element.innerHTML = "";
  }
})

function markElement(mark) {
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
  for (let i = 0; i < statusElements.length; i++) {
    let element = statusElements[i];
    element.classList.toggle("markStatus");
    element.nextElementSibling.classList.toggle("markItemList");
    // if (element.classList.contains("markStatus")) {
    //   element.innerHTML = `<img src="./icon-check.svg" alt="iconCheck" />`;
    // } else {
    //   element.innerHTML = "";
    // }
  }

  localStorage.setItem("iconCheckId", JSON.stringify(arr));

  // statusElements.forEach((element) => {
  //   if (arr.includes(element.id)) {
  //     element.classList.add("markStatus");
  //   } else {
  //     element.classList.remove("markStatus");
  //   }
  // });
}
