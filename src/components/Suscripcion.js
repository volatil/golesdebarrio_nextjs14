import all from "@/styles/All.module.css";
import sus from "@/styles/Suscripcion.module.css";

function Suscripcion() {
	return (
		<section className={ `${sus.bloque} ${sus.suscribete}` }>
			<div className={ sus.titulo }>
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAYAAAAmNZ4aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7VbLccIwEJXM50wJePjMcMMdQAVJKgjuACqw0wGpAFNBSgAqgBszMGCVYDjyc95mZCJ7cDAB+8Sb0VharfZp16uVOJNYLBZNznmJpQjf9716vT6jPnddtwzBAK3FMgCcE5vNxuCr1eoL41eWIeDkOB8hFbQjlgJOp1MJtpvUx7ecVychoObouj5kDwSi2tU0zYKnv1wQ+hd0HSh+YAOC3YE/8kdoUYH8dhAad7lc2ux/hCU4ZJMNhdRTdULEu92ujY9znkR41uu1S0eNJQQ22wLZFF1LEfePx2M7lrjRaIhKpWJip6QkSAYj5VwuN4UHAwpdHCHN0QnBZke0Rq6dYdyCzV6hUIj3OECtVhtDWcciWxF3YGgEgveoPiWP9DI4IUTSrVarBvJkcokjlFwg41GF+XxeLhaLFLbOeRHnM7S3w+FA0bDU5KEzut/vTYqeaociQv9cDkWeXYE0YOI/T4gEfcrUJpqLiDDliAiMO3EeRqGxhECNdWTy9S9M29vt1khKSrjqsQrpfQ/h/0T4KYkEwtcLCv8tuIk4sgGd3YHEoX40nsRP4tQQOk4onxZLCfQCCRHTDRI8SQCbZQAqPBrqrwlij2UHjy6Rn9tI3kAv6Kb6riZS1PShYRjeN4wkAh0kUA/KAAAAAElFTkSuQmCC" alt="No te pierdas de nada" />
				<p>¡no te pierdas nada!</p>
			</div>
			<p>Recibe actualizaciones de resultados, próximos encuentros y noticias.</p>
			<div className={ sus.suscribir }>
				<input type="email" className="suscribir_correo" placeholder="correo@gmail.com" />
				<div className={ all.boton }>
					<p>registrar</p>
					<img src="/assets/images/optimized/arrow-right-white.webp" alt="enviar mensaje" />
				</div>
			</div>
		</section>
	);
}
export default Suscripcion;
