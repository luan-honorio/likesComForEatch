const likeBtn = document.querySelectorAll('.like');
const cont = document.querySelectorAll('.cont');

likeBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
        cont[index].innerHTML = Number(cont[index].innerHTML) + 1;
     
    });
});



const btndeslike = document.querySelectorAll('.deslike')
btndeslike.forEach((element, index) => {
    element.addEventListener('click', () => {
        cont[index].innerHTML = Number(cont[index].innerHTML) - 1;
    });
});