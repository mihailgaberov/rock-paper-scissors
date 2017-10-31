import { saveServerChoice } from './game'
import { fromJS, List } from 'immutable'

describe('Game selectors', () => {
  describe('saveServerChoice', () => {
    it('should record the server choice to the state', () => {
      const choice = List.of(['rock'])
      const state = {
        serverChoice: choice
      }
      const expected = fromJS(choice)

      expect(saveServerChoice(state)).toEqual(expected)
    })
  })
})
