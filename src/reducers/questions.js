import {RECEIVE_QUESTIONS, ADD_QUESTION} from "../actions/questions";

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {...state, ...action.questions};

    case ADD_QUESTION: //todo finish implementation
      const {question} = action;
      return {
        ...state,
        [question.id]: {
          ...state[question.id],

        }
      }

    default:
      return state;
  }
}
