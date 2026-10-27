// רכיב 1: TodoList
// todos    – מערך המשימות
// onToggle – פונקציה שמקבלת id ומחליפה סטטוס (נמסרת מה-App)
function TodoList({ todos, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        const isDone = todo.status === 'done'

        return (
          <li key={todo.id}>
            <label className="todo-item">
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => onToggle(todo.id)}
              />
              <span className={isDone ? 'done' : ''}>{todo.name}</span>
            </label>

            <span className="status-badge">
              {isDone ? '✓ הושלם' : '⏳ בתהליך'}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
