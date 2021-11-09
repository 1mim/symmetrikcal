import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewLogScreen from './components/addFoodLog/NewLogScreen';

function App() {
  return (
    <Router>
      <main>
    <div className="App">
        <Routes>
            <Route path='/' exact element={<NewLogScreen />} />
        </Routes>
      </div>
      </main>
      </Router>
  );
}

export default App;
