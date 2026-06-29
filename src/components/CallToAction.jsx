import React from 'react';

const CallToAction = () => {
  return (
    <section className="container" style={{ paddingBottom: '2rem' }}>
      <div style={{ 
        backgroundColor: 'var(--card-bg)', 
        color: 'var(--card-text)',
        borderRadius: '30px', 
        padding: '6rem 2rem', 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4rem'
      }}>
        
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
          fontWeight: 900, 
          letterSpacing: '-1.5px',
          maxWidth: '900px',
          marginBottom: '1.5rem',
          lineHeight: 1.1
        }}>
          محتواك يجب أن يجلب لك الزبائن<br/>بينما أنت نائم.
        </h2>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#3f3f46',
          maxWidth: '600px',
          marginBottom: '3rem',
          lineHeight: 1.6,
          fontWeight: 500
        }}>
          البداية هنا واﻹنجازات في الطريق بإذن الله. أنت بحاجة فقط لنظام يظهر ذلك للأشخاص المناسبين، ويحول انتباههم إلى إيرادات.
        </p>

        <button className="btn-primary" style={{ padding: '18px 50px', fontSize: '1.2rem', backgroundColor: '#09090b', color: '#fff' }}>
          قدم طلبك الآن
        </button>

      </div>

      {/* Pre-footer mini navbar */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>
          digitalizi<span style={{color: 'var(--brand-yellow)'}}>.</span>
        </h1>
      </div>
    </section>
  );
};

export default CallToAction;
