import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './componets/LandingPage';
import Auth from './componets/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
