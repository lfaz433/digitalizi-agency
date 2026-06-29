import React from 'react';

const Navbar = () => {
  return (
    <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem' }}>
      
      {/* Logo Area */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, margin: 0, letterSpacing: '-1px' }}>
          digitalizi<span style={{color: 'var(--brand-yellow)'}}>.</span>
        </h1>
      </div>

      {/* Right Side Links & CTA */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <a href="#" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
          تسجيل الدخول
        </a>
        <button className="btn-primary" style={{ fontSize: '0.95rem' }}>
          قدم طلبك الآن
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
