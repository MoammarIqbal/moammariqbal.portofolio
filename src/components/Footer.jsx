export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {year} Moammar Iqbal. Built with React.</p>
      </div>
    </footer>
  );
}
