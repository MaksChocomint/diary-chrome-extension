const nofapBtn = document.getElementById("nofap-btn")
const healthyFoodBtn = document.getElementById("healthy-food-btn")
const runningBtn = document.getElementById("running-btn")
const gymBtn = document.getElementById("gym-btn")
const biomechanicsBtn = document.getElementById("biomechanics-btn")
const sleepBtn = document.getElementById("sleep-btn")
const programmingBtn = document.getElementById("programming-btn")
const readingBtn = document.getElementById("reading-btn")
const clearBtn = document.getElementById("clear-btn")

const nofap = document.getElementById("nofap")
const healthyFood = document.getElementById("healthy-food")
const running = document.getElementById("running")
const gym = document.getElementById("gym")
const biomechanics = document.getElementById("biomechanics")
const sleep = document.getElementById("sleep")
const programming = document.getElementById("programming")
const reading = document.getElementById("reading")
const lvl = document.getElementById("lvl")
const lvlBar = document.getElementById("lvl-bar")

let nofapDs = 0
let healthyFoodDs = 0
let runningHrs = 0
let gymHrs = 0
let biomechanicsHrs = 0
let sleepHrs = 0
let programmingHrs = 0
let readingHrs = 0
let checkNoFap = 0

const neededXpData = []

for (i = 0; i <= 100; i++) {
    neededXpData.push(100 + i * 10)
}

function activate() {
    nofapDs = parseInt(localStorage.getItem("nofap"))
    healthyFoodDs = parseInt(localStorage.getItem("healthyFood"))
    runningHrs = parseInt(localStorage.getItem("running"))
    gymHrs = parseInt(localStorage.getItem("gym"))
    biomechanicsHrs = parseInt(localStorage.getItem("biomechanics"))
    sleepHrs = parseInt(localStorage.getItem("sleep"))
    programmingHrs = parseInt(localStorage.getItem("programming"))
    readingHrs = parseInt(localStorage.getItem("reading"))

    let nofapValue = nofapDs * 50
    let healthyFoodValue = healthyFoodDs * 25
    let runningValue = runningHrs * 30
    let gymValue = gymHrs * 10
    let biomechanicsValue = biomechanicsHrs * 30
    let sleepValue = sleepHrs
    let programmingValue = programmingHrs * 10
    let readingValue = readingHrs * 5
    let xp = nofapValue + healthyFoodValue + runningValue + gymValue + biomechanicsValue + sleepValue + programmingValue + readingValue

    nofap.textContent = "Nofap: " + nofapDs + " d"
    healthyFood.textContent = "Healthy food: " + healthyFoodDs + " d"
    running.textContent = "Running: " + runningHrs + " hr"
    gym.textContent = "Gym: " + gymHrs + " hr"
    biomechanics.textContent = "Biomechanics: " + biomechanicsHrs + " hr"
    sleep.textContent = "Sleep: " + sleepHrs + " hr"
    programming.textContent = "Programming: " + programmingHrs + " hr"
    reading.textContent = "Reading: " + readingHrs + " hr"

    lvl.textContent = "LVL: " + Math.floor(xp / neededXpData[0])  + " (" + xp % neededXpData[0] + "/" + neededXpData[0] + ")"
    
    lvlBar.max = neededXpData[0]
    lvlBar.value = Math.floor(xp % neededXpData[0])
}

setInterval(activate, 100)

nofapBtn.addEventListener("click", () => {
    nofapDs++
    nofap.textContent = "Nofap: " + nofapDs + " d"
    localStorage.setItem("nofap", nofapDs)
})

healthyFoodBtn.addEventListener("click", () => {
    healthyFoodDs++
    healthyFood.textContent = "Healthy food: " + healthyFoodDs + " d"
    localStorage.setItem("healthyFood", healthyFoodDs)
})

runningBtn.addEventListener("click", () => {
    runningHrs++
    running.textContent = "Running: " + runningHrs + " hr"
    localStorage.setItem("running", runningHrs)
})

gymBtn.addEventListener("click", () => {
    gymHrs++
    gym.textContent = "Gym: " + gymHrs + " hr"
    localStorage.setItem("gym", gymHrs)
})

biomechanicsBtn.addEventListener("click", () => {
    biomechanicsHrs++
    biomechanics.textContent = "Biomechanics: " + biomechanicsHrs + " hr"
    localStorage.setItem("biomechanics", biomechanicsHrs)
})

sleepBtn.addEventListener("click", () => {
    sleepHrs++
    sleep.textContent = "Sleep: " + sleepHrs + " hr"
    localStorage.setItem("sleep", sleepHrs)
})

programmingBtn.addEventListener("click", () => {
    programmingHrs++
    programming.textContent = "Programming: " + programmingHrs + " hr"
    localStorage.setItem("programming", programmingHrs)
})

readingBtn.addEventListener("click", () => {
    readingHrs++
    reading.textContent = "Reading: " + readingHrs + " hr"
    localStorage.setItem("reading", readingHrs)
})



clearBtn.addEventListener("click", () => {
    clearBtn.style.background = "linear-gradient(45deg, rgb(248, 44, 8), rgb(253, 101, 0))"
    clearBtn.textContent = "CLICK TO DELETE YOUR DATA"
    clearBtn.onclick = function clearStats() {
        localStorage.setItem("nofap", 0)
        localStorage.setItem("healthyFood", 0)
        localStorage.setItem("running", 0)
        localStorage.setItem("gym", 0)
        localStorage.setItem("biomechanics", 0)
        localStorage.setItem("sleep", 0)
        localStorage.setItem("programming", 0)
        localStorage.setItem("reading", 0)
    }
    setTimeout(() => {
        clearBtn.onclick = ""
        clearBtn.textContent = "CLEAR"
        clearBtn.style.background = "linear-gradient(45deg, rgb(62, 74, 241), rgba(212, 8, 253, 0.685))"
    }, 500)
})

