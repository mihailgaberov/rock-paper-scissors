import { put, call } from 'redux-saga/effects'
import RockPaperScissorsApi from '../api/api'
import * as types from '../constants/actionTypes'

export function* gameSaga() {
  try {
    const serverChoice = yield call(RockPaperScissorsApi.getServerChoice)
    console.log('saga: ', serverChoice)

    yield put({type: types.GET_SERVER_CHOICE_RESPONSE, serverChoice})
  } catch (error) {
    yield put({type: types.GET_SERVER_CHOICE_ERROR, error})
  }
}
