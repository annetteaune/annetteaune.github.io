import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
const Navbar = ({setIsActive, isActive}) => {
	function mobilemenu() {
		setIsActive((current) => !current);
	}
	return (
		<nav>
			<button className="menu-btn" onClick={mobilemenu}>
				Meny   <i class="fa-solid fa-bars"></i>
			</button>
			<ul className={isActive ? "hide" : "menus"}>
				{menuItems.map((menu, index) => {
					const depthLevel = 0;
					return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
