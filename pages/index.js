import Head from 'next/head'
import Image from 'next/legacy/image'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const ArrowLeft = (props) => (
    <button
      {...props}
      style={{ zIndex: 2 }}
    >
      <div className='absolute lg:left-0 lg:-top-0 mobile:w-full mobile:left-14 mobile:bg-white mobile:rounded-full'>
        <Image
          src="/arrow-red-left-article.png"
          width={props.width || 40}
          height={props.height || 40}
          alt=''
        />
      </div>
    </button>
  );

  const ArrowRight = (props) => (
    <button
      {...props}
      style={{ zIndex: 1 }}
    >
      <div className='absolute lg:right-0 lg:-top-0 mobile:w-full mobile:right-12 mobile:bg-white mobile:rounded-full'>
        <Image
          src="/arrow-red-right-article.png"
          width={props.width || 40}
          height={props.height || 40}
          alt=''
        />
      </div>
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
    prevArrow: <ArrowLeft width={50} height={50} />,
    nextArrow: <ArrowRight width={50} height={50} />
  };

  let productDesktopSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <ArrowLeft width={40} height={40} />,
    nextArrow: <ArrowRight width={40} height={40} />
  };

  let testimoniDesktopSettings = {
    arrow:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: null,
    nextArrow: null
  };

  const NextArticle = ({ onClick }) => (
    <button className="custom-next-arrow absolute -top-[22%] right-[0%]" onClick={onClick}>
      <Image
        src="/arrow-right-article.png"
        width={26}
        height={26}
        alt=""
      />
    </button>
  );
  
  const PrevArticle = ({ onClick }) => (
    <button className="custom-prev-arrow absolute -top-[22%] right-[10%] lg:right-[4%]" onClick={onClick}>
      <Image
        src="/arrow-left-article.png"
        width={26}
        height={26}
        alt=""
      />
    </button>
  );

  let articleMobileSettings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArticle />,
    prevArrow: <PrevArticle />
  };
  
  let articleDesktopSettings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArticle />,
    nextArrow: <NextArticle />
  };
  
  let TheySaidMobileSettings = {
    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: null,
    nextArrow: null
  };

  let TheySaidDesktopSettings = {
    arrow:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: null,
    nextArrow: null
  };

  const benefit = [
    {
      "benefit" : "Teknologi laser membantu menurunkan kadar gula darah dengan cara merangsang sel tubuh (mitokondria) untuk mengubah gula darah menjadi energi sehingga penderita diabetes yang umumnya lemas dan mengantuk akan lebih bernergi."
    },
    {
      "benefit" : "Teknologi laser merangsang tubuh untuk memperoduksi nitric oxide yang berfungsi melebarkan pembuluh darah dan membuatnya lebih elastis sehingga membantu menurunkan tekanan darah. Nitric oxide juga berfungsi untuk meningkatkan aliran darah ke seluruh tubuh sehingga membantu mencegah dan mengatas impotensi."
    },
    {
      "benefit" : "Teknologi laser mengaktifkan enzim dalam tubuh yang bertugas untuk mingkatkan pembakaran kolesterol. Kolesterol akan menurun dan mencegah terjadinya plak kolesterol."
    },
  ];

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
    {
      "image" : "/product/sterillizer.png",
      "name" : "DR AIR \nAir Sterilizer PLUS\n ㅤㅤㅤ",
      "desc" : "Efektif Menyaring & Memusnahkan partikel debu, pollen, allergen, jamur, bakteri hingga VIRUS (berukuran 0,3 mikrometer) baik di udara maupun di permukaan benda.",
      "disc" : "Rp 9.890.000",
      "price" : "Rp 8.890.000",
    },
    {
      "image" : "/product/painbox.png",
      "name" : "DR LASER\nPAIN BOX\n ㅤㅤㅤ",
      "desc" : "Alat terapi kesehatan Low Level Laser Therapy Portable yang memiliki 36 mata laser dan menggunakan 2 jenis gelombang laser yang dapat menjangkau area luka lebih luas dan lebih dalam.",
      "disc" : "Rp 8.380.000",
      "price" : "Rp 6.380.000",
    },
    {
      "image" : "/product/perfect10.png",
      "name" : "DR LASER\nPERFECT 10\n ㅤㅤㅤ",
      "desc" : "DR LASER PERFECT 10 alat terapi Kesehatan untuk membantu mencegah penyakit Diabetes, Jantung Koroner, Stroke, Darah Tinggi & Kolesterol dll..",
      "disc" : "Rp 8.380.000",
      "price" : "Rp 6.380.000",
    },
  ];
  
  const thoseWhoHave = [
    {
      "image" : "/video1.png",
      "nama" : "Yeyen Lidya", 
      "link" : "https://www.youtube.com/watch?v=mifxN47KxcY"
      
    },
    {
      "image" : "/video2.png",
      "nama" : "Lula Kamal", 
      "link" : "https://www.youtube.com/watch?v=gvFa_TStOZ4"
    },
    {
      "image" : "/video3.png",
      "nama" : "Melisa Karim", 
      "link" : "https://www.youtube.com/watch?v=SGCk4IE35ok"
    },
    {
      "image" : "/video4.png",
      "nama" : "Okan Kornelius", 
      "link" : "https://www.youtube.com/watch?v=FDEsb9-BLy8"
    }
  ];
  
  const mediaLiput = [
    "/media-liput/medialiput1.png", "/media-liput/medialiput2.png", "/media-liput/medialiput3.png", "/media-liput/medialiput4.png", "/media-liput/medialiput5.png"
  ];

  const testimoni = [
    "/testimoni/testimoni1.png", "/testimoni/testimoni2.jpg", "/testimoni/testimoni3.jpg", 
    "/testimoni/testimoni4.jpg", "/testimoni/testimoni5.jpg", "/testimoni/testimoni6.jpg",
    "/testimoni/testimoni7.jpg", "/testimoni/testimoni8.jpg", "/testimoni/testimoni9.jpg",
    "/testimoni/testimoni10.jpg", "/testimoni/testimoni11.jpg"
  ];
  
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
  ];
  
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
    {
      "say" : "Saya tidak pakai, tpi saya pakaikan ke orang tua dan mertua saya, sejauh ini alatnya membantu, tensi mereka stabil, Pelayanan baik, di anter ke rumah dan di ajari cara pakainya.",
      "name" : "Tri May Shandy"
    }
  ];

  return (
    <div className='overflow-hidden'>
      {/* Header Mobile */}
      <div className='lg:hidden'>
        <div className='flex justify-between w-full p-6'>
          <Image
            src="/logo.png"
            width={190}
            height={47}
            alt="Dr Laser Logo"
          />
          <button>
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
        <div className='mobile:hidden lg:inline lg:absolute -z-10'>
          <Image
            src="/bg-hero.png"
            width={1920}
            height={1281}
            alt=""
          />
        </div>
        <div className='flex items-center justify-center gap-52'>
          <Image
            src="/logo.png"
            width={220}
            height={55}
            alt="Dr Laser Logo"
          />
          <div className='h-[130px] bg-white w-[600px] rounded-b-[40px]'>
            <ul className='flex justify-center align-end gap-20 text-[12px] mt-16 font-bold text-[#464646]'>
              <a href='#' className='hover:text-[#ff565c]'>HOME</a>
              <a href='#produk' className='hover:text-[#ff565c]'>PRODUCT</a>
              <a href='#testimoni' className='hover:text-[#ff565c]'>TESTIMONI</a>
              <a href='#contact' className='hover:text-[#ff565c]'>CONTACT US</a>
            </ul>
          </div>
        </div>
      </div>
      {/* Hero Section Mobile */}
      <div className='lg:hidden mobile:visible flex flex-col items-center justify-center gap-8 px-8 mt-4'>
        <h1 className='text-[19pt] leading-8'>
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
        <p className='text-[#4e4e4e] text-[11pt] text-justify'>
          Low Level Laser membantu mengencerkan darah sehingga mencegah terbentuknya trombus (gumpalan darah), 
          dengan mekanisme menghambat agregasi trombosit, serta dapat mengaktifkan fibrinolisis sehingga membantu 
          menguraikan trombus/gumpalan darah pemicu STROKE dan SERANGAN JANTUNG.
        </p>
        <div className='flex justify-center justify-items-center w-[200px] h-[45px] bg-[#ff565c] hover:bg-[#EE3D43] cursor-pointer rounded-full text-white'>
          <a href='#product' className='mt-[10px] text-[12pt] font-bold'>
            PESAN SEKARANG
          </a>
        </div>
      </div>
      {/* Hero Section Desktop */}
      <div className='flex justify-center gap-20 mb-[7%]'>
        <div className='mobile:hidden lg:inline w-[400px] mt-16'>
          <h1 className='text-[22pt] mb-7 leading-8'>
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
          <div className='flex justify-center justify-items-center w-[200px] h-[45px] bg-[#ff565c] hover:bg-[#EE3D43] cursor-pointer rounded-full text-white'>
            <a href='#produk' className='mt-[10px] text-[12pt] font-bold'>
              PESAN SEKARANG
            </a>
          </div>
        </div>
        <div className='mobile:hidden lg:inline mt-[140px]'>
          <Image
            src="/hero.png"
            width={500}
            height={217}
            alt=""
          />
        </div>
      </div>
      {/* Benefit Section Mobile */}
      <div className='lg:hidden mt-[30pt]'>
        <div className='flex flex-col items-center justify-center bg-[#ff565c] py-8 px-8'>
          <h1 className='text-[#ffffff] font-bold text-[20pt] mb-10'>MANFAAT</h1>
          <div className='flex flex-col text-[12pt] text-white z-10'>
            <div className='flex flex-col justify-center text-[8pt] text-white gap-10 z-10'>
              {benefit.map((item) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className='flex flex-col items-center'>
                    <Image
                    src="/heart.png"
                    width={52}
                    height={38}
                    alt="Icon Heart"
                    />
                    <p className='mt-5 text-justify text-[12pt]'>{item.benefit}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Benefit Section Desktop */}
      <div className='mobile:hidden lg:inline'>
        <h1 className='flex justify-center text-[#ff565c] font-bold text-[20pt] mb-5'>MANFAAT</h1>
        <div className='absolute -z-10'>
          <Image
            src="/benefit-bg.png"
            width={1918}
            height={628}
            alt="Icon Arrow"
          />
        </div>
        <div className='flex justify-center text-[8pt] text-white gap-36 z-10 mt-[10%]'>
          {benefit.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className='flex flex-col items-center'>
                <Image
                src="/heart.png"
                width={52}
                height={38}
                alt="Icon Heart"
                />
                <p className='mt-5 w-44 text-center text-[10pt] leading-4'>{item.benefit}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='w-full bg-[#f4f4f4]'>
        {/* Sleep Quality Section Mobile */}
        <div className='lg:hidden flex flex-col pt-10 items-center'>
          <h1 className='font-bold text-[#ff565c] text-xl text-center'>
            MEMPERBAIKI KUALITAS TIDUR
          </h1>
          <div className='mt-8'>
            <Image
              src="/wakeup.png"
              width={1050}
              height={722}
              alt="Icon Heart"
            />
          </div>
          <p className='text-[#464646] text-justify mt-8 w-[80%] mx-[10%]'>
            <span className='font-bold'>Kualitas tidur yang baik</span> adalah salah satu faktor pendukung terapi. <span className='font-bold'>90% pengguna Dr Laser merasakan tidur
            yang lebih nyenyak</span>, tidak lagi merasakan insomnia sehingga merasa segar ketika bangun tidur. Tidur yang berkualitas
            membuat imunitas tetap terjaga dan gula darah lebih terkontrol.
          </p>
        </div>
        {/* Sleep Quality Section Desktop */}
        <div className='flex mt-[5%]'>
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
        <div id='product' className='lg:hidden mt-12'>
          <div className='flex flex-col items-center justify-center mb-4'>
            <h1 className='text-[#ff565c] font-bold text-[18pt]'>DAPATKAN SEKARANG</h1>
          </div>
          <Slider {...productMobileSettings}>
            {product.map((item, index) => {
              const nameLines = item.name.split('\n');
              return (
                <div key={index} className='mt-3 mb-10'>
                  <div className='flex flex-col items-center bg-white rounded-[25px] w-[80%] mx-10'>
                    <div className='pt-10 mb-5'>
                      <Image
                        src={item.image}
                        width={184}
                        height={150}
                        alt="Product Image"
                      />
                    </div>
                    {nameLines.map((line, lineIndex) => (
                      <>
                        <p key={lineIndex} className='flex text-[#ff565c] font-bold justify-center text-xl'>
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
                      <div className='flex bg-[#ff565c] hover:bg-[#EE3D43] cursor-pointer py-3 px-8 rounded-2xl gap-3 mt-6'>
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
        <div id='produk' className='mobile:hidden lg:inline'>
          <div className='flex flex-col items-center justify-center mb-[3%] mt-[20%]'>
            <h1 className='text-[#ff565c] font-bold text-[20pt]'>DAPATKAN SEKARANG</h1>
          </div>
          <div className='w-[80%] mx-[10%]'>
            <Slider {...productDesktopSettings}>
              {product.map((item, index) => {
                const nameLines = item.name.split('\n');
                return (
                  <div key={index} className='mt-3 mb-10'>
                    <div className='flex mx-3'>
                      <div className='flex flex-col items-center bg-white rounded-[25px] w-full'>
                        <div className='pt-10 mb-5'>
                          <Image
                            src={item.image}
                            width={184}
                            height={150}
                            alt="Product Image"
                          />
                        </div>
                        {nameLines.map((line, lineIndex) => (
                          <>
                            <p key={lineIndex} className='flex text-[#ff565c] font-bold justify-center text-xl'>
                              {line}
                            </p>
                          </>
                        ))}
                        <div className='flex flex-col items-center'>
                        <Image
                          src="/line.png"
                          width={62}
                          height={2}
                          alt=""
                        />
                        </div>
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
                          <div className='flex bg-[#ff565c] hover:bg-[#EE3D43] cursor-pointer py-3 px-8 rounded-2xl gap-3 mt-6'>
                            <p className='font-bold text-white text-[16px]'>Beli Sekarang</p>
                            <Image
                              src="/shopping-bag.png"
                              width={20}
                              height={22}
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
      {/* Those Who Have Section */}
      <div id='testimoni' className='lg:w-[70%] lg:mx-[15%] w-[80%] mx-[10%]'>
        <div className='flex flex-col items-center justify-center mb-4 mt-10'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>MEREKA YANG PERNAH</h1>
        </div>
        <div className='lg:flex grid grid-cols-2 text-[12pt] text-red gap-5 mt-[30px]'>
          {thoseWhoHave.map((item, index) => (
            <>
              <div>
                <a href={item.link}target="_blank" rel="noopener noreferrer">
                  <Image
                    src={item.image}
                    width={344}
                    height={196}
                    alt="Review"
                  />
                </a>
                <p className='w-38 text-center text-[#464646] font-bold'>
                  {item.nama} (Artis)
                </p>
              </div>
            </>
          ))}
        </div>
        <div>
          <Slider {...testimoniDesktopSettings}>
            {testimoni.map((testimoni, index) => {
              return (
                <div key={index} className='mt-3 mb-10'>
                  <div className='flex justify-center mt-5'>
                    <Image
                      src={testimoni}
                      width={1518}
                      height={545}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* Media Partner */}
      <div className='mt-6'>
        <div className='flex items-center justify-center mb-4'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>MEDIA PARTNER OF</h1>
        </div> 
        <div className='flex justify-center'>
          <div className='mobile:w-[200px] mobile:h-[50px]'>
            <Image
              src="/metrotv.png"
              width={300}
              height={75}
              alt="Metro TV"
            />
          </div>
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
        <div className='px-10 lg:flex lg:items-center lg:w-[80%] lg:mx-[15%] lg:mt-5 lg:gap-[7%] lg:px-0'>
          <p className='lg:mb-0 lg:w-[30%] mobile:text-lg w-full font-bold text-[#464646] mb-10'>
            Dr Laser telah diliput <br/>
            oleh berbagai media nasional
          </p>
          <div className='lg:flex grid grid-cols-2 gap-7 lg:gap-0 lg:w-[50%] 2xl:w-[45%]'>
            {mediaLiput.map((item) => {
              return (
                <>
                  {/* <div className=''> */}
                    <Image
                      src={item}
                      width={200}
                      height={80}
                      alt="..."
                    />
                  {/* </div> */}
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* Find Us */}
      <div id='contact' className='lg:mt-16 mt-12'>
        <div className='lg:mb-12 flex items-center justify-center mb-8'>
          <h1 className='text-[#ff565c] font-bold text-[20pt]'>TEMUKAN KAMI</h1>
        </div>
        <div className='lg:flex justify-center w-[80%] mx-[10%]'>
          {location.map((item) => {
            return (
              <>
                <div className='flex flex-col items-center'>
                  <div className='mobile:hidden lg:inline mb-5'>
                    <Image
                      src="/shop.png"
                      width={50}
                      height={45}
                      alt="Shop Icon"
                    />
                  </div>
                  <div className='lg:hidden flex items-center gap-5'>
                    <p className='lg:mb-10 lg:w-[70%] lg:text-lg lg:text-center w-[80%] text-[#464646] text-sm font-bold leading-4 mb-4'>
                      {item.address}
                    </p>
                    <div className='lg:hidden -mt-5 w-[10%]'>
                      <Image
                        src="/map.png"
                        width={34}
                        height={34}
                        alt="Maps Icon"
                      />
                    </div>
                  </div>
                  <p className='mobile:hidden text-lg lg:inline mb-10 w-[70%] text-[#464646] text-center font-bold leading-6'>
                    {item.address}
                  </p>
                  <div className='mobile:hidden lg:inline'>
                    <Image
                      src={item.maps}
                      width={300}
                      height={300}
                      alt="Maps"
                    />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      {/* Article */}
      <div className='mt-10 bg-[#464646] w-full py-7'>
        <div className='lg:w-[70%] lg:mx-[15%] w-[80%] mx-[10%]'>
          <h1 className='text-lg font-bold text-white mb-5 w-[70%]'>Artikel Menarik Tentang Kesehatan</h1>
          <div className='lg:hidden'>
            <Slider {...articleMobileSettings}>
              {article.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={item.image}
                      width={320}
                      height={188}
                      alt=""
                    />
                    <div className='text-white leading-5 mt-5 px-3'>
                      {item.title}
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
          <div className='mobile:hidden lg:inline'>
            <Slider {...articleDesktopSettings}>
              {article.map((item, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={item.image}
                      width={235}
                      height={142}
                      alt=""
                    />
                    <div className='text-white leading-5 mt-5'>
                      {item.title}
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* They Said */}
      <div className='lg:mt-20 lg:w-[70%] lg:mx-[15%] w-[80%] mx-[10%] mt-8'>
        <div className='flex justify-between mb-5'>
          <h1 className='lg:text-lg text-lg font-bold text-[#464646]'>Apa Kata Mereka Tentang DR.LASER?</h1>
          <div className='mobile:hidden lg:hidden lg:gap-3'>
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
        <div className=''>
          <div className='lg:hidden'>
            <Slider {...TheySaidMobileSettings}>
              {theySaid.map((item, index) => {
                return (
                  <div key={index}>
                    <div className=''>
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
                  </div>
                )
              })}
            </Slider>
          </div>
          <div className='mobile:hidden lg:inline'>
            <Slider {...TheySaidDesktopSettings}>
              {theySaid.map((item, index) => {
                return (
                  <div key={index}>
                    <div className='w-[95%]'>
                      <Image
                        src="/star.png"
                        width={80}
                        height={14}
                        alt="Rating"
                      />
                      <p className='text-[#464646] leading-5 mt-4'>
                        {item.say}
                      </p>
                      <p className='text-[#ff565c] text-lg font-bold mt-4'>
                        {item.name}
                      </p>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* Copy Right */}
      <div>
        <div className='lg:mt-20 flex justify-center mt-16 mb-5'>
          <p>&copy; 2023 DR.LASER. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}