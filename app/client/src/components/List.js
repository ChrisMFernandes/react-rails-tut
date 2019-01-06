import React from 'react';

const List = ({list, onRemoveList=f=>f, editingListId=f=>f }) => 
  <div className="single-list" key={list.id}>
    <h4>{list.title}</h4>
    <p>{list.excerpt}</p>
    <button onClick={() => onRemoveList(list.id)}>Delete</button>
    <button onClick={() => editingListId(list.id)}>Edit</button>
    <hr/>
  </div>

export default List;