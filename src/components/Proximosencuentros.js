"use client"

import { useEffect , useState } from "react";
import { API , insignia , elfetchData } from "@/Helpers/CONST";
import Loading from "./Loading";
import all from "@/styles/All.module.css";
import inicio from "@/styles/Inicio.module.css";

function Proximosencuentros() {
	const [fechaActualEnJuego, setfechaActualEnJuego] = useState("...");
	const [elloading, setelloading] = useState(<Loading />);
	const [htmlproximosencuentros, sethtmlproximosencuentros] = useState();
	
	useEffect(() => {
		elfetchData(API.fixture).then(x => {
			setfechaActualEnJuego( x.values[0] );
			
			let elhtml = [];
			for ( let count = 1; count <= x.values.length-1; count++ ) {
				const club = {
					local: x.values[ count ][ 0 ] ,
					visita: x.values[ count ][ 1 ] ,
					local_low: x.values[ count ][ 0 ].toLowerCase() ,
					visita_low: x.values[ count ][ 1 ].toLowerCase() ,
				}
				
				elhtml.push(
					<div key={ club.local_low + club.visita_low } className={ inicio.encuentro }>
						<p className={ `${ inicio.equipo } ${ inicio.izquierda }` }>{ club.local_low }</p>
						<p className={ inicio.vs }>
							<img width="20" height="20" src={ `${ insignia( club.local ) }` } alt={ club.local_low } />
							<img width="20" height="20" src={ `${ insignia( club.visita ) }` } alt={ club.visita_low } />
						</p>
						<p className={ `${ inicio.equipo } ${ inicio.derecha }` }>{ club.visita_low }</p>
					</div>
				);
			}
			// Quita el loading
			setelloading()
			// Imprime el html
			sethtmlproximosencuentros( elhtml );
		})
	}, []);

	return (
		<div className={ inicio.proximosencuentros }>
			<div className={ `${all.bloque} ${inicio.encuentros}` }>
				<strong className={ inicio.titulo }>Proximos encuentros</strong>
				<span className={ inicio.fecha }>Fecha <strong>{ fechaActualEnJuego }</strong> de <strong>26</strong></span>
				{ elloading }
				{ htmlproximosencuentros }
			</div>
		</div>
	);
}
export default Proximosencuentros;
