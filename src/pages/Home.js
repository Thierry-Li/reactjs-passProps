import React, { useState } from "react";

let varia;
export function Home(props) {
	const [isActivated, setIsActivated] = useState(true);

	const functionA = (variable) => {
		variable = isActivated ? "MESSAGE DE HOME" : "";
		setIsActivated(!isActivated);

		props.propsARecevoir(variable);
		varia = variable;
	};

	return (
		<div>
			<h2>Home</h2>

			<p>input in Home onClick</p>
			<input
				type="submit"
				value="Afficher msg"
				onClick={(variable) => functionA(variable)}
			/>
			<p>{varia}</p>
		</div>
	);
}
