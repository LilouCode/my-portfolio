import React from 'react';
import { Outlet } from "react-router-dom";
import { SourceProvider } from "./utils/context";
import './style/main.scss'
function App() {
  return (
    <SourceProvider>
    <div className="App">
      <Outlet/>
    </div>
    </SourceProvider>
  );
}

export default App;
