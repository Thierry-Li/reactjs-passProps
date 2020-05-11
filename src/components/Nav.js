import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
	return (
		<>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};
