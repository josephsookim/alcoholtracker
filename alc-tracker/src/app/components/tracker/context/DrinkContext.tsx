import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your context data
interface DrinkContextType {
  drinks: number[];
  addDrink: () => void;
}

// Create the context
const DrinkContext = createContext<DrinkContextType | undefined>(undefined);

// Create a provider component
export const DrinkProvider = ({ children }: { children: ReactNode }) => {
  const [drinks, setDrinks] = useState<number[]>([]);

  const addDrink = () => {
    const currentTime = new Date().getTime();
    setDrinks([...drinks, currentTime]);
  };

  return (
    <DrinkContext.Provider value={{ drinks, addDrink }}>
      {children}
    </DrinkContext.Provider>
  );
};

// Create a custom hook to use the context
export const useDrinks = () => {
  const context = useContext(DrinkContext);
  if (!context) {
    throw new Error('useDrinks must be used within a DrinkProvider');
  }
  return context;
};