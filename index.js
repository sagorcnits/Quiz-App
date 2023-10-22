const questionData = [
  {
    numb: 1,
    question: "What is HTML?",
    answer: "HyperText Markup Language",
    options: [
      "HyperText Markup Language",
      "Hyper Markup Language",
      "HyperText Language Markup ",
      "Hyper test markup Language",
    ],
  },

  {
    numb: 2,
    question: "What is CSS?",
    answer: "Case Cading StyleSheet",
    options: [
      "Preprocessor HyperText",
      "Case Cading StyleSheet",
      "Case ading StyleSheet ",
      "HyperText  Preprocessor ",
    ],
  },

  {
    numb: 3,
    question: "What is JS?",
    answer: "JavaScript Programing",
    options: [
      "JavaScript Programing",
      "Js Hyper text ",
      "Js Programming Language",
      "JavaScript Programing html ",
    ],
  },

  {
    numb: 4,
    question: "What is React?",
    answer: "React is a JS library",
    options: [
      "React is a JS library",
      "React is a script",
      "react is a programing ",
      "react is a framwork ",
    ],
  },
  {
    numb: 5,
    question: "What is PHP?",
    answer: "Hypertext Preprocessor",
    options: [
      "Preprocessor HyperText",
      "Hypertext Preprocessor233",
      "Hypertext Preprocessor ",
      "HyperText  Preproces ",
    ],
  },
];

const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => {
  document.querySelector(".qustion1").style.display = "none";
  document.querySelector(".qustion2").style.display = "block";
  startQuestion(0);
  timer(timeValue);
  timeprogress(0);
});

let questioncount = 0;
let counter;
let timeValue = 13;
let progress;
let nextBtn = document.querySelector(".next-btn");
nextBtn.onclick = () => {
  if (questioncount < questionData.length - 1) {
    nextBtn.style.display = "none";
    questioncount++;
    clearInterval(counter);
    timer(timeValue);
    clearInterval(progress);
    timeprogress(0);
    startQuestion(questioncount);
  } else {
    document.querySelector(".result-container").style.display = "block";
    document.querySelector(".qustion2").style.display = "none";
    showResult();
  }
};
/*next button complete*/

let rightIcon = `<i class="fa-solid fa-check"></i>`;
let crosIcon = `<i class="fa-solid fa-xmark"></i>`;
let footerQuestion = document.querySelector(".footer-question");
function startQuestion(index) {
  let question1 = document.querySelector(".question");
  question1.innerHTML = `${questionData[index].numb}.${questionData[index].question}`;
  let optionContainer = document.querySelector(".option-container");
  let option = `
  <div class="option">${questionData[index].options[0]}</div>
  <div class="option">${questionData[index].options[1]}</div>
  <div class="option">${questionData[index].options[2]}</div>
  <div class="option">${questionData[index].options[3]}</div>`;
  optionContainer.innerHTML = option;
  footerQuestion.innerText = `${questionData[index].numb} of 5 question`;
  showQuestion(index);
}
/* timer function*/
let timeCount = document.querySelector(".timecount");
function timer(time) {
  counter = setInterval(() => {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = `0${addZero}`;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
    }
  }, 1000);
}
/* progress line*/
let timeProgress = document.querySelector(".progress");
function timeprogress(time) {
  progress = setInterval(() => {
    time += 1;
    timeProgress.style.width = time + "px";

    if (time > 280) {
      clearInterval(progress);
    }
  }, 50);
}

/* showQuestion */
let result = 0;
function showQuestion(index) {
  let option1 = document.querySelectorAll(".option");
  option1.forEach((option) => {
    option.addEventListener("click", (e) => {
      nextBtn.style.display = "block";
      clearInterval(counter);
      clearInterval(progress);
      option1.forEach((option) => {
        option.classList.add("disable");
      });

      if (e.target.innerText === questionData[index].answer) {
        result += 1;
        option.style.backgroundColor = "#78d278";
        option.insertAdjacentHTML("beforeend", rightIcon);
      } else {
        option.style.backgroundColor = "#ff8243";
        option.insertAdjacentHTML("beforeend", crosIcon);

        option1.forEach((option) => {
          if (option.innerText === questionData[index].answer) {
            option.style.backgroundColor = "#78d278";
            option.insertAdjacentHTML("beforeend", rightIcon);
          } else {
            option.style.backgroundColor = "#ff8243";
          }
        });
      }
    });
  });
}

/* result button*/

let resultBtn = document.querySelector(".result-btn");

resultBtn.addEventListener("click", () => {
  window.location.reload();
});

function showResult() {
  let resultDisplay = document.querySelector(".result-display");
  let resultImage = document.querySelector(".result-image");
  if (result > 3) {
    resultImage.innerHTML = ` <img
    src="https://img.freepik.com/free-vector/flat-hand-drawn-people-celebrating-achievement-illustration_52683-56088.jpg?size=626&ext=jpg&uid=R103715052&ga=GA1.1.394492059.1688472621&semt=ais"
    alt=""
  />`;
    resultDisplay.innerHTML = `<h3>congratulations 😍</h3>
    <br />
    <p class="result">Your result ${result} of 5 question</p>`;
  } else {
    resultDisplay.innerHTML = `<h3>Sorry 😂</h3>
    <br />
    <p class="result">Your result ${result} of 5 qestion</p>`;
    resultImage.innerHTML = ` <img src="https://img.freepik.com/free-vector/feeling-sorry-concept-illustration_114360-3618.jpg?size=626&ext=jpg&uid=R103715052&ga=GA1.1.394492059.1688472621&semt=ais" alt=""/> `;
  }
}
