import DrinkTracker from "@/app/components/tracker/DrinkTracker";
import {useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <DrinkTracker/>
    </div>
  );
}
