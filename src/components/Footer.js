"use client"

import Link from 'next/link'
import Suscripcion from './Suscripcion';
import all from "../styles/All.module.css";

function Footer() {
	const cerrarmenu = function() {
		document.body.classList.remove("menuactivo");
	}
	
	return (
		<>
			<Suscripcion />
			<footer className={all.footer}>
				<span></span>
			</footer>
			<nav id="principal" className={all.principal}>
				<ul>
					<li>
						<Link href="/" onClick={cerrarmenu}>inicio</Link>
					</li>
					<li>
						<Link href="/resultados" onClick={cerrarmenu}>resultados</Link>
					</li>
					<li>
						<Link href="/tabla" onClick={cerrarmenu}>tabla</Link>
					</li>
					<li>
						<Link href="/clubes" onClick={cerrarmenu}>clubes</Link>
					</li>
					<li>
						<Link href="/auspiciadores" onClick={cerrarmenu}>auspiciadores</Link>
					</li>
					<li>
						<Link href="/contacto" onClick={cerrarmenu}>contacto</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
export default Footer;
