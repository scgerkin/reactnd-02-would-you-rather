import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {setAuthedUser} from "./authedUser.js"
import {getInitialQuestions, getInitialUsers} from "../api/wyr-api";

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
