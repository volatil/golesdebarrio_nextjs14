// import Nav from "../components/nav"
import Nav from "@/app/components/Nav"

export default function Page({ params }) {
	return (
		<>
			<Nav />
			<h1>Hello, Club Page! { params.nombre }</h1>
			<br></br><img src={`../assets/images/clubes/${params.nombre}.jpg`} alt="Club" />
		</>
	)
}