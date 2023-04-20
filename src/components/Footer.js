import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			<div>
				<img
					className="footerimg"
					src="https://kommunikasjon.ntb.no/data/images/00503/9a77e942-18f4-4594-9833-640d6f7f805e.png"
					alt="HIOF logo"
				/>
			</div>
			<div className="footercontent">
				<div className="contact">
					<span className="contact-header">Kontakt:</span>
					<span className="bold">Telefon:</span> <span>69 60 80 00</span>
					<span className="bold">E-post: </span>
					<span> postmottak@hiof.no</span>
					<Link to="/kontakt-oss" className="fullinfo">
						Fullstendig kontaktinformasjon
					</Link>
					<button>Tilgjengelighetserklæring</button>
				</div>
				<div className="socials">
					<span className="socials-header">Følg oss:</span>
					<div>
						<i className="fa-brands fa-square-facebook"></i>
						<i className="fa-brands fa-square-twitter"></i>
						<i className="fa-brands fa-square-instagram"></i>
						<i className="fa-brands fa-linkedin"></i>
						<i className="fa-brands fa-square-youtube"></i>
					</div>
				</div>
			</div>
		</footer>
	);
}
