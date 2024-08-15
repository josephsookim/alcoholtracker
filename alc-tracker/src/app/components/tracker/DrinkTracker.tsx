"use client";

import DrinkList from "@/app/components/tracker/DrinkList";
import UserStatus from "@/app/components/tracker/UserStatus";
import AddDrinkButton from "@/app/components/tracker/AddDrinkButton"; 
import { DrinkProvider } from "@/app/components/tracker/context/DrinkContext";
import { UserProvider } from "@/app/components/tracker/context/UserContext";
import React from 'react';

export default function DrinkTracker() {
  return (
    <div 
      className="w-full max-h-lg mx-auto p-7 text-white rounded-lg border-2 border-[#081630]"
      style={{
        backgroundImage: `url('/tracker-bg.svg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <UserProvider>
        <DrinkProvider>
          {/* Flex container with DrinkList taking 100% of the width */}
          <div className="flex">
            <div className="flex-1 border-2 border-white p-6 rounded-lg min-h-[50vh] max-h-[50vh] overflow-y-auto">
              <DrinkList />
            </div>
          </div>

          {/* Separate row for the providers */}
          <div className="flex">
            <div className="flex-[7] p-2 rounded-lg">
              <UserStatus />
            </div>

            <div className="flex-[3] p-2 rounded-lg ml-4">
              {/* Add Drink Button */}
              <AddDrinkButton />
            </div>
          </div>
        </DrinkProvider>
      </UserProvider>
    </div>
  );
}