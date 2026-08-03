import {useDispatch} from 'react-redux'
import {toggleTodo, deleteTodo} from '../../actions/todoActions.js'
import './index.css'

const TodoItem = props => {
  const {todo} = props

  const dispatch = useDispatch()

  const onChangeCompletedStatus = () => {
    dispatch(toggleTodo(todo.uniqueNo))
  }

  const onDeleteTodo = () => {
    dispatch(deleteTodo(todo.uniqueNo))
  }

  return (
    <li className="todo-item-container">
      <input
        type="checkbox"
        checked={todo.completed}
        className="task-checkbox"
        onChange={onChangeCompletedStatus}
      />

      <div className="task-content">
        <p className="task-text">{todo.text}</p>
      </div>

      <button type="button" className="delete-button" onClick={onDeleteTodo}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </li>
  )
}

export default TodoItem
