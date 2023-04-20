import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<Link to="/">
				<img
					src="https://kommunikasjon.ntb.no/data/images/00503/9a77e942-18f4-4594-9833-640d6f7f805e.png"
					alt="HIOF logo"
				/>
			</Link>
			<form>
				<input type="search" placeholder="Søk" />
				<button>
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</form>
		</header>
	);
}
