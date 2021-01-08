import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

import { Context } from '../contexts/buttonContext'

import '../styles/style.css';


export default function Office() {

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
        <Header>Home > Ambiente > Office</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 2', 'living room', 'kitchen', 'bathroom', 'bedroom 3']} />
        		<Equipamentos equipamentos={['air conditioning', 'lamp 1', 'lamp 2', 'lampshade', 'all lamps', 'computer']} />
			    </main>
        </div>
        <Footer></Footer>
    </div>
  );
}


