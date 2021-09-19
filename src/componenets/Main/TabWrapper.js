import PlanetsButton from "./PlanetsButton";
import { tabsData } from "./tabsData";
import styles from "./TabWrapper.module.css"

const TabWrapper = ({ activeId, planetName, setActiveIndex }) => {
	
	const planetTabs = tabsData.map((tab, index) => {
		const active = index === activeId ? planetName : "";
		return (
			<PlanetsButton
				key={tab.id}
				onTabClick={setActiveIndex}
				data={tab}
				backgroundColor={active}
			/>
		);
	});
	return <div className={styles.buttonWrapper}>
		{planetTabs}
	</div>
};

export default TabWrapper;
