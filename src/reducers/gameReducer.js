import * as types from '../constants/actionTypes'
import initialState from './initialState'
import { saveServerChoice, setError } from '../selectors/game'

export default function (state = initialState.serverChoice, action) {
  switch (action.type) {
    case types.GET_SERVER_CHOICE_RESPONSE:
      return saveServerChoice(state, action)
    case types.GET_SERVER_CHOICE_ERROR:
      return setError(state, action.error)
    default:
      return state
  }
}