// import React from 'react'
// import './slider.css'
// export default function Slider() {
//     return (
//         <>
//             <div class="home">

//                 <div class="home-popular">
//                     <h3>popular courses</h3>

//                     <div class="slider">
//                         <div class="slider-prev"></div>
//                         <ul>
//                             <li>
//                                 <img class="item small1" style={{ order: "0" }} src="https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                                 />
//                             </li>
//                             <li>
//                                 <img class="item big1" style={{ order: "1" }} src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                                 />
//                             </li>
//                             <li>
//                                 <img class="item focus" style={{ order: "2" }} src="https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                                 />
//                             </li>
//                             <li>
//                                 <img class="item big2" style={{ order: "3" }} src="https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                                 />
//                             </li>
//                             <li>
//                                 <img class="item small2" style={{ order: "4" }} src="https://images.unsplash.com/photo-1603843722974-3a4031f9f97c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//                                 />
//                             </li>
//                         </ul>
//                         <div class="slider-next"></div>
//                     </div>
//                     <div class="description">
//                         <h3 data-index="4">landscape & wildlife photography</h3>
//                         <h3 data-index="3">introduction to marketing</h3>
//                         <h3 data-index="2" class="active">introduction to data analytics</h3>
//                         <h3 data-index="1">biomedical technology</h3>
//                         <h3 data-index="0">internal medicine i</h3>
//                     </div>
//                     {/* <div class="further-description">
//                         <h2 data-index="14">Capture breathtaking moments in nature and wildlife habitats.
//                             Learn composition, lighting, and advanced techniques from expert photographers.
//                             Unleash your creativity and craft stunning images that tell compelling stories.
//                             Ignite your passion for photography and explore the beauty of the natural world!</h2>
//                         <h2 data-index="13">Gain insights into consumer behavior, market research, branding,
//                             and advertising strategies. Hands-on projects and case studies empower you to
//                             develop effective marketing campaigns. Unlock your creative potential and
//                             embark on a dynamic career in the ever-evolving marketing landscape!</h2>
//                         <h2 data-index="12" class="active">Unlock the power of data and gain in-demand skills.
//                             Learn data collection, analysis, visualization, and interpretation. No prior
//                             experience required. Get hands-on with Python, R, and Excel. Make informed
//                             decisions based on data. Start your journey to becoming a data-driven
//                             professional!</h2>
//                         <h2 data-index="11">Discover cutting-edge advancements in medical devices,
//                             diagnostics, and therapies. From artificial organs to precision medicine,
//                             explore the intersection of biology and technology. Hands-on lab experiences
//                             and industry insights pave the way for a rewarding career in transforming
//                             healthcare. Be at the forefront of innovation and make a lasting impact on
//                             human well-being!</h2>
//                         <h2 data-index="10">Explore the intricacies of diagnosing and treating adult
//                             diseases! From common ailments to complex medical conditions, gain a
//                             comprehensive understanding of internal medicine. Clinical rotations and
//                             case-based learning will sharpen your diagnostic skills. Become a
//                             compassionate healthcare provider and make a difference in the lives of
//                             patients!</h2>
//                     </div> */}
//                 </div>

//                 <div class="home-header">
//                     <h1>Let us</h1>
//                     <h1>teach you</h1>
//                     <h1>the skills</h1>
//                 </div>

//             </div>
//         </>
//     )
// }




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./slider.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slide_image_1 from '../../assets/images/img_1.jpg';
import slide_image_2 from '../../assets/images/img_2.jpg';
import slide_image_3 from '../../assets/images/img_3.jpg';
import slide_image_4 from '../../assets/images/img_4.jpg';
import slide_image_5 from '../../assets/images/img_5.jpg';
import slide_image_6 from '../../assets/images/img_6.jpg';
import slide_image_7 from '../../assets/images/img_7.jpg';

export default function Slider() {
    return (
        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1}  alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2}  alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3}  alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4}   alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5}  alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6}  alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

