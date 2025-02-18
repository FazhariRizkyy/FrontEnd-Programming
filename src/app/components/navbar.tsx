'use client';

import { useState } from 'react';
import {ChevronDown, UserCircle } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">HotelKu</div>
      
      {/* Navigation Menu */}
      <div className="flex items-center gap-6">
        <Link href="/dashboard" className="text-gray-800 hover:text-blue-500">Dashboard</Link>
        <Link href="/room" className="text-gray-800 hover:text-blue-500">Room</Link>
        <Link href="/user" className="text-gray-800 hover:text-blue-500">User</Link>
        
        {/* Dropdown Menu */}
        <div className="relative">
          <button
            className="flex items-center text-gray-800 hover:text-blue-500"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Transaction <ChevronDown size={18} className="ml-1" />
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white border rounded-md shadow-lg w-40">
              <Link href="/transaction/booking" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Booking</Link>
            </div>
          )}
        </div>
        
        {/* Profile Picture */}
        <UserCircle size={50} className="text-gray-800" />
      </div>
    </nav>
  );
}