import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewLogScreen from './components/addFoodLog/NewLogScreen';
import WelcomeScreen from './components/welcome/WelcomeScreen';
import LoginScreen from './components/welcome/LoginScreen';
import SignUpScreen from './components/welcome/SignUpScreen';
import DiaryScreen from './components/diary/DiaryScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';
import MyAccScreen from './components/myAccount/MyAccScreen';
import LogHistoryScreen from './components/logHistory/LogHistoryScreen';
import SetMacrosScreen from './components/welcome/SetMacrosScreen';

function App() {
  return (
    <Router>
      <main>
    <div className="App">
        <Routes>
            {/* <Route path='/' exact element={<NewLogScreen />} /> */}
            <Route path='/' element={<WelcomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/signup' element={<SignUpScreen />} />
            <Route path='/signup/macros' element={<SetMacrosScreen />} />

            <Route path='/newlog' element={<NewLogScreen />} />
            <Route path='/diary/:id' element={<DiaryScreen />} />

            <Route path='/home' element={<DashboardScreen />} />

            <Route path='/loghistory' element={<LogHistoryScreen />} />

            <Route path='/myaccount/:id' element={<MyAccScreen />} />
        </Routes>
      </div>
      </main>
      </Router>
  );
}

export default App;
