"use client"

import Image from 'next/image'
import Link from 'next/link'

import { NOMBREPAGINA } from '../Helpers/CONST';
import css from "../styles/All.module.css";


function Header() {
	
	const desplegarmenu = function() {
		document.body.classList.toggle("menuactivo");
	}
	const cerrarmenu = function() {
		document.body.classList.remove("menuactivo");
	}
	
	return (
		<>
			<header className={css.header}>
				<div className={css.logo}>
					<Link href="/" title={ NOMBREPAGINA } rel="noopener noreferrer">
						<Image
							src="/assets/images/optimized/logo.webp"
							alt={ NOMBREPAGINA }
							width={128}
							height={45}
							priority
						/>
					</Link>
				</div>
				
				<div id="menudesplegable" className={css.menu} onClick={desplegarmenu}>
					<p>menu </p>
					<div>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
			<nav id="principal" className={css.principal}>
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
export default Header;
