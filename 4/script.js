const makeReadBtn = document.querySelector('.markRead');
const checkRead = document.querySelectorAll('.notRead');
const redCircle = document.querySelectorAll('.newNotificationRed');
const numberMessagesUnread = document.getElementById('number');



makeReadBtn.addEventListener('click', () => {
    redCircle.forEach((item) => {
        item.style.display = 'none';
    })
    checkRead.forEach((item) => {
        item.classList.remove('notRead');
    })
    numberMessagesUnread.innerText = 0;
})