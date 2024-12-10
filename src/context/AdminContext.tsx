import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextProps {
  isAdmin: boolean;
  toggleAdmin: () => void;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin((prev) => !prev);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
