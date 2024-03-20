import './App.css';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../NotesPage/NotesPage';


export default function App() {
  const [user, setUser] = useState(getUser()); 

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
          <Route path="/notes" element={<NotesPage />} />
          <Route path="*" element={<Navigate to="/notes" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser}/>
      )}
    </main>
  );
};

