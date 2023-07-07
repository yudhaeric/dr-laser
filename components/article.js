import React from 'react'
import Image from 'next/legacy/image'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ArticlePopup({handleCloseArticle = () => {}}) {

  return (
    <div className='flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50'>
      <div className='bg-white rounded-lg p-2'>
        <button onClick={() => handleCloseArticle()} className='absolute z-10 right-[10%] py-2 lg:right-[40%]'>
          <Image
            width={24}
            height={24}
            src="/close.png"
            alt=''
          />
        </button>
        <Image
          src="/article/article1.png"
          width={300}
          height={564}
          alt=""
        />
      </div>
    </div>
  )
}
