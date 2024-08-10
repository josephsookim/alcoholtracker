import Hero from "@/app/components/layout/Hero";
import Information from "@/app/components/layout/Information";
import CTA from "@/app/components/layout/CTA";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero/>
      <Information/>
      <CTA/>
    </div>
  );
}
