import React, { FunctionComponent } from "react";
import { FaGlobe } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="navContainer">
			<FaGlobe className="icon" />
			<h3> my travel journal.</h3>
		</nav>
	);
}

export default Navbar;
