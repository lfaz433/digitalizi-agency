import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#ffffff', color: '#000000', padding: '4rem 2rem 2rem 2rem', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between' }}>
        
        {/* Left Side Branding */}
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, letterSpacing: '-1px', marginBottom: '1rem' }}>
            digitalizi<span style={{color: 'var(--brand-yellow)'}}>.</span>
          </h2>
          <p style={{ color: '#52525b', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '300px' }}>
            مصممة لالتقاط خبراتكم وتحويلها إلى محتوى استراتيجي يزيد من نجاحكم.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ padding: '10px', backgroundColor: '#f4f4f5', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <div style={{ padding: '10px', backgroundColor: '#f4f4f5', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '1px' }}>الخدمات</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ color: '#52525b', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>الرئيسية</a></li>
              <li><a href="#" style={{ color: '#52525b', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>الأسعار والعملية</a></li>
              <li><a href="#" style={{ color: '#52525b', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>الوظائف</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '1px' }}>الموارد</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li>
                <a href="#" style={{ color: '#52525b', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  شراكات <span style={{ backgroundColor: '#000', color: '#fff', fontSize: '0.6rem', padding: '3px 8px', borderRadius: '100px', fontWeight: 700 }}>قدم الآن</span>
                </a>
              </li>
              <li><a href="#" style={{ color: '#52525b', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>المنصة</a></li>
              <li><a href="#" style={{ color: '#52525b', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>مركز المساعدة</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '1px' }}>القانونية</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ color: '#52525b', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>سياسة الخصوصية</a></li>
              <li><a href="#" style={{ color: '#52525b', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>شروط الخدمة</a></li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Copyright */}
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e4e4e7', fontSize: '0.9rem', color: '#a1a1aa' }}>
        <div>© 2026 digitalizi. جميع الحقوق محفوظة.</div>
        <div>صنع بحب ❤️ في الجزائر</div>
      </div>
    </footer>
  );
};

export default Footer;
