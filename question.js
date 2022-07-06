function Question(questionNumber, answerOptions, correctAnswer) {
  this.questionNumber = questionNumber;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.correctAnswer;
};

/*let soru1 = new Soru(
  "Which is a javascript package management application?",
  { a: "Node.js", b: "Typescript", c: "Npm" },
  "c"
);
let soru2 = new Soru(
  "Which is a .net package management application?",
  { a: "Node.js", b: "Nuget", c: "Npm" },
  "b"
);*/

let questions = [
  new Question(
    "1-Which is not considered frontend?",
    { a: "Css", b: "Html", c: "Javascript", d: "Sql" },
    "d"
  ),
  new Question(
    "2-Which is not considered backend?",
    { a: "Node.js", b: "Typescript", c: "Angular", d: "React" },
    "a"
  ),
  new Question(
    "3-Which is a javascript package management application?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Question(
    "4-Which one does not use the javascript programming language?",
    { a: "React", b: "Angular", c: "Vue.js", d: "Asp.net" },
    "d"
  ),
];
