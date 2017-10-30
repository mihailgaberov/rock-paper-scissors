import * as actions from './gameActions'
import * as types from '../constants/actionTypes'

describe('Game Actions', () => {
  it('should create an action to get the server choice', () => {
    const expectedAction = {
      type: types.GET_SERVER_CHOICE_REQUEST
    }
    expect(actions.getServerChoice()).toEqual(expectedAction)
  })
})