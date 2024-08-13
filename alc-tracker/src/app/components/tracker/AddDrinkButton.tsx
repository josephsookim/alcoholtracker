import React, { useState } from 'react';
import { useDrinks } from '@/app/components/tracker/context/DrinkContext';
import { useUserStatus } from '@/app/components/tracker/context/UserContext';

const AddDrinkForm = () => {
  const { addDrink } = useDrinks();
  const { updateUserStatus } = useUserStatus();
  const [alcoholName, setAlcoholName] = useState('');
  const [alcoholType, setAlcoholType] = useState('');
  const [servingAmount, setServingAmount] = useState(0);

  const handleSubmit = () => {
    const drink = {
      alcoholName,
      alcoholType,
      timestamp: new Date().getTime(),
      servingAmount,
    };

    addDrink(drink);
    updateUserStatus(drink);

    setAlcoholName('');
    setAlcoholType('');
    setServingAmount(0);
  };

  return (
    <div>
      <input
        className="text-black"
        type="text"
        value={alcoholName}
        onChange={(e) => setAlcoholName(e.target.value)}
        placeholder="Alcohol Name"
      />
      <input
        className="text-black"
        type="text"
        value={alcoholType}
        onChange={(e) => setAlcoholType(e.target.value)}
        placeholder="Alcohol Type"
      />
      <input
        className="text-black"
        type="number"
        value={servingAmount}
        onChange={(e) => setServingAmount(parseFloat(e.target.value))}
        placeholder="Serving Size (oz)"
      />
      <button onClick={handleSubmit}>Add Drink</button>
    </div>
  );
};

export default AddDrinkForm;
