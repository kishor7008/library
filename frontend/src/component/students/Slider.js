import React from 'react'
import './slider.css'
export default function Slider() {
  return (
    <>
      <div class="home">

        <div class="home-popular">
          <h3>popular Books</h3>

          <div class="slider4">
            <div class="slider-prev"></div>
            <ul class="ul5">
              <li>
                <img class="item small1" style={{ order: "0" }} src="https://www.adobe.com/express/create/poster/media_15f62f62afcc2c6758566467eb4806c8d35f8745d.jpeg?width=400&format=jpeg&optimize=medium"
                />
              </li>
              <li>
                <img class="item big1" style={{ order: "1" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIn7i0unjlztVKxwrYvtL5dz5iqiFIH28Arg&usqp=CAU"
                />
              </li>
              <li>
              <img class="item focus" style={{ order: "2",width:"20%" }} src="https://i.pinimg.com/originals/f9/83/6d/f9836d83a3fb48f654fa36c8a4f5c669.jpg" 
                />
              </li>
              <li>
                <img class="item big2" style={{ order: "3" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcYNd9EZ7nYeg-Tcw26XVqvOEzsGLfwC9yA&usqp=CAU"
                />
              </li>
              <li>
                <img class="item small2" style={{ order: "4" }} src="https://www.alastore.ala.org/sites/default/files/book_covers/9780838937907.jpg"
                />
              </li>
            </ul>
            <div class="slider-next"></div>
          </div>
          <div class="description">
            <h3 data-index="4"></h3>
            <h3 data-index="3"></h3>
            <h3 data-index="2" class="active"></h3>
            <h3 data-index="1"></h3>
            <h3 data-index="0"></h3>
          </div>
          <div class="further-description">
            <h2 data-index="14"></h2>
            <h2 data-index="13"></h2>
            <h2 data-index="12" class="active"></h2>
            <h2 data-index="11"></h2>
            <h2 data-index="10"></h2>
          </div>
        </div>

        <div class="home-header">
          <h1>Let's</h1>
          <h1>Study & </h1>
          <h1>Enjoy </h1>
        </div>

      </div>
    </>
  )
}




// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import "./slider.css"
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import slide_image_1 from '../../assets/images/img_1.jpg';
// import slide_image_2 from '../../assets/images/img_2.jpg';
// import slide_image_3 from '../../assets/images/img_3.jpg';
// import slide_image_4 from '../../assets/images/img_4.jpg';
// import slide_image_5 from '../../assets/images/img_5.jpg';
// import slide_image_6 from '../../assets/images/img_6.jpg';
// import slide_image_7 from '../../assets/images/img_7.jpg';

// export default function Slider() {
//     return (
//         <div className="container">
//             <h1 className="heading">Flower Gallery</h1>
//             <Swiper
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 loop={true}
//                 slidesPerView={'auto'}
//                 coverflowEffect={{
//                     rotate: 0,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 2.5,
//                 }}
//                 pagination={{ el: '.swiper-pagination', clickable: true }}
//                 navigation={{
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                     clickable: true,
//                 }}
//                 modules={[EffectCoverflow, Pagination, Navigation]}
//                 className="swiper_container"
//             >
//                 <SwiperSlide>
//                     <img src={slide_image_1}  alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_2}  alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_3}  alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_4}   alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_5}  alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_6}  alt="slide_image" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src={slide_image_7} alt="slide_image" />
//                 </SwiperSlide>

//                 <div className="slider-controler">
//                     <div className="swiper-button-prev slider-arrow">
//                         <ion-icon name="arrow-back-outline"></ion-icon>
//                     </div>
//                     <div className="swiper-button-next slider-arrow">
//                         <ion-icon name="arrow-forward-outline"></ion-icon>
//                     </div>
//                     <div className="swiper-pagination"></div>
//                 </div>
//             </Swiper>
//         </div>
//     );
// }

