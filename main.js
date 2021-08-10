window.EventsHandler = {
  rightChoiceEventTrigger: function (optionId) {
    ScoreHandler.addRightAnswer();
    UtilsHandler.changeURL(`correct${optionId}.html`);
  },

  wrongChoiceEventTrigger: function (optionId) {
    ScoreHandler.addWrongAnswer();
    UtilsHandler.changeURL(`incorrect${optionId}.html`)
  },

  attachEventsToOptionButtons: function (page, options) {
    const { rightOptionId, wrongOptionsIds, isLastOption = false } = options;


    for (const wrongOptionId of wrongOptionsIds) {
      const optionButton = document.getElementById(`option${wrongOptionId}`);
      optionButton.addEventListener('click', function () {
        window.EventsHandler.wrongChoiceEventTrigger(page, isLastOption);
      });
    }

    const rightOptionButton = document.getElementById(`option${rightOptionId}`);
    rightOptionButton.addEventListener('click', function () {
      window.EventsHandler.rightChoiceEventTrigger(page, isLastOption);
    });
  }
};

window.ScoreHandler = {
  clearScore: function () {
    window.sessionStorage.clear()
    window.sessionStorage.setItem('wrong_answers', 0);
    window.sessionStorage.setItem('right_answers', 0);
  },

  addWrongAnswer: function () {
    const previousScore = parseInt(window.sessionStorage.getItem('wrong_answers'));
    window.sessionStorage.setItem('wrong_answers', previousScore + 1);
  },

  addRightAnswer: function () {
    const previousScore = parseInt(window.sessionStorage.getItem('right_answers'));
    window.sessionStorage.setItem('right_answers', previousScore + 1);
  },

  // substractWrongAnswer: function () {
  //   const previousScore = window.sessionStorage.getItem('wrong_answers')
  //   window.sessionStorage.setItem('wrong_answers', previousScore > 0 ? previousScore - 1 : 0);
  // },

  // substractRightAnswer: function () {
  //   const previousScore = window.sessionStorage.getItem('right_answers')
  //   window.sessionStorage.setItem('right_answers', previousScore > 0 ? previousScore - 1 : 0);
  // },

  loadRightAnswersScore: function () {
    const wrongAnswersCounter = document.getElementById('wrong_answers');
    const currentWrongAnswers = window.sessionStorage.getItem('wrong_answers');
    wrongAnswersCounter.innerHTML = currentWrongAnswers;
  },

  loadWrongAnswersScore: function () {
    const rightAnswersCounter = document.getElementById('right_answers');
    const currentRightAnswers = window.sessionStorage.getItem('right_answers');
    rightAnswersCounter.innerHTML = currentRightAnswers;
  },

  loadCurrentScore: function () {
    window.ScoreHandler.loadRightAnswersScore();
    window.ScoreHandler.loadWrongAnswersScore();
  },

  loadSummaryMessage: function () {
    const textElement = document.getElementById("summary-message");
    const RIGHT_ANSWERS = parseInt(window.sessionStorage.getItem("right_answers"));
    const WRONG_ANSWERS = parseInt(window.sessionStorage.getItem("wrong_answers"));

    if (RIGHT_ANSWERS > WRONG_ANSWERS) {
      textElement.innerHTML = `Well done!. You have ${RIGHT_ANSWERS} right answers.`
    } else if (RIGHT_ANSWERS == WRONG_ANSWERS) {
      textElement.innerHTML = `End of the game!`
    } else {
      textElement.innerHTML = `Try again!. You have ${WRONG_ANSWERS} wrong answers.`
    }
  }
};

window.UtilsHandler = {
  changeURL: function (newRelativeURL) {
    const baseURL = window.location.href.split('/').slice(0, -1).join('/')
    const newURL = `${baseURL}/${newRelativeURL}`
    window.location.href = newURL;
  },

  resetGame: function () {
    window.ScoreHandler.clearScore();
    UtilsHandler.changeURL("../index.html");
  }
};

window.QuestionsHandler = {
  loadCurrentQuestion: function () {
    window.sessionStorage.getItem('current_question');
  },

  setRemainingQuestions: function (questions) {
    const previousQuantity = window.sessionStorage.setItem('remaining_questions')
    window.sessionStorage.setItem('remaining_questions')
  },

  getLastQuestion: function () {
    window.sessionStorage.getItem('last_question')
  },

  revertLastQuestion: function () {
    switch (getLastQuestion()) {
      case value:

        break;

      default:
        break;
    }
  }
};