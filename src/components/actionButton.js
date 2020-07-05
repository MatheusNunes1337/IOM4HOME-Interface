import React from 'react';
import '../styles/style.css';

export default function ActionBtn(props) {
  return (
        <div className="action_btn">
			<button>{props.children}</button>
			<span>{props.description}</span>
		</div>
  );
}