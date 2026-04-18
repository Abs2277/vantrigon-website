import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import logo from '../../imports/image.png';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const MotionLink = motion.create(Link);

export function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/#services' },
    { label: 'Portfolio', to: '/#portfolio' },
    { label: 'Contact', to: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/60 backdrop-blur-2xl border-b border-border/50 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      {/* Holographic Border */}
      {isScrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, #3b82f6, #a855f7, #ec4899, transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative h-14 w-40 rounded-lg overflow-hidden border border-cyan-400/25 bg-[#080b1a]/75 shadow-xl shadow-cyan-500/10 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/5 to-purple-500/15 opacity-80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_28px_rgba(59,130,246,0.28)]" />
                <img
                  src={logo}
                  alt="Vantrigon Tech"
                  className="relative h-full w-full object-contain p-1"
                />
              </div>
              <div className="hidden xl:flex flex-col leading-none">
                <span className="text-2xl font-bold tracking-wide text-foreground drop-shadow-[0_0_14px_rgba(96,165,250,0.35)]">
                  Vantrigon
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.28em] text-primary">
                  Tech
                </span>
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <MotionLink
                key={item.label}
                to={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="px-4 py-2 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-300"
              >
                {item.label}
              </MotionLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                  ],
                  backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ backgroundSize: '200% 100%' }}
              />
              <span className="relative text-white font-medium">Get Started</span>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted/50 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
