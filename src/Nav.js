import style from "./Nav.module.css";
const Nav = ({ data, changePlanet, activePlanet }) => {
	const planetNames = data.map((planet, index) => {
		const activeTabStyle =
			planet.name.toLowerCase() === activePlanet.toLowerCase()
				? `${activePlanet.toLowerCase()}_active`
				: "";

		return (
			<li
				key={index}
				className={`${style[planet.name.toLowerCase()]} ${style.nav__items} ${
					style[activeTabStyle]
				} ${activeTabStyle ? style.active : ""}`}
				onClick={() => changePlanet(index)}
			>
				{planet.name}
			</li>
		);
	});

	return <ul className={style.nav}>{planetNames}</ul>;
};

export default Nav;
