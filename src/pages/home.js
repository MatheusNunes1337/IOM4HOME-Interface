import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';

import { Link } from 'react-router-dom'
import '../styles/style.css';

import { FaBed, FaMusic, FaMedapps, FaCouch, FaDesktop, FaTv, FaThermometerThreeQuarters, FaLaptop } from "react-icons/fa";

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
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="bedroom 1">
							<FaBed color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>	
					<Link to="/" style={{ textDecoration: 'none' }}>
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
				</div>
				<nav className="alertas">
					<ul>
						<li><img className="icone" src={require('../assets/images/termometro.png')}/><div><h2>Temperatura acima de 26°C</h2><span>Quarto 1</span><span> Ligar climatização?</span></div></li>
						<li><img className="icone icone_baixo" src={require('../assets/images/lampada1.png')} /><div><h2>Luzes estão acesas há 2 horas</h2><span>Garagem</span><span> Apagar luzes?</span></div></li>
					</ul>
				</nav>
			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}
