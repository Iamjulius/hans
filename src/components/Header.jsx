//import React from 'react';
import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
            <header className="s-header">
                    <div className="header-logo">
                        <a className="site-logo" href="#">
                            <img src="images/logo.svg" alt="Hans"/>
                        </a>
                    </div>

                    <nav className="header-nav-wrap">
                        <ul className="header-main-nav">
                            <li className="current"><a className="smoothscroll" href="#intro" title="intro">Intro</a></li>
                            <li><a className="smoothscroll" href="#about" title="about">About</a></li>
                            <li><a className="smoothscroll" href="#services" title="services">Services</a></li>
                            <li><a className="smoothscroll" href="#works" title="works">Works</a></li>
                            <li><a className="smoothscroll" href="#contact" title="contact us">Say Hello</a></li>	
                        </ul>

                        <ul className="header-social">
                            <li><a href="#0"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i className="fab fa-dribbble" aria-hidden="true"></i></a></li>
                            <li><a href="#0"><i className="fab fa-behance" aria-hidden="true"></i></a></li>
                        </ul>
                    </nav>

                    <a className="header-menu-toggle" href="#"><span>Menu</span></a>

            </header> 
        
            <section id="intro" className="s-intro target-section">

                <div className="row intro-content">

                    <div className="column large-9 mob-full intro-text">
                        <h3>Hello, I'm Hans kyrll</h3>
                        <h1>
                            I produce beat <br/>
                            and a song writer <br/>
                            Based In Ivory Coast.
                        </h1>
                    </div>

                    <div className="intro-scroll">
                        <a href="#about" className="intro-scroll-link smoothscroll">
                            Scroll For More
                        </a>
                    </div>

                    <div className="intro-grid"></div>
                    <div className="intro-pic"></div>

                </div> 

            </section> 
            </React.Fragment>
        );
    }
}
 
export default Header;