import './MainPage.css';
import PositivusLogo from './image/logo.png';
import MainTextImg from './image/main-text.png';
import AmazonImg from './image/company-logo.png';
import DribbleImg from './image/company-logo-1.png';
import HubspotImg from './image/company-logo-2.png';
import NotionImg from './image/company-logo-3.png';
import NetflixImg from './image/company-logo-4.png';
import ZoomImg from './image/company-logo-5.png';

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
            <section className="posit-main-company-sec">
                <div className="posit-main-company-sec-part1">
                    <a href="https://amazon.com"><img className="posit-main-company-sec-img" src={AmazonImg} alt="Amazon"/></a>
                    <a href="https://dribbble.com/"><img className="posit-main-company-sec-img" src={DribbleImg} alt="Dribble"/></a>
                    <a href="https://hubspot.com/"><img className="posit-main-company-sec-img" src={HubspotImg} alt="HubSpot"/></a>
                </div>
                <div className="posit-main-company-sec-part2">
                    <a href="https://notion.com/"><img className="posit-main-company-sec-img" src={NotionImg} alt="Notion"/></a>
                    <a href="https://netflix.com/"><img className="posit-main-company-sec-img" src={NetflixImg} alt="Netflix"/></a>
                    <a href="https://zoom.com/"><img className="posit-main-company-sec-img" src={ZoomImg} alt="Zoom"/></a>
                </div>
            </section>
            <section className="posit-main-services-sec">
                <header className="posit-main-services-sec-header">
                    <h1>Services</h1>
                    <p>At our digital marketing agency,
                        we offer a range of services <br/>
                        to help businesses grow and succeed online.
                        These services include:
                    </p>
                </header>
                <div className="posit-main-services-sec-cards">
                    <div className="posit-main-services-sec-cards-part1">
                        <div className="posit-main-services-card-1"></div>
                        <div className="posit-main-services-card-2"></div>
                        <div className="posit-main-services-card-3"></div>
                    </div>
                    <div className="posit-main-services-sec-cards-part2">
                        <div className="posit-main-services-card-4"></div>
                        <div className="posit-main-services-card-5"></div>
                        <div className="posit-main-services-card-6"></div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  );
}

export default MainPage;
