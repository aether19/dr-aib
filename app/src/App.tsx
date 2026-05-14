import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavigationHeader from './components/NavigationHeader';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import HomePage from './pages/HomePage';
import DoctorPage from './pages/DoctorPage';
import ProcedurePage from './pages/ProcedurePage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <NavigationHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docteur" element={<DoctorPage />} />
          <Route path="/chirurgie/:slug" element={<ProcedurePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
}
