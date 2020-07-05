import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';

import { Link } from 'react-router-dom'
import '../styles/style.css';

import { FaBed, FaMusic, FaMedapps, FaCouch, FaDesktop, FaTv, FaThermometerThreeQuarters, FaLaptop } from "react-icons/fa";

export default function Bedroom1() {
  return (
    <div>
        <Header>Home > Ambiente > Bedroom 1</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
				<div className="comodos">
					<Link to="/oi" style={{ textDecoration: 'none' }}>
						<ActionBtn description="bedroom 2">
							<FaBed color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="living room">
							<FaCouch color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>	
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="kitchen">
							<FaMedapps color="#c2c3bf" size="45px" />
						</ActionBtn>
					</Link>	
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="office">
							<FaLaptop color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>	
				</div>
				<div className="funcoes">
					<ActionBtn description="air conditioning">
						<FaThermometerThreeQuarters color="#c2c3bf" size="40px" />
					</ActionBtn>
					<ActionBtn description="lamp 1">
						<FaMedapps color="#c2c3bf" size="45px" />
					</ActionBtn>
					<ActionBtn description="lamp 2">
						<FaMedapps color="#c2c3bf" size="45px" />
					</ActionBtn>
					<ActionBtn description="lampshade">
						<FaMedapps color="#c2c3bf" size="45px" />
					</ActionBtn>
					<ActionBtn description="all lamps">
						<FaMedapps color="#c2c3bf" size="45px" />
					</ActionBtn>
					<ActionBtn description="tv">
						<FaTv color="#c2c3bf" size="40px" />
					</ActionBtn>
					<ActionBtn description="sound">
						<FaMusic color="#c2c3bf" size="40px" />
					</ActionBtn>	
				</div>

			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}


