import { fork } from 'redux-saga/effects'
import watchGame from './watcher'

export default function* startForman() {
  yield fork(watchGame)
}
