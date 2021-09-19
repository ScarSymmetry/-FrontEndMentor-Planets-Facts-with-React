import Nav from "./Nav";
import styles from "./Header.module.css";
import burger from "./svg/icon-hamburger.svg";
const Header = ({ data, changePlanet, activePlanet }) => {
	return (
		<div className="wrapper">
			<div className={styles.navbar}>
				<h1 className={styles.navbar__title}>The Planets</h1>
				<Nav
					changePlanet={changePlanet}
					data={data}
					activePlanet={activePlanet}
				/>
				<img className={styles.burger} src={burger} alt="menu" />
			</div>
		</div>
	);
};

export default Header;
