import {ADD_QUESTION, RECEIVE_QUESTIONS, VOTE} from "../actions/questions";

export default function questions(state = {}, action) {
  console.log("Reducer called");

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {...state, ...action.questions};
    case ADD_QUESTION:
      const {question} = action;
      return {
        ...state,
        question
      }
    case VOTE:
      const {info} = action;
      console.log("state[info.qid][info.answer].votes", state[info.qid][info.answer].votes);
      const vote = state[info.qid][info.answer].votes.concat([info.authedUser])
      console.log(vote);

      console.log(state);

      //console.log(state.filter((question) => question.id === info.qid));


      return {
        ...state,
        [info.qid]: {
          ...state[info.qid],
          [info.answer]: {
            text: state[info.qid][info.answer].text,
            votes: state[info.qid][info.answer].votes.concat([info.authedUser])
          }
        }
      }
    default:
      return state;
  }
}
