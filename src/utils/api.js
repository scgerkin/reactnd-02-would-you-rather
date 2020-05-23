import {
  _getUsers
} from "./_DATA.js"
import {getRecentQuestions, postNewQuestion, putQuestionVote} from "../api/wyr-api";


/**
 * Will need to get questions first
 * Then get list of users from the questions
 * And then get those users from the backend
 *
 */
export function getInitialData() {
  return Promise.all([
      _getUsers(),
      getRecentQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}


export function saveQuestion(info) {
  return postNewQuestion(info.optionOneText, info.optionTwoText)
  //return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
  console.log(info)
  return putQuestionVote(info);
}
