import React from 'react';

const ToDo = ({item, onClick, onChange}) => {

  return (
    <div key={item.id} className={`list__item ${item.complete?'done':''}`}>
      <div className="list__inner">
        <div className="list__check">
          <input type="checkbox" id={item.id} onChange={onChange} checked={item.complete}/>
          <label htmlFor={item.id}>
            <div className="checkbox">
              <div className="checkbox__indicator">
                <svg width="14.83" height="16.716" viewBox="0 0 14.83 16.716">
                  <path d="M284.053,176.558l3.815,4.79,9.394-14.463" transform="translate(-283.27 -166.34)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
              </div>  
            </div> 
            <div className="label">{item.name}</div>
          </label>
        </div>
      </div>
      <button onClick={onClick}>
        Remove.
      </button>
    </div>
  )
}
export default ToDo;