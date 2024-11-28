import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav<{ $scrolled: boolean }>`
  background: ${props => props.$scrolled ? 'rgba(43, 0, 0, 0.95)' : 'rgba(43, 0, 0, 0.7)'};
  padding: 1rem;
  position: fixed;
  width: 90%;
  max-width: 1200px;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(${props => props.$scrolled ? '0' : '-2px'});
  z-index: 1000;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(255, 62, 62, 0.2);
  transition: all var(--transition-speed) ease;
  animation: ${props => props.$scrolled ? 'none' : 'float 6s ease-in-out infinite'};

  @media (max-width: 768px) {
    padding: 0.8rem;
    width: 95%;
    top: 10px;
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(255, 62, 62, 0.3);
  }
`;

const NavList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    max-height: ${props => props.$isOpen ? '300px' : '0'};
    overflow: hidden;
    transition: max-height var(--transition-speed) ease;
  }
`;

const NavItem = styled.li`
  position: relative;
  
  a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    position: relative;
    display: inline-block;
    text-shadow: 0 0 10px rgba(255, 62, 62, 0.3);
    font-family: var(--alt-font);
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0.8rem 1rem;
    }
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary-color);
      transition: width var(--transition-speed) ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <Nav $scrolled={scrolled}>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : '☰'}
      </MenuButton>
      <NavList $isOpen={isOpen}>
        <NavItem>
          <a href="#hero" onClick={scrollToSection('hero')}>Home</a>
        </NavItem>
        <NavItem>
          <a href="#about" onClick={scrollToSection('about')}>About</a>
        </NavItem>
        <NavItem>
          <a href="#games" onClick={scrollToSection('games')}>Games</a>
        </NavItem>
        <NavItem>
          <a href="#team" onClick={scrollToSection('team')}>Team</a>
        </NavItem>
        <NavItem>
          <a href="#contact" onClick={scrollToSection('contact')}>Contact</a>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;
