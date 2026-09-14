// רכיב 2: Summary
// מקבל שני מספרים: total (כמות המשימות) ו-done (כמות ההושלמות).
// מציג אותם כמשפט סיכום.
function Summary({ total, done }) {
  return (
    <p className="summary">
      יש {total} משימות, מתוכן {done} הושלמו.
    </p>
  )
}

export default Summary
