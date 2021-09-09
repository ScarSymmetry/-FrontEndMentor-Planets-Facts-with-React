import Nav from "./Nav";
import styles from "./Header.module.css"
const Header = ({ data, changePlanet, activePlanet }) => {
	return (
		<div className={styles.navbar}>
			<h1 className={styles.navbar__title}>The Planets</h1>
			<Nav
				changePlanet={changePlanet}
				data={data}
				activePlanet={activePlanet}
			/>
		</div>
	);
};

export default Header;
