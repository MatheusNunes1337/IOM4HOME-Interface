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
				<div className="alertas">
					<ActionBtn>
						<FaThermometerThreeQuarters color="#c2c3bf" size="40px" />
					</ActionBtn>
					<ActionBtn>
						<FaMedapps color="#c2c3bf" size="45px" />
					</ActionBtn>
				</div>
			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}
