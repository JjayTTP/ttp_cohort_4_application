import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import { Pagination } from 'swiper';
import { Scrollbar } from 'swiper';
import { Navigation } from 'swiper';
import { A11y } from 'swiper';

import './Experience.css'
// IMAGES
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'
import IMG7 from '../../assets/img7.png'
import '../../index.js'

// ============== SLIDES ARRAY ================
const data = [
  {
    imgSrc: IMG1,
    altText: 'HTML',
    title: 'HTML | CSS | JS',
    description: 'Intermediate',
  },
  {
    id: 2,
    imgSrc: IMG3,
    altText: 'React',
    title: 'React Js',
    description: 'Intermediate',
  },
  {
    id: 3,
    imgSrc: IMG7,
    altText: 'WordPress',
    title: 'WordPress',
    description: 'Intermediate',
  },
];

const data2 = [
  {
    id: 1,
    imgSrc: IMG2,
    altText: 'MySQL',
    title: 'MySQL | Php',
    description: 'Intermediate',
  },
  {
    id: 2,
    imgSrc: IMG4,
    altText: 'Python',
    title: 'Python',
    description: 'Intermediate',
  },
  {
    id: 3,
    imgSrc: IMG6,
    altText: 'AWS',
    title: 'AWS',
    description: 'Intermediate',
  },
  {
    id: 4,
    imgSrc: IMG5,
    altText: 'Git',
    title: 'Git',
    description: 'Intermediate',
  },
];

// const ExperienceList = () => {
//   return (
//     <div className='container experience__container'>
//       {
//       data.map(({imgSrc, title, description}, index) => (
//         return (
//           <article className="experience" key={experience.id}>
//           <div className="experience__icon">
//             <img src={experience.imgSrc} alt={experience.altText} />
//           </div>
//           <h5 className='skill__name'>{experience.title}</h5>
//           <small className="skill__level">{experience.description}</small>
//         </article>
//         )
        
//       ))
//       }
//     </div>
//   );
// };


// const ExperienceList2 = () => {
//     return (
//       <div /*className= 'container experience__container' */>
//         {data2.map((experience) => (
//           <article className="experience" key={experience.id}>
//             <div className="experience__icon">
//               <img src={experience.imgSrc} alt={experience.altText} />
//             </div>
//             <h5 className='skill__name'>{experience.title}</h5>
//             <small className="skill__level">{experience.description}</small>
//           </article>
//         ))}
//       </div>
//     );
// };



const Experience = () => {
  return (
    <section id='experience'>
      <h5>More about</h5>
      <h2>My experiences</h2>
      {/* ===================FRONTEND============== */}
      <h3>Frontend Development</h3>
      <Swiper
        className='container experience__container'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
      {
        data.map (({imgSrc, title, description}, index) =>{
          return(
            <SwiperSlide className='experience' key={index}>
              <div className='experience__icon'>
                <img src={imgSrc} alt="" />
              </div>
              <h5 className='skill__name'>{title}</h5>
              <small className="skill__level">{description}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    {/* ===================BACKEND============== */}
    <h3>Backend Development</h3>
    <br />
    <Swiper
        className='container experience__container'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        slidesPerView={1}

        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
      {
        data2.map (({imgSrc, title, description}, index) =>{
          return(
            <SwiperSlide className='experience' key={index}>
              <div className='experience__icon'>
                <img src={imgSrc} alt="" />
              </div>
              <h5 className='skill__name'>{title}</h5>
              <small className="skill__level">{description}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>

    </section>
    
  );
};

export default Experience