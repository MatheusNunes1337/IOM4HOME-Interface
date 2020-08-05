import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';

import { Link } from 'react-router-dom'
import '../styles/style.css';

import { FaBed, FaMedapps, FaCouch, FaTv, 
FaThermometerThreeQuarters, FaAngleRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
        <Header>Home</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
				<div className="comodos">
					<Link to="/oi" style={{ textDecoration: 'none' }}>
						<ActionBtn description="air conditioning" icon="ar"/>	
					</Link>
					<Link to="/ambiente/bedroom1" style={{ textDecoration: 'none' }}>
						<ActionBtn description="bedroom 1" icon="bed"/>
					</Link>	
					<Link to="/ambiente/living_room" style={{ textDecoration: 'none' }}>
						<ActionBtn description="living room 1" icon="couch"/>
					</Link>	
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="entertainment" icon="tv"/>
					</Link>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="lighting" icon="lamp"/>
					</Link>
					<button id="btn_passa"><FaAngleRight color="#c2c3bf" size="26px" /></button>		
				</div>
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
