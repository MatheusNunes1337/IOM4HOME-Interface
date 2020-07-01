import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/style.css';

export default function Home() {
  return (
    <div>
        <Header>Iom4home interface</Header>
        <div className="conteudo"></div>
        <Footer></Footer>
    </div>
  );
}