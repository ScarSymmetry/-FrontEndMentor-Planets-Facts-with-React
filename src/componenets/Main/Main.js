import styles from "./Main.module.css";
import TabWrapper from "../Main/TabWrapper";

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
	const imageChanger = (id = activeId) => {
		return Object.values(planetImage)[id];
	};
	return (
		<main className={styles.planet}>
			<div className={styles.image_container}>
				{activeId !== 2 && (
					<img
						className={styles.planet__image}
						src={imageChanger()}
						alt="planet"
					/>
				)}
			</div>

			{activeId === 2 && (
				<div className={styles.image_container_secondary}>
					<img
						className={styles.image__primary}
						src={imageChanger(0)}
						alt="planet"
					/>
					<img
						className={styles.image__secondary}
						src={imageChanger(2)}
						alt="planet"
					/>
				</div>
			)}
			<div className={styles.text_container}>
				<h2 className={styles.planet__title}>{planetTitle}</h2>
				<p className={styles.planet__description}>{planetDescription}</p>
				<p className={styles.planet__source}>
					Source: {"  "}
					<a href={wikiLink} target="_blank" rel="noreferrer">
						Wikipedia
					</a>
					<img className={styles.arrow} src={arrow} alt="wikipedia link" />
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
