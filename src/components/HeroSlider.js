import React from 'react';

//import swiper react components

import {Swiper,SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

//import required modules
import {EffectFade,Autoplay} from 'swiper';

//images
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [

  {
    title: 'Your Luxyry Hotel for Vacation',
    bg:Img1,
    btnText: 'See our rooms',
  },
  {
    title: 'Your Luxyry Hotel for Vacation',
    bg:Img2,
    btnText: 'Room & Suites',
  },
  {
    title: 'Your Luxyry Hotel for Vacation',
    bg:Img3,
    btnText: 'Room & Suites',
  }

];


const HeroSlider = () => {

  return <Swiper
          modules={[EffectFade,Autoplay]}
          effect={'fade'}
          loop={true}
          autoplay={{
            delay:3000,
            disableOnInteraction:false
          }}
          className='heroSlider h-[600px] lg:h-[860px]'>
          {slides.map((slide,index) => {
            const {title, bg, btnText} = slide;
            return <SwiperSlide key={index} className=' h-full bg-pink-400  justify-center
                      items-center'>
                      <div className="relative top-0 w-full h-full">
                        <img className='object-cover h-full w-full' src={bg}/>
                        <div className="absolute text-[32px] uppercase font-tertiary tracking-[6px] mb-5 text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                            <h1 className='uppercase font-tertiary tracking-[6px] mb-5'> Just Enjoy and relax</h1>
                            <h1 className='text-[32px] font-primary uppercase
                                  tracking-[2px] max-w-[920px] lg:text-[68px] text-white  '>
                                   {title}
                            </h1>
                          <button className='btn btn-lg btn-primary mx-auto'>{btnText}</button>
                        </div>

                      </div>
                      {/* overlay effect sombre */}
                      <div className='absolute h-full w-full bg-black/70'/>
                  </SwiperSlide>

          })}
        </Swiper>;
};

export default HeroSlider;
