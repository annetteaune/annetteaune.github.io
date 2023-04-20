import { useState } from "react";
import Login from "./Login";
import SubMenuStudents from "./SubMenuStudents";
import { subMenuItems } from "../subMenuItems";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import StudentOversikt from "./StudentOversikt";

export default function ForStudents() {
	const [display, setDisplay] = useState("none");
	return (
		<>
			<section className="students-menu">
				<ul className="students-list">
					<Link to="https://hiof.instructure.com/">
						<li>
							Canvas <i className="fa-solid fa-chevron-right"></i>
						</li>
					</Link>
					<Link to="/dummypage/">
						<li>
							Timeplaner <i className="fa-solid fa-chevron-right"></i>
						</li>
					</Link>
					<Link to="/dummypage/">
						<li>
							Biblioteket <i className="fa-solid fa-chevron-right"></i>
						</li>
					</Link>
					<Link to="/for-studenter/book-grupperom">
						<li>
							Book grupperom
							<i className="fa-solid fa-chevron-right"></i>
						</li>
					</Link>
				</ul>
			</section>

			<span className="breadcrumb">
				Hjem <i className="fa-solid fa-chevron-right"> </i> For studenter
			</span>
			<div className="stud-container">
				<div className="links-student-container">
					<section className="profile">
						<Login setDisplay={setDisplay} display={display} />
					</section>
				</div>
				<StudentOversikt display={display} />
			</div>
		</>
	);
}
