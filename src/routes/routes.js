import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

//pages
import Bedroom1 from '../pages/bedroom1';
import Bedroom2 from '../pages/bedroom2';
import Bathroom from '../pages/bathroom';
import Kitchen from '../pages/kitchen';
import Office from '../pages/office';
import Home from '../pages/home';
import LivingRoom from '../pages/living_room';

import { ButtonProvider } from '../contexts/buttonContext'

export default function Routes() {

	return (
		<ButtonProvider>
			<Router> 
	  	 		<Switch>
		  	 		<Route path="/ambiente/bedroom1">
		  	 			<Bedroom1 />
		  	 		</Route>
		  	 		<Route path="/ambiente/living_room">
		  	 			<LivingRoom />
		  	 		</Route>
			        <Route path="/ambiente/bedroom2">
			           <Bedroom2 />
			        </Route>
			         <Route path="/ambiente/bathroom">
			           <Bathroom />
			         </Route>
			        <Route path="/ambiente/kitchen">
			           <Kitchen />
			        </Route>
			          <Route path="/ambiente/office">
			           <Office />
			        </Route>
		  	 		<Route path="/">
		  	 			<Home />
		  	 		</Route>
	  	 		</Switch>	
	  	 	</Router>
  	 	</ButtonProvider>
	)
}