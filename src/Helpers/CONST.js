export class Metadata {
	static NOMBRE = "Goles de Barrio";
	static DESCRIPTION = "Todos los resultados, posiciones y más";
	static URL = "https://golesdebarrio.cl/";
	static IMAGE = "/assets/images/optimized/metadata/1200x1200.jpg"

	constructor({ nombre }) {
		this.nombre = nombre;
	}
	
	static( elstatic ) {
		return Metadata[elstatic];
	}
	
	title() {
		return `${this.nombre.replaceAll("%20", " ")} | ${Metadata.NOMBRE}`;
	}
};

export const API = {
	tabla: {
		primera: `/json/20231012223703tabla-primera.json` ,
		segunda: `/json/20231012223703tabla-segunda.json` ,
		tercera: `/json/20231012223703tabla-tercera.json` ,
		senior: `/json/20231012223703tabla-senior.json` ,
	} ,
	resultados: {
		primera: `/json/20231012223703resultados-primera.json` ,
		segunda: `/json/20231012223703resultados-segunda.json` ,
		tercera: `/json/20231012223703resultados-tercera.json` ,
		senior: `/json/20231012223703resultados-senior.json` ,
	} ,
	fixture: `/json/20231012223703fixture.json` ,
	equipos: `/json/20231012223703equipos.json` ,
}

export const NOMBREPAGINA = "Goles de Barrio";
export const CLUBES = [ { id: 1 , nombre: "ESTRELLA CENTRAL" } , { id: 2 , nombre: "UNION CORDILLERA" } , { id: 3 , nombre: "UNION FONCEA" } , { id: 4 , nombre: "EL HIGUERAL" } , { id: 5 , nombre: "SAN ESTEBAN" } , { id: 6 , nombre: "LAS BANDURRIAS" } , { id: 7 , nombre: "SANTA CLARA" } , { id: 8 , nombre: "COLO COLO FARIAS" } , { id: 9 , nombre: "LOS CHACAYES" } , { id: 10 , nombre: "EL COBRE" } , { id: 11 , nombre: "LAS GOLONDRINAS" } , { id: 12 , nombre: "INDEPENDIENTE" } , { id: 14 , nombre: "UNION EL SAUCE" } , { id: 15 , nombre: "NOGALES TOCORNAL"} ];

// DEVUELVE LA INSIGNIA
export const insignia = function( elescudo ) {
	const ruta = "/assets/images/optimized/clubes/";
	
	switch( elescudo ) {
		case "ESTRELLA CENTRAL":
			elescudo = "estrellacentral.webp";
			break;
		case "UNION CORDILLERA":
			elescudo = "unioncordillera.webp";
			break;
		case "UNION FONCEA":
			elescudo = "unionfoncea.webp";
			break;
		case "EL HIGUERAL":
			elescudo = "elhigueral.webp";
			break;
		case "SAN ESTEBAN":
			elescudo = "sanesteban.webp";
			break;
		case "LAS BANDURRIAS":
			elescudo = "lasbandurrias.webp";
			break;
		case "SANTA CLARA":
			elescudo = "santaclara.webp";
			break;
		case "COLO COLO FARIAS":
			elescudo = "colocolofarias.webp";
			break;
		case "LOS CHACAYES":
			elescudo = "loschacayes.webp";
			break;
		case "EL COBRE":
			elescudo = "elcobre.webp";
			break;
		case "LAS GOLONDRINAS":
			elescudo = "lasgolondrinas.webp";
			break;
		case "INDEPENDIENTE":
			elescudo = "independiente.webp";
			break;
		case "UNION EL SAUCE":
			elescudo = "unionelsauce.webp";
			break;
		case "NOGALES TOCORNAL":
			elescudo = "nogalestocornal.webp";
			break;
		default:
			elescudo = "sininsignia.webp";
	}
	
	return ruta + elescudo;
};

// FETCH
export const elfetchData = async url => {
	const response = await fetch(url);
	if (!response.ok) throw new Error('La solicitud no se pudo completar.');
	return await response.json();
};