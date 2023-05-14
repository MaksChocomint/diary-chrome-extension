const meditationBtn = document.getElementById("meditation-btn");
const healthyFoodBtn = document.getElementById("healthy-food-btn");
const runningBtn = document.getElementById("running-btn");
const gymBtn = document.getElementById("gym-btn");
const biomechanicsBtn = document.getElementById("biomechanics-btn");
const walkingBtn = document.getElementById("walking-btn");
const programmingBtn = document.getElementById("programming-btn");
const readingBtn = document.getElementById("reading-btn");
const modelingBtn = document.getElementById("modeling-btn");
const clearBtn = document.getElementById("clear-btn");

const meditation = document.getElementById("meditation");
const healthyFood = document.getElementById("healthy-food");
const running = document.getElementById("running");
const gym = document.getElementById("gym");
const biomechanics = document.getElementById("biomechanics");
const walking = document.getElementById("walking");
const programming = document.getElementById("programming");
const reading = document.getElementById("reading");
const modeling = document.getElementById("modeling");
const lvl = document.getElementById("lvl");
const lvlBar = document.getElementById("lvl-bar");

let meditationMins = 0;
let healthyFoodDs = 0;
let runningKms = 0;
let gymMins = 0;
let biomechanicsMins = 0;
let walkingKms = 0;
let modelingHrs = 0;
let programmingHrs = 0;
let readingHrs = 0;

const neededXpData = [];

for (i = 0; i <= 100; i++) {
  neededXpData.push(100 + i * 10);
}

function activate() {
  meditationMins = parseInt(localStorage.getItem("meditation"));
  healthyFoodDs = parseInt(localStorage.getItem("healthyFood"));
  runningKms = parseInt(localStorage.getItem("running"));
  gymMins = parseInt(localStorage.getItem("gym"));
  biomechanicsMins = parseInt(localStorage.getItem("biomechanics"));
  walkingKms = parseInt(localStorage.getItem("walking"));
  modelingHrs = parseInt(localStorage.getItem("modeling"));
  programmingHrs = parseInt(localStorage.getItem("programming"));
  readingHrs = parseInt(localStorage.getItem("reading"));

  let meditationValue = meditationMins * 3;
  let healthyFoodValue = healthyFoodDs * 100;
  let runningValue = runningKms * 30;
  let gymValue = gymMins * 2;
  let biomechanicsValue = biomechanicsMins * 30;
  let walkingValue = walkingKms * 20;
  let modelingValue = modelingHrs * 50;
  let programmingValue = programmingHrs * 10;
  let readingValue = readingHrs * 10;
  let xp =
    meditationValue +
    healthyFoodValue +
    runningValue +
    gymValue +
    biomechanicsValue +
    walkingValue +
    modelingValue +
    programmingValue +
    readingValue;

  meditation.textContent = "Meditation: " + meditationMins + " min";
  healthyFood.textContent = "Healthy food: " + healthyFoodDs + " d";
  running.textContent = "Running: " + runningKms + " km";
  gym.textContent = "Gym: " + gymMins + " min";
  biomechanics.textContent = "Biomechanics: " + biomechanicsMins + " min";
  walking.textContent = "Walking: " + walkingKms + " km";
  modeling.textContent = "Modeling: " + modelingHrs + " hr";
  programming.textContent = "Programming: " + programmingHrs + " hr";
  reading.textContent = "Reading: " + readingHrs + " hr";

  lvl.textContent =
    "LVL: " +
    Math.floor(xp / neededXpData[0]) +
    " (" +
    (xp % neededXpData[0]) +
    "/" +
    neededXpData[0] +
    ")";

  lvlBar.max = neededXpData[0];
  lvlBar.value = Math.floor(xp % neededXpData[0]);
}

setInterval(activate, 100);

meditationBtn.addEventListener("click", () => {
  meditationMins++;
  meditation.textContent = "meditation: " + meditationMins + " min";
  localStorage.setItem("meditation", meditationMins);
});

healthyFoodBtn.addEventListener("click", () => {
  healthyFoodDs++;
  healthyFood.textContent = "Healthy food: " + healthyFoodDs + " d";
  localStorage.setItem("healthyFood", healthyFoodDs);
});

runningBtn.addEventListener("click", () => {
  runningKms++;
  running.textContent = "Running: " + runningKms + " km";
  localStorage.setItem("running", runningKms);
});

gymBtn.addEventListener("click", () => {
  gymMins++;
  gym.textContent = "Gym: " + gymMins + " min";
  localStorage.setItem("gym", gymMins);
});

biomechanicsBtn.addEventListener("click", () => {
  biomechanicsMins++;
  biomechanics.textContent = "Biomechanics: " + biomechanicsMins + " min";
  localStorage.setItem("biomechanics", biomechanicsMins);
});

walkingBtn.addEventListener("click", () => {
  walkingKms++;
  walking.textContent = "Walking: " + walkingKms + " km";
  localStorage.setItem("walking", walkingKms);
});

modelingBtn.addEventListener("click", () => {
  modelingHrs++;
  modeling.textContent = "Modeling: " + modelingHrs + " hr";
  localStorage.setItem("modeling", modelingHrs);
});

programmingBtn.addEventListener("click", () => {
  programmingHrs++;
  programming.textContent = "Programming: " + programmingHrs + " hr";
  localStorage.setItem("programming", programmingHrs);
});

readingBtn.addEventListener("click", () => {
  readingHrs++;
  reading.textContent = "Reading: " + readingHrs + " hr";
  localStorage.setItem("reading", readingHrs);
});

clearBtn.addEventListener("click", () => {
  clearBtn.style.background =
    "linear-gradient(45deg, rgb(248, 44, 8), rgb(253, 101, 0))";
  clearBtn.textContent = "CLICK TO DELETE YOUR DATA";
  clearBtn.onclick = function clearStats() {
    localStorage.setItem("meditation", 0);
    localStorage.setItem("healthyFood", 0);
    localStorage.setItem("running", 0);
    localStorage.setItem("gym", 0);
    localStorage.setItem("biomechanics", 0);
    localStorage.setItem("walking", 0);
    localStorage.setItem("modeling", 0);
    localStorage.setItem("programming", 0);
    localStorage.setItem("reading", 0);
  };
  setTimeout(() => {
    clearBtn.onclick = "";
    clearBtn.textContent = "CLEAR";
    clearBtn.style.background =
      "linear-gradient(45deg, rgb(62, 74, 241), rgba(212, 8, 253, 0.685))";
  }, 500);
});
