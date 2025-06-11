import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const closeDrawer = () => setDrawerOpen(false);
  const openDrawer = () => setDrawerOpen(true);

  return (
    <nav className="navbar">
      <div className="navbar__logo" tabIndex={0} aria-label="MedAlph Logo">
        MedAlph
      </div>

      <div className="navbar__links">
        {NAV_ITEMS.map(({ label, to }) => (
          <Link key={to} to={to} className="navbar__link">
            {label}
          </Link>
        ))}
      </div>

      <Button
        className="navbar__menu-btn"
        type="text"
        icon={<MenuOutlined />}
        onClick={openDrawer}
        aria-label="Open navigation menu"
      />

      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerOpen}
        className="navbar__drawer"
        keyboard={true}
        aria-modal="true"
      >
        <div className="navbar__drawer-links">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link key={to} to={to} className="navbar__drawer-link" onClick={closeDrawer}>
              {label}
            </Link>
          ))}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
