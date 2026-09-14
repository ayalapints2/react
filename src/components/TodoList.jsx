// רכיב 1: TodoList
// מקבל מערך 'todos' (כנתון, נמסר מה-App) ומציג כל משימה עם שמה וסטטוסה.
function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.name}</span>
          <span className="status-badge">
            {todo.status === 'done' ? '✓ הושלם' : '⏳ בתהליך'}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
