import { createStore, applyMiddleware } from 'redux';
import promoise from 'redux-promise';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(promoise)
    );
}
