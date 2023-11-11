import all from "@/styles/All.module.css";
import css from "@/styles/Auspiciadores.module.css";

function Auspiciador( params ) {
	const { link , nombre , imagen } = params;
	
	return (
		<a className={css.auspiciador} href={ link } target="_blank" title={ nombre }>
			<img src={ imagen } alt={ nombre } />
		</a>
	);
}

function Auspiciadores() {
	return (
		<main className={css.auspiciadores}>
			<h2>AUSPICIADORES</h2>
			<div className={`${all.bloque} ${css.losauspiciadores}`}>
				<Auspiciador link="https://www.instagram.com/lala_socks_/" nombre="Lala Socks" imagen="/assets/images/optimized/auspiciadores/lalasocks.jpg" />
				<Auspiciador link="https://www.instagram.com/apisweethome" nombre="Apisweethome" imagen="/assets/images/optimized/auspiciadores/apisweethome.jpg" />
				<Auspiciador link="https://clickzapatilla.cl/" nombre="Click Zapatilla" imagen="/assets/images/optimized/auspiciadores/clickzapatilla.jpg" />
			</div>
		</main>
	);
}
export default Auspiciadores;
