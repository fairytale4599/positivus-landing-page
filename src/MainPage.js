import './MainPage.css';
import PositivusLogo from './image/logo.png';

function MainPage() {
  return (
    <div className="MainPage">
      <header className="posit-header">
          <div className="posit-header-container">
              <a href="/" className="posit-header-logo-container">
                  <img className="posit-header-logo" alt="Positivus Logo" src={PositivusLogo}/>
              </a>
              <nav className="posit-header-nav">
                  <ul className="posit-header-nav-ul">
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Use Cases</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#"><button className="posit-header-nav-ul-button">Request a quote</button></a></li>
                  </ul>
              </nav>
          </div>
      </header>
    </div>
  );
}

export default MainPage;
