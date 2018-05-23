import {createStore, compose} from 'redux';
import Reducer from './../reducer';

const store = createStore(Reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


store.subscribe(() => {
  console.log("Current state: ", store.getState());
});

export default store;
