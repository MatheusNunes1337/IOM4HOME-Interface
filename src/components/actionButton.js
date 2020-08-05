import React, { useState } from 'react';
import '../styles/style.css';

import { FaBed, FaMusic, FaMedapps, FaCouch, FaTv, FaThermometerThreeQuarters, FaLaptop } from "react-icons/fa";

export default function ActionBtn(props) {

  let icon;
  switch(props.icon) {
    case 'bed' :
      icon = <FaBed color="#c2c3bf" size="40px" />
      console.log('oi')
      break
    case 'ar':
      icon = <FaThermometerThreeQuarters color="#c2c3bf" size="40px" />
      break
    case 'lamp':
      icon = <FaMedapps color="#c2c3bf" size="45px" />
      break
    case 'tv':
      icon = <FaTv color="#c2c3bf" size="40px" />
      break
    case 'sound':
      icon = <FaMusic color="#c2c3bf" size="40px" />
      break
    case 'laptop':
      icon = <FaLaptop color="#c2c3bf" size="40px" />
      break
    case 'couch':
      icon = <FaCouch color="#c2c3bf" size="40px" /> 
      break         
  }


	let equipamento;

	let [equip_status, setStatus] = useState('desligado');
	
	function turnOn(e) {
		//equipamento = e.currentTarget.value;

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
			<button onClick={(e) => props.equipamento ? turnOn(e) : ''} value={props.equipamento}>{icon}</button>
			<span>{props.description}</span>
		</div>
  );
}
