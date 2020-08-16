import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Aside from '../components/aside';
import Comodos from '../components/comodos'
import Equipamentos from '../components/equipamentos'

import '../styles/style.css';


export default function Bathroom() {
  return (
    <div>
        <Header>Home > Ambiente > Bathroom</Header>
        <div className="conteudo">
        	<Aside></Aside>
        	<main className="principal">
        		<Comodos itens={['bedroom 1', 'bedroom 2', 'living room', 'kitchen', 'office']} />
        		<Equipamentos equipamentos={['lamp 1', 'lamp 2']} />
			</main>
        </div>
        <Footer></Footer>
    </div>
  );
}


