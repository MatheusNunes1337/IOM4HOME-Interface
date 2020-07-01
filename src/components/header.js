import React from 'react';
import '../styles/style.css';


export default function Header({ children }) {
  return (
    <header className="topo">
		  <h1>{children}</h1>
	  </header>
  );
}
