import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

// Nested Profile components
function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ margin: 10 }}>
        <Link to="details" style={{ marginRight: 10 }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function ProfileDetails() {
  return <div>Profile Details Section</div>;
}

function ProfileSettings() {
  return <div>Profile Settings Section</div>;
}

// Dynamic Blog Post route
function BlogPost() {
  const { postId } = useParams();
  return <div>Viewing Blog Post ID: {postId}</div>;
}

// Protected Route component
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  const [count, setCount] = useState(0)
  // Simulate authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <nav style={{ margin: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>
        <Link to="/profile" style={{ marginRight: 10 }}>Profile</Link>
        <Link to="/blog/123">Blog Post 123</Link>
        <button style={{ marginLeft: 20 }} onClick={() => setIsAuthenticated((auth) => !auth)}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Router>
  )
}

export default App
