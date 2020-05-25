import {ADD_QUESTION, VOTE} from "./questions";
import {getUploadUrl, getUser, uploadFile} from "../api/wyr-api";
import {updateUser as apiUpdate} from "../api/wyr-api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER"

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


function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function handleChangeAvatar(file, ext) {
  return (dispatch, getState) => {
    const {authedUser, token} = getState()
    return getUploadUrl(token, ext)
        .then((uploadUrl) => uploadFile(uploadUrl, file))
        .then(() => getUser(authedUser))
        .then((user) => dispatch(updateUser(user)))
  }
}

export function handleChangeDisplayName(newName) {
  return (dispatch, getState) => {
    const {users, authedUser, token} = getState()
    const user = users[authedUser]
    user.name = newName
    return apiUpdate(token, user)
        .then((updated) => dispatch(updateUser(updated)))
  }
}
