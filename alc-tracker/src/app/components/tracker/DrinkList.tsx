import React from 'react';
import { useDrinks } from '@/app/components/tracker/context/DrinkContext';
import { useUserStatus } from '@/app/components/tracker/context/UserContext';

const DrinkList = () => {
  const { drinks } = useDrinks();
  const { userStatus } = useUserStatus();

  return (
    <div>
      <h2>Drink List</h2>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>
            {drink.alcoholName} ({drink.alcoholType}) - {drink.servingAmount} servings - Consumed at: {new Date(drink.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
      <div>
        <h3>Current BAC: {userStatus.currentBAC.toFixed(3)}</h3>
        <h3>Estimated Sober Time: {new Date(userStatus.soberTimestamp).toLocaleTimeString()}</h3>
      </div>
    </div>
  );
};

export default DrinkList;