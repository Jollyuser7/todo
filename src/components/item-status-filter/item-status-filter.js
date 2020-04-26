import React, { Component } from 'react';

class ItemStatusFilter extends Component {
  render(){
    return(
        <div className="input-group-append">
        <button type="button" className="btn btn-primary">All</button>
        <button type="button" className="btn btn-outline-secondary">Active</button>
        <button type="button" className="btn btn-success">Done</button>
      </div>
    )
  }
}

export default ItemStatusFilter;