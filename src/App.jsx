import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.scss';

import Header from './components/header/Header';
import HomePage from './pages/homepage/Homepage';
import ScrollToTop from './components/scroll-to-top/ScrollToTop';

function App() {
  const location = useLocation();

  const hideHeaderRoutes = ['/cabinet'];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className='app-container'>
      <ScrollToTop />
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
