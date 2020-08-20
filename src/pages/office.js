import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

import '../styles/style.css';


export default function Office() {

    let [count, setCount] = useState(0);
      let btn;

      function incrementar() {
        if(count === document.getElementsByClassName("botao").length - 1) 
          setCount(count = 0)    
        else     
          setCount(count + 1)
      }

      function decrementar() {
        if(count === 0) 
          setCount(count = document.getElementsByClassName("botao").length - 1)
        else     
         setCount(count - 1) 
      }

      function clicar() {
          document.getElementsByClassName("botao")[count].click()
      }

      useEffect(() => {
        let btn;
        btn = document.getElementsByClassName("botao")[count]
        btn.focus();
      }, [count]);

  return (
    <div>
        <Header>Home > Ambiente > Office</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 2', 'living room', 'kitchen', 'bathroom', 'bedroom 3']} />
        		<Equipamentos equipamentos={['air conditioning', 'lamp 1', 'lamp 2', 'lampshade', 'all lamps', 'computer']} />
			</main>
        </div>
        <button onClick={incrementar}>right</button>
        <button onClick={decrementar}>left</button>
        <button onClick={clicar}>click</button>
        <Footer></Footer>
    </div>
  );
}


