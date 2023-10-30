'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react'; 
import NavLink from './NavLink';
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import MenuOverlay from './MenuOverlay';

const NavLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className='fixed m-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 ease-in-out duration-300'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 mt-3'>
        <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'>
          LOGO
        </Link>
        <div className='mobile-menu block md:hidden' ref={menuRef}>
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'
            >
              <RxHamburgerMenu className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'
            >
              <AiOutlineClose className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {NavLinks.map((nav) => (
              <li key={nav.title}>
                <NavLink href={nav.path} title={nav.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
}
