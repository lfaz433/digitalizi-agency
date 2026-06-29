import React from 'react';
import { Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const VideoCarousel = () => {
  const videosRow1 = Array(10).fill("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=700&fit=crop");
  const videosRow2 = Array(10).fill("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=700&fit=crop");

  const VideoCard = ({ src }) => (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '450px', 
      borderRadius: '20px', 
      overflow: 'hidden', 
      backgroundColor: '#18181b'
    }}>
      <img src={src} alt="Reel thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255,255,255,0.2)',
        backdropFilter: 'blur(5px)',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Play fill="white" color="white" size={24} />
      </div>
      
      {/* Bottom text overlay */}
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
        <h4 style={{ fontWeight: 800, fontSize: '1.1rem', margin: 0, color: 'white' }}>Ahmed</h4>
        <p style={{ fontSize: '0.8rem', color: '#ccc', margin: 0 }}>Restaurant Owner</p>
      </div>
    </div>
  );

  return (
    <section style={{ paddingBottom: '8rem', overflow: 'hidden' }}>
      
      {/* Title Block */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>
          صناعة المحتوى
        </p>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>
          اسمع من عملائنا
        </h2>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', fontWeight: 500 }}>
          لا تأخذ كلمتنا فقط. شاهد الآراء وتعرف على جودة صناعة المحتوى لدينا.
        </p>
      </div>

      {/* Row 1 */}
      <div style={{ marginBottom: '1.5rem', direction: 'ltr' }}>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          slidesPerView={'auto'}
          loop={true}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {videosRow1.map((src, i) => (
            <SwiperSlide key={i} style={{ width: '280px' }}>
              <VideoCard src={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Row 2 */}
      <div style={{ direction: 'ltr' }}>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          slidesPerView={'auto'}
          loop={true}
          freeMode={true}
          speed={4000} // Different speed for a nice parallax effect
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true // Scroll opposite way
          }}
          className="mySwiper2"
        >
          {videosRow2.map((src, i) => (
            <SwiperSlide key={i} style={{ width: '280px' }}>
              <VideoCard src={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default VideoCarousel;
