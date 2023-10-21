import React from 'react';
import style from './Cabecalho.module.scss';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <nav>
        <div className="logo">
          <a href="/"><img src="/img/icones/Logo-desktop.png" alt="Logo da Meteora" /></a>
        </div>
        <div className="menu">
          <ul> 
            <li><a href="/">Home</a></li>
            <li><a href="/produtos">Nossas Lojas</a></li>
            <li><a href="/carrinho">Novidades</a></li>
            <li><a href="/conta">Promoção</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Cabecalho;