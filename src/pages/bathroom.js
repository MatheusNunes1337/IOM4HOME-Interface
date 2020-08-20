import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

import '../styles/style.css';


export default function Bathroom() {

    let [count, setCount] = useState(0);
     

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
        <Header>Home > Ambiente > Bathroom</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 1', 'bedroom 2', 'living room', 'kitchen', 'office']} />
        		<Equipamentos equipamentos={['lamp 1', 'lamp 2']} />
			</main>
        </div>
        <button onClick={incrementar}>right</button>
        <button onClick={decrementar}>left</button>
        <button onClick={clicar}>click</button>
        <Footer></Footer>
    </div>
  );
}


