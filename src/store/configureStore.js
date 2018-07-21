import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../reducers'
// applyMiddleware supercharges createStore with middleware:
// export const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
// )

const configureStore = () => {
    // create store...
    const middleware = [thunk];
    const store = compose(applyMiddleware(...middleware))(createStore)(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return store;
};
export const store = configureStore()