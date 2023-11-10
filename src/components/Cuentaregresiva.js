import Loading from "./Loading";

function Cuentaregresiva() {
	return (
		<div className="bloque cuentaregresiva">
			<p className="titulo">Proximo encuentro en:</p>
			<p className="cuenta">&nbsp;</p>
			<Loading />
			<span className="rayita"></span>
			<div className="fechas">
				<p className="encuentro-pasado"></p>
				<p className="encuentro-proximo"></p>
			</div>
			<div className="barraprogreso">
				<div className="progreso">
					<span>&nbsp;</span>
					<img src="../assets/images/optimized/balon.webp" alt="Balón" />
				</div>
			</div>
		</div>
	);
}
export default Cuentaregresiva;
