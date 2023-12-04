import React from "react";

import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate();


	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>

			<button className="btn btn-primary" onClick={() => { navigate("/add") }}>navigate</button>

			<div className="ml-auto">
				<Link to="/add" className="btn btn-primary">
					<span>Add contact</span>
				</Link>
			</div>
		</nav>
	);
};
