import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

import '../styles/style.css';


export default function Bedroom2() {
  return (
    <div>
        <Header>Home > Ambiente > Bedroom 2</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 1', 'living room', 'kitchen', 'bathroom', 'office']} />
        		<Equipamentos equipamentos={['air conditioning', 'lamp 1', 'lampshade', 'all lamps', 'tv', 'sound']} />
			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}


