import { Route, Routes } from "react-router";
import { routes } from "./Routes/routes";

function App() {
	return (
		<Routes>
			{routes.map((route, i) => {
				const { path, name, element } = route;
				return <Route key={i} path={path} name={name} element={element} />;
			})}
		</Routes>
	);
}

export default App;
