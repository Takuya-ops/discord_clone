import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
