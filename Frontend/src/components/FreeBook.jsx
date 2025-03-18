import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import list from "../../public/list.json"
import Cards from './Cards';

function FreeBook() {

    const filterData = list.filter((data)=> data.type ==="Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div>
      <h1 className='font-bold text-xl pb-2'>Mystery, History, and Mastery—All in One Place!</h1>
      <p className='font-medium'>Step into a world where secrets unfold, history comes alive, and knowledge knows no bounds! Whether you're solving thrilling mysteries, uncovering hidden historical gems, or mastering new skills, every page holds an adventure waiting to be explored. Are you ready to turn the page and begin your journey? 🚀📚

      </p>
    </div>

    <div>

    <Slider {...settings}>
       {filterData.map((item)=>(
        <Cards item = {item} key={item.id}/>
       ))}
      </Slider>

    </div>
    </div>

    
    </>
  )
}

export default FreeBook
