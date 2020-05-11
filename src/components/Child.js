import React, { useState } from "react";

export const Child = (props) => {
	const [title, setTitle] = useState("");
	const [isActivated, setIsActivated] = useState(false);

	let onFormSubmit = (e) => {
		e.preventDefault();
		props.onFormSubmitFromChild(title);
	};

	const functionA = (variable) => {
		variable = isActivated ? "PROUT" : "";
		setIsActivated(!isActivated);
		props.propsARecevoir(variable);
	};

	return (
		<div
			style={{
				backgroundColor: "grey",
			}}
		>
			<h1
				style={{
					borderTop: "dotted blue",
					paddingTop: 20,
				}}
			>
				Debut Child
			</h1>
			<p style={{ color: "red" }}>{props.propsAPasser}</p>

			<form
				onSubmit={(title) => {
					onFormSubmit(title);
				}}
			>
				<label>
					Input à envoyer au Parent MainPage.js :
					<input
						type="text"
						name="name"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
				</label>
				<input type="submit" value="Envoyer" />
			</form>

			<p>visible in Child : {title}</p>

			<p>input in Child onClick</p>
			<input
				type="submit"
				value="Envoyer"
				onClick={(variable) => functionA(variable)}
			/>
			<h1
				style={{
					borderBottom: "dotted blue",
					paddingBottom: 20,
				}}
			>
				FIN Child
			</h1>
		</div>
	);
};
