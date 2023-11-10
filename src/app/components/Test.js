"use client"

import {API} from "../Helpers/CONST";
import { useState } from "react";
// import $ from "jquery";

export default function Page() {
	const [insignia, setInsignia] = useState("sininsignia");
	
	async function algo() {
		const res = await fetch(API).then(x => x.json())
		console.log( res );
	}
	
	function lainsignia () {
		const seleccionado = document.getElementById("select").value;
		console.warn( seleccionado );
		setInsignia( seleccionado )
		// return seleccionado
		// setinsignia( seleccionado );
	}
	
	return (
		<>
			<select id="select">
				<option value="estrellacentral">Estrella Central</option>
				<option value="unionfoncea">Unión Foncea</option>
			</select>
			{/* <button onClick={algo}> JEJE </button> */}
			<button onClick={lainsignia}> JEJE </button>
			{/* <img src="../../../public/assets/images/clubes/colocolofarias.jpg" alt="Club" /> */}
			<img src={`../assets/images/clubes/${insignia}.jpg`} alt="Club" />
		</>
	);
}
