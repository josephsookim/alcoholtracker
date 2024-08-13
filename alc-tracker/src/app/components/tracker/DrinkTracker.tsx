"use client";

import DrinkList from "@/app/components/tracker/DrinkList";
import AddDrinkButton from "@/app/components/tracker/AddDrinkButton";
import { DrinkProvider } from "@/app/components/tracker/context/DrinkContext"
import { UserProvider } from "@/app/components/tracker/context/UserContext"

export default function DrinkTracker() {
    return (
      <div>
        <UserProvider>
          <DrinkProvider>
              <DrinkList/>
              <AddDrinkButton/>
          </DrinkProvider>
        </UserProvider>
      </div>
    );
  }