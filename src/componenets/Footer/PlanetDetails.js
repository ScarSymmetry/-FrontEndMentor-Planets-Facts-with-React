import Characteristics from "./Characteristics";
import styles from "./PlanetDetails.module.css";

const PlanetDetails = ({ stats }) => {
	return (
		<section className={styles.body}>
			<Characteristics title="rotation time" data={stats.rotation} />
			<Characteristics title="revolution time" data={stats.revolution} />
			<Characteristics title="radius" data={stats.radius} />
			<Characteristics title="average temp." data={stats.temperature} />
		</section>
	);
};

export default PlanetDetails;
