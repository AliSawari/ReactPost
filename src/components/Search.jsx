import React, {Component} from 'react';
import {setSearchText} from './../actions';

export default class Search extends Component {

  handle(e){
    setSearchText(e.target.value);
  }

  render() {
    return <input type="search" className="form-control"
      style={{margin: '10px', padding: '15px', fontSize: '20px'}}
      onKeyUp={this.handle} placeholder="Seach By Title..."/>
  }
}
