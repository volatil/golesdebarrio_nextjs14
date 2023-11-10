// ENVIA EL CORREO
$(".botonform").on("click", function(){
	const data = {
		nombre: $("form.bloque input[name=nombre]").val() ,
		correo: $("form.bloque input[name=email]").val() ,
		tema: $("main.contacto form > div select").val() ,
		mensaje: $("form.bloque textarea").val() ,
		todoelmensaje: () => {
			const mensaje = `
				Te envio un mensaje:
				<br>
				${data.nombre} (${data.correo})
				<br>
				<br>
				Tema: ${data.tema}
				<br>
				<br>
				MENSAJE:
				<br>
				${data.mensaje}
			`;
			return mensaje;
		},
	};
	
	if ( data.correo.includes("@") && data.correo.includes(".") ) {
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "contacto@golesdebarrio.cl",
			Password : "9A77BCF49FF8AA1F1CAD077EEC3EFA57B5F5",
			To : 'contacto@golesdebarrio.cl',
			From : "contacto@golesdebarrio.cl",
			Subject : `[WEB] Formulario de contacto`,
			Body : data.todoelmensaje(),
		}).then(
			message => {
				$("main.contacto form > .enviovalido").show();
				$("form.bloque input[name=nombre]").val("");
				$("form.bloque input[name=email]").val("");
				$("main.contacto form > div select").val("");
				$("form.bloque textarea").val("");
			}
		);
	} else {
		$("main.contacto form > .envioinvalido").show();
		setTimeout(() => {
			$("main.contacto form > .envioinvalido").hide();
		}, 3000);
	};
	
})