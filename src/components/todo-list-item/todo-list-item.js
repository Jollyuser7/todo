import React, { Component } from 'react';

class TodoListItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      done: false,
      important: false
    };
    this.onLabelClick = this.onLabelClick.bind(this);
    this.onMarkImportant = this.onMarkImportant.bind(this);
  }

  onLabelClick () {
    this.setState(({done}) => {
      return{
        done: !done
      }
    })
  }

  onMarkImportant () {
    this.setState(({important}) => {
      return{
        important: !important
      }
    })
  }

  render(){
    const { label } = this.props.item;
    const { done, important } = this.state;
    
    let classNames = '';

    if(done){
      classNames += 'done';
    }
    
    if(important){
      classNames += ' important';
    }

    return(
      <React.Fragment>
        <span onClick={ this.onLabelClick } className={classNames}>{label}</span>
        <div className="btn-group">
          <button type="button" onClick={this.props.onDeleted} className="btn btn-sm btn-outline-danger">
            <i className="icon-trash"></i>
          </button>
          <button type="button" onClick={ this.onMarkImportant } className="btn btn-sm btn-outline-dark">
            <i className="icon-info"></i>
          </button>
        </div>
      </React.Fragment>
    )
  }
}

export default TodoListItem;