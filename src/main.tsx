import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home, About, Join } from "./pages";
import { Navbar } from "./components/Navbar";
import './index.css'

// Wrapper component to handle navbar logic
const AppLayout = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AppLayout />
    </HashRouter>
  </StrictMode>,
)
