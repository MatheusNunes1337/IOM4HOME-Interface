import React from 'react';
import '../styles/style.css';

import { Link } from 'react-router-dom';

import { FaChevronDown, FaCircle } from "react-icons/fa";

export default function Aside() {
  return (
        <aside className="barra_lateral">
        	<div className="user">
				<img className="img_user" src={require('../assets/images/vini.png')} alt="imagem de perfil"/>
				<button className="icone_user"><FaChevronDown color="#c2c3bf" size="20px" /></button>
			</div>
			<span className="nome_user">Vinícios da Costa</span>
			<span className="navegue">navegue por...</span>
			<Link to="/aa" style={{ textDecoration: 'none'}}><button className="btn-nav">Função</button></Link>
			<Link to="/ambientes" style={{ textDecoration: 'none' }}><button className="btn-nav">Ambiente</button></Link>
			<FaCircle color="#1f703d" size="15px" /><span className="conection_status">Connected</span>
			<img src={require('../assets/images/logo.png')} alt="logo" id="iom_logo" />    
        </aside>
  );
}