import {addUser, receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {setAuthedUser} from "./authedUser.js"
import {getInitialQuestions, getInitialUsers, getUser} from "../api/wyr-api";

const AUTHED_ID = null

export function handleInitialData() {
  return (dispatch) => {
    return getInitialQuestions().then(({questions}) => {
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(receiveQuestions(questions))
      getInitialUsers(questions).then(({users}) => {
        console.log("handleInitialData")
        console.log(users)
        dispatch(receiveUsers(users))
      })
    })
  }
}

export function handleLogin(userId) {
  return (dispatch) => {
    return getUser(userId)
        .then((user) => {
          console.log("inside handle login")
          console.log(user)
          dispatch(addUser(user))
        })
        .then(() => dispatch(setAuthedUser(userId)))
  }
}
