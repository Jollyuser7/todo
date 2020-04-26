import React from 'react';

const AppHeader = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
      <span>Сколько осталось задач</span>
    </div>
  )
}

export default AppHeader;