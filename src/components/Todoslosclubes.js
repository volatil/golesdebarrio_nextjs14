import Link from 'next/link'
import { CLUBES, insignia } from '../Helpers/CONST';
import all from "@/styles/All.module.css";
import clubes from "@/styles/Clubes.module.css";

export default function Nav() {
	return (
		<div className={ `${all.bloque} ${clubes.losclubes}` }>
			{
				CLUBES.map(club => {
					const { id , nombre } = club;
					return (
						<Link className={ clubes.club } href={`/clubes/${String(nombre).toLowerCase().replaceAll(" ", "-")}`} key={id}>
							<img width="50px" src={ insignia( nombre ) } alt={ nombre } />
							{/* <p>{nombre.toLowerCase()}</p> */}
						</Link>
					)
				})
			}
		</div>
	)
}