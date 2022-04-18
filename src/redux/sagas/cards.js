import { put, call, takeLatest } from 'redux-saga/effects';

import { getAllCardsFailure, getAllCardsSuccess } from "../actions";
import { GET_ALL_CARDS, REQUEST } from "../actions/actionTypes";
import api from "../../utils/Api";

export function* cardsWorkerSaga() {

    try {
        console.log('Ya tut?')
        const cards = yield call(api.getAllCards);

        console.log({ cards })

        yield put(getAllCardsSuccess(cards));
    } catch (error) {
        yield put(getAllCardsFailure((error)));
    }
};

export function* cardsWatcherSaga() {
    yield takeLatest(GET_ALL_CARDS + REQUEST, cardsWorkerSaga);
};