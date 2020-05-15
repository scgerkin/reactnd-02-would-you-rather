import {saveQuestion, saveQuestionAnswer} from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const VOTE = "VOTE";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    }).then((question) => dispatch(addQuestion(question)));
  }
}

function vote(info) {
  return {
    type: VOTE,
    info
  }
}

export function handleVote(authedUser, qid, answer) {
  return (dispatch) => {

    const info = {
      authedUser,
      qid,
      answer
    }

    //todo handle this optimistically
    return saveQuestionAnswer(info)
        .then(dispatch(vote(info)))
        .catch((error) => {
          handleErrorOnSaveQuestionAnswer(error);
        });
  }
}

//todo Needs to reset the vote back to previous state once optimistic handling
// is implemented
// Will need to:
// 1. Grab state before dispatch(vote(info)) somehow
// 2. Give that information to this function
// 3. Call dispatch with the old info
function handleErrorOnSaveQuestionAnswer(error) {
  console.warn("Error in saveQuestionAnswer: ", error);
  alert("There was an error answering the question.");
}
