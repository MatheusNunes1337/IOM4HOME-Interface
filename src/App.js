import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

//import Routes from './routes';
import Ambiente from './pages/ambiente';
import Home from './pages/home';


function App() {
  return (
  	 <Router> 
  	 	<Switch>
  	 		<Route path="/" exact component={Ambiente} />
  	 		<Route path="/oi" component={Home} />
  	 	</Switch>	
  	 </Router>
  );
}

export default App;
