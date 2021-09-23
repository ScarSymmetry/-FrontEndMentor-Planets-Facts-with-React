import style from "./Nav.module.css";
import chevron from "../../svg/icon-chevron.svg";

const Nav = ({ data, changePlanet, activePlanet, menuState }) => {
	let burgerOpen = menuState ? style.isOpen : "";

	const planetNames = data.map((planet, index) => {
		const activeTabStyle =
			planet.name.toLowerCase() === activePlanet.toLowerCase()
				? `active_tab`
				: "";
		console.log(activeTabStyle);
		return (
			<li
				key={index}
				className={`${style[planet.name.toLowerCase()]} ${
					style[activeTabStyle]
				} ${activeTabStyle ? style.active : ""}
				`}
				onClick={() => changePlanet(index)}
			>
				<span>{planet.name}</span>
				<img className={style.chevron} src={chevron} alt="chevron" />
			</li>
		);
	});

	return <ul className={`${style.nav} ${burgerOpen}`}>{planetNames}</ul>;
};

export default Nav;
