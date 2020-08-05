import React, { useState } from 'react';
import '../styles/style.css';
import ActionBtn from './actionButton'
import { Link } from 'react-router-dom'

export default function Comodos(props) {

	let aux = [];
	let icone
	console.log(props.itens)
	props.itens.forEach(pushComodo)

	function pushComodo(comodo) {
		
		if(comodo === 'bedroom1' || comodo === 'bedroom2') {
			icone = 'bed'
		} else if(comodo === 'kitchen' || comodo === 'office') {
			icone = 'laptop'
		}
		else if(comodo === 'livingRoom') {
			icone = 'couch'
		}

		aux.push(<Link to={`/ambiente/${comodo}`} style={{ textDecoration: 'none' }}>
					<ActionBtn description={comodo} icon={icone}/>	
				</Link>)
	}

	console.log(aux)


	return (
		<div className="comodo_section">
			{aux}
		</div>
	);
}
