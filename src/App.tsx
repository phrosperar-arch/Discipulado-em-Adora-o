/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ErrorInfo, ReactNode, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { TOC } from './pages/TOC';
import { Reader } from './pages/Reader';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { AdminArea } from './pages/AdminArea';
import { MyReflections } from './pages/MyReflections';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, background: 'red', color: 'white', minHeight: '100vh', zIndex: 9999 }}>
          <h1>Something went wrong.</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <GlobalErrorBoundary>
      <AuthProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="antialiased">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminArea />} />
              <Route path="/toc" element={
                <ProtectedRoute>
                  <TOC />
                </ProtectedRoute>
              } />
              <Route path="/reader/:chapterId" element={
                <ProtectedRoute>
                  <Reader />
                </ProtectedRoute>
              } />
              <Route path="/my-reflections" element={
                <ProtectedRoute>
                  <MyReflections />
                </ProtectedRoute>
              } />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </HashRouter>
      </AuthProvider>
    </GlobalErrorBoundary>
  );
}

