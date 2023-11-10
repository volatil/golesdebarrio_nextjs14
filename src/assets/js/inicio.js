const TARGETDATE = new Date('2023-11-12T13:30:00').getTime();
const ENCUENTROPASADO = "05 de Noviembre";
const ENCUENTROPROXIMO = "12 de Noviembre";


// CUENTA REGRESIVA
{
	const cuentaregresiva = function(){
		const currentDate = new Date().getTime();
		const timeLeft = TARGETDATE - currentDate;
		if (timeLeft <= 0) {
			clearInterval(interval);
			document.querySelector('.cuenta').innerHTML = 'En curso';
		} else {
			const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
			const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
			//  const countdownString = `${days}días y ${hours}horas ${minutes}m ${seconds}s`;
			const countdownString = `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
			document.querySelector('.cuenta').innerHTML = countdownString;
		}
	}
	
	const avancebalon = function(){
		let losdias_totales = 7;
		let dias_restantes = $(".cuentaregresiva > .cuenta").text().split(" ")[0];
		let dias_avanzados = losdias_totales-Number(dias_restantes);
		let un_dia = 14.2;
		let porcentaje_avanzado = dias_avanzados*un_dia;
	
		$(".barraprogreso > .progreso > span").css("width", `${porcentaje_avanzado}%`)
		$(".barraprogreso > img").css("left", `${porcentaje_avanzado}%`)
	}
	
	$("main.inicio > .cuentaregresiva .fechas .encuentro-pasado").html( ENCUENTROPASADO );
	$("main.inicio > .cuentaregresiva .fechas .encuentro-proximo").html( ENCUENTROPROXIMO );

	const interval = setInterval(() => {
		cuentaregresiva();
		avancebalon();
	}, 1000);
};

// INICIO
elfetchData(API.fixture).then(x => {
	$("main.inicio > .proximosencuentros .encuentros > .fecha").html( `Fecha <strong>${x.values[0]}</strong> de <strong>26</strong>` );
	for ( let count = 1; count <= x.values.length-1; count++ ) {
		const local = x.values[ count ][ 0 ];
		const visita = x.values[ count ][ 1 ];
		
		$("main.inicio > .proximosencuentros .encuentros").append(`
			<div class="encuentro">
				<p class="equipo izquierda">${local.toLowerCase()}</p>
				<p class="vs">
					<img width="20" height="20" src="/assets/images/optimized/clubes/${insignia( local )}" alt="${local.toLowerCase()}" />
					<img width="20" height="20" src="/assets/images/optimized/clubes/${insignia( visita )}" alt="${visita.toLowerCase()}" />
				</p>
				<p class="equipo derecha">${visita.toLowerCase()}</p>
			</div>
		`);
	}
	$("img.cargando").hide();
})