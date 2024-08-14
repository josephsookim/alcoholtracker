import React, { useState } from 'react';
import AddDrinkForm from '@/app/components/tracker/AddDrinkForm'; // Import the AddDrinkForm component

const AddDrinkButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Button to open the modal */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-transparent focus:outline-none"
        >
          <img
            src="/add-button.svg"
            alt="Add Drink"
            className="p-4"
            style={{ minWidth: '5vh', minHeight: '5vh' }}
          />
        </button>
      </div>

      {/* Modal opens only when isModalOpen is true */}
      {isModalOpen && (
        <AddDrinkForm onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default AddDrinkButton;