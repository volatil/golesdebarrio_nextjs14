// TABLA
const traeTablas = function({ api , serie }){
	elfetchData( api ).then(x => {
		for ( let count = 1; count <= 14; count++ ) {
			const data = {
				posicion: x.values[ count ][ 0 ] ,
				club: x.values[ count ][ 1 ] ,
				pts: x.values[ count ][ 2 ] ,
				pj: x.values[ count ][ 3 ] ,
				pg: x.values[ count ][ 4 ] ,
				pe: x.values[ count ][ 5 ] ,
				pp: x.values[ count ][ 6 ] ,
				gf: x.values[ count ][ 7 ] ,
			}
			
			$(`main.tabla > .${serie} .latabla`).append(`
				<div class="posicion">
					<div class="pos">${data.posicion}</div>
					<div class="club">
						<img src="/assets/images/optimized/clubes/${insignia( data.club )}">
						<span>${data.club}</span>
					</div>
					<div class="pts">${data.pts}</div>
					<div class="pj">${data.pj}</div>
					<div class="pg">${data.pg}</div>
					<div class="pe">${data.pe}</div>
					<div class="pp">${data.pp}</div>
					<div class="gf">${data.gf}</div>
				</div>
			`);
		 }
	});
}

traeTablas({ api: API.tabla.primera , serie: "primera" });
traeTablas({ api: API.tabla.segunda , serie: "segunda" });
traeTablas({ api: API.tabla.tercera , serie: "tercera" });
traeTablas({ api: API.tabla.senior , serie: "senior" });

// NAVEGACION ENTRE SERIES
{
	$("main.tabla nav > ul > li").on("click", function(){
		$("main.tabla nav > ul > li").removeClass("activo");
		$(this).addClass("activo");
		const laserie = $(this).attr("data-serie");
		$("main.tabla > .serie").hide();
		$(`main.tabla > .serie.${laserie}`).show();
	});
}
// CREA TABLA GENERAL: toma datos del resto de series, las deja dentro de la general, las suma y esconde las otras series menos el total general
{
	$(document).ready(function(){
		setTimeout(() => {
			// AGREGA CLUB Y PTS PRIMERA
			$.each( $(".serie.primera .posicion"), function(){
				let img = $(this).find("> div.club img").attr("src");
				let club = $(this).find("> div.club span").html();
				let puntos = $(this).find("> div.pts").html();
				
				$(".serie.general .latabla").append(`
						<div class="posicion" data-club="${club}">
							<div></div>
							<div class="club">
								<img src="${img}" />
								<span class="nombre">${club}</span>
							</div>
							<div style="display: none;" class="puntos primera">${puntos}</div>
						</div>
				`);
			});
			$.each( $(".serie.segunda .posicion"), function(){
				let club = $(this).find("> div.club span").html();
				let puntos = $(this).find("> div.pts").html();
				
				$(`.serie.general .latabla .posicion[data-club="${club}"]`).append(`<div style="display: none;" class="puntos segunda">${puntos}</div>`);
			});
			$.each( $(".serie.tercera .posicion"), function(){
				let club = $(this).find("> div.club span").html();
				let puntos = $(this).find("> div.pts").html();
				
				$(`.serie.general .latabla .posicion[data-club="${club}"]`).append(`<div style="display: none;" class="puntos tercera">${puntos}</div>`);
			});
			$.each( $(".serie.senior .posicion"), function(){
				let club = $(this).find("> div.club span").html();
				let puntos = $(this).find("> div.pts").html();
				
				$(`.serie.general .latabla .posicion[data-club="${club}"]`).append(`<div style="display: none;" class="puntos senior">${puntos}</div>`);
			});
			
			
			$.each( $(".serie.general .posicion"), function(){
				const res = {
					primera: Number( $(this).find(".primera").html() ) ,
					segunda: Number( $(this).find(".segunda").html() ) ,
					tercera: Number( $(this).find(".tercera").html() ) ,
					senior: Number( $(this).find(".senior").html() ) ,
				}
				const suma = res.primera + res.segunda + res.tercera + res.senior;
				const losCeros = function( lasuma ) {
					if ( String( lasuma ).length == 1 ) {
						return `00${lasuma}`;
					} else if ( String( lasuma ).length == 2 ) {
						return `0${lasuma}`;
					} else {
						return lasuma;
					}
				}
			
				$( this ).attr("data-general", losCeros(suma));
				$(this).append(`<div class="general">${ suma }</div>`);
			});
			
			var $proveedor      = $( ".serie.general .latabla .posicion" );
			var $proveedores    = $( ".serie.general .latabla" );
			$proveedor.sort(function(a,b) {
				return a.dataset.general < b.dataset.general ? 1 : -1;
			}).appendTo( $proveedores );

			// Fija las posiciones
			for ( let count = 0; count <= $("main.tabla > .serie.general > .latabla > .posicion").length-1; count ++ ) {
				$( $("main.tabla > .serie.general > .latabla > .posicion")[ count ] ).find("> div:nth-child( 1 )").html( count+1 )
			}
			$("img.cargando").hide();
		}, 2000);
		
	});
};
