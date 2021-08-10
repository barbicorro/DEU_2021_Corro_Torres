window.EventsHandler = {
  rightChoiceEventTrigger: function (optionId) {
    UtilsHandler.changeURL(`correct${optionId}.html`);
    ScoreHandler.addRightAnswer();
  },

  wrongChoiceEventTrigger: function (optionId) {
    UtilsHandler.changeURL(`incorrect${optionId}.html`)
    ScoreHandler.addWrongAnswer();
  },

  attachEventsToOptionButtons: function (page, options) {
    const { rightOptionId, wrongOptionsIds } = options;


    for (const wrongOptionId of wrongOptionsIds) {
      const optionButton = document.getElementById(`option${wrongOptionId}`);
      optionButton.addEventListener('click', function () {
        window.EventsHandler.wrongChoiceEventTrigger(wrongOptionId);
      });
    }
    document.getElementById(`option${rightOptionId}`).addEventListener('click', function () {
      window.EventsHandler.rightChoiceEventTrigger(rightOptionId);
    });
  }
};

window.ScoreHandler = {
  clearScore: function () {
    localStorage.clear()
    localStorage.setItem('wrong_answers', 0);
    localStorage.setItem('right_answers', 0);
  },

  addWrongAnswer: function () {
    localStorage.setItem('wrong_answers', parseInt(localStorage.getItem('wrong_answers')) + 1);
  },

  addRightAnswer: function () {
    localStorage.setItem('wrong_answers', parseInt(localStorage.getItem('wrong_answers')) + 1);
  },

  substractWrongAnswer: function () {
    const previousScore = parseInt(localStorage.getItem('wrong_answers'))
    localStorage.setItem('wrong_answers', previousScore > 0 ? previousScore - 1 : 0);
  },

  substractRightAnswer: function () {
    const previousScore = parseInt(localStorage.getItem('right_answers'))
    localStorage.setItem('right_answers', previousScore > 0 ? previousScore - 1 : 0);
  },

  loadRightAnswersScore: function () {
    const wrongAnswersCounter = document.getElementById('wrong_answers');
    const currentWrongAnswers = localStorage.getItem('wrong_answers');
    wrongAnswersCounter.innerHTML = currentWrongAnswers;
  },

  loadWrongAnswersScore: function () {
    const rightAnswersCounter = document.getElementById('right_answers');
    const currentRightAnswers = localStorage.getItem('right_answers');
    rightAnswersCounter.innerHTML = currentRightAnswers;
  },

  loadCurrentScore: function () {
    window.ScoreHandler.loadRightAnswersScore();
    window.ScoreHandler.loadWrongAnswersScore();
  }
};

window.UtilsHandler = {
  changeURL: function (newRelativeURL) {
    const baseURL = window.location.href.split('/').slice(0, -1).join('/')
    const newURL = `${baseURL}/${newRelativeURL}`
    window.location.href = newURL;
  }
};

window.QuestionsHandler = {
  loadCurrentQuestion: function () {
    localStorage.getItem('current_question');
  },

  setLastQuestion: function (id, answer) {
    localStorage.setItem('last_question', { id, answer })
  },

  getLastQuestion: function () {
    localStorage.getItem('last_question')
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