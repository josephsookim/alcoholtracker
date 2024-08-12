import React from 'react';
import { useDrinks } from '@/app/components/tracker/context/DrinkContext';

const DrinkList = () => {
  const { drinks } = useDrinks();

  return (
    <ul>
      {drinks.map((drinkTime, index) => (
        <li key={index}>Drink added at {new Date(drinkTime).toLocaleTimeString()}</li>
      ))}
    </ul>
  );
};

export default DrinkList;