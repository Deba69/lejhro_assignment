import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      
      <button 
        aria-label="Scroll to Top" 
        type="button"
        className={`ant-btn ant-btn-default scroll-to-top ${isScrolled ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <svg 
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm" 
          focusable="false" 
          aria-hidden="true" 
          viewBox="0 0 24 24" 
          data-testid="KeyboardArrowUpIcon"
        >
          <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
        </svg>
      </button>

      <div className={`top-fixed-header ${isScrolled ? 'visible' : ''}`}>
        <Link to="/" aria-label="HomePage">
          <img 
            src="/lejhro_logo_blue.png" 
            alt="Lejhro Blue Logo" 
            className="top-fixed-header-logo"
          />
        </Link>
        <div className="top-fixed-header-container">
          <div className="top-fixed-header-contact-div paragraph-small-text">
            <Link to="/contact-us">
              <span>Let's Talk</span>
              <svg 
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" 
                focusable="false" 
                aria-hidden="true" 
                viewBox="0 0 24 24" 
                data-testid="ArrowRightAltIcon"
              >
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
              </svg>
            </Link>
          </div>
          <button 
            aria-label="Open Drawer" 
            type="button"
            className="ant-btn ant-btn-default top-fixed-header-drawer-button"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <div className="side-drawer-button-line"></div>
            <div className="side-drawer-button-line short"></div>
            <div className="side-drawer-button-line"></div>
          </button>
        </div>
      </div>

      
      <div className="home-page-home">
        <div className="top-header-header-div">

          <div className="top-header-header-logo-div">
            <Link to="/" aria-label="HomePage">
              <img 
                src="/lejhro_logo_white.png" 
                alt="Lejhro White Logo" 
                className="top-header-logo"
              />
            </Link>
          </div>

          <div className="top-header-links-div">
            <Link to="/innovations">Innovations</Link>
            <Link to="/business-services">Business Services</Link>
            <Link to="/financial-services">Financial Services</Link>
            <Link 
              to="http://www.bootcamp.lejhro.com/" 
              target="_blank" 
              rel="noreferrer"
            >
              Bootcamp
            </Link>
            <button 
              aria-label="Open Drawer" 
              type="button"
              className="ant-btn ant-btn-default top-header-drawer-button-links"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <div className="side-drawer-button-line"></div>
              <div className="side-drawer-button-line short"></div>
              <div className="side-drawer-button-line"></div>
            </button>
          </div>

          <button 
            aria-label="Open Drawer" 
            type="button"
            className="ant-btn ant-btn-default top-header-drawer-button"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            <div className="side-drawer-button-line"></div>
            <div className="side-drawer-button-line short"></div>
            <div className="side-drawer-button-line"></div>
          </button>
        </div>

        <h2 className="home-page-name h2-heading">
          Blogs
        </h2>
      </div>
      
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

export default Header;
