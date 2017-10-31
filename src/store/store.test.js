import { Map, fromJS } from 'immutable'
import configureStore from './configureStore'

describe('Store', () => {
  it('is a Redux store configured with the correct reducer for getting server game choices', () => {
    const store = configureStore()
    expect(store.getState()).toEqual({game: Map()})

    const serverChoice = 'rock'

    const expected = fromJS({
      serverChoice
    })

    store.dispatch({
      type: 'GET_SERVER_CHOICE_RESPONSE',
      serverChoice
    })

    expect(store.getState().game).toEqual(expected)
  })
})
