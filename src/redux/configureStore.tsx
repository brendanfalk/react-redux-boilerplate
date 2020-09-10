// Set up redux

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'

// Let's us use redux dev tools extension: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
import { composeWithDevTools } from 'redux-devtools-extension'

// Redux-saga middleware
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]


const initialState = {}

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

// This is imported by index.tsx as "store"
export default store