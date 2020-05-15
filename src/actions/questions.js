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
  console.log("Vote called");
  return {
    type: VOTE,
    info
  }
}

export function handleVote(authedUser, qid, answer) {
  console.log("Handle Vote called");
  return (dispatch) => {

    const info = {
      authedUser,
      qid,
      answer
    }

    dispatch(vote(info));
    return saveQuestionAnswer(info).catch((error) => {
      //todo switch answer back off on error
      console.warn("Error in saveQuestionAnswer: ", error);
      alert("There was an error answering the question.");
    })
  }
}
