import { Link } from "react-router-dom";

export default function StudentOversikt({display}) {
	return (
		<>
			<div style={{ display: display }}>
				<article className="oversikt">
			
					<div>
						<section className="timeplan">
							<h4>Kommende forelesninger:</h4>
							<div className="emne-oversikt color1">
								<span className="emne">
									Utvikling av interaktive nettsteder
								</span>
								<span>Mandag 4. april</span>
								<span> Kl: 10.15</span>
								<span>Sted: Aud 2</span>
								<span>Forelesere: A.C. Karlsen, T.M. Akerbæk</span>
							</div>
							<div className="emne-oversikt color2">
								<span className="emne">Innføring i datasikkerhet</span>
								<span>Tirsdag 5. april</span>
								<span> Kl: 12.15</span>
								<span>Sted: Aud Max</span>
								<span>Forelesere: O.E. Ørebæk</span>
							</div>
							<div className="emne-oversikt color1">
								<span className="emne">
									Utvikling av interaktive nettsteder
								</span>
								<span>Torsdag 7. april</span>
								<span> Kl: 10.15</span>
								<span>Sted: Aud 2</span>
								<span>Forelesere: A.C. Karlsen, T.M. Akerbæk</span>
							</div>
                            <Link to="/timeplan">
							<button className="more-btn">Vis mer</button></Link>
						</section>
						<section className="innleveringer">
							<h4>Aktive innleveringer:</h4>
							<div className="emne-oversikt color1">
								<span className="emne">Innføring i datasikkerhet</span>
								<span>Arbeidskrav 4</span>
								<span>Forfall: Fredag 7 april kl 14:00</span>
								<span className="delivered">Status: Levert</span>
							</div>
							<div className="emne-oversikt color2">
								<span className="emne">
									Utvikling av interaktive nettsteder
								</span>
                                <span>Oblig 5</span>
								<span>Forfall: Mandag 10 april kl 12:00</span>
								<span className="not-delivered">Status: Ikke levert</span>
							</div>
                            <button className="more-btn">Vis mer</button>
						</section>
					</div>
				</article>
			</div>
		</>
	);
}
