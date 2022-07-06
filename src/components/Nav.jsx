import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Nav() {
  return (
    <div className="p-8">
      <Link to="/" className="mx-8 text-lg">Home</Link>
      <Link to="/list" className="mx-8 text-lg">Browse</Link>
      <HashLink to="/#map" className="mx-8 text-lg">Map</HashLink>
      <Link to="/disclamer" className="mx-8 text-lg">Disclamer</Link>
    </div>
  );
}

export default Nav;
