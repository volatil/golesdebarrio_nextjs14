import Link from 'next/link'
 

export default function Nav() {
	
	const clubes = ["estrella-central","farias","foncea"];
	console.warn( clubes );

	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Inicio</Link>
				</li>
				{
					clubes.map(club => {
						return (
							<>
								<li>
									<Link href={`/club/${club}`}>el dash {club}</Link>
								</li>
							</>
						)
					})
				}
			</ul>
		</nav>
	)
}