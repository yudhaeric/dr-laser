import React from 'react'
import Image from 'next/legacy/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ArticlePopup({handleCloseArticle = () => {}}) {

  return (
    <div className='flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50'>
      <div className='w-[340px] bg-white rounded-lg p-2'>
        {/* <div className='flex flex-col items-end mb-2'>
        </div> */}
        <button onClick={() => handleCloseArticle()} className='bg-white rounded-full'>
          <Image
            width={17.53}
            height={17.53}
            src="/close.png"
            alt=''
          />
        </button>
        <Image
          src="/article/article1.png"
          width={340}
          height={640}
          alt=""
        />
      </div>
    </div>
  )
}
