import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

import '../styles/style.css';

export default function LivingRoom() {

  let [count, setCount] = useState(0);
  let btn;

  function incrementar() {
      setCount(count + 1)
  }

  function decrementar() {
     setCount(count - 1) 
  }

  function clicar() {
      btn.click()
  }

  useEffect(() => {
    document.title = count;
    if(count === document.getElementsByClassName("botao").length) {
        setCount(count = 0) 
    } else if(count === -1) {
        alert('negativo')
        setCount(count = 2)
    }
    console.log(document.getElementsByClassName("botao").length)
    btn = document.getElementsByClassName("botao")[count]
    btn.focus();
  }, [count]);


  return (
    <div>
        <Header>Home > Ambiente > Living Room</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 1', 'bedroom 2', 'kitchen', 'office']} />
        		<Equipamentos equipamentos={['air conditioning', 'lamp 1', 'lamp 2', 'all lamps', 'tv', 'sound']} />
			</main>
            <button onClick={incrementar}>incriment</button>
            <button onClick={decrementar}>decrement</button>
            <button onClick={clicar}>clicar</button>
        </div>
        <Footer></Footer>
    </div>
  );
}


