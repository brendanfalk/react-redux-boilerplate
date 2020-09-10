import { put, takeLatest, all } from 'redux-saga/effects';

import { FETCH_NEWS, FETCH_NEWS_RECEIVED, FETCH_NEWS_FAILED } from "./constants"


function* fetchNews() {

    try {

        const output = yield fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
            .then(response => response.json());

        yield put({
            type: FETCH_NEWS_RECEIVED,
            payload:
                { posts: output.hits }
        }
        );

    } catch (err) {

        yield put({
            type: FETCH_NEWS_FAILED,
            payload: {
                error: {
                    isError: true,
                    msg: err
                }
            }
        })
    }
}

function* actionWatcher() {
    yield takeLatest(FETCH_NEWS, fetchNews)
}


export default function* HomePageSaga() {
    yield all([
        actionWatcher(),
    ]);
}
