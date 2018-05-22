import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddPost extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return <form>
      <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <input style={{margin: '5px'}} type="submit" className="btn btn-success" value="Add Post"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    </form>
  }
}

export default connect(s => s)(AddPost);
