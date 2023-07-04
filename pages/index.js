import Head from 'next/head'
import Image from 'next/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const ArrowLeft = (props) => (
    <button
      {...props}
      style={{ zIndex: 2 }}
    >
      <Image
        className='absolute mobile:left-20 lg:left-0 lg:-top-0'
        src="/arrow-red-left-article.png"
        width={props.width || 40}
        height={props.height || 40}
        alt=''
      />
    </button>
  );

  const ArrowRight = (props) => (
    <button
      {...props}
      style={{ zIndex: 1 }}
    >
      <Image
        className='absolute mobile:right-20 lg:right-0 lg:-top-0'
        src="/arrow-red-right-article.png"
        width={props.width || 40}
        height={props.height || 40}
        alt=''
      />
    </button>
  );

  let productMobileSettings = {
    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <ArrowLeft width={40} height={40} />,
    nextArrow: <ArrowRight width={40} height={40} />
  };

  let productDesktopSettings = {
    arrow:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <ArrowLeft width={40} height={40} />,
    nextArrow: <ArrowRight width={40} height={40} />
  };

  const product = [
    {
      "image" : "/product/supreme.png",
      "name" : "DR LASER\nSUPREME\n ㅤㅤㅤ",
      "desc" : "Dr Laser Supreme 16 Titik Mata Laser - Terapi Melancarkan Aliran Darah Untuk Membantu Mencegah Diabetes Stroke Hipertensi Kolesterol.",
      "disc" : "Rp 8.880.000",
      "price" : "Rp 6.880.000",
    },
    {
      "image" : "/product/plus.png",
      "name" : "DR LASER\nHI PLUS\n ㅤㅤㅤ",
      "desc" : "Dr Laser Hi Plus 7 Titik Mata Laser - Terapi Melancarkan Aliran Darah Untuk Membantu Mencegah Diabetes Stroke Hipertensi Kolesterol.",
      "disc" : "Rp 4.880.000",
      "price" : "Rp 3.880.000",
    },
    {
      "image" : "/product/perfect.png",
      "name" : "DR LASER\nPERFECT 10 PLUS\n ㅤㅤㅤ",
      "desc" : "Dr Laser Perfect 10 Plus 10 Titik Mata Laser - Terapi Melancarkan Aliran Darah Untuk Membantu Mencegah Diabetes Stroke Hipertensi Kolesterol.",
      "disc" : "Rp 6.880.000",
      "price" : "Rp 5.980.000",
    },
    {
      "image" : "/product/aculaser.png",
      "name" : "ACULASER\nULTIMATE\n ㅤㅤㅤ",
      "desc" : "Aculaser Ultimate 14 Titik Mata Laser + NMES Therapy Device – Melancarkan Aliran Darah Untuk Membantu Pemulihan Stroke Diabetes Kolesterol Hipertensi.",
      "disc" : "Rp 7.880.000",
      "price" : "Rp 7.880.000",
    },
    {
      "image" : "/product/traction.png",
      "name" : "DR QYU\nLUMBAR TRACTION\nDEVICE",
      "desc" : "Dr Qyu Lumbar Traction Device - Membantu Mengatasi Nyeri Pinggang Saraf Terjepit.",
      "disc" : "Rp 4.980.000",
      "price" : "Rp 2.999.000",
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
  
  const article = [
    {
      "image" : "/article/article.png",
      "title" : "Jangan Anggap Remeh! inilah Gejala Stroke Ringan"
    },
    {
      "image" : "/article/article.png",
      "title" : "Jangan Anggap Remeh! inilah Gejala Stroke Ringan"
    },
    {
      "image" : "/article/article.png",
      "title" : "Jangan Anggap Remeh! inilah Gejala Stroke Ringan"
    },
    {
      "image" : "/article/article.png",
      "title" : "Jangan Anggap Remeh! inilah Gejala Stroke Ringan"
    },
  ];
  
  const theySaid = [
    {
      "say" : "Saya tidak pakai, tpi saya pakaikan ke orang tua dan mertua saya, sejauh ini alatnya membantu, tensi mereka stabil, Pelayanan baik, di anter ke rumah dan di ajari cara pakainya.",
      "name" : "Tri May Shandy"
    },
    {
      "say" : "Saya tidak pakai, tpi saya pakaikan ke orang tua dan mertua saya, sejauh ini alatnya membantu, tensi mereka stabil, Pelayanan baik, di anter ke rumah dan di ajari cara pakainya.",
      "name" : "Tri May Shandy"
    },
    {
      "say" : "Saya tidak pakai, tpi saya pakaikan ke orang tua dan mertua saya, sejauh ini alatnya membantu, tensi mereka stabil, Pelayanan baik, di anter ke rumah dan di ajari cara pakainya.",
      "name" : "Tri May Shandy"
    },
    {
      "say" : "Saya tidak pakai, tpi saya pakaikan ke orang tua dan mertua saya, sejauh ini alatnya membantu, tensi mereka stabil, Pelayanan baik, di anter ke rumah dan di ajari cara pakainya.",
      "name" : "Tri May Shandy"
    },
  ];

  return (
    <div className='overflow-hidden'>
      {/* Header Mobile */}
      <div className='lg:hidden'>
        <div className='flex justify-between w-full p-6'>
          <Image
            className='lg:hidden'
            src="/logo.png"
            width={190}
            height={47}
            alt="Dr Laser Logo"
          />
          <button className='lg:hidden'>
            <Image
              src="/hamburger.png"
              width={24}
              height={24}
              alt="Icon"
            />
          </button>
        </div>
      </div>
      {/* Header Desktop */}
      <div className='mobile:hidden lg:inline'>
        <Image
          className='mobile:hidden lg:inline absolute z-[-10]'
          src="/bg-hero.png"
          width={1926}
          height={1284}
          alt=""
        />
        <div className='flex items-center justify-center gap-52'>
          <Image
            src="/logo.png"
            width={220}
            height={20}
            alt="Dr Laser Logo"
          />
          <div className='h-[130px] bg-white w-[600px] rounded-b-[40px]'>
            <ul className='flex justify-center align-end gap-20 text-[12px] mt-16'>
              <a>HOME</a>
              <a>PRODUCT</a>
              <a>TESTIMONI</a>
              <a>CONTACT US</a>
            </ul>
          </div>
        </div>
      </div>
      {/* Hero Section Mobile */}
      <div className='lg:hidden mobile:visible flex flex-col items-center justify-center gap-8 px-6 mt-4'>
        <h1 className='text-[20pt] leading-8'>
          <span className='text-[#464646] font-bold'>
            CEGAH STROKE <br/> <span className='font-light'>DAN {""} </span> SERANGAN JANTUNG <br/>
            <span className='font-light'>DENGAN {""}</span> <span className='text-[#ff565c]'> LOW LEVEL LASER TECHNOLOGY<br/> </span>
          </span> 
        </h1>
        <Image
          src="/hero.png"
          width={350}
          height={152}
          alt=""
        />
        <p className='text-[#4e4e4e] text-[10pt] text-justify'>
          Low Level Laser membantu mengencerkan darah sehingga mencegah terbentuknya trombus (gumpalan darah), 
          dengan mekanisme menghambat agregasi trombosit, serta dapat mengaktifkan fibrinolisis sehingga membantu 
          menguraikan trombus/gumpalan darah pemicu STROKE dan SERANGAN JANTUNG.
        </p>
        <div className='flex justify-center justify-items-center w-[200px] h-[45px] bg-[#ff565c] rounded-full text-white'>
          <h1 className='mt-2 text-[12pt]'>PESAN SEKARANG</h1>
        </div>
      </div>
      {/* Hero Section Desktop */}
      <div className='flex justify-center gap-20'>
        <div className='mobile:hidden lg:inline w-[400px] mt-16'>
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
        <div className='mobile:hidden lg:inline'>
          <Image
            className='mt-[140px]'
            src="/hero.png"
            width={500}
            height={217}
            alt=""
          />
        </div>
      </div>
      {/* Benefit Section Mobile */}
      <div className='lg:hidden mt-[30pt]'>
        <div className='flex flex-col items-center justify-center bg-[#ff565c] py-8 px-6'>
          <h1 className='text-[#ffffff] font-bold text-[20pt] mb-10'>MANFAAT</h1>
          <div className='flex flex-col text-[12pt] text-white z-10'>
            <div className='flex flex-col items-center'>
              <Image
                  className='mb-5'
                  src="/heart.png"
                  width={52}
                  height={38}
                  alt="Icon Heart"
              />
              <p className='text-justify text-center'>Teknologi laser membantu menurunkan kadar gula darah dengan cara merangsang sel tubuh (mitokondria) untuk mengubah gula darah menjadi energi sehingga penderita diabetes yang umumnya lemas dan mengantuk akan lebih bernergi.</p>
            </div>
            <div className='flex flex-col items-center mt-7'>
              <Image
                  className='mb-5'
                  src="/heart.png"
                  width={52}
                  height={38}
                  alt="Icon Heart"
              />
              <p className='text-justify text-center'>Teknologi laser merangsang tubuh untuk memperoduksi nitric oxide yang berfungsi melebarkan pembuluh darah dan membuatnya lebih elastis sehingga membantu menurunkan tekanan darah. Nitric oxide juga berfungsi untuk meningkatkan aliran darah ke seluruh tubuh sehingga membantu mencegah dan mengatas impotensi.</p>
            </div>
            <div className='flex flex-col items-center mt-7'>
              <Image
                  className='mb-5'
                  src="/heart.png"
                  width={52}
                  height={38}
                  alt="Icon Heart"
              />
              <p className='text-justify text-center'>Teknologi laser mengaktifkan enzim dalam tubuh yang bertugas untuk mingkatkan pembakaran kolesterol. Kolesterol akan menurun dan mencegah terjadinya plak kolesterol.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Benefit Section Desktop */}
      <div className='mobile:hidden lg:inline'>
        <div className='flex flex-col items-center justify-center mb-4 mt-20'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>MANFAAT</h1>
          <Image
              className='my-10'
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
          <div className='flex text-[8pt] text-white gap-36 z-10 mt-[30px]'>
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
      <div className='w-full bg-[#f4f4f4]'>
        {/* Sleep Quality Section Mobile */}
        <div className='lg:hidden flex flex-col pt-10 items-center'>
          <h1 className='font-bold text-[#ff565c] text-xl text-center'>
            MEMPERBAIKI <br/> KUALITAS TIDUR
          </h1>
          <Image
            className='mt-5'
            src="/wakeup.png"
            width={1050}
            height={722}
            alt="Icon Heart"
          />
          <p className='text-[#464646] text-justify mt-8 px-6'>
            <span className='font-bold'>Kualitas tidur yang baik</span> adalah salah satu faktor pendukung terapi. <span className='font-bold'>90% pengguna Dr Laser merasakan tidur
            yang lebih nyenyak</span>, tidak lagi merasakan insomnia sehingga merasa segar ketika bangun tidur. Tidur yang berkualitas
            membuat imunitas tetap terjaga dan gula darah lebih terkontrol.
          </p>
        </div>
        {/* Sleep Quality Section Desktop */}
        <div className='flex'>
          <div className='mobile:hidden lg:inline w-[50%] h-44'>
            <Image
              className='mt-10'
              src="/wakeup.png"
              width={1050}
              height={722}
              alt="Icon Heart"
            />
          </div>
          <div className='mobile:hidden lg:inline w-[50%] h-44 mt-24'>
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
        {/* Product Section Mobile */}
        <div className='lg:hidden mt-12'>
          <div className='flex flex-col items-center justify-center mb-4'>
            <h1 className='text-[#ff565c] font-bold text-[20pt]'>DAPATKAN SEKARANG</h1>
          </div>
          <Slider {...productMobileSettings}>
            {product.map((item, index) => {
              const nameLines = item.name.split('\n');
              return (
                <div key={index} className='mt-3 mb-10'>
                  <div className='flex flex-col items-center bg-white rounded-[25px] w-[80%] mx-10'>
                    <Image
                      className='pt-10 mb-5'
                      src={item.image}
                      width={184}
                      height={150}
                      alt=""
                    />
                    {nameLines.map((line, lineIndex) => (
                      <>
                        <p key={lineIndex} className='flex justify-center text-[#ff565c] font-bold justify-center text-xl'>
                          {line}
                        </p>
                      </>
                    ))}
                    <p className='text-[#464646] text-center text-[10pt] w-48 h-28 mt-4'>
                      {item.desc}
                    </p>
                    <div className='flex flex-col items-center text-[10pt] mt-8 mb-5 w-[80%]'>
                      <p className='text-[#464646] font-bold line-through text-[14pt]'>
                        {item.disc}
                      </p>
                      <p className='text-[#ff565c] font-bold text-[20pt]'>
                        {item.price}
                      </p>
                      <div className='flex bg-[#ff565c] py-3 px-8 rounded-2xl gap-3 mt-6'>
                        <p className='font-bold text-white text-[16px]'>Beli Sekarang</p>
                        <Image
                          src="/shopping-bag.png"
                          width={18}
                          height={21}
                          alt="Product Supreme"
                        />
                      </div>
                  </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        {/* Product Section Desktop */}
        <div className='mobile:hidden lg:inline mt-60'>
          <div className='flex flex-col items-center justify-center mb-4 mt-64'>
            <h1 className='text-[#ff565c] font-bold text-[20pt]'>DAPATKAN SEKARANG</h1>
          </div>
          <div className='mx-[150px] w-[80%]'>
            <Slider {...productDesktopSettings}>
              {product.map((item, index) => {
                const nameLines = item.name.split('\n');
                return (
                  <div key={index} className='mt-3 mb-10'>
                    <div className='flex mx-3'>
                      <div className='flex flex-col items-center bg-white rounded-[25px] w-full'>
                        <Image
                          className='pt-10 mb-5'
                          src={item.image}
                          width={184}
                          height={150}
                          alt=""
                        />
                        {nameLines.map((line, lineIndex) => (
                          <>
                            <p key={lineIndex} className='flex justify-center text-[#ff565c] font-bold justify-center text-xl'>
                              {line}
                            </p>
                          </>
                        ))}
                        <p className='text-[#464646] text-center text-[10pt] w-48 h-28 mt-4'>
                          {item.desc}
                        </p>
                        <div className='flex flex-col items-center text-[10pt] mt-8 mb-5 w-[80%]'>
                          <p className='text-[#464646] font-bold line-through text-[14pt]'>
                            {item.disc}
                          </p>
                          <p className='text-[#ff565c] font-bold text-[20pt]'>
                            {item.price}
                          </p>
                          <div className='flex bg-[#ff565c] py-3 px-8 rounded-2xl gap-3 mt-6'>
                            <p className='font-bold text-white text-[16px]'>Beli Sekarang</p>
                            <Image
                              src="/shopping-bag.png"
                              width={18}
                              height={21}
                              alt="Product Supreme"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* Those Who Have Section Desktop */}
      <div className='mobile:hidden lg:inline'>
        <div className='flex flex-col items-center justify-center mb-4 mt-10'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>MEREKA YANG PERNAH</h1>
        </div>
        <div className='flex text-[12pt] text-red gap-12 mt-[30px] ml-[200px] mr-[200px]'>
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
      <div>
        <div className='flex items-center justify-center mb-4 mt-12'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>MEDIA PARTNER OF</h1>
        </div> 
        <div className='flex justify-center'>
          <Image
            className='mobile:w-[200px] mobile:h-[50px]'
            src="/metrotv.png"
            width={300}
            height={75}
            alt="Metro TV"
          />
        </div>
        <div className='flex justify-center text-[12pt] gap-5 py-7 lg:mt-[40px] lg:bg-[#ff565c] mobile:flex-wrap mobile:px-10'>
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
      <div>
        <div className='px-10 lg:flex lg:items-center lg:w-[60%] lg:mx-[145px] lg:px-16 lg:mt-5'>
          <p className='w-full font-bold text-[#464646] mb-10 lg:mb-0'>
            Dr Laser telah diliput <br/>
            oleh berbagai media nasional
          </p>
          <div className='lg:flex grid grid-cols-2 gap-7 lg:gap-0'>
            {mediaLiput.map((item) => {
              return (
                <>
                  <Image
                    className='lg:w-[230px] lg:h-[35px]'
                    src={item}
                    width={1000}
                    height={100}
                    alt="..."
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* Find Us */}
      <div className='mobile:hidden lg:inline'>
        <div className='flex items-center justify-center mb-12 mt-16'>
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
                    alt="Shop Icon"
                  />
                  <p className='mb-10 font-bold text-center w-[70%] leading-4 text-[#464646]'>
                    {item.address}
                  </p>
                  <Image
                    src={item.maps}
                    width={300}
                    height={300}
                    alt="Maps"
                  />
                </div>
              </>
            )
          })}
        </div>
      </div>
      {/* Article */}
      <div className='mobile:hidden lg:inline'>
        <div className='flex flex-col items-center justify-center bg-[#464646] w-full py-7 mt-20'>
          <div className='flex justify-between w-[80%]'>
            <h1 className='text-lg font-bold text-white'>Artikel Menarik Tentang Kesehatan</h1>
            <div className='flex gap-2'>
              <Image
                src="/arrow-left-article.png"
                width={28}
                height={28}
                alt="Arrow Left Icon"
              />
              <Image
                src="/arrow-right-article.png"
                width={28}
                height={28}
                alt="Arrow Right Icon"
              />
            </div>
          </div>
          <div className='flex items-center justify-center w-[80%] mt-10 gap-5'>
            {article.map((item) => {
              return (
                <>
                  <div className='flex flex-col justify-center'>
                    <Image
                      src={item.image}
                      width={235}
                      height={142}
                      alt="Arrow Right Icon"
                    />
                    <div className='flex items-center mt-5'>
                      <div className='w-[75%] text-white leading-5'>
                        {item.title}
                      </div>
                      <Image
                        className='ml-6'
                        src="/arrow-red-right-article.png"
                        width={24}
                        height={24}
                        alt="Arrow Right Icon"
                      />
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      {/* They Said */}
      <div className='mobile:hidden lg:inline'>
        <div className='flex flex-col items-center justify-center mt-14'>
          <div className='flex justify-between w-[80%]'>
            <h1 className='text-lg font-bold text-[#464646]'>Apa Kata Mereka Tentang DR LASER?</h1>
            <div className='flex gap-2'>
              <Image
                src="/arrow-left-said.png"
                width={28}
                height={28}
                alt="Arrow Left Icon"
              />
              <Image
                src="/arrow-right-said.png"
                width={28}
                height={28}
                alt="Arrow Right Icon"
              />
            </div>
          </div>
          <div className='flex justify-center mt-10 w-[85%] gap-12'>
            {theySaid.map((item) => {
              return (
                <>
                  <div className='w-[20%]'>
                    <Image
                      src="/star.png"
                      width={105}
                      height={19}
                      alt="Rating"
                    />
                    <p className='text-[#464646] leading-5 mt-4'>
                      {item.say}
                    </p>
                    <p className='text-[#ff565c] text-lg font-bold mt-4'>
                      {item.name}
                    </p>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      {/* Copy Right */}
      <div className='mobile:hidden lg:inline'>
        <div className='flex justify-center mt-20 mb-5'>
          <p>&copy; 2023 DR.Laser. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}