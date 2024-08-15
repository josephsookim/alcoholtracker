import React from 'react';
import { useDrinks } from '@/app/components/tracker/context/DrinkContext';
import { useUserStatus } from '@/app/components/tracker/context/UserContext';

const DrinkList = () => {
  const { drinks, setDrinks } = useDrinks();
  const { updateUserStatusAfterRemoval } = useUserStatus();

  const handleRemoveDrink = (index: number) => {
    const removedDrink = drinks[index];
    const newDrinks = drinks.filter((_, i) => i !== index);
    setDrinks(newDrinks);
    updateUserStatusAfterRemoval(newDrinks);
  };

  return (
    <div className="max-h-96 overflow-auto p-4">
      {drinks.map((drink, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-700 rounded-lg mb-4 p-4 bg-[#081630] space-y-2 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex flex-col sm:flex-row w-full sm:w-auto">
            {/* Drink Icon */}
            <img
              src={(() => {
                switch (drink.alcoholType) {
                  case 'Beer':
                    return '/drinks/beer-icon.svg';
                  case 'Wine':
                    return '/drinks/wine-icon.svg';
                  case 'Champagne':
                    return '/drinks/champagne-icon.svg';
                  case 'Soju':
                    return '/drinks/soju-icon.svg';
                  case 'Hard Liquor':
                    return '/drinks/hard-liquor-icon.svg';
                  default:
                    return '/drinks/hard-liquor-icon.svg';
                }
              })()}
              alt={drink.alcoholType}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <div className="text-white flex-1 mt-2 sm:mt-0 sm:ml-4">
              <div className="font-semibold">{drink.alcoholName}</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
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
              <div className="text-gray-400 text-xs sm:text-sm mt-1">
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
          <div className="text-white text-xs sm:text-sm mt-2 sm:mt-0">
            <div>{new Date(drink.timestamp).toLocaleDateString()}</div>
            <div>{new Date(drink.timestamp).toLocaleTimeString()}</div>
          </div>
          <button
            className="text-white hover:text-red-500 focus:outline-none mt-2 sm:mt-0"
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
