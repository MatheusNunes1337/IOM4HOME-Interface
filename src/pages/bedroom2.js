import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

//context

import  { Context } from '../contexts/buttonContext'

import '../styles/style.css';


export default function Bedroom2() {

  const { index, setMovement, setIndex } = useContext(Context)

  useEffect(() => {
    let btn;
    btn = document.getElementsByClassName("botao")[index]
    btn.focus();
  }, [index]);

  useEffect(() => {
    setIndex(0)
  }, []);

  return (
    <div onKeyPress={setMovement} tabIndex={-1}>
        <Header>Home > Ambiente > Bedroom 2</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 1', 'living room', 'kitchen', 'bathroom', 'office']} />
        		<Equipamentos equipamentos={['air conditioning', 'lamp 1', 'lampshade', 'all lamps', 'tv', 'sound']} />
			    </main>
       </div>
        <Footer></Footer>
    </div>
  );
}


