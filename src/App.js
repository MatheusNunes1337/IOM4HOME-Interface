import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

//pages
import Bedroom1 from './pages/bedroom1';
import Home from './pages/home';
import LivingRoom from './pages/living_room';


function App() {
  return (
  	 <Router> 
  	 	<Switch>
  	 		<Route path="/ambiente/bedroom1">
  	 			<Bedroom1 />
  	 		</Route>
  	 		<Route path="/ambiente/living_room">
  	 			<LivingRoom />
  	 		</Route>
  	 		<Route path="/">
  	 			<Home />
  	 		</Route>
  	 	</Switch>	
  	 </Router>
  );
}

export default App;
