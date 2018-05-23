import React, {Component} from 'react';

export default class Post extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return <div className="card text-white bg-primary mb-3">
      <div className="card-header">Post Number <b>{this.props.id}</b></div>
      <div className="card-body">
        <h4 className="card-title">{this.props.title}</h4>
      </div>
    </div>
  }
}
