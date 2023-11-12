import Todoslosclubes from "@/components/Todoslosclubes";

export async function generateMetadata({ params }) {
	return {
		title: "Clubes | Goles de Barrio",
	}
}

function Clubes() {
	return (
		<section className="clubes">
			<p>Home Clubes</p>
			<Todoslosclubes />
		</section>
	);
}
export default Clubes;
