import { Link } from "react-router-dom";
import Login from "./Login";

export default function Ansatte() {
	return (
		<>
			<section className="students-menu">
				<ul className="students-list">
					<Link to="/dummypage">
						<li>
							Tjenester <i className="fa-solid fa-chevron-right"></i>
						</li>
					</Link>
					<Link to="/dummypage">
						<li>
							Timeplaner <i className="fa-solid fa-chevron-right"></i>
						</li>
					</Link>
					<Link to="/dummypage">
						<li>
							Bibliotek <i className="fa-solid fa-chevron-right"></i>
						</li>
					</Link>
					<Link to="/dummypage">
						<li>
							Organisering <i className="fa-solid fa-chevron-right"></i>
						</li>
					</Link>
				</ul>
			</section>
			<span className="breadcrumb">
				Hjem <i className="fa-solid fa-chevron-right"> </i> For ansatte
			</span>
			<div className="links-student-container">
				<section className="shortcuts">
					<h4>Snarveier</h4>
					<ul>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe
							<i className="fa-solid fa-chevron-right"></i>
						</li>
					</ul>
				</section>
				<section className="profile">
					<h4>Linker</h4>
					<ul>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe <i className="fa-solid fa-chevron-right"></i>
						</li>
						<li>
							noe
							<i className="fa-solid fa-chevron-right"></i>
						</li>
					</ul>
				</section>
			</div>
		</>
	);
}
