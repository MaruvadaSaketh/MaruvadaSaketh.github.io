const backdrop = document.getElementById('backdrop');
const inputBox = document.getElementById('input-box');
const input = document.getElementById('input-text')
const button = document.querySelector('.submit-btn');
const authForm = document.getElementById('authentication-form');

const searchInput = document.getElementById('search__input');


const filterBySearchHandler = () => {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        const listItem = container.querySelectorAll('li');
        const filter = searchInput.value.toUpperCase();
        listItem.forEach(list => {
            const title = list.querySelectorAll('h3')[0];
            const lectureTitle = title.textContent || title.innerText;
            if (lectureTitle.toUpperCase().indexOf(filter) > -1) {
                list.classList.remove('visible');
            } else {
                list.classList.add('visible');
            }
        });
    });
};


const toggleBackdrop = () => {
    backdrop.classList.remove('visible');
};



authForm.addEventListener('submit', event => {
    event.preventDefault();
    removeInputBox();
})

button.addEventListener('click', removeInputBox);