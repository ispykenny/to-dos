import React from 'react';

const ToDo = ({item, onClick}) => {
  return (
    <div key={item.id} onClick={onClick}>{item.name}</div>
  )
}
export default ToDo;