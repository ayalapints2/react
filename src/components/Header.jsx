// רכיב 3: Header
// מקבל את שם המשתמש ומציג אותו בכותרת. שם ריק -> כותרת כללית.
function Header({ userName }) {
  return (
    <header className="app-header">
      <h1>רשימת המשימות{userName && ` של ${userName}`}</h1>
    </header>
  )
}

export default Header
