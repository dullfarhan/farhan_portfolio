import React, { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  number: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'about', number: '01.', label: 'About' },
  { id: 'experience', number: '02.', label: 'Experience' },
  { id: 'projects', number: '03.', label: 'Projects' },
  { id: 'skills', number: '04.', label: 'Skills' },
  { id: 'contact', number: '05.', label: 'Contact' },
];

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }

      // Show navigation after scrolling past hero
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`group flex items-center gap-3 transition-all duration-300 ${
              activeSection === item.id
                ? 'text-accent-blue'
                : 'text-textSecondary hover:text-accent-blue'
            }`}
            aria-label={`Navigate to ${item.label}`}
          >
            <span className="font-mono text-sm opacity-60">{item.number}</span>
            <span
              className={`h-0.5 transition-all duration-300 ${
                activeSection === item.id
                  ? 'w-8 bg-accent-blue'
                  : 'w-0 bg-transparent group-hover:w-4'
              }`}
            />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

