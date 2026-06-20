import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { MdLanguage } from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.projects, href: '#projects' },
    { label: t.experience, href: '#experience' },
    { label: t.certifications, href: '#certifications' },
    { label: t.contact, href: '#contact' },
  ];

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

        <div className="nav-actions">
          <button 
            onClick={toggleLanguage} 
            className="lang-toggle-btn"
            aria-label="Change language"
          >
            <MdLanguage size={18} />
            <span>{language.toUpperCase()}</span>
          </button>
          
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
      </div>
    </nav>
  );
}
