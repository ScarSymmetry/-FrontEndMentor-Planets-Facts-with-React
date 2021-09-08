import { useMediaQuery } from "react-responsive";
import styles from "./PlanetsButton.module.css";

const PlanetsButton = ({ data, onTabClick, backgroundColor }) => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<div>
			<button
				className={`${styles[backgroundColor.toLowerCase()]} ${styles.box}`}
				onClick={() => onTabClick(data.id)}
			>
				{isTabletOrMobile ? data.mobile : data.text}
			</button>
		</div>
	);
};

export default PlanetsButton;

// <div
// 	onClick={() => onTabClick(data.id)}
// className={`${Background[backgroundColor.toLowerCase()]} ${
// 	Background.box
// }`}
// >
// 	{/* <MediaQuery maxWidth={500}>{data.mobile}</MediaQuery>
// 	<MediaQuery minWidth={502}>{data.text}</MediaQuery> */}

// 	{isTabletOrMobile ? data.mobile : data.text}
// </div>;
