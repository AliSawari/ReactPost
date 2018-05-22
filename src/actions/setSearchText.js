import dispatcher from './dispatcher';

export default function setSearchText(text){
  dispatcher({
    type: 'SEARCH',
    text
  });
}
