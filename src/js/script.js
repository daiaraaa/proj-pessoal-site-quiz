const questions = [
    { question: "Qual a capital da França?", answer: "Paris", answer:"paris", answer:"PARIS" },
    { question: "Qual a maior montanha do mundo?", answer: "Monte Everest", answer:"monte everest",answer:"MONTE EVEREST" },
    { question: "Qual maior planeta do sistema solar?", answer: "Júpiter", answer: "júpiter", answer:"JÚPITER" },
  ];
  
  let score = 0;
  
  function displayQuestions() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";
  
    questions.forEach((question) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
      questionElement.textContent = question.question;
  
      const answerElement = document.createElement("input");
      answerElement.type = "text";
      answerElement.classList.add("answer");
  
      questionContainer.appendChild(questionElement);
      questionContainer.appendChild(answerElement);
    });
  }
  
  displayQuestions();
  
  const submitButton = document.getElementById("submit-answer");

  
  submitButton.addEventListener("click", () => {
    score = 0;
    const answerElements = document.querySelectorAll("input[class='answer']");
  
    answerElements.forEach((answerElement, index) => {
      const userAnswer = answerElement.value.toLowerCase();
      const correctAnswer = questions[index].answer.toLowerCase();
  
      if (userAnswer === correctAnswer) {
        score++;
      }
    });
  
    if (score === questions.length) {
      alert("Está correto, Parabéns!")
    } else {
      alert("Tente de novo!");
    }
  });