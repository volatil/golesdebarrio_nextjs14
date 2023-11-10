"use client"

import Image from 'next/image'
// import {NOMBREPAGINA} from "../helpers/CONST";
import { NOMBREPAGINA } from '../Helpers/CONST';
import all from "../styles/All.module.css";


function Header() {
	
	function algo() {
		document.body.classList.toggle("menuactivo");
	}
	
	return (
		<>
			<header className={all.header}>
				<div id="logo">
					<a href="/" title={ NOMBREPAGINA } rel="noopener noreferrer" >
						<Image
							src="/assets/images/logo.png"
							alt={ NOMBREPAGINA }
							width={128}
							height={45}
							priority
						/>
					</a>
				</div>
				
				<div className={all.menu} onClick={algo}>
					<p>menu </p>
					<div>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
			<nav id="principal" className={all.principal}>
				<ul>
					<li>
						<a href="/">inicio
						</a>
					</li>
					<li>
						<a href="/resultados">resultados
						</a>
					</li>
					<li>
						<a href="/tabla">tabla
						</a>
					</li>
					<li>
						<a href="/clubes">clubes
						</a>
					</li>
					<li>
						<a href="/auspiciadores">auspiciadores
						</a>
					</li>
					<li>
						<a href="/contacto">contacto
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
export default Header;
