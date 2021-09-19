import styles from "./Characteristics.module.css";

const Characteristics = ({ title, data }) => {
	return (
		<div className={styles.frame}>
			<h5 className={styles.title}>{title}</h5>
			<h4 className={styles.data}>{data}</h4>
		</div>
	);
};

export default Characteristics;
