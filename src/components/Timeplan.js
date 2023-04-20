export default function Timeplan(){
    return (
			<>
				<span className="breadcrumb">
					Hjem <i className="fa-solid fa-chevron-right"> </i> For studenter{" "}
					<i className="fa-solid fa-chevron-right"> </i> Din timeplan
				</span>
				<img
					className="timeplanimg"
					src="../timeplan.png"
					alt="eksempel timeplan"
				/>
			</>
		);
}