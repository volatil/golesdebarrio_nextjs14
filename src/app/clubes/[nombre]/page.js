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