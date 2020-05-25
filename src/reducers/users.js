import {ADD_USER, RECEIVE_USERS, UPDATE_USER} from "../actions/users";
import {ADD_QUESTION, VOTE} from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS: return {...state, ...action.users};
    case ADD_USER: return handleAddUserToState(state, action);
    case ADD_QUESTION: return handleAddQuestionToUser(state, action);
    case VOTE: return handleAddVoteToUser(state, action);
    case UPDATE_USER: return handleUpdateUser(state, action);
    default: return state;
  }
}

function handleAddUserToState(state, action) {
  const user = action.user
  return {
    ...state,
    ...user
  }
}

function handleAddQuestionToUser(state, action) {
  const userId = action.question.author
  const user = state[userId]

  return {
    ...state,
    [userId]: {
      ...user,
      questions: user.questions.concat([action.question.id])
    }
  }
}

function handleAddVoteToUser(state, action) {
  const userId = action.info.authedUser
  const user = state[userId]
  const currentAnswers = user.answers
  const questionId = action.info.qid

  return {
    ...state,
    [userId]: {
      ...user,
      answers: {
        ...currentAnswers,
        [questionId]: action.info.answer
      }
    }
  }
}

function handleUpdateUser(state, action) {
  const user = action.user
  return {
    ...state,
    ...user
  }
}
