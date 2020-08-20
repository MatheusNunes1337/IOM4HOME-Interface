import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';
import Comodos from '../components/comodos'

import '../styles/style.css';


export default function Home() {

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
        <Header>Home</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['air conditioning', 'bedroom 1', 'living room', 'entertainment', 'lighting']} />		
				<div className="alertas">
					<div className="alert_div">
						<ActionBtn equipamento="ar_condicionado" icon="ar"/>
						<div className="alert_message">
							<p>Temperatura acima de 26°C</p>
							<span>Bedroom 1</span>
							<span>Ligar climatização?</span>
						</div>
					</div>
					<div className="alert_div">
						<ActionBtn equipamento="all_lamps" icon="lamp"/>	
						<div className="alert_message">
							<p>As luzes estão acesas há 2 horas</p>
							<span>Garagem</span>
							<span>Desligar luzes?</span>
						</div>
					</div>
				</div>
			</main>
        </div>
        <button onClick={incrementar}>right</button>
        <button onClick={decrementar}>left</button>
        <button onClick={clicar}>click</button>
        <Footer></Footer>
    </div>
  );
}
