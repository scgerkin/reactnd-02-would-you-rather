import Axios from "axios"

import {endpoint} from "../config/config"

export function getInitialQuestions() {
  return Promise
      .resolve(getRecentQuestions())
      .then((questions) => ({questions}))
}

export function getInitialUsers(questions) {
  return Promise
      .resolve(getUsersFromQuestions(questions))
      .then((users) => ({users}))
}

//this is a mess
function getUsersFromQuestions(questions) {
  const keys = Object.keys(questions)
  return getUsers([...new Set(keys.map(key => questions[key].author))])
}

export async function getRecentQuestions() {
  const response = await Axios.get(`${endpoint}/questions`, {
    headers: {
      "Content-Type": "application/json"
    }
  })

  let questions = {}

  response.data.payload.map(item => {
    return questions[item.questionId] = {
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
export async function postNewQuestion({optionOneText, optionTwoText, author, token}) {
  const response = await Axios.post(`${endpoint}/questions`,
      {
        "optionOneText": optionOneText,
        "optionTwoText": optionTwoText,
        "userId": author
      },
      {
        headers: {
          "Authorization": `Bearer ${token}`,
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

export async function putQuestionVote({authedUser, qid, answer, token}) {
  const response = await Axios.put(`${endpoint}/questions`,
      {
        "questionId": qid,
        "option": answer,
        "userId": authedUser
      },
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
  return response.data.payload
}

export async function deleteQuestion(questionId, token) {
  const response = await Axios.delete(`${endpoint}/questions/${questionId}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return response.data.payload
}

export async function getUser(userId) {
  const response = await Axios.get(`${endpoint}/users/${userId}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
  return {[response.data.payload.userId]: formatUserFromApi(response.data.payload)}
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
      [item.userId]: formatUserFromApi(item)
    }
  })
  return users
}

export async function updateUser(token, user) {
  const response = await Axios.put(`${endpoint}/users`, {
    "name": user.name
  }, {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    }
  })
  return formatUserFromApi(response.data.payload)
}

export async function getUploadUrl(token, ext) {
  const response = await Axios.get(`${endpoint}/users/uploadUrl?ext=${ext}`,
      {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        }
      })
  return response.data.payload
}

export async function uploadFile(uploadUrl, file) {
  const response = await Axios.put(uploadUrl, file)
  console.log(response)
}

function formatUserFromApi(user) {

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
