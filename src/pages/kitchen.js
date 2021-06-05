import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

import { Context } from '../contexts/buttonContext'

import '../styles/style.css';


export default function Kitchen() {

  const { index, handleMovement, setIndex } = useContext(Context)

  useEffect(() => {
    let btn;
    btn = document.getElementsByClassName("botao")[index]
    btn.focus();
  }, [index]);

  useEffect(() => {
    setIndex(0)
  }, []);

  function getMovement(event) {
     const movement = event.key
     handleMovement(movement)
  }

  return (
    <div onKeyPress={getMovement} tabIndex={-1}>
        <Header>Home > Ambiente > Kitchen</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 1', 'bedroom 2', 'living room', 'bathroom', 'office']} />
        		<Equipamentos equipamentos={['lamp 1', 'lamp 2']} />
			    </main>
        </div>
        <Footer></Footer>
    </div>
  );
}


