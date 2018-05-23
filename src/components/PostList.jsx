import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddPost from './AddPost';
import Post from './Post';

class PostList extends Component {
  constructor(props){
    super(props);
  }

  renderPosts(){
    let {posts} = this.props;
    console.log(posts);
    if(posts){
      return posts.map((p, k) => {
        return <Post key={k} id={k} title={p.title}/>
      });
    } else {
      console.log("empty");
    }
  }

  render(){
    return <div className="jumbotron">
      <h1 className="display-3">Search Example</h1>
      <p className="lead">This is a simple app shows how Searching works in React-Redux applications</p>
      <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

        <AddPost/>

        {this.renderPosts()}

      </div>
  }
}

export default connect(state => {
  return state;
})(PostList);
