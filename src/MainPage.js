import './MainPage.css';
import Images from './Images';

function MainPage() {
  return (
    <div className="MainPage">
        <header className="posit-header">
            <div className="posit-header-container">
                <a href="/" className="posit-header-logo-container">
                    <img className="posit-header-logo" alt="Positivus Logo" src={Images.PositivusLogo}/>
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
                <img className="posit-main-sec1-img" alt="Image" src={Images.MainTextImg}/>
            </section>
            <section className="posit-main-company-sec">
                <div className="posit-main-company-sec-part1">
                    <a href="https://amazon.com"><img className="posit-main-company-sec-img" src={Images.AmazonImg} alt="Amazon"/></a>
                    <a href="https://dribbble.com/"><img className="posit-main-company-sec-img" src={Images.DribbleImg} alt="Dribble"/></a>
                    <a href="https://hubspot.com/"><img className="posit-main-company-sec-img" src={Images.HubspotImg} alt="HubSpot"/></a>
                </div>
                <div className="posit-main-company-sec-part2">
                    <a href="https://notion.com/"><img className="posit-main-company-sec-img" src={Images.NotionImg} alt="Notion"/></a>
                    <a href="https://netflix.com/"><img className="posit-main-company-sec-img" src={Images.NetflixImg} alt="Netflix"/></a>
                    <a href="https://zoom.com/"><img className="posit-main-company-sec-img" src={Images.ZoomImg} alt="Zoom"/></a>
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
                        <div className="posit-main-services-card-1">
                            <div className="posit-main-services-card-container">
                                <div className="posit-main-services-card-container-part1-g">
                                    <h1>Search engine<br/>optimization</h1>
                                    <a href="#"><img src={Images.LearnMoreGreen} alt="Learn more"/></a>
                                </div>
                                <img src={Images.Card1Pic} alt="Card image"/>
                            </div>
                        </div>
                        <div className="posit-main-services-card-2">
                            <div className="posit-main-services-card-container">
                                <div className="posit-main-services-card-container-part1-w">
                                    <h1>Social media<br/>Marketing</h1>
                                    <a href="#"><img src={Images.LearnMoreWhite} alt="Learn more"/></a>
                                </div>
                                <img src={Images.Card2Pic} alt="Card image"/>
                            </div>
                        </div>
                        <div className="posit-main-services-card-3">
                            <div className="posit-main-services-card-container">
                                <div className="posit-main-services-card-container-part1-w">
                                    <h1>Content<br/>Creation</h1>
                                    <a href="#"><img src={Images.LearnMoreGreen} alt="Learn more"/></a>
                                </div>
                                <img src={Images.Card3Pic} alt="Card image"/>
                            </div>
                        </div>
                    </div>
                    <div className="posit-main-services-sec-cards-part2">
                        <div className="posit-main-services-card-4">
                            <div className="posit-main-services-card-container">
                                <div className="posit-main-services-card-container-part1-w">
                                    <h1>Pay-per-click<br/>advertising</h1>
                                    <a href="#"><img src={Images.LearnMoreGreen} alt="Learn more"/></a>
                                </div>
                                <img src={Images.Card4Pic} alt="Card image"/>
                            </div>
                        </div>
                        <div className="posit-main-services-card-5">
                            <div className="posit-main-services-card-container">
                                <div className="posit-main-services-card-container-part1-g">
                                    <h1>Email<br/>Marketing</h1>
                                    <a href="#"><img src={Images.LearnMoreGreen} alt="Learn more"/></a>
                                </div>
                                <img src={Images.Card5Pic} alt="Card image"/>
                            </div>
                        </div>
                        <div className="posit-main-services-card-6">
                            <div className="posit-main-services-card-container">
                                <div className="posit-main-services-card-container-part1-g">
                                    <h1>Analytics and<br/>Tracking</h1>
                                    <a href="#"><img src={Images.LearnMoreWhite} alt="Learn more"/></a>
                                </div>
                                <img src={Images.Card6Pic} alt="Card image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  );
}

export default MainPage;
