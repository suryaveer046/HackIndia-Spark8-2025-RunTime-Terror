import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import UploadPage from "./pages/UploadPage";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ContactUs from "./pages/Contact";
import About from "./pages/About";
import ZoomAnimatedLogo from "./pages/AnimatedLogo";
import LoginModal from "./pages/Protected";

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        {" "}
        <Route path="/" element={<ZoomAnimatedLogo />} />
      </Routes>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadPage />
              </ProtectedRoute>
            }
          />
          <Route path="/protected" element={<LoginModal />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
