import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import {
  Home,
  Info,
  Layers,
  Briefcase,
  ListOrdered,
  FolderGit2,
  Store,
  PhoneCall,
  MapPin,
  LogIn,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Studio", path: "/studio", icon: Layers },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Process", path: "/process", icon: ListOrdered },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
    { name: "Shop", path: "/shop", icon: Store },
    { name: "Contact", path: "/contact", icon: PhoneCall },
    { name: "Delivery", path: "/delivery", icon: MapPin },
  ];

  return (
    <>
      <nav className="bg-[#fcfbf7] text-stone-900 border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 flex items-center gap-1.5 shrink-0"
            >
              Zinnia
              <span className="text-amber-600 font-normal">Interiors</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-3.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider transition-colors py-1 ${
                      isActive
                        ? "text-amber-600 border-b-2 border-amber-600"
                        : "text-stone-700 hover:text-amber-600"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Tablet Navigation Links (Compact view for medium-large screens) */}
            <div className="hidden lg:flex xl:hidden items-center space-x-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    title={link.name}
                    className={`p-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-amber-500/10 text-amber-600"
                        : "text-stone-700 hover:bg-stone-100 hover:text-amber-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>

            {/* Desktop Auth / Dashboard & Logout */}
            <div className="hidden lg:flex items-center space-x-2 shrink-0">
              {user ? (
                <div className="flex items-center gap-2">
                  <Link to="/dashboard">
                    <button className="flex items-center gap-1.5 bg-stone-900 text-stone-100 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors">
                      <LayoutDashboard className="w-3.5 h-3.5 text-amber-500" />{" "}
                      Dashboard
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    title="Log Out"
                    className="flex items-center justify-center p-2 rounded-xl bg-stone-200 text-stone-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="flex items-center gap-2 bg-stone-900 text-stone-100 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors">
                    <LogIn className="w-3.5 h-3.5 text-amber-500" /> Log In
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-stone-800 hover:text-amber-600 focus:outline-none p-2"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#fcfbf7] border-b border-stone-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-amber-500/10 text-amber-700 font-bold"
                        : "text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-amber-600" />
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center gap-2 bg-stone-900 text-stone-100 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                      <LayoutDashboard className="w-4 h-4 text-amber-500" />{" "}
                      Dashboard
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 bg-stone-200 text-stone-800 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-300 transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-red-600" /> Log Out
                  </button>
                </>
              ) : (
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 bg-stone-900 text-stone-100 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider">
                    <LogIn className="w-4 h-4 text-amber-500" /> Log In
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
