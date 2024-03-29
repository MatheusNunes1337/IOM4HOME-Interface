import React, { useState } from 'react';
import '../styles/style.css';

import { Link } from 'react-router-dom';

import { FaChevronDown, FaCircle } from "react-icons/fa";

export default function Aside() {

	let button;
	let connection_btn;


	let [btn_funcao, setButton1] = useState('desativado');
	let [btn_ambiente, setButton2] = useState('desativado');
	let [connected, setConection] = useState(false)


	
	if(connected) {
		connection_btn = <React.Fragment>
							<FaCircle color="#1f703d" size="15px" />
							<span className="conection_status">Connected</span>
						</React.Fragment>
	} else {
		connection_btn = <button className="reconect_btn + ' ' + botao">Reconect</button>
	}

	function btnPushed(e) {
		button = e.currentTarget.value;
		console.log(button);

		if(button === 'ambiente') {
			if(btn_ambiente === 'desativado'){
				setButton2(btn_ambiente = 'ativado')
				if(btn_funcao === 'ativado') {
					setButton1(btn_funcao = 'desativado')
				} 
			} 
		} else {
			if(btn_funcao === 'desativado') {
				setButton1(btn_funcao = 'ativado')
				if(btn_ambiente === 'ativado') {
					setButton2(btn_ambiente = 'desativado')
				}	
			}  
		}
	}


  return (
        <aside className="barra_lateral">
        	<div className="user">
				<img className="img_user" src={require('../assets/images/user-icon.png')} alt="imagem de perfil"/>
				<button className="icone_user + ' ' + botao"><FaChevronDown color="#c2c3bf" size="20px" /></button>
			</div>
			<span className="nome_user">Usuário 01</span>
			<span className="navegue">navegue por...</span>
			<Link to="/aa" style={{ textDecoration: 'none'}}><button value="funcao"
			className={"btn-nav" + ' ' + btn_funcao + ' ' + "botao"} onClick={(e) => btnPushed(e)}>Função</button></Link>
			<Link to="/ambiente/bedroom1" style={{ textDecoration: 'none' }}><button value="ambiente"
			className={"btn-nav" + ' ' + btn_ambiente + ' ' + "botao"} onClick={(e) => btnPushed(e)}>Ambiente</button></Link>
			{connection_btn}
			<img src={require('../assets/images/logo.png')} alt="logo" id="iom_logo" />    
        </aside>
  );
}