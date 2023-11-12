import { Metadata } from "@/Helpers/CONST";

export async function generateMetadata({ params }) {
	const generador = new Metadata({ nombre: params.nombre });
	
	return {
		title: generador.title() ,
		description: generador.static( "DESCRIPTION" ) ,

		openGraph: {
			title: generador.title() ,
			description: generador.static( "DESCRIPTION" ) ,
			url: generador.static( "URL" ) ,
			siteName: generador.title() ,
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
			],
			locale: "es_CL" ,
			type: "website" ,
		},
	}
}

export default function Page({ params }) {
	const nombre = {
		titulo: params.nombre.replaceAll("%20", " ") ,
		imagen: params.nombre.replaceAll("%20", "")
	}
	
	return (
		<>
			<h1>Hello, Club Page! { nombre.titulo }</h1>
			<br></br><img width="100px" src={`../assets/images/clubes/${ nombre.imagen }.jpg`} alt="Club" />
		</>
	)
}