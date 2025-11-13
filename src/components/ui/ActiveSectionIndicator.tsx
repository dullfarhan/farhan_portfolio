import React, { useState, useEffect } from 'react';

const sections = ['about', 'experience', 'projects', 'skills', 'contact'];

export default function ActiveSectionIndicator() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update navigation links with active state
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="/#"]');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const sectionId = href?.substring(2); // Remove "/#"
      
      if (sectionId === activeSection) {
        link.classList.add('text-accent-blue', 'font-semibold');
        link.classList.remove('text-textPrimary');
      } else {
        link.classList.remove('text-accent-blue', 'font-semibold');
        link.classList.add('text-textPrimary');
      }
    });
  }, [activeSection]);

  return null; // This component just manages state
}

