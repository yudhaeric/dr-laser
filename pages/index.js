import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const product = [
    {
      "image" : "/product/supreme.png",
      "name" : "DR LASER\nSUPREME",
    },
    {
      "image" : "/product/plus.png",
      "name" : "DR LASER\nHI PLUS",
    },
    {
      "image" : "/product/perfect.png",
      "name" : "DR LASER\nPERFECT 10 PLUS",
    },
    {
      "image" : "/product/traction.png",
      "name" : "DR QYU\nLUMBAR TRACTION\nDEVICE",
    },
  ]
  const thoseWhoHave = ["Yeyen Lidya", "Lulu Kamal", "Melisa Karim", "Okan Kornelius"];
  const mediaLiput = ["/media-liput/medialiput1.png", "/media-liput/medialiput2.png", "/media-liput/medialiput3.png", "/media-liput/medialiput4.png", "/media-liput/medialiput5.png"];
  const location = [
    {
      "address" : "Komplek ruko roxy mas blok D4 No.1, Daerah Khusus Ibukota Jakarta 10150",
      "maps" : "/maps.png"
    },
    {
      "address" : "Komplek ruko roxy mas blok D4 No.1, Daerah Khusus Ibukota Jakarta 10150",
      "maps" : "/maps.png"
    },
    {
      "address" : "Komplek ruko roxy mas blok D4 No.1, Daerah Khusus Ibukota Jakarta 10150",
      "maps" : "/maps.png"
    }
  ]

  return (
    <>
      <Image
        className='absolute z-[-10]'
        src="/hero-section.png"
        width={1926}
        height={1284}
        alt="Background Hero"
      />
      {/* Header */}
      <div className='flex justify-center gap-60'>
        <div className='mt-10'>
          <Image
            src="/logo.png"
            width={220}
            height={20}
            alt="Dr Laser Logo"
          />
        </div>
        <div className='h-[130px] bg-white w-[600px] rounded-b-[40px]'>
          <ul className='flex justify-center align-end gap-20 text-[12px] mt-16'>
            <a>HOME</a>
            <a>PRODUCT</a>
            <a>TESTIMONI</a>
            <a>CONTACT US</a>
          </ul>
        </div>
      </div>
      {/* Hero Section */}
      <div className='flex justify-center gap-20'>
        <div className='w-[400px] mt-16'>
          <h1 className='text-[20pt] mb-7 leading-8'>
            <span className='text-[#464646] font-bold'>
              CEGAH STROKE <br/> <span className='font-light'>DAN {""} </span> SERANGAN JANTUNG <br/>
              <span className='font-light'>DENGAN {""}</span> <span className='text-[#ff565c]'> LOW LEVEL LASER TECHNOLOGY<br/> </span>
            </span> 
          </h1>
          <p className='text-[#4e4e4e] mb-7 text-[10pt]'>
            Low Level Laser membantu mengencerkan darah sehingga mencegah terbentuknya trombus (gumpalan darah), 
            dengan mekanisme menghambat agregasi trombosit, serta dapat mengaktifkan fibrinolisis sehingga membantu 
            menguraikan trombus/gumpalan darah pemicu STROKE dan SERANGAN JANTUNG.
          </p>
          <div className='flex justify-center justify-items-center w-[200px] h-[45px] bg-[#ff565c] rounded-full text-white'>
            <h1 className='mt-2 text-[12pt]'>PESAN SEKARANG</h1>
          </div>
        </div>
        <div>
          <Image
            className='mt-[140px]'
            src="/image-hero.png"
            width={500}
            height={226}
            alt="Picture of the author"
          />
        </div>
      </div>
       {/* Benefit Section */}
      <div className='mt-[60pt]'>
        <div className='flex flex-col items-center justify-center mb-4'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>MANFAAT</h1>
          <Image
              className='mt-5'
              src="/down-arrow.png"
              width={34}
              height={34}
              alt="Icon Arrow"
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Image
              className='absolute'
              src="/bg-benefit.png"
              width={1918}
              height={580}
              alt="Icon Arrow"
          />
          <div className='flex text-[8pt] text-white gap-36 z-10 mt-[70px]'>
            <div className='flex flex-col items-center'>
              <Image
                  className='mb-5'
                  src="/heart.png"
                  width={52}
                  height={38}
                  alt="Icon Heart"
              />
              <p className='w-32 text-center'>Teknologi laser membantu menurunkan kadar gula darah dengan cara merangsang sel tubuh (mitokondria) untuk mengubah gula darah menjadi energi sehingga penderita diabetes yang umumnya lemas dan mengantuk akan lebih bernergi.</p>
            </div>
            <div className='flex flex-col items-center ml-3'>
              <Image
                  className='mb-5'
                  src="/heart.png"
                  width={52}
                  height={38}
                  alt="Icon Heart"
              />
              <p className='text-center w-36'>Teknologi laser merangsang tubuh untuk memperoduksi nitric oxide yang berfungsi melebarkan pembuluh darah dan membuatnya lebih elastis sehingga membantu menurunkan tekanan darah. Nitric oxide juga berfungsi untuk meningkatkan aliran darah ke seluruh tubuh sehingga membantu mencegah dan mengatas impotensi.</p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                  className='mb-5'
                  src="/heart.png"
                  width={52}
                  height={38}
                  alt="Icon Heart"
              />
              <p className='text-center w-36'>Teknologi laser mengaktifkan enzim dalam tubuh yang bertugas untuk mingkatkan pembakaran kolesterol. Kolesterol akan menurun dan mencegah terjadinya plak kolesterol.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sleep Quality Section */}
      <div className='flex'>
        <div className='w-[50%] h-44'>
          <Image
            className='mb-5'
            src="/wakeup.png"
            width={1050}
            height={722}
            alt="Icon Heart"
          />
        </div>
        <div className='w-[50%] h-44 mt-12'>
          <h1 className='font-bold text-[#ff565c] text-2xl'>
            MEMPERBAIKI <br/> KUALITAS TIDUR
          </h1>
          <p className='text-[#464646] mt-8'>
            <span className='font-bold'>Kualitas tidur yang baik</span> adalah salah satu faktor <br/> pendukung terapi. <span className='font-bold'>90% pengguna Dr Laser merasakan <br/> tidur
            yang lebih nyenyak</span>, tidak lagi merasakan <br/> insomnia sehingga merasa segar ketika bangun tidur. <br/> Tidur yang berkualitas
            membuat imunitas tetap terjaga <br/> dan gula darah lebih terkontrol.
          </p>
        </div>
      </div>
      {/* Product Section */}
      <div className='mt-48'>
        <div className='flex flex-col items-center justify-center mb-4'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>DAPATKAN SEKARANG</h1>
        </div>
        <div className='flex text-[12pt] gap-20 mt-[70px] mx-[150px]'>
        {product.map((item, index) => {
          const nameLines = item.name.split('\n');
          return (
            <div key={index}>
              <Image
                className='mb-5'
                src={item.image}
                width={280}
                height={230}
                alt="Product Supreme"
              />
              {nameLines.map((line, lineIndex) => (
                <p key={lineIndex} className='text-center text-[#ff565c] font-bold'>
                  {line}
                </p>
              ))}
            </div>
          );
        })}
        </div>
      </div>
      {/* Those Who Have Section */}
      <div className='mt-10'>
        <div className='flex flex-col items-center justify-center mb-4'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>MEREKA YANG PERNAH</h1>
        </div>
        <div className='flex text-[12pt] text-red gap-20 mt-[30px] ml-[150px] mr-[150px]'>
          {thoseWhoHave.map((item, index) => (
            <>
              <div className='flex flex-col items-center'>
                <Image
                    className='mb-5'
                    src={`/video${index + 1}.png`}
                    width={344}
                    height={196}
                    alt="Review"
                />
                <p className='w-38 text-center text-[#464646] font-bold'>
                  {item} (Artis)
                </p>
              </div>
            </>
          ))}
        </div>
        <div className='flex justify-center mt-14'>
          <Image
            src="/testimoni.png"
            width={960}
            height={545}
            alt="Testimoni"
          />
        </div>
      </div>
      {/* Media Partner */}
      <div className='mt-12'>
        <div className='flex items-center justify-center mb-4'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>MEDIA PARTNER OF</h1>
        </div> 
        <div className='flex justify-center'>
          <Image
            src="/metrotv.png"
            width={300}
            height={75}
            alt="Metro TV"
          />
        </div>
        <div className='flex justify-center text-[12pt] gap-5 mt-[40px] bg-[#ff565c] py-7'>
          <div>
            <Image
              src="/media1.png"
              width={480}
              height={270}
              alt="..."
            />
          </div>
          <div>
            <Image
              src="/media2.png"
              width={480}
              height={270}
              alt="..."
            />
          </div>
        </div>
      </div>
      {/* Media Liput */}
      <div className='flex justify-center items-center mt-[50px] w-[80%] mx-[140px] gap-5'>
        <p className='w-full font-bold'>
          Dr Laser telah diliput <br/>
          oleh berbagai media nasional
        </p>
        <div className='flex'>
          {mediaLiput.map((item) => {
            return (
              <>
                <Image
                  src={item}
                  width={530}
                  height={215}
                  alt="..."
                />
              </>
            );
          })}
        </div>
      </div>
      {/* Find Us */}
      <div className='mt-20'>
        <div className='flex items-center justify-center mb-12'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>TEMUKAN KAMI</h1>
        </div>
        <div className='flex justify-center w-[80%] mx-[130px]'>
          {location.map((item) => {
            return (
              <>
                <div className='flex flex-col items-center'>
                  <Image
                    className='mb-10'
                    src="/shop.png"
                    width={70}
                    height={60}
                    alt="..."
                  />
                  <p className='mb-10 font-bold text-center w-[70%] leading-4'>
                    {item.address}
                  </p>
                  <Image
                    src={item.maps}
                    width={300}
                    height={300}
                    alt="..."
                  />
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}