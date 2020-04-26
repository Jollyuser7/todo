import React, { Component } from 'react';

export default class AddItem extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      inputValue: 'dfsfsf'
    }
    this.handelOnChange = this.handelOnChange.bind(this);
  }

  handelOnChange (event) {
    
    this.setState({
      inputValue: event.target.value
    });
    console.log(event.target.value);
  }

  render() {
    return(
      <div className="input-group mt-3">
        <input 
          className="form-control" 
          placeholder="Add todo" 
          onChange={ this.handelOnChange } 
          value={this.state.inputValue} 
        />

        <div className="input-group-append">
          <button type="button" className="btn btn-success">Add</button>
        </div>
      </div>
    )
  }
}
