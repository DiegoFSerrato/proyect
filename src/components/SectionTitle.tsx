import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <h2 className={`text-4xl text-center font-dancing mb-12 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;