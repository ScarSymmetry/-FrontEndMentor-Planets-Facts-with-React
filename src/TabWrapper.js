import PlanetsButton from "./PlanetsButton";
import { tabsData } from "./tabsData";

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
	return planetTabs;
};

export default TabWrapper;
