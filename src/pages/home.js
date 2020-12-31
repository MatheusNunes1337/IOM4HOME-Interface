import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';
import Comodos from '../components/comodos'

import { Context } from '../contexts/buttonContext'

import '../styles/style.css';


export default function Home() {

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
              <div className="simulador_wrapper">
                 <button value="LEFT" onClick={setMovement}>Left</button>
                 <button value="TOP" onClick={setMovement}>Top</button>
                 <button value="RIGHT" onClick={setMovement}>Right</button>
             </div>
			    </main>  
        </div>
        <Footer></Footer>
    </div>      
    
  );
}
