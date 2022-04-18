import { all, fork } from 'redux-saga/effects';

import { cardsWatcherSaga } from './cards';

export default function* rootSaga() {
    yield all([
        fork(cardsWatcherSaga),
    ]);
};