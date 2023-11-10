// RESULTADOS
elfetchData( API.resultados.primera ).then(x => {
	for ( let count1 = 1; count1 <= x.values.length-1; count1++ ) {
		const get = {
			jornada: x.values[ count1 ][ 0 ] ,
			local: x.values[ count1 ][ 1 ] ,
			goles: {
				local: x.values[ count1 ][ 2 ] ,
				visita: x.values[ count1 ][ 4 ] ,
			},
			visita: x.values[ count1 ][ 5 ] ,
		}
		
		const existeJornada = $(`main.resultados .primera .lajornada${get.jornada}` ).length >= 1;
		// si existe la jornada y hay goles, agrega el div de la jornada
		if ( !existeJornada && get.goles.local.length >= 1 ) {
			$("main.resultados .primera").prepend(`
				<h3>Fecha ${get.jornada}</h3>
				<div class="bloque jornada lajornada${get.jornada}">
					<ul></ul>
				</div>
			`);
		}
		
		if ( get.local.length >= 2 ) {
			$(`main.resultados .primera > .lajornada${get.jornada} > ul`).append(`
				<li class="lista" data-local="${get.local.toLowerCase()}" data-visita="${get.visita.toLowerCase()}">
					<p>
						<span class="local">
							${get.local.toLowerCase()}
						</span>
						<span class="resultado">
							<span>${ get.goles.local == "" ? "?" : get.goles.local }</span>
							<span>${ get.goles.visita == "" ? "?" : get.goles.visita }</span>
						</span>
						<span class="visita">
							${get.visita.toLowerCase()}
						</span>
					</p>
				</li>
			`);
		};
	};
	$("img.cargando").hide();
});
elfetchData( API.resultados.segunda ).then(x => {
	for ( let count1 = 1; count1 <= x.values.length-1; count1++ ) {
		const get = {
			jornada: x.values[ count1 ][ 0 ] ,
			local: x.values[ count1 ][ 1 ] ,
			goles: {
				local: x.values[ count1 ][ 2 ] ,
				visita: x.values[ count1 ][ 4 ] ,
			},
			visita: x.values[ count1 ][ 5 ] ,
		}
		
		const existeJornada = $(`main.resultados .segunda .lajornada${get.jornada}` ).length >= 1;
		// si existe la jornada y hay goles, agrega el div de la jornada
		if ( !existeJornada && get.goles.local.length >= 1 ) {
			$("main.resultados .segunda").prepend(`
				<h3>Fecha ${get.jornada}</h3>
				<div class="bloque jornada lajornada${get.jornada}">
					<ul></ul>
				</div>
			`);
		}
		
		if ( get.local.length >= 2 ) {
			$(`main.resultados .segunda > .lajornada${get.jornada} > ul`).append(`
				<li class="lista" data-local="${get.local.toLowerCase()}" data-visita="${get.visita.toLowerCase()}">
					<p>
						<span class="local">
							${get.local.toLowerCase()}
						</span>
						<span class="resultado">
							<span>${ get.goles.local == "" ? "?" : get.goles.local }</span>
							<span>${ get.goles.visita == "" ? "?" : get.goles.visita }</span>
						</span>
						<span class="visita">
							${get.visita.toLowerCase()}
						</span>
					</p>
				</li>
			`);
		};
	};
});
elfetchData( API.resultados.tercera ).then(x => {
	for ( let count1 = 1; count1 <= x.values.length-1; count1++ ) {
		const get = {
			jornada: x.values[ count1 ][ 0 ] ,
			local: x.values[ count1 ][ 1 ] ,
			goles: {
				local: x.values[ count1 ][ 2 ] ,
				visita: x.values[ count1 ][ 4 ] ,
			},
			visita: x.values[ count1 ][ 5 ] ,
		}
		
		const existeJornada = $(`main.resultados .tercera .lajornada${get.jornada}` ).length >= 1;
		// si existe la jornada y hay goles, agrega el div de la jornada
		if ( !existeJornada && get.goles.local.length >= 1 ) {
			$("main.resultados .tercera").prepend(`
				<h3>Fecha ${get.jornada}</h3>
				<div class="bloque jornada lajornada${get.jornada}">
					<ul></ul>
				</div>
			`);
		}
		
		if ( get.local.length >= 2 ) {
			$(`main.resultados .tercera > .lajornada${get.jornada} > ul`).append(`
				<li class="lista" data-local="${get.local.toLowerCase()}" data-visita="${get.visita.toLowerCase()}">
					<p>
						<span class="local">
							${get.local.toLowerCase()}
						</span>
						<span class="resultado">
							<span>${ get.goles.local == "" ? "?" : get.goles.local }</span>
							<span>${ get.goles.visita == "" ? "?" : get.goles.visita }</span>
						</span>
						<span class="visita">
							${get.visita.toLowerCase()}
						</span>
					</p>
				</li>
			`);
		};
	};
});
elfetchData( API.resultados.senior ).then(x => {
	for ( let count1 = 1; count1 <= x.values.length-1; count1++ ) {
		const get = {
			jornada: x.values[ count1 ][ 0 ] ,
			local: x.values[ count1 ][ 1 ] ,
			goles: {
				local: x.values[ count1 ][ 2 ] ,
				visita: x.values[ count1 ][ 4 ] ,
			},
			visita: x.values[ count1 ][ 5 ] ,
		}
		
		const existeJornada = $(`main.resultados .senior .lajornada${get.jornada}` ).length >= 1;
		// si existe la jornada y hay goles, agrega el div de la jornada
		if ( !existeJornada && get.goles.local.length >= 1 ) {
			$("main.resultados .senior").prepend(`
				<h3>Fecha ${get.jornada}</h3>
				<div class="bloque jornada lajornada${get.jornada}">
					<ul></ul>
				</div>
			`);
		}
		
		if ( get.local.length >= 2 ) {
			$(`main.resultados .senior > .lajornada${get.jornada} > ul`).append(`
				<li class="lista" data-local="${get.local.toLowerCase()}" data-visita="${get.visita.toLowerCase()}">
					<p>
						<span class="local">
							${get.local.toLowerCase()}
						</span>
						<span class="resultado">
							<span>${ get.goles.local == "" ? "?" : get.goles.local }</span>
							<span>${ get.goles.visita == "" ? "?" : get.goles.visita }</span>
						</span>
						<span class="visita">
							${get.visita.toLowerCase()}
						</span>
					</p>
				</li>
			`);
		};
	};
});

