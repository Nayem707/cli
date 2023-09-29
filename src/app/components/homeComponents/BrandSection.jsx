import React from 'react';

const Brand = () => {
  return (
    <>
      {/* ====== Brands Section Start */}
      <section className=' border p-5 mx-auto'>
        <div className=' flex  justify-center items-center'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full px-10'>
              <div className='flex flex-wrap items-center justify-center'>
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg'
                />
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg'
                />
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg'
                />
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg'
                />
                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg'
                />

                <SingleImage
                  href='#'
                  Alt='Brand Image'
                  imgSrc='https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        className='mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]'
      >
        <img src={imgSrc} alt={Alt} className='w-full h-10' />
      </a>
    </>
  );
};
