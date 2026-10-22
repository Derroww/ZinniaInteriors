import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

// List of authorized admin emails
const ADMIN_EMAILS = [
  'derricksum@gmail.com', // Your admin account
  'admin@zinniainteriors.com'
];

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center text-amber-500 font-serif">
        Loading...
      </div>
    );
  }

  // If user is not logged in, send them to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the route requires admin access and user email isn't in ADMIN_EMAILS, send to regular user dashboard
  if (adminOnly && (!user.email || !ADMIN_EMAILS.includes(user.email.toLowerCase()))) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}