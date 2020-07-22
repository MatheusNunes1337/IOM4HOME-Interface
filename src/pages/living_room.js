import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';

import { Link } from 'react-router-dom'
import '../styles/style.css';

import { FaBed, FaMusic, FaMedapps, FaCouch, FaTv, FaThermometerThreeQuarters, FaLaptop } from "react-icons/fa";

export default function LivingRoom() {

  return (
    <div>
        <Header>Home > Ambiente > Living Room</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
				<div className="comodos">
					<Link to="/ambiente/bedroom1" style={{ textDecoration: 'none' }}>
						<ActionBtn description="bedroom 1">
							<FaBed color="#c2c3bf" size="40px" />
						</ActionBtn>
					</Link>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<ActionBtn description="bedroom 2">
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
					<ActionBtn description="air conditioning" equipamento="ar_condicionado">
						<FaThermometerThreeQuarters color="#c2c3bf" size="40px" />
					</ActionBtn>
					<ActionBtn description="lamp 1" equipamento="lamp_1">
						<FaMedapps color="#c2c3bf" size="45px" />
					</ActionBtn>
					<ActionBtn description="lamp 2" equipamento="lamp_2">
						<FaMedapps color="#c2c3bf" size="45px" />
					</ActionBtn>
					<ActionBtn description="all lamps" equipamento="all_lamps">
						<FaMedapps color="#c2c3bf" size="45px" />
					</ActionBtn>
					<ActionBtn description="tv" equipamento="tv">
						<FaTv color="#c2c3bf" size="40px" />
					</ActionBtn>
					<ActionBtn description="sound" equipamento="sound">
						<FaMusic color="#c2c3bf" size="40px" />
					</ActionBtn>	
				</div>
			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}


