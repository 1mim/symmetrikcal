import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/loginRegister/WelcomeScreen';
import LoginScreen from './components/loginRegister/LoginScreen';
import RegisterScreen from './components/loginRegister/RegisterScreen';
import FoodLogScreen from './components/meallogging/FoodLogScreen';

function App() {
  return (
    <Router>
      <main>
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomeScreen />}/>
        <Route path='/login' element={<LoginScreen />}/>
        <Route path='/signup' element={<RegisterScreen />}/>
        <Route path='/newlog' element={<FoodLogScreen />}/>
    </Routes>
      </div>
      </main>
      </Router>
  );
}

export default App;
