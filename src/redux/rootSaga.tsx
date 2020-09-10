import { all } from 'redux-saga/effects';


// Import all the sagas from containers
import HomePageSaga from '../containers/HomePage/saga'


export default function* rootSaga() {
    yield all([
        HomePageSaga(),
    ]);
}
