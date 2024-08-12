"use client";

import DrinkList from "@/app/components/tracker/DrinkList";
import AddDrinkButton from "@/app/components/tracker/AddDrinkButton";
import { DrinkProvider } from "@/app/components/tracker/context/DrinkContext"

export default function Home() {
    return (
      <div>
        <DrinkProvider>
            <DrinkList/>
            <AddDrinkButton/>
        </DrinkProvider>
      </div>
    );
  }