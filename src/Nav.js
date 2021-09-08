import style from "./Nav.module.css";
const Nav = ({ data, changePlanet }) => {
	const planetNames = data.map((planet, index) => {
		return (
			<li
				key={index}
				className={`${style[planet.name.toLowerCase()]} ${style.nav__items}`}
				onClick={() => changePlanet(index)}
			>
				{planet.name}
			</li>
		);
	});

	return <ul className={style.nav}>{planetNames}</ul>;
};

export default Nav;
