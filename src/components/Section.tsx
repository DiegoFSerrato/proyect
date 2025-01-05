import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;