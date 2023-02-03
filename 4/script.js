const makeReadBtn = document.querySelector('.markRead');
const checkRead = document.querySelectorAll('.notRead');
const redCircle = document.querySelectorAll('.newNotificationRed');
const numberMessagesUnread = document.getElementById('number');
const valueInput = document.getElementById('valueInput');


let maxNotifications = 3;
numberMessagesUnread.innerHTML = maxNotifications;

console.log(valueInput)

console.log(numberMessagesUnread)
makeReadBtn.addEventListener('click', () => {
    redCircle.forEach((item) => {
        item.style.display = 'none';
    })
    checkRead.forEach((item) => {
        item.classList.remove('notRead');
    })
    numberMessagesUnread.innerHTML = 0;
    makeReadBtn.style.display = 'none';
})



checkRead.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.remove('notRead');
        numberMessagesUnread.innerHTML -= 1;
        if (numberMessagesUnread < 1) {
            numberMessagesUnread.innerText = 0;
        }
    })
})