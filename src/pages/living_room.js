import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import ActionBtn from '../components/actionButton';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

import { Link } from 'react-router-dom'
import '../styles/style.css';

export default function LivingRoom() {

  return (
    <div>
        <Header>Home > Ambiente > Living Room</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 1', 'bedroom 2', 'kitchen', 'office']} />
        		<Equipamentos equipamentos={['air conditioning', 'lamp 1', 'lamp 2', 'all lamps', 'tv', 'sound']} />
			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}


