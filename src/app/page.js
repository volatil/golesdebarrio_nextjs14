// import Image from 'next/image'
import Carrusel from '@/components/Carrusel';
import Cuentaregresiva from '@/components/Cuentaregresiva';
import Test from '@/components/Test';

export default function Page() {
	return (
		<main className="inicio" style={{marginTop: "-20px"}}>
			<Carrusel />
			<Cuentaregresiva />
			
			<h1>INICIO</h1>
			<Test />
			
		</main>
	)
}
