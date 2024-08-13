import React from 'react';
import { useDrinks } from '@/app/components/tracker/context/DrinkContext';

const DrinkList = () => {
  const { drinks } = useDrinks();

  return (
    <div>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>
            {drink.alcoholName} ({drink.alcoholType}) - {drink.servingAmount} servings - Consumed at: {new Date(drink.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinkList;