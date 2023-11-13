"use client"

import { useEffect , useState } from "react";
import { API , elfetchData } from "@/Helpers/CONST";
import Loading from "./Loading";
import especifico from "@/styles/ClubEspecifico.module.css";

function ClubRedes( params ) {
	const NOMBREDELCLUB = String( params.nombredelclub ).toUpperCase().replaceAll("-", " ");
	
	const [data, setData] = useState(null);
	const [dataredes, setdataredes] = useState();
	
	useEffect(() => {
		elfetchData( API.equipos ).then( x => {
			// state para el loading
			setData( x );
			
			// array de datos
			const elArr = [];
			for ( let count = 2; count <= x.values.length-7; count++ ) {
				const data = {
					id: 1 ,
					club: x.values[count][ 1 ] ,
					instagram: x.values[count][ 2 ] ,
					maps: x.values[count][ 3 ] ,
				}
				if ( data.club == NOMBREDELCLUB ) {
					elArr.push( data );
				}
			}
			setdataredes( elArr )
		});
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
									<a target="_blank" href={ x.maps } title="Maps">
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
