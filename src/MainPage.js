import './MainPage.css';
import Images from './Images';
import WrapUnwrap from './UnwrapStage';
import ReviewSlider from './ReviewSlider';
import data from './UserReviews.json';

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
                        <button className="posit-main-sec-button">Book a consultation</button>
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
                <header className="posit-main-sec-header">
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
            <section className="posit-main-proposal-sec">
                <div className="posit-main-proposal-sec-container">
                    <div className="posit-main-proposal-sec-container-part1">
                        <h1>Let's make things happen</h1>
                        <p>Contact us today to learn more about how our digital<br/>
                            marketing services can help your business grow and<br/>
                            succeed online.
                        </p>
                        <a href="#"><button className="posit-main-sec-button">Get your free proposal</button></a>
                    </div>
                    <img src={Images.ProposalPhoto} className="posit-main-proposal-sec-container-img" alt="Proposal" />
                </div>
            </section>
            <section className="posit-main-casestud-sec">
                <header className="posit-main-sec-header">
                    <h1>Case Studies</h1>
                    <p>Explore Real-Life Examples of Our Proven Digital Marketing<br/>
                        Success through Our Case Studies
                    </p>
                </header>
                <div className="posit-main-casestud-sec-cases">
                    <div className="posit-main-casestud-sec-cases-container">
                        <div className="posit-main-casestud-sec-case">
                            <p>For a local restaurant, we<br/>
                                implemented a targeted PPC<br/>
                                campaign that resulted in a 50%<br/>
                                increase in website traffic
                                and a <br/>25% increase in sales.
                            </p>
                            <a href="#"><img src={Images.LearnMoreWhite} alt="Learn more"/></a>
                        </div>
                        <div className="posit-main-casestud-sec-case">
                            <p>For a B2B software company, we<br/>
                                developed an SEO strategy that<br/>
                                resulted in a first page ranking<br/>
                                for key keywords and a 200%<br/>
                                increase in organic traffic.
                            </p>
                            <a href="#"><img src={Images.LearnMoreWhite} alt="Learn more"/></a>
                        </div>
                        <div className="posit-main-casestud-sec-case">
                            <p>For a national retail chain, we<br/>
                                created a social media<br/>
                                marketing campaign that<br/>
                                increased followers by 25%<br/>
                                and generated a 20% increase in<br/>
                                online sales.
                            </p>
                            <a href="#"><img src={Images.LearnMoreWhite} alt="Learn more"/></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="posit-main-workproc-sec">
                <header className="posit-main-sec-header">
                    <h1>Our Working Process</h1>
                    <p>Step-by-Step Guide to Achieving<br/>
                        Your Business Goals
                    </p>
                </header>
                <div className="posit-main-workproc-sec-stage">
                    <div className="posit-main-workproc-sec-stage-container">
                        <div className="posit-main-workproc-sec-stage-name">
                            <div className="posit-main-workproc-sec-stage-name-header">
                                <h1>01</h1>
                                <h3>Consultation</h3>
                            </div>
                            <button><img alt="Unwrap" src={Images.UnwrapButton} onClick={WrapUnwrap}/></button>
                        </div>
                        <p className="posit-main-workproc-sec-stage-text">During the initial consultation,
                            we will discuss your business goals and objectives, target audience, and current marketing
                            efforts.
                            This will allow us to understand your needs and tailor our services to best fit your
                            requirements.
                        </p>
                    </div>
                </div>
                <div className="posit-main-workproc-sec-stage">
                    <div className="posit-main-workproc-sec-stage-container">
                        <div className="posit-main-workproc-sec-stage-name">
                            <div className="posit-main-workproc-sec-stage-name-header">
                                <h1>02</h1>
                                <h3>Research and Strategy Development</h3>
                            </div>
                            <button><img alt="Unwrap" src={Images.UnwrapButton} onClick={WrapUnwrap}/></button>
                        </div>
                        <p className="posit-main-workproc-sec-stage-text">At vero eos et accusamus et
                            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                    </div>
                </div>
                <div className="posit-main-workproc-sec-stage">
                    <div className="posit-main-workproc-sec-stage-container">
                        <div className="posit-main-workproc-sec-stage-name">
                            <div className="posit-main-workproc-sec-stage-name-header">
                                <h1>03</h1>
                                <h3>Implementation</h3>
                            </div>
                            <button><img alt="Unwrap" src={Images.UnwrapButton} onClick={WrapUnwrap}/></button>
                        </div>
                        <p className="posit-main-workproc-sec-stage-text">At vero eos et accusamus et
                            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                    </div>
                </div>
                <div className="posit-main-workproc-sec-stage">
                    <div className="posit-main-workproc-sec-stage-container">
                        <div className="posit-main-workproc-sec-stage-name">
                            <div className="posit-main-workproc-sec-stage-name-header">
                                <h1>04</h1>
                                <h3>Monitoring and Optimization</h3>
                            </div>
                            <button><img alt="Unwrap" src={Images.UnwrapButton} onClick={WrapUnwrap}/></button>
                        </div>
                        <p className="posit-main-workproc-sec-stage-text">At vero eos et accusamus et
                            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                    </div>
                </div>
                <div className="posit-main-workproc-sec-stage">
                    <div className="posit-main-workproc-sec-stage-container">
                        <div className="posit-main-workproc-sec-stage-name">
                            <div className="posit-main-workproc-sec-stage-name-header">
                                <h1>05</h1>
                                <h3>Reporting and Communication</h3>
                            </div>
                            <button><img alt="Unwrap" src={Images.UnwrapButton} onClick={WrapUnwrap}/></button>
                        </div>
                        <p className="posit-main-workproc-sec-stage-text">At vero eos et accusamus et
                            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                    </div>
                </div>
                <div className="posit-main-workproc-sec-stage">
                    <div className="posit-main-workproc-sec-stage-container">
                        <div className="posit-main-workproc-sec-stage-name">
                            <div className="posit-main-workproc-sec-stage-name-header">
                                <h1>06</h1>
                                <h3>Continual Improvement</h3>
                            </div>
                            <button><img alt="Unwrap" src={Images.UnwrapButton} onClick={WrapUnwrap}/></button>
                        </div>
                        <p className="posit-main-workproc-sec-stage-text">At vero eos et accusamus et
                            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                    </div>
                </div>
            </section>
            <section className="posit-main-team-sec">
                <header className="posit-main-sec-header">
                    <h1>Team</h1>
                    <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                </header>
                <div className="posit-main-team-sec-inline">
                    <div className="posit-main-team-sec-inline-staff">
                        <div className="posit-main-team-sec-inline-staff-container">
                            <header className="posit-main-team-sec-inline-staff-header">
                                <img src={Images.JohnSmith} alt="Staff"/>
                                <div className="posit-main-team-sec-inline-staff-header-name">
                                    <h3>John Smith</h3>
                                    <p>CEO and Founder</p>
                                </div>
                            </header>
                            <p>10+ years of experience in digital marketing.
                                Expertise in SEO, PPC, and content strategy.
                            </p>
                        </div>
                    </div>
                    <div className="posit-main-team-sec-inline-staff">
                        <div className="posit-main-team-sec-inline-staff-container">
                            <header className="posit-main-team-sec-inline-staff-header">
                                <img src={Images.JaneDoe} alt="Staff"/>
                                <div className="posit-main-team-sec-inline-staff-header-name">
                                    <h3>Jane Doe</h3>
                                    <p>Director of Operations</p>
                                </div>
                            </header>
                            <p>7+ years of experience in project management and team leadership.
                                Strong organizational and communication skills.
                            </p>
                        </div>
                    </div>
                    <div className="posit-main-team-sec-inline-staff">
                        <div className="posit-main-team-sec-inline-staff-container">
                            <header className="posit-main-team-sec-inline-staff-header">
                                <img src={Images.MichaelBrown} alt="Staff"/>
                                <div className="posit-main-team-sec-inline-staff-header-name">
                                    <h3>Michael Brown</h3>
                                    <p>Senior SEO Specialist</p>
                                </div>
                            </header>
                            <p>5+ years of experience in SEO and content creation.
                                Proficient in keyword research and on-page optimization.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="posit-main-team-sec-inline">
                    <div className="posit-main-team-sec-inline-staff">
                        <div className="posit-main-team-sec-inline-staff-container">
                            <header className="posit-main-team-sec-inline-staff-header">
                                <img src={Images.EmilyJohnson} alt="Staff"/>
                                <div className="posit-main-team-sec-inline-staff-header-name">
                                    <h3>Emily Johnson</h3>
                                    <p>PPC Manager</p>
                                </div>
                            </header>
                            <p>3+ years of experience in paid search advertising.
                                Skilled in campaign management and performance analysis
                            </p>
                        </div>
                    </div>
                    <div className="posit-main-team-sec-inline-staff">
                        <div className="posit-main-team-sec-inline-staff-container">
                            <header className="posit-main-team-sec-inline-staff-header">
                                <img src={Images.BrianWilliams} alt="Staff"/>
                                <div className="posit-main-team-sec-inline-staff-header-name">
                                    <h3>Brian Williams</h3>
                                    <p>Social Media Specialist</p>
                                </div>
                            </header>
                            <p>3+ years of experience in paid search advertising.
                                Skilled in campaign management and performance analysis
                            </p>
                        </div>
                    </div>
                    <div className="posit-main-team-sec-inline-staff">
                        <div className="posit-main-team-sec-inline-staff-container">
                            <header className="posit-main-team-sec-inline-staff-header">
                                <img src={Images.SarahKim} alt="Staff"/>
                                <div className="posit-main-team-sec-inline-staff-header-name">
                                    <h3>Sarah Kim</h3>
                                    <p>Content Creator</p>
                                </div>
                            </header>
                            <p>2+ years of experience in writing and editing
                                Skilled in creating compelling, SEO-optimized content for various industries
                            </p>
                        </div>
                    </div>
                </div>
                <div className="posit-main-team-sec-inline">
                    <button className="posit-main-sec-button">See all team</button>
                </div>
            </section>
            <section className="posit-main-reviews-sec">
                <header className="posit-main-sec-header">
                    <h1>Testimonials</h1>
                    <p>Hear from Our Satisfied Clients: Read Our Testimonials
                        to Learn More about Our Digital Marketing Services
                    </p>
                </header>
                <ReviewSlider data={data}/>
            </section>
        </main>
    </div>
  );
}

export default MainPage;