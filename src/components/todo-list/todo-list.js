import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';

class TodoList extends Component{

  render(){
    const { todos, onDeleted } = this.props;
    return(
      <ul className="list-group mt-3">  
        {
          todos.map((item) => {
            return(
              <li key={item.id} className="list-group-item list-group-item-action d-flex justify-content-between">
                <TodoListItem item={item} onDeleted={ () => onDeleted(item.id) } />
              </li>
            )
          })
        } 
      </ul>      
    )
  }
}

export default TodoList;