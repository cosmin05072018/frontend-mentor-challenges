const btnDelete = document.querySelectorAll('.delete'); //selectam toate div-urile care au clasa '.delete'; 
const cancel = document.getElementById('cancel'); //selectam butonul 'Cancel' care are id-ul '#cancel';
const deleteContent = document.getElementById('deleteContent'); //selectam butonul 'Delete' care are id-ul '#deleteContent'; 
const modalContent = document.querySelector('.modal'); //selectam container-ul Modal, acesta avand clasa '.modal'; 
const reply = document.querySelectorAll('.replyes'); //selectam butoanele 'Reply' care au clasa '.replys';



//mai jos, folosim functia forEach pentru ca sa putem sterge fiecare continut (in parte) in urma apasarii butonului de DELETE;
//ne vom folosi de functia closest() deoarece ne intereseaza sa ajungem la elementul parinte al continutului care are clasa '.content';
//ne vom folosi de functia remove() pentru a sterge continutul clasei '.content';
//in final, bineinteles, vom seta pentru Modal display:none; 
btnDelete.forEach((item) => {
    item.addEventListener('click', () => {
        modalContent.style.display = 'flex';
        let parentElement = item.closest('.content');
        deleteContent.addEventListener('click', () => {
            parentElement.remove();
            modalContent.style.display = 'none';
        })
    })
})

//la apasarea butonului de CANCEL, Modalul va avea display:none
cancel.addEventListener('click', () => {
    modalContent.style.display = 'none';
})

//ne vom folosi de e.target pentru a putea reveni la display:none la Modal in cazul in care dam click in afara continutului Modalului
modalContent.addEventListener('click', (e) => {
    if (e.target === modalContent) {
        modalContent.style.display = 'none';
    }
})


//vom crea un formular in care vom completa cu text la sectiunea de 'Reply'
reply.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.add('disabled');
        let parentElement = item.closest('.content');
        let newElement = document.createElement('div');
        newElement.innerHTML = `<div class="addcomment">
                                    <div class="sectionComment">
                                        <div class="rightImageAvatar"><img src="./image-juliusomo.png" alt=""></div>
                                        <input class="inputComment" type="text" placeholder="Add a comment...">
                                        <button class="sendComment"> REPLY </button>
                                    </div>
                                </div>`;
        parentElement.appendChild(newElement);

        //vom obtine textul care va fi completat in campul inputului
        const replyBtn = document.querySelector('.sendComment');
        replyBtn.addEventListener('click', () => {
            const valueInput = document.querySelector('.inputComment').value;
            console.log(valueInput)
            newElement.innerHTML = `<div class="replySection">
            <div class="replyContent">
                <div class="content">
                <div class="content">
                <div class="commentContainner">
                    <div class="right">
                        <div class="top">
                            <div class="info">
                                <img src="./image-juliusomo.png" alt="image-juliusomo">
                                <p class="nameAvatar">juliusomo <span class="you">you</span></p>
                                <p class="time">2 days ago</p>
                            </div>
                            <div class="replyes">
                                <img src="./icon-reply.svg" alt="icon-reply">
                                <span class="reply">Reply</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <p class="text"> ${valueInput}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>`;

        })
    })
})