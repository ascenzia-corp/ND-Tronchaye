import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Eager load homepage
import Index from '@/pages/Index';

// Lazy load other pages
const Histoire = lazy(() => import('@/pages/Histoire'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Evenements = lazy(() => import('@/pages/Evenements'));
const EventDetail = lazy(() => import('@/pages/EventDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Sacrements
const Bapteme = lazy(() => import('@/pages/sacrements/Bapteme'));
const Confession = lazy(() => import('@/pages/sacrements/Confession'));
const Communion = lazy(() => import('@/pages/sacrements/Communion'));
const Confirmation = lazy(() => import('@/pages/sacrements/Confirmation'));
const Mariage = lazy(() => import('@/pages/sacrements/Mariage'));
const Onction = lazy(() => import('@/pages/sacrements/Onction'));

// Admin
const AdminLogin = lazy(() => import('@/pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const AdminEvents = lazy(() => import('@/pages/admin/AdminEvents'));
const AdminPhotos = lazy(() => import('@/pages/admin/AdminPhotos'));
const AdminMessages = lazy(() => import('@/pages/admin/AdminMessages'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-muted-foreground font-sans">Chargement...</div>
    </div>
  );
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-right" richColors />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Index />
              </PublicLayout>
            }
          />
          <Route
            path="/histoire"
            element={
              <PublicLayout>
                <Histoire />
              </PublicLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicLayout>
                <Contact />
              </PublicLayout>
            }
          />
          <Route
            path="/evenements"
            element={
              <PublicLayout>
                <Evenements />
              </PublicLayout>
            }
          />
          <Route
            path="/event/:eventId"
            element={
              <PublicLayout>
                <EventDetail />
              </PublicLayout>
            }
          />

          {/* Sacrements */}
          <Route
            path="/sacrement/bapteme"
            element={
              <PublicLayout>
                <Bapteme />
              </PublicLayout>
            }
          />
          <Route
            path="/sacrement/confession"
            element={
              <PublicLayout>
                <Confession />
              </PublicLayout>
            }
          />
          <Route
            path="/sacrement/communion"
            element={
              <PublicLayout>
                <Communion />
              </PublicLayout>
            }
          />
          <Route
            path="/sacrement/confirmation"
            element={
              <PublicLayout>
                <Confirmation />
              </PublicLayout>
            }
          />
          <Route
            path="/sacrement/mariage"
            element={
              <PublicLayout>
                <Mariage />
              </PublicLayout>
            }
          />
          <Route
            path="/sacrement/onction"
            element={
              <PublicLayout>
                <Onction />
              </PublicLayout>
            }
          />

          {/* Admin routes (no public header/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/photos" element={<AdminPhotos />} />
          <Route path="/admin/messages" element={<AdminMessages />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <PublicLayout>
                <NotFound />
              </PublicLayout>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
