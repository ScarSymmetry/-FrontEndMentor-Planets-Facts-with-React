import styles from "./Main.module.css";
import TabWrapper from "../../TabWrapper";

const Main = ({
	planetTitle,
	planetDescription,
	wikiLink,
	arrow,
	planetImage,
	planetName,
	activeId,
	setActiveIndex,
}) => {
	return (
		<main className={styles.planet}>
			<div className={styles.image_container}>
				<img className={styles.planet__image} src={planetImage} alt="planet" />
			</div>
			<div className={styles.text_container}>
				<h2 className={styles.planet__title}>{planetTitle}</h2>
				<p className={styles.planet__description}>{planetDescription}</p>
				<p className={styles.planet__source}>
					Source: {"  "}
					<a href={wikiLink} target="_blank" rel="noreferrer">
						Wikipedia
					</a>
					<img src={arrow} alt="wikipedia link" />
				</p>
			</div>
			<div className={styles.tab_container}>
				<TabWrapper
					planetName={planetName}
					activeId={activeId}
					setActiveIndex={setActiveIndex}
				/>
			</div>
		</main>
	);
};

export default Main;
