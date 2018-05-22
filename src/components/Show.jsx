import React, {Component} from 'react';

export default class Show extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return <div className="jumbotron">
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>

        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Primary card title</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      </div>
  }
}
