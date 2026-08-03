import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {todosReducer} from './reducers/todosReducer'
import {filterReducer} from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filterReducer,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
