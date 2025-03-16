import React from 'react';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <div>
        <footer className="bg-slate-900 text-white text-base text-center py-5">
            Copyright&#169;2025 | URL Shortner-Shiv
        </footer> 
        </div>  
  );
};

export default Footer;

