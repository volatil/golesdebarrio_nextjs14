export const API = "../assets/json/20231006160722equipos.json";
export const NOMBREPAGINA = "Goles de Barrio";
export const CLUBES = [ { id: 1 , nombre: "unionfoncea" } , { id: 2 , nombre: "colocolofarias" } , { id: 3 , nombre: "elcobre" } , { id: 4 , nombre: "elhigueral" } , { id: 5 , nombre: "estrellacentral" } , { id: 6 , nombre: "independiente" } , { id: 7 , nombre: "lasbandurrias" } , { id: 8 , nombre: "lasgolondrinas" } , { id: 9 , nombre: "loschacayes" } , { id: 10 , nombre: "nogalestocornal" } , { id: 11 , nombre: "sanesteban" } , { id: 12 , nombre: "santaclara" } , { id: 14 , nombre: "unioncordillera" } , { id: 15 , nombre: "unionelsauce" } ];

// DEVUELVE LA INSIGNIA
export const insignia = function( elescudo ) {
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
	
	return elescudo;
};