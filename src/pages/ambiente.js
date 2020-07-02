import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import '../styles/style.css';

export default function Ambiente() {
  return (
    <div>
        <Header>Home > Ambiente > Bedroom 1</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
				<nav className="locais">
					<ul>
						<li><img className="icone" src={require('../assets/images/cama.png')} alt="olá"/><span>quarto 2</span></li>
						<li><img className="icone" src={require('../assets/images/sofa.png')} alt="olá"/><span>estar</span></li>
						<li><img className="icone" src={require('../assets/images/sofa.png')} alt="olá"/><span>banheiro</span></li>
						<li><img className="icone" src={require('../assets/images/prato.png')} alt="olá"/><span>cozinha</span></li>
						<li><img className="passa" src={require('../assets/images/icone.png')} alt="olá"/></li>
					</ul>
				</nav>
				<nav className="locais">
					<ul>
						<li><img className="icone" src={require('../assets/images/termometro1.png')} alt="olá"/><span>climatização</span></li>
						<li><img className="icone" src={require('../assets/images/lampada1.png')} alt="olá"/><span>lâmpada 1</span></li>
						<li><img className="icone" src={require('../assets/images/lampada1.png')} alt="olá"/><span>lâmpada 2</span></li>
						<li><img className="icone" src={require('../assets/images/lampada.png')} alt="olá"/><span>abajour</span></li>
						<li><img className="icone" src={require('../assets/images/lampada.png')} alt="olá"/><span>todas lâmpadas</span></li>
						<li><img className="icone" src={require('../assets/images/tv.png')} alt="olá"/><span>televisor</span></li>
						<li><img className="icone" src={require('../assets/images/Som.png')} alt="olá"/><span>som</span></li>
					</ul>
				</nav>
			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}


