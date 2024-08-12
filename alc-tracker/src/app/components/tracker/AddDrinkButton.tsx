import React from 'react';
import { useDrinks } from '@/app/components/tracker/context/DrinkContext';

const AddDrinkButton = () => {
  const { addDrink } = useDrinks();

  return <button onClick={addDrink}>Add Drink</button>;
};

export default AddDrinkButton;