import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
import Home from './components/pages/Homescreen'

function App(){
    return(<div>
        <Home />
    </div>
    )
}

export default App;
