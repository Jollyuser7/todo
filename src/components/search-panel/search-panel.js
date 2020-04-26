import React, { useEffect } from 'react';
import ItemStatusFilter from '../item-status-filter';

const SearchPanel = (props) => {

  return (
    <div className="input-group">
      <input className="form-control" placeholder="search" onChange={ props.sortItems } />
      <ItemStatusFilter />
    </div>
  )
}

export default SearchPanel;