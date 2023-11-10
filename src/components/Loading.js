import Image from "next/image";

function Loading() {
	return (
		<>
			<h3>CARGANDO ...</h3>
			<Image
				src="/assets/images/optimized/cargando.webm"
				width="200"
				height="150"
				alt="Cargando ..."
			/>
		</>
	);
}
export default Loading;
