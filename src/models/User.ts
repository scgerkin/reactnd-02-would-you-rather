/**
 * add doc
 */
export interface User {
  id: string,
  name: string,
  avatarUrl: string,
  questions: string[],
  answers: Answer[]
}

// TODO this is an either/or, potentially pointing to a VotingOption of a Question
//  It might be better to make 'selection' a boolean or maybe point to an actual
//  voting option. Need to reflect on this modelling a little. Maybe give voting
//  option an ID and just store the ID here.
interface Answer {
  questionId: string,
  selection: string
}
