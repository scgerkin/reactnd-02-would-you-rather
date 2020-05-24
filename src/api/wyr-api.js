import Axios from "axios"

import {endpoint} from "../config/config"

export function getInitialData() {
  return Promise.all([
    getRecentQuestions(),
    getUsers(["sarahedo", "johndoe","tylermcginnis", "103290008345052138905"])
  ]).then(([questions, users]) => ({
    users,
    questions
  }))
}

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

//todo error handle?
// I think the action should handle actual errors, but if the response doesn't
// contain the correct information, it'll give the state garbage and fail silently
export async function postNewQuestion({optionOneText, optionTwoText, author}) {
  const response = await Axios.post(`${endpoint}/questions`,
      {
        "optionOneText": optionOneText,
        "optionTwoText": optionTwoText,
        "userId": author
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
  console.log(response)
  return {
    id: response.data.payload.questionId,
    timestamp: response.data.payload.createdAt,
    author: response.data.payload.authorId,
    optionOne: response.data.payload.optionOne,
    optionTwo: response.data.payload.optionTwo
  }
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

export async function getUser(userId) {
  const response = await Axios.get(`${endpoint}/users/${userId}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
  return {[response.data.payload.userId]: formatUser(response.data.payload)}
}

export async function getUsers(userIds) {
  const response = await Axios.post(`${endpoint}/users/list`,
      {
        userIds: userIds
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
  )
  let users = {}
  response.data.payload.forEach(item => {
    users = {
      ...users,
      [item.userId]: formatUser(item)
    }
  })
  console.log(users)
  return users
}

function formatUser(user) {

  let answers = {}
  user.answers.forEach(item => {
    answers = {
      ...answers,
      [item.questionId]: item.answer
    }
  })

  return {
    id: user.userId,
    name: user.name,
    avatarURL: user.avatarUrl,
    answers: answers,
    questions: user.questions
  }
}
