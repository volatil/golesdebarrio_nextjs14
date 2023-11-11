"use client"

import Image from 'next/image'
import Link from 'next/link'

import { NOMBREPAGINA } from '../Helpers/CONST';
import css from "../styles/All.module.css";


function Header() {
	
	const desplegarmenu = function() {
		document.body.classList.toggle("menuactivo");
	}
	
	return (
		<>
			<header className={css.header}>
				<div className={css.logo}>
					<Link href="/" title={ NOMBREPAGINA } rel="noopener noreferrer">
						<Image
							src="/assets/images/optimized/logo.webp"
							alt={ NOMBREPAGINA }
							width={170}
							height={60}
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
		</>
	);
}
export default Header;
