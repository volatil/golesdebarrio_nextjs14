import Link from 'next/link'

import { Metadata , insignia } from "@/Helpers/CONST";

import ClubRedes from "@/components/ClubRedes";

import all from "@/styles/All.module.css";
import especifico from "@/styles/ClubEspecifico.module.css";

// METADATA
export async function generateMetadata({ params }) {
	const generador = new Metadata({ nombre: params.nombre });
	
	return {
		metadataBase: new URL( generador.static( "URL" ) ),
		title: generador.title() ,
		description: generador.static( "DESCRIPTION" ) ,
		openGraph: {
			title: generador.title() ,
			description: generador.static( "DESCRIPTION" ) ,
			url: generador.static( "URL" ) ,
			siteName: generador.title() ,
			image: generador.static( "IMAGE" ) ,
			images: [
				{
					url: generador.static( "IMAGE" ) ,
					width: 1200 ,
					height: 1200 ,
				},
				{
					url: generador.static( "IMAGE" ) ,
					width: 1200 ,
					height: 1200 ,
					alt:  generador.static( "NOMBRE" ) ,
				},
			] ,
			twitter: {
				card: "summary_large_image" ,
				site: "@Paulombriz" ,
				title: generador.title() ,
				description: generador.static( "DESCRIPTION" ) ,
				image: generador.static( "IMAGE" )
			} ,
			locale: "es_CL" ,
			type: "website" ,
		},
	}
}

const Titulo = function( params ) {
	const { nombre } = params;

	return (
		<div className={especifico.nombreclub}>
			<h2>
				<img width="100px" src={ insignia( String(nombre).replaceAll("-", " ").toUpperCase() ) } alt={ nombre } />
				{ nombre.replaceAll("-", " ") }
			</h2>
		</div>
	);
}
const Volver = function() {
	return (
		<div className={ especifico.volver }>
			<Link href="/clubes" title="Clubes">
				<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNDgiIGQ9Ik0yNDQgNDAwTDEwMCAyNTZsMTQ0LTE0NE0xMjAgMjU2aDI5MiIvPjwvc3ZnPg==" alt="Volver" />
				<p>Volver</p>
			</Link>
		</div>
	);
}

export default function Page({ params }) {
	const nombrefix = params.nombre.replaceAll("%20", " ");
	
	return (
		<section id="clubespecifico" className={`${all.bloque} ${especifico.clubespecifico}`}>
			<Volver />
			<Titulo nombre={ nombrefix } />
			<ClubRedes nombredelclub={ nombrefix } />
		</section>
	)
}