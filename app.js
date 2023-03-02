// set initial value of counter

let count = 0

const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

const counterValue = document.querySelector("#value");

increase.addEventListener('click', () =>{
    count++;
    displayCount();
});

decrease.addEventListener('click', () =>{
    count--;
    displayCount();
});

reset.addEventListener('click', () =>{
    count = 0;
    displayCount();
})

function displayCount(){
    counterValue.textContent = count;

    if(count < 0 ){
        counterValue.style.color = 'red';
    }

    else if(count === 0){
        counterValue.style.color = 'black';
    }

    else{
        counterValue.style.color = 'green';
    }

}