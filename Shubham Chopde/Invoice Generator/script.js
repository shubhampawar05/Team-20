let currentDate = document.querySelector('#currentDate');
let date = new Date()

currentDate.innerText = `${date.getDate()}/${date.getMonth()+1}/${
date.getFullYear()}`;
