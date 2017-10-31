import { Map, fromJS } from 'immutable'

export function saveServerChoice(state, newState) {
  return state.merge(fromJS({serverChoice: newState}))
}

export function getServerChoice(state) {
  const immutableState = Map(state)
  return immutableState.getIn(['game', 'serverChoice'], null)
}