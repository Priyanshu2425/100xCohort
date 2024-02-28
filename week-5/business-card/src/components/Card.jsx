import { useRecoilValue } from "recoil";
import {name, description, interests, socials} from "../assets/atom"
import "../assets/card.css"

export default function Card(){
    const _name = useRecoilValue(name);
    const _description = useRecoilValue(description);
    const _interests = useRecoilValue(interests);
    const _socials = useRecoilValue(socials);

    return (
			<div id="card">
				<div>
					<div>
						<h1>{_name.charAt(0).toUpperCase() + _name.slice(1)}</h1>
						<p>
							{_description.charAt(0).toUpperCase() + _description.slice(1)}
						</p>
					</div>

					<div>
						<h3>Interests</h3>
						<div id="card-interests">
							{_interests.map((item, index) => {
								return (
									<p key={index}>
										{" "}
										{item.charAt(0).toUpperCase() + item.slice(1)}
									</p>
								);
							})}
						</div>
					</div>

					<div>
						<h3>Socials</h3>
						<div id="card-socials">
							{_socials.map((item, index) => {
								return (
									<a key={index} href={item.link}>
										{item.name}
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
}