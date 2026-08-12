import React from 'react';

const TechnicalFiller = ({ className }) => {
  return (
    <div className={`w-full max-w-[1360px] mx-auto h-10 overflow-hidden my-4 md:my-6 ${className || ''}`}
      style={{
        backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(255,255,255,0.25) 1px, transparent 1px), radial-gradient(circle at 10px 20px, rgba(255,255,255,0.25) 1px, transparent 1px), radial-gradient(circle at 10px 30px, rgba(255,255,255,0.25) 1px, transparent 1px)',
        backgroundSize: '20px 40px',
        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    />
  );
};

export default TechnicalFiller;
