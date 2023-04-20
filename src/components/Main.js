import { Link } from "react-router-dom";

export default function Main() {
	/*Image src: https://unsplash.com/photos/Q_Sei-TqSlc */
	return (
		<>
			<section className="front-page-slides">
				<img src="https://www.hiof.no/om/bilder/bildestripe.jpg" alt="hiof" />
				<span className="fotograf-forside">
					Foto: Bård Halvorsen, Høgskolen i Østfold
				</span>
				<div>
					<button className="study-btn">
						Finn studiet som passer deg!{" "}
						<i className="fa-solid fa-chevron-right"></i>
					</button>
					<button className="study-btn">
						Slik søker du <i className="fa-solid fa-chevron-right"></i>
					</button>
				</div>
			</section>
			<section className="faculty">
				<h3>Fakulteter ved Høgskolen i Østfold</h3>
				<article>
					<p>
						<i className="fa-solid fa-briefcase-medical"></i>
						Fakultet for helse, velferd og organisasjon
					</p>
					<p>
						<i className="fa-solid fa-globe"></i>
						Fakultet for lærerutdanninger og språk
					</p>
					<p>
						<i className="fa-solid fa-laptop-code"></i>
						Fakultet for informasjons-teknologi, ingeniørfag og økonomi
					</p>
					<p>
						<i className="fa-solid fa-masks-theater"></i>
						Akademi for scenekunst
					</p>
				</article>
			</section>
			<article className="calendar">
				<h3>Kommende arrangementer</h3>

				<img src="kalender.png" alt="eksempel på kalender" />
				<a href="https://www.siost.hiof.no/sosialt/aktivitetskalender">
					Se alle hos SIØ <i className="fa-solid fa-up-right-from-square"></i>
				</a>
			</article>
			<article className="akademiske-arrangementer">
				<h3>Akademiske arrangemententer</h3>
				<img src="akademiske.png" alt="akademiske arrangementer" />
				<Link to="dummypage">
					Se alle arrangementer <i className="fa-solid fa-chevron-right"></i>
				</Link>
			</article>
			<section className="aktuelt">
				<h3>Aktuelt</h3>
				<article>
					<img
						src="https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png"
						alt="placeholder"
					/>
					<div>
						<h4>Lorem</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
						<button>
							Les mer <i className="fa-solid fa-chevron-right"></i>
						</button>
					</div>
				</article>
				<article>
					<img
						src="https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png"
						alt="placeholder"
					/>
					<div>
						<h4>Lorem</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
						<button>
							Les mer <i className="fa-solid fa-chevron-right"></i>
						</button>
					</div>
				</article>{" "}
				<article>
					<img
						src="https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png"
						alt="placeholder"
					/>
					<div>
						<h4>Lorem</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
						<button>
							Les mer <i className="fa-solid fa-chevron-right"></i>
						</button>
					</div>
				</article>{" "}
				<article>
					<img
						src="https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png"
						alt="placeholder"
					/>
					<div>
						<h4>Lorem</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
						<button>
							Les mer <i className="fa-solid fa-chevron-right"></i>
						</button>
					</div>
				</article>
			</section>
		</>
	);
}
