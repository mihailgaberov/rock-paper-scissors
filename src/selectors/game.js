import { Map, fromJS } from 'immutable'

export function saveServerChoice(state, newState) {
  return state.merge(fromJS({serverChoice: newState.serverChoice}))
}

export function getServerChoice(state) {
  const immutableState = Map(state)
  return immutableState.getIn(['game', 'serverChoice'], null)
}

export function setError(state, error) {
  return state.merge({
    Error: fromJS(error)
  })
}