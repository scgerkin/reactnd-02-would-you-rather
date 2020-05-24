import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {setAuthedUser} from "./authedUser.js"
import {getInitialData} from "../api/wyr-api";

const AUTHED_ID = null

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
        .then(({users, questions}) => {
          dispatch(receiveUsers(users));
          dispatch(receiveQuestions(questions));
          dispatch(setAuthedUser(AUTHED_ID));
        });
  }
}
