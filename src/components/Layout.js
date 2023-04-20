import Footer from "./Footer";
import Header from "./Header";

import { Link, Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function Layout() {
	return (
		<>
			<Header />
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
