import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div className="layout-container">
      <Head>
        <title>Basic Next.js App</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>
      <header className="header">
        <nav className="nav">
          <a href="https://www.cbssports.com/nfl/news/nfl-super-bowl-odds-2024-predictions-futures-expert-picks-nfl-teams-to-back-from-football-insider/" className="main-link">See For Yourself</a>
          <ul className="nav-list">
            {["Chiefs", "Eagles", "Bills", "Niners", "Bengals", "Cowboys"].map((team, index) => (
              <li key={index} className="nav-item">
                <a className={`nav-link ${index === 0 ? 'active' : ''}`} href="#">{team}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {children}
      </main>
      {!home && (
        <Link href="/" className="btn btn-primary mt-3 back-to-home">
          ← Back to home
        </Link>
      )}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Stay Connected</h2>
            <p>Sign up for our newsletter and never miss an update!</p>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>1234 Street Name, City, State</p>
            <p>Email: example@example.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Your Website Name</p>
        </div>
      </footer>


    </div>
  );
}