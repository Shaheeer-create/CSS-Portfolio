'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Shaheer Portfolio</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
