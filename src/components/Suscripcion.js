import { useState } from "react";

import all from "@/styles/All.module.css";
import sus from "@/styles/Suscripcion.module.css";

function Suscripcion() {
	const enviarSuscripcion = function(){
		const data = {
			correo: document.querySelector(".suscribir_correo").value ,
			todoelmensaje: () => {
				const mensaje = `
					Quiere suscribirse: ${data.correo}<br>
				`;
				return mensaje;
			},
		}
	
		if ( !data.correo.includes("@") ) {
			const mensaje = `
				<div class="suscrito_mensaje_validacion" style="background: #ff6f6f;border: 1px solid #b91a00;display: flex;padding: 10px;border-radius: 6px;margin-top: 10px;">
					<p style="color: black;margin: 0;text-align: center;">Tu correo debe contener <strong>@</strong></p>
				</div>
			`;
			document.querySelector('#suscribete').insertAdjacentHTML('beforeend', mensaje);
		} else if ( !data.correo.includes(".") ) {
			const mensaje = `
				<div class="suscrito_mensaje_validacion" style="background: #ff6f6f;border: 1px solid #b91a00;display: flex;padding: 10px;border-radius: 6px;margin-top: 10px;">
					<p style="color: black;margin: 0;text-align: center;">Tu correo debe contener <strong>.</strong></p>
				</div>
			`;
			document.querySelector('#suscribete').insertAdjacentHTML('beforeend', mensaje);
		} else if ( data.correo.includes(" ") ) {
			const mensaje = `
				<div class="suscrito_mensaje_validacion" style="background: #ff6f6f;border: 1px solid #b91a00;display: flex;padding: 10px;border-radius: 6px;margin-top: 10px;">
					<p style="color: black;margin: 0;text-align: center;">Tu correo no debe contener <strong>espacios</strong></p>
				</div>
			`;
			document.querySelector('#suscribete').insertAdjacentHTML('beforeend', mensaje);
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
					const mensaje = `
						<div class="suscrito_mensaje_validacion" style="background: #19a95a;border: 1px solid #07612f;display: flex;padding: 10px;border-radius: 6px;margin-top: 10px;">
							<p style="color: white;margin: 0;text-align: center;">¡Gracias por suscribirte!</p>
						</div>
					`;
					document.querySelector('#suscribete').insertAdjacentHTML('beforeend', mensaje);
					document.querySelector(".suscribir_correo").value = "";
				}
			);
		}
	
		setTimeout(function () {
			document.querySelector(".suscrito_mensaje_validacion").remove();
		}, 3000);
	}
	
	return (
		<section id="suscribete" className={ `${all.bloque} ${sus.suscribete}` }>
			<script src="https://smtpjs.com/v3/smtp.js"></script>
			<div className={ sus.titulo }>
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAYAAAAmNZ4aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7VbLccIwEJXM50wJePjMcMMdQAVJKgjuACqw0wGpAFNBSgAqgBszMGCVYDjyc95mZCJ7cDAB+8Sb0VharfZp16uVOJNYLBZNznmJpQjf9716vT6jPnddtwzBAK3FMgCcE5vNxuCr1eoL41eWIeDkOB8hFbQjlgJOp1MJtpvUx7ecVychoObouj5kDwSi2tU0zYKnv1wQ+hd0HSh+YAOC3YE/8kdoUYH8dhAad7lc2ux/hCU4ZJMNhdRTdULEu92ujY9znkR41uu1S0eNJQQ22wLZFF1LEfePx2M7lrjRaIhKpWJip6QkSAYj5VwuN4UHAwpdHCHN0QnBZke0Rq6dYdyCzV6hUIj3OECtVhtDWcciWxF3YGgEgveoPiWP9DI4IUTSrVarBvJkcokjlFwg41GF+XxeLhaLFLbOeRHnM7S3w+FA0bDU5KEzut/vTYqeaociQv9cDkWeXYE0YOI/T4gEfcrUJpqLiDDliAiMO3EeRqGxhECNdWTy9S9M29vt1khKSrjqsQrpfQ/h/0T4KYkEwtcLCv8tuIk4sgGd3YHEoX40nsRP4tQQOk4onxZLCfQCCRHTDRI8SQCbZQAqPBrqrwlij2UHjy6Rn9tI3kAv6Kb6riZS1PShYRjeN4wkAh0kUA/KAAAAAElFTkSuQmCC" alt="No te pierdas de nada" />
				<p>¡no te pierdas nada!</p>
			</div>
			<p>Recibe actualizaciones de resultados, próximos encuentros y noticias.</p>
			<div className={ sus.suscribir }>
				<input type="email" className="suscribir_correo" placeholder="correo@gmail.com" />
				<div className={ all.boton } onClick={ enviarSuscripcion }>
					<p>registrar</p>
					<img src="/assets/images/optimized/arrow-right-white.webp" alt="enviar mensaje" />
				</div>
			</div>
		</section>
	);
}
export default Suscripcion;
