import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Alc-Tracker</h1>
      <nav>
        <ul>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}
