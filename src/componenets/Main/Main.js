import styles from "./Main.module.css";

const Main = ({ planetTitle, planetDescription, wikiLink, arrow }) => {
	return (
		<main className={styles.planet}>
			<h2 className={styles.planet__title}>{planetTitle}</h2>
			<p className={styles.planet__description}>{planetDescription}</p>
			<p className={styles.planet__source}>
				Source: {"  "}
				<a href={wikiLink} target="_blank">
					Wikipedia
				</a>
				<img src={arrow} alt="wikipedia link" />
			</p>
		</main>
	);
};

export default Main;
