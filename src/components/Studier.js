export default function Studier() {
	return (
		<>
			<section className="front-page-slides">
				<img src="https://www.hiof.no/om/bilder/bildestripe.jpg" alt="hiof" />
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
			<section className="studieretninger">
				<h2>Studieretninger</h2>
				<ul>
					<li>Helse og velferd</li>
					<li>Ingeniør</li>
					<li>Samfunnsfag og språk</li>
					<li>Økonomi, administrasjon og ledelse</li>
					<li>Informasjonsteknologi</li>
					<li>Lærerutdanning og pedagogiske fag </li>
					<li>Scenekunst</li>
				</ul>
			</section>
			<section className="studieretninger">
				<h2>Våre campus</h2>
				<ul>
					<li>Campus Halden</li>
					<li>Campus Fredrikstad</li>
				</ul>
			</section>
			<section className="aktuelt">
				<h3>Studienytt</h3>
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
