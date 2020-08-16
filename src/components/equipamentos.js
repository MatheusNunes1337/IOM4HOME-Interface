import React from 'react';
import '../styles/style.css';
import ActionBtn from './actionButton'

export default function Equipamentos(props) {

	let equipamentos = [];
	let icone
	let formatted

	props.equipamentos.map(pushEquip)

	function pushEquip(equip, i) {

		let formatted = equip.split(" ");
		if(formatted.length === 2) {
			formatted =  formatted.join('_')	
		}

		
		const iniciais = equip.slice(0,3)

		switch (iniciais) {
			case 'all':
				icone = 'lamp'
				break
			case 'lam':
				icone = 'lamp'
				break
			case 'tv':
				icone = 'tv'
				break
			case 'air':
				icone = 'ar'
				break
			case 'sou':
				icone = 'sound'
				break
			case 'com':
				icone = 'laptop'
				break
			case 'lap':
				icone = 'laptop'
				break							
		}

		equipamentos.push(<ActionBtn description={equip} key={i} equipamento={formatted} icon={icone}/>)
	}


	return (
		<div className="funcoes">
			{equipamentos}
		</div>
	);
}
