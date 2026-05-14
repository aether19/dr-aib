import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavigationHeader from './components/NavigationHeader';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import ProcedurePage from './pages/ProcedurePage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavigationHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docteur" element={<DoctorPage />} />
          <Route path="/chirurgie/:slug" element={<ProcedurePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
