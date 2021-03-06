import {postNewQuestion, putQuestionVote} from "../api/wyr-api";
import {deleteQuestion as apiDelete} from "../api/wyr-api"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_QUESTION = "DELETE_QUESTION";
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
    const {authedUser, token} = getState();
    return postNewQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
      token: token
    }).then((question) => dispatch(addQuestion(question)));
  }
}

function deleteQuestion(questionId) {
  return {
    type: DELETE_QUESTION,
    questionId
  }
}

export function handleDeleteQuestion(questionId) {
  return (dispatch, getState) => {
    const {token} = getState()
    return apiDelete(questionId, token).then(() => dispatch(deleteQuestion(questionId)))
  }
}

function vote(info) {
  return {
    type: VOTE,
    info
  }
}

export function handleVote(authedUser, qid, answer) {
  return (dispatch, getState) => {
    const {token} = getState()
    const info = {
      authedUser,
      qid,
      answer,
      token
    }

    //todo handle this optimistically
    return putQuestionVote(info)
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
