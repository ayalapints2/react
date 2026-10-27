import { useState } from 'react'
import Header from './components/Header.jsx'
import Summary from './components/Summary.jsx'
import TodoList from './components/TodoList.jsx'
import './App.css'

// הרשימה ההתחלתית — הערך שממנו נבנה ה-state.
const initialTodos = [
  { id: 1, name: 'משימה 1', status: 'done' },
  { id: 2, name: 'משימה 2', status: 'pending' },
  { id: 3, name: 'משימה 3', status: 'done' },
  { id: 4, name: 'משימה 4', status: 'pending' },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [userName, setUserName] = useState('')
  const [newTask, setNewTask] = useState('')

  // החלפת סטטוס של משימה אחת (הלוך וחזור).
  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === 'done' ? 'pending' : 'done' }
          : todo
      )
    )
  }

  // הוספת משימה חדשה בסוף הרשימה.
  function addTodo(e) {
    e.preventDefault()

    const name = newTask.trim()
    if (!name) return

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), name, status: 'pending' },
    ])

    setNewTask('')
  }

  // הסיכום מחושב מחדש בכל ציור.
  const total = todos.length
  const done = todos.filter((todo) => todo.status === 'done').length

  return (
    <div className="app">
      <input
        type="text"
        className="name-input"
        placeholder="הכניסי את שמך"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <Header userName={userName} />
      <Summary total={total} done={done} />

      <form className="add-form" onSubmit={addTodo}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="משימה חדשה..."
        />
        <button type="submit">הוספה</button>
      </form>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  )
}

export default App
