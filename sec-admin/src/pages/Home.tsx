import React, { useState } from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';

const eyewearCategories = [
  { name: 'Round', img: 'https://static1.lenskart.com/media/desktop/img/Sep21/image179.png' },
  { name: 'Clubmaster', img: 'https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg' },
  { name: 'Transparent', img: 'https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg' },
  { name: 'Blend', img: 'https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg' },
  { name: 'Clip-On', img: 'https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg' },
  { name: 'Air Flex', img: 'https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg' },
  { name: 'Aviator', img: 'https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg' },
];

const eyeglassesImages = [
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/gold-full-rim-geometric-vincent-chase-sleek-steel-vc-e13785-c1-eyeglasses_gm_5964.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12395-c2-eyeglasses_g_4493.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-black-full-rim-geometric-vincent-chase-sleek-steel-vc-e13786-c2-eyeglasses_ccg_3318.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-silver-full-rim-square-vincent-chase-sleek-steel-vc-e16002-c2-eyeglasses_g_3149_09_21_23.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/Transparent-Blue-Full-Rim-Rectangle-Vincent-Chase-Classic-Acetate-VC-E13676-C3-Eyeglasses_vincent-chase-vc-e13676-c3-c3-eyeglasses_G_924107_02_2022.jpg',
];
const sunglassesImages = [
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/silver-grey-full-rim-round-vincent-chase-polarized-met-effect-vc-s15398-c2-sunglasses_g_0998_02_02_23.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/black-full-rim-round-vincent-chase-the-metal-edit-vc-s13112-c9-polarized-sunglasses_vincent-chase-vcs13112-c9-c9-sunglasses_sunglasses_g_8958_1_5july23.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/black-grey-full-rim-wayfarer-vincent-chase-polarized-athleisure-vc-s14459-c7-sunglasses_g_2628_9_29_22.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/gunmetal-blue-full-rim-round-vincent-chase-the-metal-edit-vc-s13137-c3-sunglasses_vincent-chase-vc-s13137-c3-c3-sunglasses_sunglasses_g_8708_5july23.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/Gold-Black-Grey-Gradient-Full-Rim-Square-Vincent-Chase-Polarized-VINTAGE-VC-S11748-C4-Polarized-Sunglasses_vincent-chase-vc-s11748-c4-sunglasses_sunglasses_G_126118_02_2022.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s16958-c1-sunglasses_dd_dsc6021_04_06_2024.jpg',
];

// WITH POWER COMPUTER BLU LENSES
const withPowerBluImages = [
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/peyush-bansal-shark-tank-monza-red-full-rim-hustlr-eyeglasses_g_7904_02_01_2023.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/blue-block-phone-computer-glasses:-ocean-blue-full-rim-wayfarer-lenskart-hustlr-hp-e15011-c6-eyeglasses_ocrean_blue_front_4.jpg.',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/sky-blue-full-rim-wayfarer-lenskart-extra-narrow-hustlr-computer-eyeglasses_csvfile-1689595048517-hooper-hp-d15011l-c6-eyeglasses_g_8686_04_05_2023.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/midnight-blue-full-rim-wayfarer-lenskart-extra-narrow-hustlr-computer-eyeglasses_csvfile-1689594935385-hooper-hp-d15011l-c9-eyeglasses_g_8701_04_05_2023.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/black-full-rim-wayfarer-lenskart-extra-narrow-hustlr-computer-eyeglasses_csvfile-1689594898001-hooper-hp-d15011l-c8-eyeglasses_g_8694_04_05_2023.jpg',
  'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//h/i/amber-full-rim-wayfarer-lenskart-extra-narrow-hustlr-computer-eyeglasses_csvfile-1689594971819-hooper-hp-d15011l-c10-eyeglasses_g_8679_04_05_2023.jpg',
];
// WITH ZERO POWER COMPUTER BLU LENSES
const withZeroPowerBluImages = [
  'https://static1.lenskart.com/media/desktop/img/Nov22/eye1.jpg',
  'https://static1.lenskart.com/media/desktop/img/Nov22/eye2.jpg',
  'https://static1.lenskart.com/media/desktop/img/Nov22/eye3.jpg',
];

