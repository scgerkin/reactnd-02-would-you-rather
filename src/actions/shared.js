import {addUser, receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {setAuthedUser} from "./authedUser.js"
import {getInitialQuestions, getInitialUsers, getUser} from "../api/wyr-api";
import {setToken} from "./token";

// override these to start as "logged in" without authenticating with Auth0 on reload
// this is NOT a safe operation and can break several components if the user doesn't
// have existing information in the database (including created questions)
const AUTHED_ID = null
const TOKEN = null

export function handleInitialData() {
  return (dispatch) => {
    return getInitialQuestions().then(({questions}) => {
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(setToken(TOKEN))
      dispatch(receiveQuestions(questions))
      getInitialUsers(questions).then(({users}) => {
        dispatch(receiveUsers(users))
      })
    })
  }
}

export function handleLogin(userId, token) {
  return (dispatch) => {
    return getUser(userId)
        .then((user) => {
          dispatch(addUser(user))
        })
        .then(() => {
          dispatch(setAuthedUser(userId))
          dispatch(setToken(token))
        })
  }
}
