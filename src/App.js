import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/login/Login';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="app">
      {!user ? (
        <Login />
      ): (
        <div className='app__body'>
          <Router>
            <Sidebar />
            <Routes>
              <Route path='/rooms/:roomId' element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
