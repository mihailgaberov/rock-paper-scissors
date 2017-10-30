import { fromJS } from 'immutable'

export function saveServerChoice(state, newState) {
  return state.merge(fromJS({serverChoice: newState}))
}