import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a Drink object
export interface Drink {
  alcoholName: string;
  alcoholType: string;
  timestamp: number;
  servingAmount: number;
}

// Define the shape of your context data
interface DrinkContextType {
  drinks: Drink[];
  addDrink: (drink: Drink) => void;
  setDrinks: React.Dispatch<React.SetStateAction<Drink[]>>; // Add setDrinks to the context type
}

// Create the context
const DrinkContext = createContext<DrinkContextType | undefined>(undefined);

// Create a provider component
export const DrinkProvider = ({ children }: { children: ReactNode }) => {
  const [drinks, setDrinks] = useState<Drink[]>([]);

  const addDrink = (drink: Drink) => {
    setDrinks([...drinks, drink]);
  };

  return (
    <DrinkContext.Provider value={{ drinks, addDrink, setDrinks }}>
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