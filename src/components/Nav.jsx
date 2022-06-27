import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
	return (
		<div className="p-8">
			<Link to="/" className="mx-8">Home</Link>
			<Link to="/list" className="mx-8">Browse</Link>
			<HashLink to="/#map" className="mx-8">Map</HashLink>
		</div>
	);
};

export default Nav;
