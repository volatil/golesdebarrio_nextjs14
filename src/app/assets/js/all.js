const PROXIMAFECHA = "12112023";

// ELIGE LA KEY SI ESTAS EN LOCAL O NO
const keySelect = function() {
	const key = {
		dev: "AIzaSyDHUDNjy6NGP54wHbmiOc9MkwfvZG2g0L4" ,
		prod: "AIzaSyDDzEi2NZy-7NNBg0tznW4cxC1Wl95vSBA" ,
	}
	
	if ( location.href.includes("localhost") ) {
		return key.dev;
	}
	return key.prod;
}

// LISTA DE APIS
// FALSA
const API = {
	tabla: {
		primera: `/assets/json/20231006160722tabla-primera.json` ,
		segunda: `/assets/json/20231006160722tabla-segunda.json` ,
		tercera: `/assets/json/20231006160722tabla-tercera.json` ,
		senior: `/assets/json/20231006160722tabla-senior.json` ,
	} ,
	resultados: {
		primera: `/assets/json/20231006160722resultados-primera.json` ,
		segunda: `/assets/json/20231006160722resultados-segunda.json` ,
		tercera: `/assets/json/20231006160722resultados-tercera.json` ,
		senior: `/assets/json/20231006160722resultados-senior.json` ,
	} ,
	fixture: `/assets/json/20231006160722fixture.json` ,
	equipos: `/assets/json/20231006160722equipos.json` ,
}
// REAL
// const API = {
// 	tabla: {
// 		primera: `https://sheets.googleapis.com/v4/spreadsheets/1dWrLtB2JgTlbBiE1eDYAFOC1j_uQL8qNzTgRY9f_Mgg/values/Clasificación?key=${ keySelect() }` ,
// 		segunda: `https://sheets.googleapis.com/v4/spreadsheets/1vKxuXiW00uTr3hzuxX_Cpx1vLDkx6oo0kBf2RuI0KHo/values/Clasificación?key=${ keySelect() }` ,
// 		tercera: `https://sheets.googleapis.com/v4/spreadsheets/1YuR1WMXIgeTXcxS6pf3jEZC2OM4v81n_1WrUv2HIbF8/values/Clasificación?key=${ keySelect() }` ,
// 		senior: `https://sheets.googleapis.com/v4/spreadsheets/116Hx7iBrIRvwaFzWxjL2LYrtGRUnUWagV7NleKpnz5U/values/Clasificación?key=${ keySelect() }` ,
// 	} ,
// 	resultados: {
// 		primera: `https://sheets.googleapis.com/v4/spreadsheets/1dWrLtB2JgTlbBiE1eDYAFOC1j_uQL8qNzTgRY9f_Mgg/values/Calendario y Resultados?key=${ keySelect() }` ,
// 		segunda: `https://sheets.googleapis.com/v4/spreadsheets/1vKxuXiW00uTr3hzuxX_Cpx1vLDkx6oo0kBf2RuI0KHo/values/Calendario y Resultados?key=${ keySelect() }` ,
// 		tercera: `https://sheets.googleapis.com/v4/spreadsheets/1YuR1WMXIgeTXcxS6pf3jEZC2OM4v81n_1WrUv2HIbF8/values/Calendario y Resultados?key=${ keySelect() }` ,
// 		senior: `https://sheets.googleapis.com/v4/spreadsheets/116Hx7iBrIRvwaFzWxjL2LYrtGRUnUWagV7NleKpnz5U/values/Calendario y Resultados?key=${ keySelect() }` ,
// 	} ,
// 	fixture: `https://sheets.googleapis.com/v4/spreadsheets/17-sfjwJY_HjgRCB103ImSdcJe_r4vTqxtVkaodnt1eE/values/${PROXIMAFECHA}?key=${ keySelect() }` ,
// 	equipos: `https://sheets.googleapis.com/v4/spreadsheets/1YuR1WMXIgeTXcxS6pf3jEZC2OM4v81n_1WrUv2HIbF8/values/Nombre equipos?key=${ keySelect() }` ,
// }

// FETCH
const elfetchData = async url => {
	const response = await fetch(url);
	if (!response.ok) throw new Error('La solicitud no se pudo completar.');
	return await response.json();
};

// DEVUELVE LA INSIGNIA
const insignia = function( elescudo ) {
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

// MENU
$("header .menu").on("click", function(){
	$("body").toggleClass("menuactivo");
});