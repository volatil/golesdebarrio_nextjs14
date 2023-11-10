import Image from "next/image";
import laimagen from "../../public/assets/images/optimized/carrusel/202310230157.webp"
import { NOMBREPAGINA } from "@/Helpers/CONST";
import css from "../styles/Inicio.module.css";

function Carrusel() {
	return (
		<div className={css.carrusel}>
		<Image
			src={laimagen}
			alt={NOMBREPAGINA}
			width={340}
			height={126}
			priority
		/>
		</div>
	);
}
export default Carrusel;
