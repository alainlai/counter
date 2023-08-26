//document.getElementById("count-el").innerText = 5


let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    count = 0
    countEl.textContent = 0
    console.log("save")
}

let points = 10
let bonusPoints = 10
console.log(points + bonusPoints)