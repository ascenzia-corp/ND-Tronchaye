import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Histoire', href: '/histoire' },
  {
    label: 'Sacrements',
    href: '#',
    children: [
      { label: 'Baptême', href: '/sacrement/bapteme' },
      { label: 'Confession', href: '/sacrement/confession' },
      { label: 'Communion', href: '/sacrement/communion' },
      { label: 'Confirmation', href: '/sacrement/confirmation' },
      { label: 'Mariage', href: '/sacrement/mariage' },
      { label: 'Onction des malades', href: '/sacrement/onction' },
    ],
  },
  { label: 'Événements', href: '/evenements' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || !isHome
          ? 'bg-primary shadow-lg'
          : 'bg-primary/80 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/LogoNdT.png" alt="Logo Sanctuaire" className="h-10 md:h-12 w-auto" />
            <span className="text-primary-foreground font-serif text-lg md:text-xl font-semibold hidden sm:block">
              Notre Dame de la Tronchaye
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary-foreground/90 hover:text-white transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={cn('h-4 w-4 transition-transform', dropdownOpen && 'rotate-180')} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors',
                    location.pathname === item.href
                      ? 'text-sanctuary-accent'
                      : 'text-primary-foreground/90 hover:text-white'
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden fixed top-16 md:top-20 right-0 h-[calc(100vh-4rem)] w-72 bg-primary shadow-xl transition-transform duration-300 z-50',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <span className="block px-3 py-2 text-sm font-semibold text-sanctuary-accent">
                  {item.label}
                </span>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    className="block px-6 py-2 text-sm text-primary-foreground/80 hover:text-white transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors',
                  location.pathname === item.href
                    ? 'text-sanctuary-accent'
                    : 'text-primary-foreground/80 hover:text-white'
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}
