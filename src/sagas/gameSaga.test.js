import { put, call } from 'redux-saga/effects'
import { gameSaga } from './gameSaga'
import RockPaperScissorsApi from '../api/api'

describe('gameSaga', () => {
  const gen = gameSaga()

  it('should call server API', () => {
    expect(gen.next().value).toEqual(call(RockPaperScissorsApi.getServerChoice))
  })

  it('should yield read response object', () => {
    const resp = {}
    expect(gen.next(resp).value).toEqual({"@@redux-saga/IO": true, "PUT": {"action": {"serverChoice":
      {}, "type": "GET_SERVER_CHOICE_RESPONSE"}, "channel": null}}
    )
  })

  it('should dispatch failure effect', () => {
    const error = 'error'
    expect(gen.throw(error).value).toEqual(put({ type: 'GET_SERVER_CHOICE_ERROR', error }))
  })
})
