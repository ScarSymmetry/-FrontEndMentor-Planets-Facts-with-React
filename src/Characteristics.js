import styles from "./Characteristics.module.css";

const Characteristics = ({ title, data }) => {
	return (
		<div className={styles.frame}>
			<h5 className={styles.title}>{title}</h5>
			<h2 className={styles.data}>{data}</h2>
		</div>
	);
};

export default Characteristics;
