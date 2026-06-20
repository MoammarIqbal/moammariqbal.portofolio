import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Moammar Iqbal. {language === 'id' ? 'Dibuat dengan React.' : 'Built with React.'}</p>
      </div>
    </footer>
  );
}
