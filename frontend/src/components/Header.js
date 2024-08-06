import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, X } from 'lucide-react';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: #f0f4f8;
  color: #2c5282;
  position: relative;
  height: 70px;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Brand = styled.div`
  font-weight: 800;
  font-size: 28px;
  background: linear-gradient(45deg, #2c5282, #4299e1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #2c5282;
  text-decoration: none;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #4299e1;
  }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #2c5282;
  text-decoration: none;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #4299e1;
  }
`;

const StyledChevronDown = styled(ChevronDown)`
  margin-left: 5px;
  transition: transform 0.3s ease;

  &.rotate {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  margin: 0;
  min-width: 200px;
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: #2c5282;
    text-decoration: none;
    display: block;
    white-space: nowrap;
    transition: all 0.3s ease;

    &:hover {
      color: #4299e1;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #2c5282;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #f0f4f8;
  padding: 20px;
  z-index: 20;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  margin-bottom: 15px;
`;

const MobileNavLink = styled(Link)`
  background: none;
  border: none;
  color: #2c5282;
  text-decoration: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #4299e1;
  }
`;

const MobileDropdownMenu = styled(motion.ul)`
  list-style: none;
  padding-left: 20px;
  margin-top: 10px;
`;

const BrandLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const handleServicesToggle = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
    setIsMoreOpen(false);
  };

  const handleMoreToggle = (e) => {
    e.preventDefault();
    setIsMoreOpen(!isMoreOpen);
    setIsServicesOpen(false);
  };

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HeaderWrapper ref={headerRef}>
      <BrandLink to="/">
        <Brand>HENDOI</Brand>
      </BrandLink>

      <Nav>
        <NavMenu>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <DropdownButton onClick={handleServicesToggle}>
              Services
              <StyledChevronDown className={isServicesOpen ? 'rotate' : ''} size={18} />
            </DropdownButton>
            <AnimatePresence>
              {isServicesOpen && (
                <DropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownItem><NavLink to="/website-development">Website Development</NavLink></DropdownItem>
                  <DropdownItem><NavLink to="/cloud-application-development">Cloud Application Development</NavLink></DropdownItem>
                  <DropdownItem><NavLink to="/mobile-app-development">Mobile App Development</NavLink></DropdownItem>
                  <DropdownItem><NavLink to="/saas-development">SaaS Development</NavLink></DropdownItem>
                  <DropdownItem><NavLink to="/web-email-app-hosting">Web/App/Email Hosting</NavLink></DropdownItem>
                  <DropdownItem><NavLink to="/digital-marketing">Digital Marketing</NavLink></DropdownItem>
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavItem>
          <NavItem>
            <NavLink to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <DropdownButton onClick={handleMoreToggle}>
              More
              <StyledChevronDown className={isMoreOpen ? 'rotate' : ''} size={18} />
            </DropdownButton>
            <AnimatePresence>
              {isMoreOpen && (
                <DropdownMenu
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownItem><NavLink to="/contact">Contact Us</NavLink></DropdownItem>
                  <DropdownItem><NavLink to="/faq">FAQ</NavLink></DropdownItem>
                  <DropdownItem><NavLink to="/policy">Policy</NavLink></DropdownItem>
                </DropdownMenu>
              )}
            </AnimatePresence>
          </NavItem>
        </NavMenu>

        <MobileMenuButton onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <X size={24} /> : <Plus size={24} />}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavItem>
              <MobileNavLink to="/about">About Us</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink as="button" onClick={handleServicesToggle}>
                Services
                <StyledChevronDown className={isServicesOpen ? 'rotate' : ''} size={18} />
              </MobileNavLink>
              <AnimatePresence>
                {isServicesOpen && (
                  <MobileDropdownMenu
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownItem><NavLink to="/website-development">Website Development</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/cloud-application-development">Cloud Application Development</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/mobile-app-development">Mobile App Development</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/saas-development">SaaS Development</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/web-email-app-hosting">Web/App/Email Hosting</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/digital-marketing">Digital Marketing</NavLink></DropdownItem>
                  </MobileDropdownMenu>
                )}
              </AnimatePresence>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink to="/blog">Blog</MobileNavLink>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLink as="button" onClick={handleMoreToggle}>
                More
                <StyledChevronDown className={isMoreOpen ? 'rotate' : ''} size={18} />
              </MobileNavLink>
              <AnimatePresence>
                {isMoreOpen && (
                  <MobileDropdownMenu
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownItem><NavLink to="/contact">Contact Us</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/faq">FAQ</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/policy">Policy</NavLink></DropdownItem>
                  </MobileDropdownMenu>
                )}
              </AnimatePresence>
            </MobileNavItem>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderWrapper>
  );
};

export default Header;

