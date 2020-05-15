import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {setAuthedUser} from "./authedUser.js";

// todo get from auth
import {getInitialData} from "../utils/api";

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