// NAVEGACION ENTRE SERIES
{
	$("main.resultados nav > ul > li").on("click", function(){
		$("main.resultados nav > ul > li").removeClass("activo");
		$(this).addClass("activo");
		const laserie = $(this).attr("data-serie");
		$("main.resultados > .serie").hide();
		$(`main.resultados > .serie.${laserie}`).show();
	});
};

// FIltrar por club
{
	elfetchData( API.equipos ).then(x => {
		const cantidad = x.values.length-7;
		
		for ( let count = 2; count <= cantidad; count++ ) {
			const equipo = x.values[ count ][1].toLowerCase();
			$("main.resultados .filtrar > select").append(`<option value="${equipo}">${equipo}</option>`)
		}
		
		$("main.resultados .filtrar > select").on("change", function(){
			const equipo_seleccionado = $( this ).val();
			
			if ( equipo_seleccionado == "todos los clubes" ) {
				$(`main.resultados .bloque.jornada > ul > li`).show();
			} else {
				const cantidadfechas = $("main.resultados .bloque.jornada").length-1;
				
				$("main.resultados .bloque.jornada").find("> ul > li").hide();
				$(`main.resultados .bloque.jornada > ul > li[data-local="${equipo_seleccionado}"]`).show();
				$(`main.resultados .bloque.jornada > ul > li[data-visita="${equipo_seleccionado}"]`).show();
			}
		});
	})
}