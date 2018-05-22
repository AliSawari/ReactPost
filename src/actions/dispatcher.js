import store from './../store';

export default function dispatcher(obj){
  return store.dispatch(obj);
}
