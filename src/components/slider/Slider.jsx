import React from "react";
import './Slider.css'
import {Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {SliderProducts} from "../../data/products";

const Slider = () => {
    return (
        <div className='s-container'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                className='my-swiper'
                navigation={true}
                loopFillGroupWithBlank={true}
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
            >
                {
                    SliderProducts.map((slide, i) => {
                        return (<SwiperSlide key={i}>
                            <div className='left-s'>
                                <div className='name'>
                                    <span>{slide.name}</span>
                                    <span>{slide.detail}</span>
                                </div>
                                <span>{slide.price}$</span>
                                <div>Shop Now</div>
                            </div>
                            <img src={slide.img} alt='product' className='img-p'/>
                        </SwiperSlide>)
                    })
                }
            </Swiper>
        </div>
    )
}

export default Slider