const CarouselRow = ({ title, images, viewRangeHref }: { title: string; images: string[]; viewRangeHref?: string }) => {
  const [startIdx, setStartIdx] = useState(0);
  const showCount = 3;
  const canPrev = startIdx > 0;
  const canNext = startIdx + showCount < images.length;

  // When clicking arrow, change all 3 images at once
  const handlePrev = () => {
    if (canPrev) setStartIdx(startIdx - showCount);
  };
  const handleNext = () => {
    if (canNext) setStartIdx(startIdx + showCount);
  };

  return (
    <div className="w-full mb-12">
      <div className="flex flex-col mb-2 mt-8 px-2">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[22px] md:text-[24px] font-normal text-gray-800 tracking-tight" style={{marginLeft: '50px'}}>{title}</h2>
          <a href={viewRangeHref || '#'} className="text-teal-500 text-[20px] font-medium hover:underline">View Range</a>
        </div>
        <div className="w-full flex items-center" style={{marginTop: '2px'}}>
          <div style={{marginLeft: '50px', marginRight: '16px', height: '2px', background: '#e5e7eb', flex: 1}}></div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-4">
        <button
          className={`text-5xl text-gray-300 hover:text-gray-700 transition px-2 ${!canPrev && 'opacity-30 cursor-not-allowed'}`}
          onClick={handlePrev}
          disabled={!canPrev}
          aria-label="Previous"
        >&#8249;</button>
        <div className="flex-1 flex justify-center gap-12 overflow-hidden transition-all duration-500 ease-in-out" style={{minHeight: '140px'}}>
          {images.slice(startIdx, startIdx + showCount).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={title + ' ' + (startIdx + idx + 1)}
              className="w-full max-w-[320px] md:max-w-[340px] h-[120px] md:h-[140px] object-contain transition-transform duration-500 ease-in-out"
              style={{margin: '0 10px'}}
            />
          ))}
        </div>
        <button
          className={`text-5xl text-gray-300 hover:text-gray-700 transition px-2 ${!canNext && 'opacity-30 cursor-not-allowed'}`}
          onClick={handleNext}
          disabled={!canNext}
          aria-label="Next"
        >&#8250;</button>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4;
  const canPrev = startIdx > 0;
  const canNext = startIdx + visibleCount < eyewearCategories.length;

  const handlePrev = () => {
    if (canPrev) setStartIdx(startIdx - 1);
  };
  const handleNext = () => {
    if (canNext) setStartIdx(startIdx + 1);
  };

  return (
    <>
      <Header />
      <HeroCarousel />
      {/* Eyewear Category Carousel Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center md:items-start px-4">
          {/* Left text and logo */}
          <div className="md:w-1/4 w-full flex flex-col items-start mb-8 md:mb-0 pl-10 md:pl-20">
            <h2 className="text-6xl font-light leading-tight text-gray-900 mb-2" style={{letterSpacing: '-2px'}}>
              WEAR<br/>
              <span className="font-bold">THE</span><br/>
              <span className="font-bold tracking-tight">TREND</span>
            </h2>
            <p className="text-lg text-gray-600 mt-2 mb-8">Our hottest collections</p>
          </div>
          {/* Carousel */}
          <div className="md:w-3/4 w-full flex flex-col">
            <div className="flex items-center justify-center w-full">
              <button
                className={`text-4xl px-3 py-2 text-gray-300 hover:text-gray-700 transition ${!canPrev && 'opacity-30 cursor-not-allowed'}`}
                onClick={handlePrev}
                disabled={!canPrev}
                aria-label="Previous"
              >&#60;</button>
              <div className="flex-1 flex justify-center gap-8">
                {eyewearCategories.slice(startIdx, startIdx + visibleCount).map((cat) => (
                  <div key={cat.name} className="flex flex-col items-center min-w-[200px] mx-2">
                    <img src={cat.img} alt={cat.name} className="w-40 h-40 object-contain mb-4" />
                    <span className="text-xl font-medium text-gray-800 mb-4">{cat.name}</span>
                    <button className="bg-teal-400 text-white px-10 py-2 rounded hover:bg-teal-500 text-lg font-semibold">Explore</button>
                  </div>
                ))}
              </div>
              <button
                className={`text-4xl px-3 py-2 text-gray-300 hover:text-gray-700 transition ${!canNext && 'opacity-30 cursor-not-allowed'}`}
                onClick={handleNext}
                disabled={!canNext}
                aria-label="Next"
              >&#62;</button>
            </div>
          </div>
        </div>
      </section>
      {/*  home under */}
       <div className="w-full bg-white flex flex-col items-center  py-10">
        <div className="flex items-center w-full max-w-screen-2xl">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-8 text-3xl font-medium tracking-wide text-black whitespace-nowrap">LENS REPLCEMENT AT STORE</span>
          <hr className="flex-grow border-gray-300" />
        </div>
      </div>

      <div className="w-full flex justify-center bg-white pb-8">
        <img
          src="https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-hustlrswitch-GJ-150525.png"
          alt="Banner"
          className="w-full max-w-screen-2xl object-cover"
        />
      </div>
      {/* Divider with text */}
      <div className="w-full bg-white flex flex-col items-center py-10">
        <div className="flex items-center w-full max-w-screen-2xl">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-8 text-3xl font-medium tracking-wide text-black whitespace-nowrap">BUY ONE GET ONE FREE</span>
          <hr className="flex-grow border-gray-300" />
        </div>
      </div>
      <div className="w-full flex justify-center bg-white pb-18">
        <img
          src="https://static5.lenskart.com/media/uploads/1920x520-desktop-banner.png"
          alt="Banner"
          className="w-full max-w-screen-2xl object-cover"
        />
      </div>
      
      <div className="w-full bg-white flex flex-col items-center py-10">
        <div className="flex items-center w-full max-w-screen-2xl">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-8 text-3xl font-medium tracking-wide text-black whitespace-nowrap">BUY ONE GET ONE FREE</span>
          <hr className="flex-grow border-gray-300" />
        </div>
      </div>
      <div className="w-full flex justify-center bg-white pb-18">
        <img
          src="https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg"
          alt="Banner"
          className="w-full max-w-screen-2xl object-cover"
        />
      </div>
      <div className="w-full bg-white flex flex-col items-center py-10">
        <div className="flex items-center w-full max-w-screen-2xl">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-8 text-3xl font-medium tracking-wide text-black whitespace-nowrap">EYE TEST</span>
          <hr className="flex-grow border-gray-300" />
        </div>
      </div>
      <div className="w-full flex justify-center bg-white pb-18">
        <img
          src="https://static1.lenskart.com/media/desktop/img/16-sep-24/r1.jpeg"
          alt="Banner"
          className="w-full max-w-screen-2xl object-cover"
        />
      </div> 
      <div className="w-full bg-white flex flex-col items-center py-10">
        <div className="flex items-center w-full max-w-screen-2xl">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-8 text-3xl font-medium tracking-wide text-black whitespace-nowrap">PREMIUM EYEWEAR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
      </div>
      <div className="w-full flex justify-center bg-white pb-18">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
          
          alt="Banner"
          className="w-full max-w-screen-2xl object-cover"
        />
      </div>
      <div className="w-full bg-white flex flex-col items-center py-10">
        <div className="flex items-center w-full max-w-screen-2xl">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-8 text-3xl font-medium tracking-wide text-black whitespace-nowrap">TRENDING EYEGLASSES</span>
          <hr className="flex-grow border-gray-300" />
        </div>
      </div>
      <div className="w-full flex justify-center bg-white pb-18">
        <img
          src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
          alt="Banner"
          className="w-full max-w-screen-2xl object-cover"
        />
      </div>
      {/* Contact Lenses & More Section - Images connected with 3px gap */}
      <section className="w-full bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-8 text-4xl font-semibold tracking-wide text-black whitespace-nowrap">CONTACT LENSES & MORE</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-0">
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg"
              alt="Colored contact lenses"
              className="rounded-l-lg shadow-lg w-full md:w-[600px] h-auto object-cover border-r-[3px] border-white"
              style={{maxWidth: '100%', height: 'auto'}}
            />
            <img
              src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg"
              alt="Contact lens solution"
              className="rounded-r-lg shadow-lg w-full md:w-[600px] h-auto object-cover"
              style={{maxWidth: '100%', height: 'auto'}}
            />
          </div>
        </div>
      </section>
      {/* Our Brands Section - Matches provided image */}
      <section className="w-full bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-8 text-4xl font-semibold tracking-wide text-black whitespace-nowrap">OUR BRANDS</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="w-full flex flex-col items-center mb-12">
            <div className="w-full relative">
              <img
                src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
                alt="Vincent Chase Banner"
                className="rounded-lg w-full max-h-[260px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">Vincent Chase</h2>
              </div>
            </div>
          </div>
        </div> 
      </section>
      {/* Eyeglasses and Sunglasses Carousel Section - Full width, arrows, and image swap */}
      <section className="w-full bg-white py-12">
        <div className="max-w-screen-2xl mx-auto px-4">
          <CarouselRow title="EYEGLASSES" images={eyeglassesImages} />
          <CarouselRow title="SUNGLASSES" images={sunglassesImages} />
        </div>
      </section>
      {/* Contact Lenses Section - New Addition */}
      <div className="w-full bg-white py-12">
        {/* Contact Lens Banner */}
        <div className="w-full flex justify-center mb-8">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg"
            alt="Contact Lens Banner"
            className="w-full max-w-screen-2xl object-cover rounded-lg shadow"
          />
        </div>
        {/* Contact Lenses Section */}
        <div className="max-w-screen-2xl mx-auto w-full">
          <div className="flex justify-between items-center mb-2 px-2">
            <h2 className="text-lg md:text-xl font-semibold tracking-wide">CONTACT LENSES</h2>
            <a href="#" className="text-teal-500 font-medium hover:underline text-lg">View Range</a>
          </div>
          <div className="flex flex-row justify-center items-center space-x-12 mb-8">
            {withPowerBluImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Contact Lens ${idx + 1}`}
                className="h-28 md:h-32 object-contain drop-shadow bg-white rounded"
                style={{minWidth: '120px', maxWidth: '180px'}}
              />
            ))}
            <span className="text-5xl text-gray-300 ml-4">&#8250;</span>
          </div>
          {/* Color Contact Lenses Section */}
          <div className="flex justify-between items-center mb-2 px-2">
            <h2 className="text-lg md:text-xl font-semibold tracking-wide">COLOR CONTACT LENSES</h2>
            <a href="#" className="text-teal-500 font-medium hover:underline text-lg">View Range</a>
          </div>
          <div className="flex flex-row justify-center items-center space-x-12">
            {withZeroPowerBluImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Color Contact Lens ${idx + 1}`}
                className="h-32 w-32 object-cover rounded shadow"
              />
            ))}
            <span className="text-5xl text-gray-300 ml-4">&#8250;</span>
          </div>
        </div>
      </div>
      <CarouselRow
        title="HUSTLR EYEGLASSES"
        images={withPowerBluImages}
        viewRangeHref="#"
      />
    </>
  );
};

export default Home;