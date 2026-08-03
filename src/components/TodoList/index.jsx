import TodoItem from '../TodoItem'
import {useSelector} from 'react-redux'

import './index.css'

const TodoList = () => {
  const todoList = useSelector(state => state.todos.todoList)
  const currentFilter = useSelector(state => state.filters.filter)
  const getFilteredTodos = () => {
    switch (currentFilter) {
      case 'Active':
        return todoList.filter(eachItem => !eachItem.completed)
      case 'Completed':
        return todoList.filter(eachItem => eachItem.completed)
      default:
        return todoList
    }
  }
  return (
    <ul className="todo-items-container">
      {getFilteredTodos().map(todo => (
        <TodoItem todo={todo} key={todo.uniqueNo} />
      ))}
    </ul>
  )
}

export default TodoList
