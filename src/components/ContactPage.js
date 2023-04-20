export default function ContactPage() {
	return (
		<>
			<h2>Kontaktinformasjon</h2>
			<div className="contact-wrapper">
				<article>
					<span className="bold">Sentralbord:</span>
					<span>69 60 80 00</span>
					<span className="bold">Faks:</span>
					<span>69 60 80 01</span>
					<span className="bold">E-post:</span>
					<span>
						<a href="mailto:postmottak@hiof.no">postmottak@hiof.no</a>
					</span>
				</article>
				<article>
					<span className="bold">Postadresse:</span>
					<span>Høgskolen i Østfold</span>
					<span>Postboks 700 </span>
					<span>1757 Halden</span>
					<span className="bold">Postpakkeadresse:</span>
					<span>Høgskolen i Østfold </span>
					<span>B R A veien 4 </span>
					<span>1757 Halden</span>
				</article>
			</div>
			<section className="map">
				<iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=B%20R%20A%20veien%204,%20halden+(My%20Business%20Name)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
					<a href="https://www.maps.ie/distance-area-calculator.html">
						measure acres/hectares on map
					</a>
				</iframe>
			</section>
			<article className="enheter">
				<img
					src="enheter.png"
					alt="liste over enheter"
					className="enheterimg"
				/>
			</article>
		</>
	);
}
