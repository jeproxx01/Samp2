import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <span className="text-xl font-bold">FuelFlow</span>
      <div className="flex space-x-4 justify-center flex-grow">
        <Link href="#" className="hover:underline">
          Our Fuels
        </Link>
        <Link href="#" className="hover:underline">
          Service
        </Link>
        <Link href="#" className="hover:underline">
          News & Promos
        </Link>
        <Link href="#" className="hover:underline">
          About Us
        </Link>
        <Link href="#" className="hover:underline">
          Contact Us
        </Link>
      </div>
      <Link href="/auth/login" className="font-bold hover:underline">
        Login
      </Link>
    </nav>
  );
}
