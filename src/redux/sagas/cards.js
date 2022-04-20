import { put, call, takeLatest } from 'redux-saga/effects';

import { getAllCardsFailure, getAllCardsSuccess } from "../actions";
import { GET_ALL_CARDS, REQUEST } from "../actions/actionTypes";
import handleError from "../../utils/errorHandler";
import api from "../../utils/Api";

export function* cardsWorkerSaga() {

    try {
        const cards = yield call(api.getAllCards);

        yield put(getAllCardsSuccess(cards));
    } catch (error) {
        yield put(getAllCardsFailure(handleError(error)));
    }
};

export function* cardsWatcherSaga() {
    yield takeLatest(GET_ALL_CARDS + REQUEST, cardsWorkerSaga);
};