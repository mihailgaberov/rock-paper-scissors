import { takeLatest } from 'redux-saga/effects'
import { gameSaga } from './gameSaga'
import * as types from '../constants/actionTypes'

export default function* watchGame() {
  yield takeLatest(types.GET_SERVER_CHOICE_REQUEST, gameSaga)
}

