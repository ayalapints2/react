import Header from './components/Header.jsx'
import Summary from './components/Summary.jsx'
import TodoList from './components/TodoList.jsx'
import './App.css'

// נתון המשתמש (לכותר).
const userName = 'שם מלא 1'

// רשימת המשימות. כל אחת: id, name ו-status (done / pending).
const todos = [
  { id: 1, name: 'משימה 1', status: 'done' },
  { id: 2, name: 'משימה 2', status: 'pending' },
  { id: 3, name: 'משימה 3', status: 'done' },
  { id: 4, name: 'משימה 4', status: 'pending' },
]

// מחשבים את הסיכום מתוך הרשימה.
const total = todos.length
const done = todos.filter((todo) => todo.status === 'done').length

function App() {
  return (
    <div className="app">
      {/* רכיב 3: הכותר — מוסרים לו את שם המשתמש. */}
      <Header userName={userName} />

      {/* רכיב 2: הסיכום — מוסרים לו את המספרים. */}
      <Summary total={total} done={done} />

      {/* רכיב 1: הרשימה — מוסרים לו את המערך. */}
      <TodoList todos={todos} />
    </div>
  )
}

export default App
