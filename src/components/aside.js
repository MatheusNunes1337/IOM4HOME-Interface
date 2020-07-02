import React from 'react';
import '../styles/style.css';

export default function Aside() {
  return (
        <aside className="barra_lateral">
        	<div className="user">
				<img className="img_user" src={require('../assets/images/vini.png')} alt="imagem de perfil"/>
				<img className="icone_user" src={require('../assets/images/icone2.png')} alt="icone de usuário"/>
			</div>
			<span className="nome_user">Vinícios da Costa</span>
			<span className="navegue">navegue por...</span>
			<a href="aa"><button className="btn-nav">Função</button></a>
			<a href="ambientes/ambientes.html"><button class="btn-nav">Ambiente</button></a>
			<img src={require('../assets/images/logo.png')} alt="logo"/>    
        </aside>
  );
}