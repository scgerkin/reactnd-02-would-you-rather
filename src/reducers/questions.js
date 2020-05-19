import {ADD_QUESTION, RECEIVE_QUESTIONS, VOTE} from "../actions/questions";

/**
 * Handles Question actions with the state.
 * @param state The current state (default empty object)
 * @param action The current action.
 * @returns A new state with updated action items.
 */
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return handleReceiveQuestions(state, action);
    case ADD_QUESTION:
      return handleAddQuestion(state, action);
    case VOTE:
      return handleVoteState(state, action);
    default:
      return state;
  }
}

/**
 * Handles adding questions from the database at initialization.
 * @param state The current state.
 * @param action The current action containing the questions retrieved .
 * @returns The updated state containing the questions retrieved.
 */
function handleReceiveQuestions(state, action) {
  return {
    ...state,
    ...action.questions
  };
}

/**
 * Handles creating a new Question by adding it to the existing state.
 * @param state The current state.
 * @param action The current action containing the new question.
 * @returns The updated state containing the newly created question.
 */
function handleAddQuestion(state, action) {
  const {question} = action;
  return {
    ...state,
    [question.id]: question
  }
}

/**
 * Handles a user selecting which option to vote for.
 * FIXME: This function is a hot mess.
 * @param state The current state.
 * @param action The current action.
 * @return The updated state with a vote appended to the correct choice.
 */
function handleVoteState(state, action) {
  const {info} = action;

  // remove the user from the existing voter pool (if present)
  let optionOneVotes = state[info.qid].optionOne.votes
      .filter(voterId => voterId !== info.authedUser);
  let optionTwoVotes = state[info.qid].optionTwo.votes
      .filter(voterId => voterId !== info.authedUser);

  // add the user to the voter pool for the correct option
  switch (info.answer) {
    case "optionOne":
      optionOneVotes = optionOneVotes.concat([info.authedUser]);
      break;
    case "optionTwo":
      optionTwoVotes = optionTwoVotes.concat([info.authedUser]);
      break;
    default:
      throw new Error(`Error in VOTE Reducer - Invalid vote selection: '${info.answer}'`);
  }

  // return the state, this overwrites the existing question with a new object
  return {
    ...state,
    [info.qid]: {
      ...state[info.qid],
      optionOne: {
        text: state[info.qid].optionOne.text,
        votes: optionOneVotes
      },
      optionTwo: {
        text: state[info.qid].optionTwo.text,
        votes: optionTwoVotes
      }
    }
  }
}
