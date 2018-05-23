import {createStore, compose} from 'redux';
import Reducer from './../reducer';

const store = createStore(Reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
