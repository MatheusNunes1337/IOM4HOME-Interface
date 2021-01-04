import React from 'react';

import Routes from './routes/routes.js'

import { ButtonProvider } from './contexts/buttonContext'


function App() {
  return (
  	<ButtonProvider>
  	 	<Routes/>
  	</ButtonProvider>
  );
}

export default App;
