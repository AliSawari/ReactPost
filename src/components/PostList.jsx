import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddPost from './AddPost';
import Post from './Post';
import Search from './Search';

class PostList extends Component {
  constructor(props){
    super(props);
  }

  renderPosts(){
    let {posts, searchText} = this.props;
    if(posts){
      if(searchText.length > 2){
        let filter = posts.filter((p) => {
          return p.title.toLowerCase().includes(searchText.toLowerCase())
        });
        return filter.map((p, k) => {
          return <Post key={k} id={k} title={p.title}/>
        });
      } else {
        return posts.map((p, k) => {
          return <Post key={k} id={k} title={p.title}/>
        });
      }
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

        <Search/>

        <div className="row">
          {this.renderPosts()}
         </div>

      </div>
  }
}

export default connect(s => s)(PostList);
