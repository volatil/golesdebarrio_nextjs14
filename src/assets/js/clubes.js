// MAIN CLUBES
{
	// BUSCADOR POR CLUB
	$("main.clubes > .elbuscadordeclubs > input").keyup(function(){
		const lobuscado = $(this).val();

		if ( lobuscado.length <= 0 ) {
			$("main.clubes > .losclubes > .club").show();
		} else {
			$.each( $("main.clubes > .losclubes > .club"), function(){
				const nombreclub = $(this).attr("data-club");
				
				if ( nombreclub.includes( lobuscado ) ) {
					$(this).show();
				} else {
					$(this).hide();
				};
			});
		}

	});
	
	// ABRE MODAL CON DETALLES DEL CLUB
	$("body").on("click", "main.clubes > .losclubes > .club", function(){
		const dataclub = {
			escudo: $(this).find("img").attr("src") ,
			nombre: $(this).find("p").html() ,
			instagram: $(this).find(".informacion span[data-rrss=instagram]").html() ,
			maps: $(this).find(".informacion span[data-rrss=maps]").html() ,
			boton: {
				instagram: function() {
					if ( dataclub.instagram.length >= 2 ) {
						const html = `<a class="boton" target="_blank" href="${dataclub.instagram}" title="${dataclub.nombre}">visitar <img src="/assets/images/optimized/arrow-right-white.webp" alt="ir" /></a>`;
						return html;
					}
					return "Sin información";
				} ,
				maps: function() {
					if ( dataclub.maps.length >= 2 ) {
						const html = `<a class="boton" target="_blank" href="${dataclub.maps}" title="${dataclub.nombre}">visitar <img src="/assets/images/optimized/arrow-right-white.webp" alt="ir" /></a>`;
						return html;
					}
					return "Sin información";
				} ,
			} ,
		}
		
		$(".modal-clubes-contenido > div.contenido").html(`
			<div class="titulo">
				<img src="${dataclub.escudo}" alt="${dataclub.nombre}" />
				<p class="nombreclub">${dataclub.nombre}</p>
			</div>
			<div class="datosinteres">
				<p>Datos de Interes</p>
				<div class="botones">
					<div class="instagram">
						<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNy44IDJoOC40QzE5LjQgMiAyMiA0LjYgMjIgNy44djguNGE1LjggNS44IDAgMCAxLTUuOCA1LjhINy44QzQuNiAyMiAyIDE5LjQgMiAxNi4yVjcuOEE1LjggNS44IDAgMCAxIDcuOCAybS0uMiAyQTMuNiAzLjYgMCAwIDAgNCA3LjZ2OC44QzQgMTguMzkgNS42MSAyMCA3LjYgMjBoOC44YTMuNiAzLjYgMCAwIDAgMy42LTMuNlY3LjZDMjAgNS42MSAxOC4zOSA0IDE2LjQgNEg3LjZtOS42NSAxLjVhMS4yNSAxLjI1IDAgMCAxIDEuMjUgMS4yNUExLjI1IDEuMjUgMCAwIDEgMTcuMjUgOEExLjI1IDEuMjUgMCAwIDEgMTYgNi43NWExLjI1IDEuMjUgMCAwIDEgMS4yNS0xLjI1TTEyIDdhNSA1IDAgMCAxIDUgNWE1IDUgMCAwIDEtNSA1YTUgNSAwIDAgMS01LTVhNSA1IDAgMCAxIDUtNW0wIDJhMyAzIDAgMCAwLTMgM2EzIDMgMCAwIDAgMyAzYTMgMyAwIDAgMCAzLTNhMyAzIDAgMCAwLTMtM1oiLz48L3N2Zz4=" alt="${dataclub.nombre}" />
						<p>Instagram:</p>
						${dataclub.boton.instagram()}
					</div>
					<div class="mapas">
						<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE2LjI3MiAxMC4yNzJhNCA0IDAgMSAxLTggMGE0IDQgMCAwIDEgOCAwWm0tMiAwYTIgMiAwIDEgMS00IDBhMiAyIDAgMCAxIDQgMFoiLz48cGF0aCBkPSJNNS43OTQgMTYuNTE4YTkgOSAwIDEgMSAxMi43MjQtLjMxMmwtNi4yMDYgNi41MThsLTYuNTE4LTYuMjA2Wm0xMS4yNzYtMS42OTFsLTQuODI3IDUuMDdsLTUuMDctNC44MjdhNyA3IDAgMSAxIDkuODk3LS4yNDNaIi8+PC9nPjwvc3ZnPg==" alt="${dataclub.nombre}" />
						<p>Mapa:</p>
						${dataclub.boton.maps()}
					</div>
				</div>
			</div>
		`);

		// APARECE!
		$(".modal-clubes-fondo").show();
		$(".modal-clubes-contenido").show();
	});
	// CIERRA MODAL CON DETALLES DEL CLUB
	$(".modal-clubes-fondo, .modal-clubes-contenido > .cerrar > img").on("click", function(){
		// DESAPARECE!
		$(".modal-clubes-fondo").hide();
		$(".modal-clubes-contenido").hide();
	});
};

// CLUBES
elfetchData( API.equipos ).then(x => {
	for ( let count = 2; count <= x.values.length-7; count++ ) {
		const club = {
			nombre: x.values[ count ][ 1 ] ,
			instagram: function() {
				let instagram = x.values[ count ][ 2 ];

				if ( instagram != undefined ) {
					return instagram;
				}
				
				return "";
			} ,
			maps: function() {
				let maps = x.values[ count ][ 3 ];

				if ( maps != undefined ) {
					return maps;
				}
				
				return "";
			} ,
		};
		
		$("main.clubes > .losclubes").prepend(`
			<div class="club" data-club="${club.nombre.toLowerCase()}">
				<img src="/assets/images/optimized/clubes/${insignia(club.nombre)}" />
				<p >${club.nombre.toLowerCase()}</p>
				<div class="informacion">
					<span data-rrss="instagram">${club.instagram()}</span>
					<span data-rrss="maps">${club.maps()}</span>
				</div>
			</div>
		`);
	}
	$("img.cargando").hide();
});
