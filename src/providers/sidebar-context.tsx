import React, { createContext, useState } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebarcollapse: () => void;
}

const initialValue: SidebarContextType = { isCollapsed: false, toggleSidebarcollapse: () => {} };

const SidebarContext = createContext<SidebarContextType>(initialValue);

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setCollapse] = useState<boolean>(false);

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
