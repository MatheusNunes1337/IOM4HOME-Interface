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
						<ActionBtn description="air conditioning">
							<FaThermometerThreeQuarters color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>
					<Link to="/ambiente/bedroom1" style={{ textDecoration: 'none' }}>
						<ActionBtn description="bedroom 1">
							<FaBed color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>	
					<Link to="/ambiente/living_room" style={{ textDecoration: 'none' }}>
						<ActionBtn description="living room 1">
							<FaCouch color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>	
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="entertainment">
							<FaTv color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="lighting">
							<FaMedapps color="#c2c3bf" size="45px" />
						</ActionBtn>
					</Link>
					<button id="btn_passa"><FaAngleRight color="#c2c3bf" size="26px" /></button>		
				</div>
				<div className="alertas">
					<div className="alert_div">
						<ActionBtn equipamento="ar_condicionado">
							<FaThermometerThreeQuarters color="#c2c3bf" size="40px" />
						</ActionBtn>
						<div className="alert_message">
							<p>Temperatura acima de 26°C</p>
							<span>Bedroom 1</span>
							<span>Ligar climatização?</span>
						</div>
					</div>
					<div className="alert_div">
						<ActionBtn equipamento="all_lamps">
							<FaMedapps color="#c2c3bf" size="45px" />
						</ActionBtn>	
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
