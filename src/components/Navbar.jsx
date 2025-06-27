import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../styles/Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <Link to="/" className="navbar__logo" aria-label="MedAlph Home">
          <span>Med</span><strong>Alph</strong>
        </Link>

        {!isMobile && (
          <div className="navbar__links">
            {NAV_ITEMS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`navbar__link ${location.pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}

        {isMobile && (
          <Button
            className="navbar__menu-btn"
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
            aria-label="Open navigation"
          />
        )}

        <Drawer
          placement="right"
          onClose={toggleDrawer}
          open={drawerOpen}
          className="navbar__drawer"
          Style={{ backgroundColor: '#0c1015', borderBottom: 'none' }}
        >
          <div className="navbar__drawer-links">
            {NAV_ITEMS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="navbar__drawer-link"
                onClick={toggleDrawer}
              >
                {label}
              </Link>
            ))}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
