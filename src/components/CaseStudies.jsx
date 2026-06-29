import React from 'react';
import { TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="container" style={{ paddingTop: '4rem', paddingBottom: '8rem' }}>
      
      {/* Title Block */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>
          الباقات و الأسعار
        </p>
        <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-2px' }}>
          باقات مصممة لنجاحك
        </h2>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', fontWeight: 500 }}>
          صناعة محتوى احترافي بأسعار تناسب ميزانيتك، ونتائج واضحة للعيان.
        </p>
      </div>

      {/* Main Detail Card (Tracking Stats) */}
      <div className="case-card" style={{ backgroundColor: '#ffffff', color: '#09090b', borderRadius: '30px', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            تحليل الأداء<br/>والنتائج
          </h3>
          <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#52525b', letterSpacing: '1px' }}>التتبع المستمر</p>
          
          <div style={{ marginTop: '3rem' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>ماذا نفعل</h4>
            <ul style={{ padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#3f3f46', fontSize: '1rem', fontWeight: 500 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-yellow)' }}></div> نتابع عن كثب أداء منشوراتكم</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-yellow)' }}></div> نحسن المحتوى بهدف زيادة التفاعل</li>
            </ul>
          </div>
        </div>
        
        {/* Stats side */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 120px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-1px' }}>+45%</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>الوصول الأسبوعي</div>
          </div>
          <div style={{ flex: '1 1 120px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-1px' }}>+60%</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>التفاعل مع الفيديوهات</div>
          </div>
          <div style={{ flex: '1 1 120px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-1px' }}>+30%</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>زيادة الزبائن</div>
          </div>
        </div>
      </div>

      {/* Stat Row Cards (Pricing Packages) */}
      <div className="pricing-card" style={{ backgroundColor: '#ffffff', color: '#09090b', borderRadius: '20px', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px', margin: 0 }}>الباقة الأساسية</h3>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', margin: 0, textTransform: 'uppercase' }}>عرض خاص صالح لمدة شهر</p>
        </div>
        <div className="stats-row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>75.000 دج</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>التكلفة</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>12+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>منشور أسبوعيا</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>8+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>إعلانات ممولة</div>
          </div>
        </div>
      </div>

      <div className="pricing-card" style={{ backgroundColor: '#ffffff', color: '#09090b', borderRadius: '20px', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px', margin: 0 }}>الباقة المتقدمة</h3>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', margin: 0, textTransform: 'uppercase' }}>الأكثر طلباً - لمدة شهر</p>
        </div>
        <div className="stats-row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>95.000 دج</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>التكلفة</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>16+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>منشور أسبوعيا</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>16+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>إعلانات ممولة</div>
          </div>
        </div>
      </div>

      <div className="pricing-card" style={{ backgroundColor: '#ffffff', color: '#09090b', borderRadius: '20px', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px', margin: 0 }}>الباقة الذهبية</h3>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', margin: 0, textTransform: 'uppercase' }}>عرض خاص صالح لمدة شهرين</p>
        </div>
        <div className="stats-row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>180.000 دج</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>التكلفة</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>32+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>منشور أسبوعيا</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px' }}>32+</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#52525b', textTransform: 'uppercase' }}>إعلانات ممولة</div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
          ابدأ الآن
        </button>
      </div>

    </section>
  );
};

export default CaseStudies;
