import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addPost} from './../actions';

export default class AddPost extends Component {
  constructor(props){
    super(props);
  }

  handle(event){
    event.preventDefault();
    let txt = event.target.title.value;
    if(txt.length > 3) {
      addPost(txt);
      event.target.title.value = '';
    }
  }

  render(){
    return <form onSubmit={this.handle}>
      <div className="form-group">
      <label htmlFor="post">Post Title</label>
      <input type="text" className="form-control" name="title" id="post" aria-describedby="emailHelp" placeholder="Enter Title"/>
      <input style={{margin: '5px'}} type="submit" className="btn btn-success" value="Add Post"/>
      <small id="emailHelp" className="form-text text-muted">This will add a post to the list</small>
    </div>
    </form>
  }
}
