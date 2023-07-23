import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todoItems }) {
    return (
        todoItems.map(todoItem => {
            return <TodoItem key={todoItem.id} todoItem={todoItem}/>
        })
    )
}
