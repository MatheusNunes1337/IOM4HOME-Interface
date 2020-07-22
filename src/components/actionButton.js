import React, { useState } from 'react';
import '../styles/style.css';

export default function ActionBtn(props) {


	let equipamento;

	let [equip_status, setStatus] = useState('desligado');
	//let [all_lamps, setAll_lamps] = useState('desligado');

	function turnOn(e) {
		equipamento = e.currentTarget.value;

  		if(equip_status === 'desligado') {
  			//faz a chamada da api
  			setStatus(equip_status = 'ligado');
  			
  		} else {
  			turnOff(e)
  		}
  	}

  	function turnOff(e) {
  		setStatus(equip_status = 'desligado');
  	}

  return (


    <div className={'action_btn' + ' ' + equip_status}>
			<button onClick={(e) => props.equipamento ? turnOn(e) : ''} value={props.equipamento}>{props.children}</button>
			<span>{props.description}</span>
		</div>
  );
}
