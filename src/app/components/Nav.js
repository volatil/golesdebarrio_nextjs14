import Link from 'next/link'
import { CLUBES } from '../Helpers/CONST';

export default function Nav() {
	
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Inicio</Link>
				</li>
				<li>
					Clubes
					<ul>
						{
							CLUBES.map(club => {
								const { id , nombre } = club;
								return (
									<li key={id}>
										<Link href={`/club/${nombre}`}>el dash {nombre}</Link>
									</li>
								)
							})
						}
					</ul>
				</li>
			</ul>
		</nav>
	)
}