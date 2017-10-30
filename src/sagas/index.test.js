import { fork } from 'redux-saga/effects'
import startForeman from './index'
import watchGame from './watcher'

describe('Test startForeman saga', () => {
  it('should yield array watchers saga', () => {
    expect(startForeman().next().value).toEqual(fork(watchGame))
  })
})
