import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Sertifikasi', href: '#certifications' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setIsOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <a href="#" className="nav-logo" aria-label="Moammar Iqbal - Home">
          Moammar<span>.</span>
        </a>

        <div className={`nav-links${isOpen ? ' active' : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleClick}>
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
