import React from 'react';
import { Outlet } from "react-router-dom";
import './style/main.scss'
function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
