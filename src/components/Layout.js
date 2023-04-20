import Footer from "./Footer";
import Header from "./Header";

import { Link, Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function Layout({setIsActive, isActive}) {
	return (
		<>
			<Header />
			<Navbar setIsActive={setIsActive} isActive={isActive} />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
