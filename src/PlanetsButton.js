import { useMediaQuery } from "react-responsive";
import styles from "./PlanetsButton.module.css";

const PlanetsButton = ({ data, onTabClick, backgroundColor }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div>
			<button
				className={`${styles[backgroundColor.toLowerCase()]} ${styles.button}`}
				onClick={() => onTabClick(data.id)}
			>
				{isTabletOrMobile ? data.mobile : data.text}
			</button>
		</div>
	);
};

export default PlanetsButton;
