import React from 'react'
import Image from 'next/legacy/image'

export default function HeaderDesktop({handleCloseHeader = () => {}}) {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50'>
      <ul className='flex flex-col gap-7 items-end text-[16px] font-bold text-white absolute bg-[#ff565c] w-[60%] h-full right-0 pt-5 pr-5 animate-headerIn'>
        <li>
          <button onClick={() => handleCloseHeader()}>
            <Image
              src="/close-header.png"
              width={25}
              height={25}
              alt=''
            />
          </button>
        </li>
        <li>
          <a href='#' className='hover:text-[#ff565c]'>HOME</a>
        </li>
        <li>
          <a href='#product' className='hover:text-[#ff565c]'>PRODUK</a>
        </li>
        <li>
          <a href='#testimoni' className='hover:text-[#ff565c]'>TESTIMONI</a>
        </li>
        <li>
          <a href='#find' className='hover:text-[#ff565c]'>TEMUKAN KAMI</a>
        </li>
      </ul>
    </div>
  )
}
