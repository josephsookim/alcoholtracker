import React from 'react';
import { useDrinks } from '@/app/components/tracker/context/DrinkContext';
import { useUserStatus } from '@/app/components/tracker/context/UserContext';

const DrinkList = () => {
  const { drinks, setDrinks } = useDrinks(); // Include setDrinks to update the list
  const { updateUserStatusAfterRemoval } = useUserStatus(); // Use updateUserStatusAfterRemoval to update BAC and sober time

  const handleRemoveDrink = (index: number) => {
    const removedDrink = drinks[index];

    // Remove the drink from the list
    const newDrinks = drinks.filter((_, i) => i !== index);
    setDrinks(newDrinks);

    // Update the BAC and sober time
    updateUserStatusAfterRemoval(newDrinks);
  };

  return (
    <div className="max-h-96 overflow-y-auto p-4">
      {drinks.map((drink, index) => (
        <div
          key={index}
          className="flex justify-between items-center border border-gray-700 rounded-lg mb-4 p-4 bg-[#081630]"
        >
          <div className="flex items-center">
            {/* Drink Icon */}
            <img
              src={drink.alcoholType === 'Beer' ? '/beer-icon.svg' : '/liquor-icon.svg'}
              alt={drink.alcoholType}
              className="w-12 h-12 mr-4"
            />
            <div className="text-white">
              <div className="font-semibold">{drink.alcoholName}</div>
              <div className="text-gray-400 text-sm">
                ABV: {(() => {
                  switch (drink.alcoholType) {
                    case 'Beer':
                      return '3-6%';
                    case 'Wine':
                      return '12-15%';
                    case 'Champagne':
                      return '12-14%';
                    case 'Soju':
                      return '16-25%';
                    case 'Hard Liquor':
                      return '30-50%';
                    default:
                      return 'Unknown';
                  }
                })()}
              </div>
              <div className="text-gray-400 text-sm">
                Serving: {drink.servingAmount} {(() => {
                  switch (drink.alcoholType) {
                    case 'Beer':
                      return `standard servings (12 oz per serving)`;
                    case 'Wine':
                      return `glasses (5 oz per serving)`;
                    case 'Champagne':
                      return `flutes (4 oz per serving)`;
                    case 'Soju':
                      return `shots (1.5 oz per serving)`;
                    case 'Hard Liquor':
                      return `shots (1.5 oz per serving)`;
                    default:
                      return `servings (unknown oz per serving)`;
                  }
                })()}
              </div>
            </div>
          </div>
          <div className="text-white">
            <div>{new Date(drink.timestamp).toLocaleDateString()}</div>
            <div>{new Date(drink.timestamp).toLocaleTimeString()}</div>
          </div>
          <button
            className="text-white hover:text-red-500 focus:outline-none"
            onClick={() => handleRemoveDrink(index)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default DrinkList;