import React from 'react';

const OperatingSystem = () => {
  return (
    <section className="container" style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '8rem' }}>
      
      {/* Title Block */}
      <div style={{ marginBottom: '4rem' }}>
        <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700 }}>
          الإستفادة من Google Drive خاص
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>
          نظام تشغيل محتواك بالكامل<br/>في مكان واحد
        </h2>
        <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6, fontWeight: 500 }}>
          استفيدوا من وصول غير محدود إلى Google Drive مشترك حيث ستجدون جميع المحتويات البصرية التي تم إنشاؤها لمطعمكم. يسهل هذا النظام مشاركة وإدارة الملفات.
        </p>
      </div>

      {/* Massive Dashboard Image */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1100px', 
        margin: '0 auto', 
        borderRadius: '24px', 
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
      }}>
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop" 
          alt="Restaurant Preview" 
          style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.8 }} 
        />
      </div>

      {/* CTA Button */}
      <div style={{ marginTop: '4rem' }}>
        <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
          احجز جولة تعريفية
        </button>
      </div>

    </section>
  );
};

export default OperatingSystem;
