let counter = 0;

let countEl = document.getElementById("count-el");


function increment1() {

    counter++;
    // console.log (counter)
    countEl.innerText = counter
}

function decrement1() {
    counter--;
    countEl.innerText = counter
}