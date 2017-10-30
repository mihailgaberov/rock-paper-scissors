import { List, Map } from 'immutable'
import reducer from './gameReducer'

describe('gameReducer', () => {
  it('should handle GET_SERVER_CHOICE_REQUEST', () => {
    const initialState = Map()
    const expected = Map({
      serverChoice: List.of(['rock'])
    })
    const action = {
      type: 'GET_SERVER_CHOICE_REQUEST'
    }

    const nextState = reducer(initialState, action)

    expect(nextState).toEqual(expected)
  })
})
