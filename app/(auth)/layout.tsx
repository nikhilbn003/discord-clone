import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-green-300 h-full flex  items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
