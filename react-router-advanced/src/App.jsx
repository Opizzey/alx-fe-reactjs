import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <nav style={{ margin: 20, textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>
        <Link to="/profile" style={{ marginRight: 10 }}>Profile</Link>
        <Link to="/blog/123">Blog Post 123</Link>
        <button style={{ marginLeft: 20 }} onClick={() => setIsAuth((auth) => !auth)}>
          {isAuth ? 'Logout' : 'Login'}
        </button>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
