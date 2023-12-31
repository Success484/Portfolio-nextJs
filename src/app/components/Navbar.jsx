'use client';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import MenuOverlay from './MenuOverlay';
import { Link as ScrollLink } from 'react-scroll';
import NavLink from './NavLink';

const NavLinks = [
  {
    title: 'About',
    path: 'about-section',
  },
  {
    title: 'Projects',
    path: 'projects-section',
  },
  {
    title: 'Contact',
    path: 'contact-section',
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <nav className='fixed m-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 ease-in-out duration-300'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 mt-3'>
        <Link href='/'
          className='text-2xl md:text-5xl text-white font-semibold'>
          SUCCESS
        </Link>
        <div className='mobile-menu block md:hidden' ref={menuRef}>
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200'>
              <RxHamburgerMenu className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover-border-white text-slate-200'>
              <AiOutlineClose className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {NavLinks.map((nav) => (
              <li key={nav.title}>
                <ScrollLink
                  to={nav.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <NavLink title={nav.title} />
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
}
