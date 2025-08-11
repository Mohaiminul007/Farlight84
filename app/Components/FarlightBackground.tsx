import Image from 'next/image';
import React from 'react';

const FarlightBackground = () => {
  return (
    <div className='relative h-screen w-screen overflow-x-hidden bg-[]'>
      {/* Top Image - 30% height */}
      <div className='absolute top-0 left-0 w-full h-[30%]'>
        <Image
          src="/back_gun.png"
          layout="fill"
          objectFit="contain"
          alt="Top gun background"
        />
      </div>

      {/* Middle Image - Enlarged to 40% height */}
      <div className='absolute top-[20%] left-0 w-full h-[60%]'>
        <Image
          src="/back.png"
          layout="fill"
          objectFit="cover"
          alt="Middle background"
          className='scale-105 transform' // Slight scale-up effect
        />
      </div>

      {/* Bottom Image - 30% height */}
      <div className='absolute top-[70%] left-0 w-full h-[30%]'>
        <Image
          src="/back_gun.png"
          layout="fill"
          objectFit="contain"
          alt="Bottom gun background"
        />
      </div>
    </div>
  );
};

export default FarlightBackground;