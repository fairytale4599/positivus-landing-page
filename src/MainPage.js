import './MainPage.css';
import PositivusLogo from './image/logo.png';
import MainTextImg from './image/main-text.png';

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
        <main className="posit-main">
            <section className="posit-main-sec1">
                <div className="posit-main-sec1-text">
                    <h1 className="posit-main-sec1-text-header">Navigating the<br/>digital landscape<br/>for success</h1>
                    <p className="posit-main-sec1-text-paragraph">Our digital marketing agency helps
                        businesses<br/>grow and succeed online
                        through a range of<br/>services including
                        SEO, PPC, social media marketing,<br/>
                        and content creation.
                    </p>
                    <a href="#">
                        <button className="posit-main-sec1-button">Book a consultation</button>
                    </a>
                </div>
                <img className="posit-main-sec1-img" alt="Image" src={MainTextImg}/>
            </section>
        </main>
    </div>
  );
}

export default MainPage;
