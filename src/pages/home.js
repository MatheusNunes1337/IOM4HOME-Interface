import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import '../styles/style.css';

export default function Home() {
  return (
    <div>
        <Header>Iom4home interface</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
				<nav className="locais">
					<ul>
						<li><img className="icone" src={require('../assets/images/termometro.png')} alt="oi"/><span>climatização</span></li>
						<li><img className="icone" src={require('../assets/images/cama.png')} alt="oi"/><span>quarto 1</span></li>
						<li><img className="icone" src={require('../assets/images/sofa.png')} alt="oi"/><span>estar 1</span></li>
						<li><img className="icone" src={require('../assets/images/tela.png')} alt="oi"/><span>entreterimento</span></li>
						<li><img className="icone" src={require('../assets/images/lampada.png')} alt="oi"/><span>iluminação</span></li>
					</ul>
				</nav>
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
