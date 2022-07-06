const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  startTimer(10);
  starttimerLine();
  ui.displayQuestion(quiz.bringQuestion());
  ui.displayQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
  ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    clearInterval(counter);
    startTimer(10);
    clearInterval(counterLine);
    starttimerLine();
    ui.displayQuestion(quiz.bringQuestion());
    ui.displayQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
    ui.btn_next.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    ui.quiz_box.classList.remove("active");
    ui.score_box.classList.add("active");
    ui.displayScore(quiz.questions.length, quiz.correctAnswerNumber);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.correctAnswerNumber = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);
  let answer = option.querySelector("span b").textContent;
  let problem = quiz.bringQuestion();

  if (problem.checkAnswer(answer)) {
    quiz.correctAnswerNumber += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }

  ui.btn_next.classList.add("show");
}

let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.time_second.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counter);

      ui.time_text.textContent = "Süre Bitti";

      let answer = quiz.bringQuestion().correctAnswer;

      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == answer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
      }

      ui.btn_next.classList.add("show");
    }
  }
}

let counterLine;

function starttimerLine() {
  let line_width = 0;

  counterLine = setInterval(timer, 20);

  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + "px";

    if (line_width > 549) {
      clearInterval(counterLine);
    }
  }
}
