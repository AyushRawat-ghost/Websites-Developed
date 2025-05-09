// var declaration
let count = 0;
const label = document.getElementById("label");

// increment
document.getElementById("inc").onclick = function () {
    count++;
    label.textContent = count;
}

//decrement
document.getElementById("dec").onclick = function () {
    count--;
    if (count < 0) {
        count = 0;
        label.textContent = count;
    } else {
        label.textContent = count
    }
}

//reset 
document.getElementById("reset").onclick = function () {
    count = 0;
    label.textContent = count;
}