import * as actionTypes from './actionTypes'

describe('Action Types Constants', () => {
  it('should have GET_SERVER_CHOICE_REQUEST', () => {
    expect(actionTypes.GET_SERVER_CHOICE_REQUEST).toEqual('GET_SERVER_CHOICE_REQUEST')
  })

  it('should have GET_SERVER_CHOICE_RESPONSE', () => {
    expect(actionTypes.GET_SERVER_CHOICE_RESPONSE).toEqual('GET_SERVER_CHOICE_RESPONSE')
  })

  it('should have GET_SERVER_CHOICE_ERROR', () => {
    expect(actionTypes.GET_SERVER_CHOICE_ERROR).toEqual('GET_SERVER_CHOICE_ERROR')
  })
})
