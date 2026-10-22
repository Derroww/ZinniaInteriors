import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Studio from "./Pages/Studio";
import Services from "./Pages/Services";
import Process from "./Pages/Process";
import Projects from "./Pages/Projects";
import Products from "./Pages/Products";
import ContactPage from "./Pages/ContactPage";
import DeliveryPage from "./Pages/DeliveryPage";
import Dashboard from "./Pages/Dashboard";
import Login from "./Auth/Login";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { CheckCircle2 } from "lucide-react";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import AdminDashboard from "./Pages/AdminDashboard";

export default function App() {
  const { toastMessage } = useAuth();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-stone-900 text-stone-100 font-sans">
        {/* Toast Notification Bar */}
        {toastMessage && (
          <div className="fixed top-5 right-5 z-50 bg-amber-500 text-stone-950 px-6 py-3 rounded-xl shadow-2xl font-bold flex items-center gap-2 animate-bounce">
            <CheckCircle2 className="w-5 h-5" /> {toastMessage}
          </div>
        )}

        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/shop" element={<Products />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <footer className="bg-stone-950 border-t border-stone-800 py-8 text-center text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Zinnia Interiors Ltd. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
