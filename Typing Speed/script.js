let time = document.querySelector('#time');
let mistake = document.querySelector('#mistake');
let wpm = document.querySelector('#wpm');
let cpm = document.querySelector('#cpm');
let start = document.querySelector('#start');
let test = document.querySelector('.top p');


let timer
let sec = 60;

let input = document.querySelector('textarea');
let over = document.querySelector('.over')


let cor = 0;
let wro = 0;


document.querySelector('#start').addEventListener('click', (e) => {
    e.target.disabled = true;

    timer = setInterval(() => {

        sec -= 1;

        time.innerText = `Time left :${sec}s`


        if (sec == 0) {
            clearInterval(timer);
            e.target.disabled = false
            sec = 60;
        }

    }, 1000);


    document.querySelector('textarea').addEventListener('input', () => {

        let arr = over.querySelectorAll('span');

        let target = input.value.split('')

        // if (target[j] === arr[j].innerText) {
        //     target.style.color = "green"
        //     // target[j].classList.remove('incorrect');

        //     console.log("working if");
        //     j++
        // }
        // else{
        //     target.classList.add('incorrect');
        //     target.classList.remove('correct');
        //     console.log("working else");
        //     j++
        // }


        // console.log(target);
        arr.forEach((e, i) => {

            //target is the user input
            //arr is the text displayed

            if(target[i] == null){
                e.classList.remove('correct');
                e.classList.remove('incorrect');
                // console.log(target[i]);
            }
            else if (target[i] === e.innerText) {
                e.classList.add('correct');
                e.classList.remove('incorrect');
            }
            else if (target[i] !== e.innerText) {
                e.classList.add('incorrect');
                e.classList.remove('correct');
            }
        })
        // wro++;
        // cpm.innerText = `Mistake :${wro}`
    })

});

function update() {
    test.innerText.split('').forEach(element => {
        const span = document.createElement('span');
        span.innerText = element;
        //  span.classList.add('correct');
        //  span.classList.add('incorrect');
        over.append(span)
    });
}

update()
