import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/loginRegister/WelcomeScreen';
import LoginScreen from './components/loginRegister/LoginScreen';
import RegisterScreen from './components/loginRegister/RegisterScreen';
import FoodLogScreen from './components/meallogging/FoodLogScreen';
import SetMacrosScreen from './components/loginRegister/SetMacrosScreen';
import SetWeightScreen from './components/loginRegister/SetWeightScreen';
import DiaryScreen from './components/diary/DiaryScreen';
import DashboardScreen from './components/dashboard/DashboardScreen';

function App() {
  return (
    <Router>
      <main>
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomeScreen />}/>
        <Route path='/login' element={<LoginScreen />}/>
        <Route path='/signup' element={<RegisterScreen />}/>
        <Route path='/set-macros' element={<SetMacrosScreen />}/>
        <Route path='/set-weight' element={<SetWeightScreen />}/>
        <Route path='/newlog' element={<FoodLogScreen />}/>
        <Route path='/diary' element={<DiaryScreen />}/>
        <Route path='/main' element={<DashboardScreen />}/>
    </Routes>
      </div>
      </main>
      </Router>
  );
}

export default App;
