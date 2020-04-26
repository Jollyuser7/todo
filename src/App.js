import React, { Component } from 'react';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AddItem from './components/add-item';
import BtnCounter from './btn-counter';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0,
      searchValue: 'Поиск',
      inputAddItem: '',
      todoList: [
        {id: 0, label: 'Learn React', important: true, done: true},
        {id: 1, label: 'Learn React Native', important: false, done: false},
        {id: 2, label: 'Learn Javascript', important: false, done: true},
        {id: 3, label: 'Learn Full Stack', important: false, done: false}
      ]
    };
    this.handelClick = this.handelClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handelClick(event){
    this.setState((state) => {
      return{
        counter: ++state.counter
      }
    })
  }

  sortItems(text){
    console.log('Typing...');
  }

  addItem(event){
    console.log(event.target.value);
    
  }

  deleteItem(id){
    this.setState(({ todoList }) => {
        
        const idx = todoList.findIndex((el) => el.id === id);
        console.log(id);
 
        const before = todoList.slice(0, idx);
        const after = todoList.slice(idx + 1);
        const newArray = [...before, ...after];
        return{
          todoList: newArray
        }
    });
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <BtnCounter count={this.state.counter} addCounter={this.handelClick} />
            <AppHeader title="Список важных дел:" />
            <SearchPanel onSearch={ this.sortItems } value={ this.state.searchValue } />
            <TodoList todos={this.state.todoList} onDeleted={ this.deleteItem } />
            <AddItem addItem={ this.addItem } inputAddItem={this.state.inputAddItem} />
          </div>
        </div>
      </div> 
    )
  }
}

export default App;