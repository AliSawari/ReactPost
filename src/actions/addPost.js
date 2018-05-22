import dispatcher from './dispatcher';

export default function addPost(title){
  dispatcher({
    type: 'ADD_POST',
    post: {title}
  });
}
