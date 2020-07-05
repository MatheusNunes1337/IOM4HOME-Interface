import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

//import Routes from './routes';
import Bedroom1 from './pages/bedroom1';
import Home from './pages/home';


function App() {
  return (
  	 <Router> 
  	 	<Switch>
  	 		<Route path="/ambiente/bedroom1" exact component={Bedroom1} />
  	 		<Route path="/" component={Home} />
  	 	</Switch>	
  	 </Router>
  );
}

export default App;
