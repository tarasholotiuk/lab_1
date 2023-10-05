import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Details from "./components/Details";
import Header from "./components/Header";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Articles />} />
					<Route path="/article/:id" element={<Details />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
