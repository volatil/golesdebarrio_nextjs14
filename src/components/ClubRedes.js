"use client"

import { useEffect , useState } from "react";
import { API , insignia , elfetchData } from "@/Helpers/CONST";
import Loading from "./Loading";
import especifico from "@/styles/ClubEspecifico.module.css";

function ClubRedes() {
	// const [fetch, setfetch] = useState("cargando");
	// const FETCH_API = "@/assets/json/20231006160722equipos.json";
	const [data, setData] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API.equipos); // La ruta relativa al archivo en la carpeta public
				const jsonData = await response.json();
				setData(jsonData);
				console.warn( jsonData );
			} catch (error) {
				console.error('Error al cargar el archivo JSON:', error);
			}
		};
		fetchData();
		
		{/*
		elfetchData( FETCH_API ).then((x) => {
			console.warn( `entre` );
			console.warn( x );
		})
		*/}
		{/*
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
		*/}
	}, []);

	if (!data) {
		return <Loading />;
	}

	return (
		<div>
			<h1>LISTO ! ✅</h1>
			{/* <h1>{data.title}</h1>
			<p>{data.description}</p> */}
			{/* Agrega el resto de tu lógica aquí */}
		</div>
	);
	
	{/*
	return (
		<div className={ especifico.redes }>
			<a href="#Instagram" title="Instagram">
				<img src="../assets/images/optimized/clubes/redes/instagram.jpg" alt="Instagram" />
				<p>Instagram</p>
			</a>
			<a href="#Facebook" title="Facebook">
				<img src="../assets/images/optimized/clubes/redes/facebook.jpg" alt="Facebook" />
				<p>Facebook</p>
			</a>
			<a href="#Maps" title="Maps">
			<img src="../assets/images/optimized/clubes/redes/maps.jpg" alt="Maps" />
				<p>Maps</p>
			</a>
		</div>
	);
	*/}
}
export default ClubRedes;
