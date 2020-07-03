import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import '../styles/style.css';

import { FaBed, FaMusic, FaMedapps, FaCouch, FaDesktop, FaTv, FaThermometerThreeQuarters, FaLaptop } from "react-icons/fa";

export default function Ambiente() {
  return (
    <div>
        <Header>Home > Ambiente > Bedroom 1</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
				<div className="comodos">
					<div className="interact_btn">
						<button><FaBed color="#c2c3bf" size="40px" /></button>
						<span>bedroom 2</span>
					</div>
					<div className="interact_btn">
						<button><FaCouch color="#c2c3bf" size="40px" /></button>
						<span>living room</span>
					</div>
					<div className="interact_btn">
						<button>Oi</button>
						<span>kitchen</span>
					</div>
					<div className="interact_btn">
						<button><FaLaptop color="#c2c3bf" size="40px" /></button>
						<span>office</span>
					</div>
					
				</div>
				<div className="funcoes">
					<div className="interact_btn">
						<button><FaThermometerThreeQuarters color="#c2c3bf" size="40px" /></button>
						<span>air conditioning</span>
					</div>
					<div className="interact_btn">
						<button><FaMedapps color="#c2c3bf" size="45px" /></button>
						<span>oi</span>
					</div>
					<div className="interact_btn">
						<button><FaMedapps color="#c2c3bf" size="45px" /></button>
						<span>lamp 2</span>
					</div>
					<div className="interact_btn">
						<button><FaMedapps color="#c2c3bf" size="45px" /></button>
						<span>lampshade</span>
					</div>
					<div className="interact_btn">
						<button><FaMedapps color="#c2c3bf" size="45px" /></button>
						<span>all lamps</span>
					</div>
					<div className="interact_btn">
						<button><FaTv color="#c2c3bf" size="40px" /></button>
						<span>tv</span>
					</div>
					<div className="interact_btn">
						<button><FaMusic color="#c2c3bf" size="40px" /></button>
						<span>sound</span>
					</div>
				</div>

			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}


