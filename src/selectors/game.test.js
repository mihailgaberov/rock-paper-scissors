import { Map, fromJS } from 'immutable'
import { getServerChoice, saveServerChoice } from './game'

describe('Game selectors', () => {
  describe('saveServerChoice', () => {
    it('should record the server choice to the state', () => {
      const gameState = {
        serverChoice: 'rock'
      }
      const state = Map()
      const expected = Map({ serverChoice: 'rock' })

      expect(saveServerChoice(state, gameState)).toEqual(expected)
    })
  })

  describe('getServerChoice', () => {
    it('should return the server choice recorded to the state', () => {
      const state = fromJS({game: { serverChoice: 'paper'}})
      const expected = 'paper'

      expect(getServerChoice(state)).toEqual(expected)
    })
  })
})
