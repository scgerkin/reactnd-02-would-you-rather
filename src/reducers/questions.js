import {ADD_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";

export default function questions(state = {}, action) {

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {...state, ...action.questions};
    case ADD_QUESTION:
      const {question} = action;
      return {
        ...state,
        question
      }
    default:
      return state;
  }
}
