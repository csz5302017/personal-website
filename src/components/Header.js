import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(15, 15, 35, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? `1px solid ${props.theme.colors.border}` : 'none'};
  transition: all ${props => props.theme.transitions.normal};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md} 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${props => props.theme.spacing.md};
  padding-right: ${props => props.theme.spacing.md};
`;

const Logo = styled(motion.div)`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 700;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    position: relative;
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius.md};
    transition: all ${props => props.theme.transitions.fast};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: ${props => props.theme.colors.gradient};
      transition: width ${props => props.theme.transitions.fast};
    }
    
    &:hover {
      background: rgba(249, 115, 22, 0.1);
      color: #ffffff !important;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: ${props => props.theme.spacing.sm};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: ${props => props.theme.colors.text};
    border-radius: 2px;
    transition: all ${props => props.theme.transitions.fast};
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <HeaderContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('name')}
        </Logo>
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink key={item.key}>
              <a href={item.href}>
                {t(`nav.${item.key}`)}
              </a>
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
          />
          <motion.span
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
          />
          <motion.span
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
          />
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
