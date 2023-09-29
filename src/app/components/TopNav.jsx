import Link from 'next/link';
import React from 'react';

const TopNav = () => {
  return (
    <div className='header top-0 bg-white shadow-md hidden sm:block md:flex items-center justify-between px-5 '>
      <div className='nav font-semibold text-lg'>
        <ul className='flex items-center gap-3 p-1'>
          <li className=''>
            <a href='' className=' flex gap-1 text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4 '
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                />
              </svg>
              +880 1777941513
            </a>
          </li>
          <li className=''>
            <a href='' className='flex gap-1 text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                />
              </svg>
              inaeem707@gmail.com
            </a>
          </li>
          <div className='flex items-center  rounded-full px-5'>
            <p className=' border rounded-full px-5 text-black'>
              25% off Lorem ipsum dolor{' '}
              <a
                href='#'
                className='px-2 btn  bg-red-600 rounded-full text-gray-100'
              >
                New
              </a>
            </p>
          </div>
        </ul>
      </div>

      <div className=' border flex justify-center align-baseline bg-slate-200 rounded-full p-1 '>
        <ul className='flex text-center divide-x gap-2 divide-blue-800 px-5'>
          <li>
            <a className='' href='https://ecommerc-490-admin.netlify.app'>
              Admin
            </a>
          </li>
          <li>
            <Link className='p-2' href='/login'>
              Login
            </Link>
          </li>
          <li>
            <Link className='p-2' href='/register'>
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
