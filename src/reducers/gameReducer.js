import * as types from '../constants/actionTypes'
import initialState from './initialState'
import { saveServerChoice } from '../selectors/game'

export default function (state = initialState.serverChoice, action) {
  switch (action.type) {
    case types.GET_SERVER_CHOICE_RESPONSE:
      return saveServerChoice(state, action)
    default:
      return state
  }
}