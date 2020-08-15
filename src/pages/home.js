import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';
import Comodos from '../components/comodos'

import '../styles/style.css';


export default function Home() {
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
        <Footer></Footer>
    </div>
  );
}
