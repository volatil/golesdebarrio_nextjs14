// SUSCRIBIR
$("div.suscribir div.boton").on("click", function(){
	const data = {
		correo: $("section.suscribete input.suscribir_correo").val(),
		todoelmensaje: () => {
			const mensaje = `
				Quiere suscribirse: ${data.correo}<br>
			`;
			return mensaje;
		},
	};
	
	if ( !data.correo.includes("@") ) {
		$("section.suscribete").append(`
			<div class="suscrito_mensaje_validacion" style="background: #ff6f6f;border: 1px solid #b91a00;display: flex;padding: 10px;border-radius: 6px;margin-top: 10px;">
				<p style="color: black;margin: 0;text-align: center;">Tu correo debe contener <strong>@</strong></p>
			</div>
		`);
	} else if ( !data.correo.includes(".") ) {
		$("section.suscribete").append(`
			<div class="suscrito_mensaje_validacion" style="background: #ff6f6f;border: 1px solid #b91a00;display: flex;padding: 10px;border-radius: 6px;margin-top: 10px;">
				<p style="color: black;margin: 0;text-align: center;">Tu correo debe contener <strong>.</strong></p>
			</div>
		`);
	} else if ( data.correo.includes(" ") ) {
		$("section.suscribete").append(`
			<div class="suscrito_mensaje_validacion" style="background: #ff6f6f;border: 1px solid #b91a00;display: flex;padding: 10px;border-radius: 6px;margin-top: 10px;">
				<p style="color: black;margin: 0;text-align: center;">Tu correo no debe contener <strong>espacios</strong></p>
			</div>
		`);
	} else {
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "contacto@golesdebarrio.cl",
			Password : "9A77BCF49FF8AA1F1CAD077EEC3EFA57B5F5",
			To : 'contacto@golesdebarrio.cl',
			From : "contacto@golesdebarrio.cl",
			Subject : `[WEB] Nuevo Suscriptor`,
			Body : data.todoelmensaje(),
		}).then(
			message => {
				$("section.suscribete").append(`
					<div class="suscrito_mensaje_validacion" style="background: #19a95a;border: 1px solid #07612f;display: flex;padding: 10px;border-radius: 6px;margin-top: 10px;">
						<p style="color: white;margin: 0;text-align: center;">¡Gracias por suscribirte!</p>
					</div>
				`);
				$("section.suscribete input.suscribir_correo").val("");
			}
		);
	};
	
	setTimeout(() => {
		$("section.suscribete .suscrito_mensaje_validacion").remove();
	}, 3000);
	
})