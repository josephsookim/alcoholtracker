import DrinkTracker from "@/app/components/tracker/DrinkTracker";
import {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-10">
      <h4 className="text-white p-2">How much have you had to sip today?</h4>
      <DrinkTracker/>
    </div>
  );
}
