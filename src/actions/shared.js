import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {setAuthedUser} from "./authedUser.js"
import {getInitialData} from "../utils/api";

//todo set to null after development
const AUTHED_ID = "sarahedo"

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
