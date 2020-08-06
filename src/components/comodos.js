import React, { useState } from 'react';
import '../styles/style.css';
import ActionBtn from './actionButton'
import { Link } from 'react-router-dom'

export default function Comodos(props) {

	let comodos = [];
	let icone
	let formatted

	props.itens.map(pushComodo)

	function pushComodo(comodo, i) {

		let formatted = comodo.split(" ");
		if(formatted.length === 2) {
			if(formatted[1].length !== 1) {
				formatted =  formatted.join('_')
			} else {
				formatted =  formatted.join(' ').replace(/\s/g, '')
				console.log(formatted)
			}
		}

		
		const iniciais = comodo.slice(0,3)

		switch (iniciais) {
			case 'bed':
				icone = 'bed'
				break
			case 'off':
				icone = 'laptop'
				break
			case 'liv':
				icone = 'couch'
				break
			case 'air':
				icone = 'ar'
				break
			case 'ent':
				icone = 'tv'
				break
			case 'lig':
				icone = 'lamp'
				break					
		}

		

		comodos.push(<Link to={`/ambiente/${formatted}`} key={i} style={{ textDecoration: 'none' }}>
					<ActionBtn description={comodo} icon={icone}/>	
				</Link>)
	}


	return (
		<div className="comodo_section">
			{comodos}
		</div>
	);
}
