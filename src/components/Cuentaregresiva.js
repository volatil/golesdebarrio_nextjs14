"use client"

import { useEffect , useState } from "react";
import Loading from "./Loading";
import all from "@/styles/All.module.css";
import inicio from "@/styles/Inicio.module.css";

function Cuentaregresiva() {
	const TARGETDATE = new Date('2023-11-12T13:30:00').getTime();
	const ENCUENTROPASADO = "05 de Noviembre";
	const ENCUENTROPROXIMO = "12 de Noviembre";
	
	const [balonWidth, setBalonWidth] = useState();
	const [balonLeft, setBalonLeft] = useState();
	const [lacuentaregresiva, setlacuentaregresiva] = useState(" ");
	const [cargando, setcargando] = useState(<Loading />);
	
	useEffect(() => {
		
		const avancebalon = function(lacuentaregresiva){
			let losdias_totales = 7;
			let dias_restantes = String( lacuentaregresiva ).split(" ")[0];
			let dias_avanzados = losdias_totales-Number(dias_restantes);
			let un_dia = 14.2;
			let porcentaje_avanzado = dias_avanzados*un_dia;
		
			setBalonWidth( `${porcentaje_avanzado}%` );
			setBalonLeft( `${porcentaje_avanzado}%` );
		}
		
		
		const cuentaregresiva = function(){
			const currentDate = new Date().getTime();
			const timeLeft = TARGETDATE - currentDate;
			if (timeLeft <= 0) {
				clearInterval(interval);
				// document.querySelector('.cuenta').innerHTML = 'En curso';
				setlacuentaregresiva( "En curso" )
				setcargando()
			} else {
				const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
				const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
				const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

				setlacuentaregresiva( `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos` )
				setcargando()
				return `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`
				
			}
		}
		
		
		const interval = setInterval(() => {
			cuentaregresiva();
			avancebalon( cuentaregresiva() )
		}, 1000);
	}, []);
	
	return (
		<div className={`${all.bloque} ${inicio.cuentaregresiva}`}>
			<p className={inicio.titulo}>Proximo encuentro en:</p>
			<p id="lacuenta" className={ inicio.cuenta }>
				{ lacuentaregresiva }
				{cargando}
			</p>
			<span className={ inicio.rayita }></span>
			<div className={ inicio.fechas }>
				<p className={ inicio.encuentropasado }>{ ENCUENTROPASADO }</p>
				<p className={ inicio.encuentroproximo }>{ ENCUENTROPROXIMO }</p>
			</div>
			<div className={ inicio.barraprogreso }>
				<div className={ inicio.progreso }>
					<span style={{ width: balonWidth }}>&nbsp;</span>
				</div>
				<img style={{ left: balonLeft }} src="../assets/images/optimized/balon.webp" alt="Balón" />
			</div>
		</div>
	);
}
export default Cuentaregresiva;
