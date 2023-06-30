import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Image
        className='absolute'
        src="/hero-section.png"
        width={1926}
        height={1284}
        alt="Picture of the author"
      />
      <div className='flex justify-center gap-20'>
        <div className='w-[400px]'>
          <h1 className='text-[20pt] mb-7'>
            <span className='text-[#464646]'>
              <span className='font-bold'>CEGAH STROKE</span> <br/>
              <span className='font-light'>DAN {""}</span><span className='font-bold'>SERANGAN JANTUNG</span> <br/>
              <span className='font-light'>DENGAN {""}</span>
              <span className='text-[#ff565c] font-bold'>
                LOW LEVEL LASER <br/>
                TECHNOLOGY 
              </span>
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
            src="/image-hero.png"
            width={500}
            height={226}
            alt="Picture of the author"
          />
        </div>
      </div>
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
    </>
  )
}