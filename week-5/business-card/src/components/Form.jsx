import { useRecoilState, useSetRecoilState } from "recoil"
import { name, description, interest, socialName, socialLink, interests, socials} from "../assets/atom"
import "../assets/form.css"

export default function Form() {
	const setName = useSetRecoilState(name);
	const setDescription = useSetRecoilState(description);
	const [_interest, setInterest] = useRecoilState(interest);
	const [_socialName, setSocialName] = useRecoilState(socialName);
	const [_socialLink, setSocialLink] = useRecoilState(socialLink);

	const [_interests, setInterests] = useRecoilState(interests);
	const [_socials, setSocials] = useRecoilState(socials);

	const changeName = (event) => setName(event.target.value);
	const changeDescription = (event) =>
		setDescription(event.target.value);
	const changeInterest = (event) => {
		let interest = event.target.value;
		setInterest(interest.charAt(0).toUpperCase() + interest.slice(1));
	};
	const changeSocialName = (event) => {
		setSocialName(event.target.value);
	};
	const changeSocialLink = (event) => setSocialLink(event.target.value);

	function addInterest() {
		setInterests([..._interests, _interest]);
	}

	function addSocial() {
		let social_name = _socialName;
		social_name = social_name.charAt(0).toUpperCase() + social_name.slice(1);

		setSocials([..._socials, { name: social_name, link: _socialLink }]);
	}

	return (
		<div id="form">
			<h1>Card Generator</h1>
			<input type="text" placeholder="Name" onChange={changeName} />
			<textarea placeholder="Description" onChange={changeDescription} />

			<div id="interests">
				{_interests.map((item, index) => {
					return <div key={index}>{item}</div>;
				})}
				<input type="text" placeholder="Interests" onChange={changeInterest} />
				<button onClick={addInterest}>Add Interest</button>
			</div>

			<div id="socials">
				{_socials.map((item, index) => {
					return (
						<div key={index}>
							<a href={item.link}>{item.name}</a>
						</div>
					);
				})}

				<div id="social-input">
					<input
						type="text"
						placeholder="Link Name"
						onChange={changeSocialName}
					/>
					<input type="text" placeholder="Link" onChange={changeSocialLink} />
					<button onClick={addSocial}>Add Social</button>
				</div>
			</div>
		</div>
	);
}