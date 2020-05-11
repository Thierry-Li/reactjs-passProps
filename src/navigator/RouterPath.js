import React from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";

const funcGereProps = (variable) => {
	console.log(variable);
};

export const RouterPath = () => {
	return (
		<div>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/users">
					<Users />
				</Route>
				{/* <Route
          path="/"
          render={() => (
            <Home propsARecevoir={variable => funcGereProps(variable)} />
          )}
        /> */}
				<Route
					path="/"
					render={() => (
						<Home propsARecevoir={(variable) => funcGereProps(variable)} />
					)}
				/>
			</Switch>
		</div>
	);
};
