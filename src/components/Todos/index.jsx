import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import TodoList from '../TodoList'
import {setFilter} from '../../actions/todoActions.js'

import './index.css'
import {addTodo} from '../../actions/todoActions'

const Todos = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = event => {
    setInput(event.target.value)
  }

  const handleAddTodo = () => {
    const newTodo = {
      text: input,
      uniqueNo: uuidv4(),
      completed: false,
    }
    setInput('')
    dispatch(addTodo(newTodo))
  }

  const onClickAllButton = () => {
    dispatch(setFilter('All'))
  }

  const onClickActiveButton = () => {
    dispatch(setFilter('Active'))
  }

  const onClickCompletedButton = () => {
    dispatch(setFilter('Completed'))
  }

  return (
    <div className="todos-bg-container">
      <div className="todos-card">
        <h1 className="todos-heading">Todos</h1>
        <h2 className="create-task-heading">Create Task</h2>

        <div className="todos-input-container">
          <input
            type="text"
            className="todo-input"
            placeholder="Enter a todo..."
            value={input}
            onChange={handleInputChange}
          />
          <button type="button" className="add-button" onClick={handleAddTodo}>
            Add
          </button>
        </div>

        <div className="tasks-header">
          <h2 className="my-tasks-heading">My Tasks</h2>

          <div className="filter-buttons">
            <button
              className="filter-btn"
              type="button"
              onClick={onClickAllButton}
            >
              All
            </button>
            <button
              className="filter-btn"
              type="button"
              onClick={onClickActiveButton}
            >
              Active
            </button>
            <button
              className="filter-btn"
              type="button"
              onClick={onClickCompletedButton}
            >
              Completed
            </button>
          </div>
        </div>

        <TodoList />
      </div>
    </div>
  )
}

export default Todos
