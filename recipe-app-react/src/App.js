// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <Router>
      <div>
        <h1>My Recipe App</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
