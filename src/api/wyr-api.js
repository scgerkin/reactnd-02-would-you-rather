import Axios from "axios"

import {endpoint} from "../config/config"

export async function getRecentQuestions() {
  const response = await Axios.get(`${endpoint}/questions`, {
    headers: {
      "Content-Type": "application/json"
    }
  })

  let questions = {}

  response.data.payload.map(item => {
    questions[item.questionId] = {
      id: item.questionId,
      timestamp: item.createdAt,
      author: item.authorId,
      optionOne: item.optionOne,
      optionTwo: item.optionTwo
    }
  })

  return questions
}

// sanitize response
export async function postNewQuestion(optionOneText, optionTwoText) {
  console.log(optionOneText)
  console.log(optionTwoText)
}

export async function putQuestionVote({authedUser, qid, answer}) {
  const response = await Axios.put(`${endpoint}/questions`,
      {
        "questionId": qid,
        "option": answer,
        "userId": authedUser
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
  console.log(response)
}
