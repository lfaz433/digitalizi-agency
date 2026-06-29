import React from 'react';
import { Camera, Film, Target } from 'lucide-react';

const BentoFeatures = () => {
  return (
    <section className="container" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
      
      {/* Title Block */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>
          المعايير التي نلتزم بها
        </p>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>
          مصممة للخبراء<br/>الذين يرفضون الحلول العادية.
        </h2>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', fontWeight: 500 }}>
          نحن نأخذ خبراتكم ونجعلها لا تقبل المنافسة.
        </p>
      </div>

      <div className="bento-grid">
        
        {/* Row 1 */}
        <div className="bento-card" style={{ padding: 0, minHeight: '400px' }}>
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop" 
            alt="Professional Food Photography" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
        
        <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'rgba(250, 204, 21, 0.2)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <Camera size={28} />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>التصوير الإحترافي</h2>
          <p style={{ fontSize: '1.2rem', color: '#3f3f46', lineHeight: 1.6, fontWeight: 500 }}>
            نبرز نكهة أطباقكم بصور و فيديوهات احترافية تشهي وتشد الانتباه. نهدف لجذب الزبائن وتثبيت هويتكم في الذاكرة.
          </p>
        </div>

        {/* Row 2 */}
        <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'rgba(250, 204, 21, 0.2)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <Film size={28} />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>المونتاج السريع</h2>
          <p style={{ fontSize: '1.2rem', color: '#3f3f46', lineHeight: 1.6, fontWeight: 500 }}>
            نحكي قصة مطعمكم في فيديوهات جذابة تفتح الشهية. تحويل ساعة واحدة من التصوير إلى محتوى يكفي لأسابيع.
          </p>
        </div>
        
        <div className="bento-card" style={{ padding: 0, minHeight: '400px' }}>
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&q=80" 
            alt="Food Prep" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Row 3 - Full Width Card */}
        <div className="bento-card" style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '5rem 3rem' }}>
          <div style={{ backgroundColor: 'rgba(250, 204, 21, 0.2)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <Target size={28} />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>الإعلانات الممولة</h2>
          <p style={{ fontSize: '1.2rem', color: '#3f3f46', lineHeight: 1.6, maxWidth: '600px', fontWeight: 500 }}>
            نوصل مطعمكم لآلاف عبر حملات إعلانية مدروسة ومربحة. استراتيجيات تهدف إلى جلب اهتمام فعلي وزبائن محتملين يحجزون طاولاتهم لديك.
          </p>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
          ابنِ حضورك الرقمي
        </button>
      </div>

    </section>
  );
};

export default BentoFeatures;
