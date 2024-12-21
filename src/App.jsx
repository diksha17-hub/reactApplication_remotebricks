import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Todo from "./assets/components/Todo";
import Employee from "./assets/components/Employee";
import Navbar from "./assets/components/Navbar"; 

function App() {
  return (
    <Router>
      <Navbar />     
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
