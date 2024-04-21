'use client'

import React, { createContext, useState, useEffect } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebarcollapse: () => void;
}

const initialValue: SidebarContextType = {
  isCollapsed: false,
  toggleSidebarcollapse: () => {},
};

const SidebarContext = createContext<SidebarContextType>(initialValue);

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Obtener el estado inicial del localStorage, si existe
  const initialState = localStorage.getItem("sidebarState");
  const [isCollapsed, setCollapse] = useState<boolean>(
    initialState ? JSON.parse(initialState).isCollapsed : false
  );

  const toggleSidebarcollapse = () => {
    setCollapse((prevState) => {
      const newState = !prevState;
      // Guardar el nuevo estado en el localStorage
      localStorage.setItem("sidebarState", JSON.stringify({ isCollapsed: newState }));
      return newState;
    });
  };

  useEffect(() => {
    // Actualizar el localStorage cada vez que el estado cambie
    localStorage.setItem("sidebarState", JSON.stringify({ isCollapsed }));
  }, [isCollapsed]);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebarcollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
