import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/forgot" element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
