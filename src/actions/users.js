import {ADD_QUESTION, VOTE} from "./questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER = "ADD_USER";

export function addUser(user) {
  return {
    type: ADD_USER,
    user
  }
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addQuestionToUser() {
  return {
    type: ADD_QUESTION,
  }
}

export function addVoteToUser() {
  return {
    type: VOTE
  }
}
