import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import swiperDBlink from '../json/swiperinof.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

const Worksswiper = (props) => {
    const swiperinfo = swiperDBlink.portfolio;
      return(
        <section className="section py-5 text-center" id={props.contentid}>
          <h3>{props.title}</h3>
        
        <Swiper className='workSection' 
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1.5}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop = {true} 
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => {
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
         >
          {
            swiperinfo.map( ( item, index ) => {
                   return(
                    <SwiperSlide className={item.cls} key={'sw'+index} style={{ background : item.bg }}>{item.worktitle}</SwiperSlide>
                   )
              }
            )
            
          }
        </Swiper>
        </section>
      )
  }
 
  export default Worksswiper;