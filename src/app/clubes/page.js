import Todoslosclubes from "@/components/Todoslosclubes";
import clubes from "@/styles/Clubes.module.css";

function Clubes() {
	return (
		<section className={ clubes.clubes }>
			<h2>CLUBES</h2>
			
			<div className={ clubes.elbuscadordeclubs }>
				<input type="text" placeholder="Busca tu Club" />
				<img src="/assets/images/optimized/buscar.webp" alt="Busca tu Club" />
			</div>
			
			<Todoslosclubes />
		</section>
	);
}
export default Clubes;
