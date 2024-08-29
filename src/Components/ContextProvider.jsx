import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({children}) => {
  const [direction,setDirection] = useState('h');
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [loading,setLoading] = useState(true);

  return (
    <Context.Provider value={{direction,setDirection,position,setPosition,loading,setLoading}}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider };