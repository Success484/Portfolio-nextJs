'use client'
import React from 'react';
import NavLink from './NavLink';
import { Link as ScrollLink } from 'react-scroll';

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

export default function MenuOverlay({ links }) {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {NavLinks.map((link, index) => (
        <li key={index}>
          <ScrollLink
            to={link.path}
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavLink title={link.title} />
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}
