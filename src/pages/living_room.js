import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';
import Comodos from '../components/comodos'

import { Link } from 'react-router-dom'
import '../styles/style.css';

export default function LivingRoom() {

  return (
    <div>
        <Header>Home > Ambiente > Living Room</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 1', 'bedroom 2', 'kitchen', 'office']} />
				<div className="funcoes">
					<ActionBtn description="air conditioning" equipamento="ar_condicionado" icon="ar"/>
					<ActionBtn description="lamp 1" equipamento="lamp_1" icon="lamp"/>
					<ActionBtn description="lamp 2" equipamento="lamp_2" icon="lamp"/>
					<ActionBtn description="all lamps" equipamento="all_lamps" icon="lamp"/>
					<ActionBtn description="tv" equipamento="tv" icon="tv"/>
					<ActionBtn description="sound" equipamento="sound" icon="sound"/>
				</div>
			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}


