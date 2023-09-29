import Link from 'next/link';
import React from 'react';

const NavbStyle = () => {
  return (
    <nav>
      <Link href='/home'>Home</Link>
      <Link href='/home/subpage'>subpage</Link>
    </nav>
  );
};

export default NavbStyle;
