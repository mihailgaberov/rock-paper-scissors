import { fromJS, Map } from 'immutable'
import reducer from './gameReducer'

describe('gameReducer', () => {
  it('should handle GET_SERVER_CHOICE_RESPONSE', () => {
    const initialState = Map()
    const expected = Map({
      serverChoice: 'rock'
    })
    const action = {
      type: 'GET_SERVER_CHOICE_RESPONSE',
      serverChoice: 'rock'
    }

    const nextState = reducer(initialState, action)

    expect(nextState).toEqual(expected)
  })

  it('should handle GET_SERVER_CHOICE_ERROR', () => {
    const initialState = Map()
    const action = {
      type: 'GET_SERVER_CHOICE_ERROR',
      error: {
        error_code: 5002,
        error_description: 'Game with the given name already exists.'
      }
    }

    const nextState = reducer(initialState, action)

    expect(nextState).toEqual(fromJS({
      Error: {
        error_code: 5002,
        error_description: 'Game with the given name already exists.'
      }
    }))
  })
})
