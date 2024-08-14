import React, { useState } from 'react';
import { useDrinks } from '@/app/components/tracker/context/DrinkContext';
import { useUserStatus } from '@/app/components/tracker/context/UserContext';

interface AddDrinkFormProps {
  onClose: () => void; // Define the type of the onClose prop as a function that returns void
}

const AddDrinkForm: React.FC<AddDrinkFormProps> = ({ onClose }) => {
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
    onClose(); // Close the modal on submit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="p-6 rounded-lg shadow-md text-white w-full max-w-md relative"
        style={{ backgroundColor: '#081630' }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">Add a Drink</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-1">Alcohol Name</label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            type="text"
            value={alcoholName}
            onChange={(e) => setAlcoholName(e.target.value)}
            placeholder="e.g., Budweiser, Merlot"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-1">Alcohol Type</label>
          <select
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            value={alcoholType}
            onChange={(e) => setAlcoholType(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Beer">Beer</option>
            <option value="Wine">Wine</option>
            <option value="Champagne">Champagne</option>
            <option value="Soju">Soju</option>
            <option value="Hard Liquor">Hard Liquor</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-1">Standard Servings</label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            type="number"
            value={servingAmount}
            onChange={(e) => setServingAmount(parseFloat(e.target.value))}
            placeholder="e.g., 12"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-white"
          style={{ backgroundColor: '#081630' }}
        >
          Add Drink
        </button>
      </div>
    </div>
  );
};

export default AddDrinkForm;