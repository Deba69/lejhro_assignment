import { Link } from 'react-router-dom';

function Drawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="ant-drawer-overlay" onClick={onClose}>
      <div className="ant-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="ant-drawer-header">
          <div className="ant-drawer-header-title">
            <button 
              type="button" 
              aria-label="Close" 
              className="ant-drawer-close"
              onClick={onClose}
            >
              <span role="img" aria-label="close" className="anticon anticon-close">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </span>
            </button>
            <div className="ant-drawer-title">
              <Link to="/">
                <img src="/lejhro_logo_blue.png" alt="" className="lejhro-logo-primary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="ant-drawer-body">
          <div className="side-drawer-buttons-container">
            <Link to="/innovations" className="side-drawer-button-link">Innovations</Link>
            <Link to="http://www.bootcamp.lejhro.com/" className="side-drawer-button-link" target="_blank" rel="noreferrer">Bootcamp</Link>
            <Link to="/business-services" className="side-drawer-button-link">Business Services</Link>
            <Link to="/financial-services" className="side-drawer-button-link">Financial Services</Link>
            <Link to="/about" className="side-drawer-button-link">About</Link>
            <Link to="/contact-us" className="side-drawer-button-link">Contact Us</Link>
            <Link to="/blogs" className="side-drawer-button-link">Blogs</Link>
            
            <div className="side-drawer-connect">
              <Link to="https://www.twitter.com/lejhro" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TwitterIcon" style={{fontSize: '30px'}}>
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                </svg>
              </Link>
              <Link to="https://www.facebook.com/lejhro" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon" style={{fontSize: '30px'}}>
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/company/lejhro" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon" style={{fontSize: '30px'}}>
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </Link>
              <Link to="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="YouTubeIcon" style={{fontSize: '30px'}}>
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
