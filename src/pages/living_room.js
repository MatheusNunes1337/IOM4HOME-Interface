import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';

import { Link } from 'react-router-dom'
import '../styles/style.css';

export default function LivingRoom() {

  return (
    <div>
        <Header>Home > Ambiente > Living Room</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
				<div className="comodos">
					<Link to="/ambiente/bedroom1" style={{ textDecoration: 'none' }}>
						<ActionBtn description="bedroom 1" icon="bed"/>
					</Link>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="bedroom 2" icon="bed"/>	
					</Link>	
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="kitchen" icon="lamp"/>
					</Link>	
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="office" icon="laptop"/>
					</Link>	
				</div>
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


