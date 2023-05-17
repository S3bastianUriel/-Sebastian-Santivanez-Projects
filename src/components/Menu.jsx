import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="https://sebastiansantivanez.netlify.app/" className="title">HOME</a>
				</li>
				<li>
					<a href="https://sebastiansantivanez-aboutme.netlify.app/">ABOUT ME</a>
				</li>
				<li>
					<a href="/">PROJECTS</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
