'use client'

import Link from 'next/link';import React, { FC, useEffect, useState } from 'react';
import { navigation } from '../model/constants';

const Navbar:FC<any> = () => {
  const [isActive, setActive] = useState(false);
  // const { pathname } = usePathname();
  const toggleClass = () => setActive(!isActive);

  useEffect(() => {
    const startHandler = () => setActive(false);
    // router.events.on('routeChangeStart', startHandler);
    // return () => router.events.off('routeChangeStart', startHandler);
  });

  return (
    <nav className='flex items-center justify-between relative text-base'>
      <div className='flex w-[90vw] justify-around '>
        {navigation.map(({
          id,
          title,
          path,
        }) => (
            <a key={id} href={path}  className='inline-flex items-center px-10px text-white text-xl
              uppercase hover:text-gray-400'>{title}</a>
        ))}
      </div>
      <div onClick={toggleClass} className='flex h-100 justify-between'>
        <span />
      </div>
    </nav>
  );
};

export default Navbar;
