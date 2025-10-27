import React from 'react';

// Componente de botão/ícone fixo que abre uma URL externa em nova aba.
// Uso: <RedirectIcon url="https://github.com/usuario" label="Meu GitHub" />
export default function RedirectIcon({ url = 'https://github.com/', label = 'Abrir link externo' }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="redirect-icon" aria-hidden={false} aria-label={label}>
      <button className="redirect-btn" onClick={handleClick} title={label}>
        {/* Ícone SVG inline (seta externa) */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M14 3H21V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21H3V3H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
