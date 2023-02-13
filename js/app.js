console.log("works!")

let punteggioNums = document.getElementById("punteggio-numero")
let punteggioGroup = document.getElementById("punteggio-elenco")
let btnEl = document.getElementById("btn")
const nums = []
const rightNums = []
const wrongNums = []

function numsGenerator() {
    do {
        const randomNumber = Math
            .floor(Math.random() * 100) + 1
        nums.push(randomNumber);
    } while (nums.length < 5);
}

function userNumsGatherer() {

    for (let i = 0; i < 5; i++) {
        let inputNums = parseInt(prompt("Inserisci i numeri precedenti"))
        if (nums.includes(inputNums)) {
            rightNums.push(inputNums)
        } else {
            wrongNums.push(inputNums)
        }
    }
}

function print(){
    punteggioGroup.innerHTML = rightNums
    punteggioNums.innerHTML = rightNums.length 
}

btnEl.addEventListener("click",
    function runEl() {
        numsGenerator()
        alert(nums)
        setTimeout(userNumsGatherer, 30000)
        setTimeout(print, 45000) 
    }
)


console.log(nums, rightNums, wrongNums)



