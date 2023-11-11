import Image from "next/image";

function Loading() {
	return (
		<>
			<Image
				className="cargando"
				src="/assets/images/optimized/cargando.webm"
				width="200"
				height="150"
				alt="Cargando ..."
				style={{ margin: "0 auto" , display: "block" }}
			/>
		</>
	);
}
export default Loading;
