import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  const videosRow = Array(12).fill("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=500&fit=crop");

  const VideoCard = ({ src }) => (
    <div style={{ 
      position: 'relative', width: '220px', height: '350px', borderRadius: '15px', overflow: 'hidden', flexShrink: 0, backgroundColor: '#18181b', margin: '0 0.75rem'
    }}>
      <img src={src} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
      <div style={{ position: 'absolute', bottom: '15px', left: '15px', right: '15px' }}>
        <h4 style={{ fontWeight: 800, fontSize: '1rem', margin: 0, color: 'white' }}>Ahmed</h4>
        <p style={{ fontSize: '0.75rem', color: '#ccc', margin: 0 }}>Client</p>
      </div>
    </div>
  );

  return (
    <section style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '6rem' }}>
      
      <div className="container">
        {/* Pill Badge */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="pill-badge">عرض مميز لمحلك - مطعم - كافيتيريا</div>
        </div>

        {/* Massive Headline */}
        <h1 className="hero-glow" style={{
          fontSize: 'clamp(3rem, 7vw, 6.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: '1.5rem', maxWidth: '1200px', margin: '0 auto', color: '#f4f4f5'
        }}>
          ارتقي بحضورك الرقمي<br />
          على منصات التواصل الإجتماعي
        </h1>

        {/* Subtitle paragraph */}
        <p style={{ color: 'var(--text-gray)', fontSize: '1.25rem', maxWidth: '600px', margin: '1.5rem auto 4rem auto', lineHeight: 1.6, fontWeight: 500 }}>
          مصممة لالتقاط خبراتكم وتحويلها إلى محتوى استراتيجي يزيد من التفاعل ويجلب زبائن جدد لمطعمكم.
        </p>

        {/* Main Hero Video Player (Mock) */}
        <div className="hero-video" style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto 3rem auto', borderRadius: '30px', overflow: 'hidden', backgroundColor: '#18181b', border: '1px solid #27272a' }}>
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--text-light)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
             <Play fill="black" color="black" size={32} />
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ marginBottom: '5rem' }}>
          <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', backgroundColor: 'var(--text-light)' }}>
            اكتشف العروض الآن
          </button>
        </div>
      </div>

      {/* Single Row Video Marquee */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <div className="marquee-wrapper" style={{ margin: 0 }}>
          <div className="marquee-content" style={{ animation: 'scroll-x 40s linear infinite' }}>
            {videosRow.map((src, i) => <VideoCard key={`r1-${i}`} src={src} />)}
            {videosRow.map((src, i) => <VideoCard key={`r1-dup-${i}`} src={src} />)}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
