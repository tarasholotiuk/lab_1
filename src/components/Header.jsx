import { Link, Outlet } from "react-router-dom";
// import Articles from "./Articles";

const Header = () => {
	return (
		<>
			<header>
				<h1>
					<Link to="/">Финансовый анализ рынка</Link>
				</h1>
			</header>
			<Outlet />
		</>
	);
};
export default Header;
