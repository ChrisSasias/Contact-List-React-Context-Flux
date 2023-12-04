import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
	const nav = useNavigate();

	return (

		<footer className="footer mt-auto py-3 text-center">
			<p>
				<button className="btn btn-primary" onClick={() => { nav("/List") }}>
					navigate
				</button>
			</p>
		</footer>

	);
};