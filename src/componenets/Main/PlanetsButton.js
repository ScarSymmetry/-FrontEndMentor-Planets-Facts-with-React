import { useMediaQuery } from "react-responsive";
import styles from "./PlanetsButton.module.css";

const PlanetsButton = ({ data, onTabClick, backgroundColor }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<>
			<button
				className={`${styles[backgroundColor.toLowerCase()]} ${styles.button}`}
				onClick={() => onTabClick(data.id)}
			>
				{isTabletOrMobile ? (
					<span className={styles.container}>{data.mobile} </span>
				) : (
					<span className={styles.container}>{data.text} </span>
				)}
			</button>
		</>
	);
};

export default PlanetsButton;
