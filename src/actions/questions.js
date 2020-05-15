import {saveQuestion, saveQuestionAnswer} from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

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
      authedUser,
      optionOne,
      optionTwo
    }).then((question) => dispatch(addQuestion(question)));
  }
}

function addQuestionAnswer({qid, authedUser, option}) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    authedUser,
    option
  }
}

export function handleAddQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(addQuestionAnswer(info));
    return saveQuestionAnswer(info).catch((error) => {
      console.warn("Error in saveQuestionAnswer: ", error);
      alert("There was an error answering the question.");
    })
  }
}
