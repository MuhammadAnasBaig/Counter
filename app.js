const count = document.getElementById('count');
const add = document.getElementById('increment');
const sub = document.getElementById('decrement');
const resets = document.getElementById('reset');

add.addEventListener('click', () =>{
    count.innerHTML++;
    applyColor();
});

sub.addEventListener('click', () =>{
    count.innerHTML--;
    applyColor();
});

resets.addEventListener('click', () =>{
    count.innerHTML = 0;
    applyColor();
});

function applyColor() {
    if(count.innerHTML > 0){
        count.style.color = 'green';
    } else if (count.innerHTML < 0){
        count.style.color = 'orange';
    } else{
        count.style.color = 'black';
    }
}