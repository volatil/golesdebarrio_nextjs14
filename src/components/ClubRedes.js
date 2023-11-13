"use client"

import { useEffect , useState } from "react";
import { API , insignia , elfetchData } from "@/Helpers/CONST";
import Loading from "./Loading";
import especifico from "@/styles/ClubEspecifico.module.css";

function ClubRedes( params ) {
	const NOMBREDELCLUB = String( params.nombredelclub ).toUpperCase().replaceAll("-", " ");
	
	const [data, setData] = useState(null);
	const [dataredes, setdataredes] = useState();
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API.equipos);
				const jsonData = await response.json();

				// state para el loading
				setData(jsonData);
				console.warn( jsonData );
				
				// array de datos
				const elArr = [];
				for ( let count = 2; count <= jsonData.values.length-7; count++ ) {
					const data = {
						id: 1 ,
						club: jsonData.values[count][ 1 ] ,
						instagram: jsonData.values[count][ 2 ] ,
						maps: jsonData.values[count][ 3 ] ,
					}
					if ( data.club == NOMBREDELCLUB ) {
						elArr.push( data );
					}
				}
				console.warn( elArr );
				setdataredes( elArr )
			} catch (error) {
				console.error('Error al cargar el archivo JSON:', error);
			}
		};
		fetchData();
	}, []);

	if (!data) {
		return <Loading />;
	}

	return (
		<>
			{
				dataredes.map(x => {
					return( 
						<div className={ especifico.redes } key={x.id}>
							{
								x.instagram && 
								(
									<a target="_blank" href={ x.instagram } title="Instagram">
										<img src="../assets/images/optimized/clubes/redes/instagram.jpg" alt="Instagram" />
										<p>Instagram</p>
									</a>
								)
							}
							{
								x.maps && 
								(
									<a href={ x.maps } title="Maps">
										<img src="../assets/images/optimized/clubes/redes/maps.jpg" alt="Maps" />
										<p>Maps</p>
									</a>
								)
							}
						</div>
					)
				})
			}
		</>
	);
}
export default ClubRedes;
