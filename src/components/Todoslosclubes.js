import Link from 'next/link'
import { CLUBES, insignia } from '../Helpers/CONST';

export default function Nav() {
	return (
		<div className="clubes">
			{
				CLUBES.map(club => {
					const { id , nombre } = club;
					return (
						<div key={id}>
							<Link href={`/clubes/${nombre}`}>
								<img width="50px" src={ insignia( nombre ) } alt={ nombre } />
								<p>{nombre}</p>
							</Link>
						</div>
					)
				})
			}
		</div>
	)
}