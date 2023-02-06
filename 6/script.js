const btnDelete = document.getElementById('delete');
const cancel = document.getElementById('cancel');
const deleteContent = document.getElementById('deleteContent');
const modalContent = document.querySelector('.modal');

btnDelete.addEventListener('click', () => {
    modalContent.style.display = 'flex';
})

deleteContent.addEventListener('click', () => {
    modalContent.style.display = 'none';

    const content = document.querySelector('.content');
    btnDelete.closest('.content').remove();
})

cancel.addEventListener('click', () => {
    modalContent.style.display = 'none';
})


modalContent.addEventListener('click', (e) => {
    if (e.target === modalContent) {
        modalContent.style.display = 'none';
    }
})