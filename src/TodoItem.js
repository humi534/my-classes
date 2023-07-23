import React from 'react'

export default function TodoItem({ todoItem }) {
  return (
    <div>
        <label>
            <input type='checkbox' checked={todoItem.complete}/>
            {todoItem.name}
        </label>
    </div>
  )
}
