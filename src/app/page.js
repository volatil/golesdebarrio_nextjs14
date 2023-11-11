// import Image from 'next/image'
import Carrusel from '@/components/Carrusel';
import Cuentaregresiva from '@/components/Cuentaregresiva';
import Proximosencuentros from '@/components/Proximosencuentros';
import css from "../styles/Inicio.module.css";

export default function Page() {
	return (
		<main className={css.inicio} style={{marginTop: "-20px"}}>
			<Carrusel />
			<Cuentaregresiva />
			<Proximosencuentros />
		</main>
	)
}
