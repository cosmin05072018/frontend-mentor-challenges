
function markElement(mark) {
  mark.classList.toggle('markStatus');
  mark.nextElementSibling.classList.toggle("markItemList");
  if (mark.classList.contains("markStatus")) {
    mark.innerHTML = `<img src="./icon-check.svg" alt="iconCheck" />`;
  } else {
    mark.innerHTML = "";
  }
  console.log(mark.id)
}


