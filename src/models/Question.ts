/**
 * add doc
 */
export interface Question {
  id: string,
  author: string,
  timestamp: string,
  optionOne: VotingOption,
  optionTwo: VotingOption
}

// TODO See User model re: Answer interface. This model fits with the _DATA but
//  might be better to model it another way based on the final backend implementation.
interface VotingOption {
  votes: string[],
  text: string
}
