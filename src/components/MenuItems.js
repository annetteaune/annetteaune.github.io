import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";
/* 
Hele menysystemet er laget ved å følge en tutorial
Tutorial: https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/
Kilde for all kode for menysystem: https://github.com/Ibaslogic/react-multilevel-dropdown-menu
*/

const MenuItems = ({ items, depthLevel }) => {
	const [dropdown, setDropdown] = useState(false);

	let ref = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);

	const onMouseEnter = () => {
		window.innerWidth > 960 && setDropdown(true);
	};

	const onMouseLeave = () => {
		window.innerWidth > 960 && setDropdown(false);
	};

	const closeDropdown = () => {
		dropdown && setDropdown(false);
	};

	return (
		<li
			className="menu-items"
			ref={ref}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={closeDropdown}
		>
			{items.url && items.submenu ? (
				<>
					<button
						type="button"
						aria-haspopup="menu"
						aria-expanded={dropdown ? "true" : "false"}
						onClick={() => setDropdown((prev) => !prev)}
					>
						{window.innerWidth < 960 && depthLevel === 0 ? (
							items.title
						) : (
							<Link to={items.url}>{items.title}</Link>
						)}

						{depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
								0 && window.innerWidth > 960 ? (
							<span>&raquo;</span>
						) : (
							<span className="arrow" />
						)}
					</button>
					<Dropdown
						depthLevel={depthLevel}
						submenus={items.submenu}
						dropdown={dropdown}
					/>
				</>
			) : !items.url && items.submenu ? (
				<>
					<button
						type="button"
						aria-haspopup="menu"
						aria-expanded={dropdown ? "true" : "false"}
						onClick={() => setDropdown((prev) => !prev)}
					>
						{items.title}{" "}
						{depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
					</button>
					<Dropdown
						depthLevel={depthLevel}
						submenus={items.submenu}
						dropdown={dropdown}
					/>
				</>
			) : (
				<Link to={items.url}>{items.title}</Link>
			)}
		</li>
	);
};

export default MenuItems;


