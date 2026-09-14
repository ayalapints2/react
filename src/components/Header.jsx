// רכיב 3: Header
// מקבל את שם המשתמש (userName) ומציג אותו ככותרת הברכה.
function Header({ userName }) {
  return (
    <header className="app-header">
      <h1>רשימת המשימות של {userName}</h1>
    </header>
  )
}

export default Header
