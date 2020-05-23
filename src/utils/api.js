import {getRecentQuestions, getUsers, postNewQuestion, putQuestionVote} from "../api/wyr-api";

/***
 * TODO Remove and refactor this once API integrated
 *  This is acting as a wrapper for the moment because actions are calling from
 *  this at the moment
 */

/**
 * Will need to get questions first
 * Then get list of users from the questions
 * And then get those users from the backend
 *
 */
export function getInitialData() {
  return Promise.all([
    getRecentQuestions(),
    getUsers(["sarahedo", "johndoe","tylermcginnis"])
  ]).then(([questions, users]) => ({
    users,
    questions
  }))
}


export function saveQuestion(info) {
  return postNewQuestion(info)
}

export function saveQuestionAnswer(info) {
  console.log(info)
  return putQuestionVote(info);
}
