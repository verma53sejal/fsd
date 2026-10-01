import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('')

  function logout() {
    setUsername('')
    setRole('')
  }

  return (
    <main className="page">
      {role === '' ? (
        <section className="card">
          <h1>Login Form</h1>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <div className="button-group">
            <button type="button" onClick={() => setRole('Admin')}>
              Login as Admin
            </button>
            <button type="button" onClick={() => setRole('Viewer')}>
              Login as Viewer
            </button>
          </div>
        </section>
      ) : (
        <section className="card">
          <h1>Welcome, {username} ({role})</h1>
          {role === 'Admin' ? (
            <button type="button">Delete Post</button>
          ) : (
            <p>Read-only access</p>
          )}
          <button className="logout-button" type="button" onClick={logout}>
            Logout
          </button>
        </section>
      )}
    </main>
  )
}

export default App
