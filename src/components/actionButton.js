import React, { useState } from 'react';
import '../styles/style.css';

export default function ActionBtn(props) {

	let equipamento;

	let [equip_status, setStatus] = useState('desligado');
	//let [all_lamps, setAll_lamps] = useState('desligado');

	function turnOn(e) {
		equipamento = e.currentTarget.value;
		console.log(equipamento);
		console.log(props.description);

  		if(equip_status === 'desligado') {
  			setStatus(equip_status = 'ligado');
  			console.log('liguei o' +  equipamento);
  		} else {
  			turnOff(e)
  		}
  	}

  	function turnOff(e) {
  		setStatus(equip_status = 'desligado');
  		console.log('desliguei o ' +  equipamento);
  	}

  return (


        <div className={'action_btn' + ' ' + equip_status}>
			<button onClick={(e) => turnOn(e)} value={props.equipamento}>{props.children}</button>
			<span>{props.description}</span>
		</div>
  );
}
