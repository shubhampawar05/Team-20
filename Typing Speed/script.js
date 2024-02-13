let time = document.querySelector('#time');
let mistake = document.querySelector('#mistake');
let wpm = document.querySelector('#wpm');
let cpm = document.querySelector('#cpm');
let start = document.querySelector('#start');
let test = document.querySelector('.top p');


let timer
let sec = 60;
let x = 0;
let input = document.querySelector('textarea');
let over = document.querySelector('.over')


input.disabled = true
document.querySelector('#start').addEventListener('click', (e) => {
    e.target.disabled = true;
    input.disabled = false;
    input.value = ""
    document.querySelector("textarea").focus();

    timer = setInterval(() => {
        x++;
        sec -= 1;

        time.innerText = `Time left :${sec}s`


        if (sec == 0) {
            clearInterval(timer);
            e.target.disabled = false
            sec = 60;
            input.disabled = true;
            
        }

    }, 1000);

    
    document.querySelector('textarea').addEventListener('input', () => {

        let arr = over.querySelectorAll('span');

        let target = input.value.split('')

        let wro = 0;
        let char = 0;

        arr.forEach((e, i) => {

            //target is the user input
            //arr is the text displayed

            if(target[i] == null){
                e.classList.remove('correct');
                e.classList.remove('incorrect');
                
            }
            else if (target[i] === e.innerText) {
                e.classList.add('correct');
                e.classList.remove('incorrect');
                char++;
            }

            else if (target[i] !== e.innerText) {
                e.classList.add('incorrect');
                e.classList.remove('correct');
                char++;
            }

            if(e.classList.contains('incorrect')){
                wro++;
            }

        })

        cpm.innerText = `CPM :${Math.floor((char/(x))*60)}`
        mistake.innerText = `Mistake :${wro}`
        let words = input.value.split(' ');
        wpm.innerText = `WPM :${Math.floor((words.length/x)*60)}`
        // console.log(words);
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

document.querySelector('#btn').addEventListener('click', (e)=>{
    input.disabled = true;
    clearInterval(timer);   
    sec = 60;
    input.value = ""
    start.disabled = false;
    x = 0;
    
})
