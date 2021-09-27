import { useState, useEffect } from "react";

import data from "./data.json";
import PlanetDetails from "./componenets/Footer/PlanetDetails";

import "./App.css";
import arrow from "./svg/icon-source.svg";
import Header from "./componenets/Header/Header";
import Main from "./componenets/Main/Main";
import useToggle from "./hooks/useToggle";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const App = () => {
	const initialData = data && data[2];
	const [planet, setPlanet] = useState(initialData);
	const [activeIndex, setActiveIndex] = useState(0);

	const [menu, toggleMenu] = useToggle(false);

	const handlePlanetChange = (index) => {
		setPlanet(data[index]);
		toggleMenu(false);
	};

	useEffect(() => {
		menu ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
	}, [menu]);

	useEffect(() => {
		setActiveIndex(0);
	}, [planet]);
	//not sure if this is even a sideeffect.i guess its not ,so i could just put it in the handlePlanetChange function?
	//this resets active tab when you change planet in the navbar

	const computedValues = Object.keys(planet.images)[activeIndex];

	const [description, wikiLink] = Object.values(planet[computedValues]);

	return (
		<>
			<Header
				changePlanet={handlePlanetChange}
				data={data}
				activePlanet={planet.name}
				menuState={menu}
				setMenuState={toggleMenu}
			/>

			<section className="wrapper">
				<Main
					planetTitle={planet.name}
					planetDescription={description}
					wikiLink={wikiLink}
					arrow={arrow}
					planetImage={planet.images}
					planetName={planet.name}
					activeId={activeIndex}
					setActiveIndex={setActiveIndex}
				/>

				<PlanetDetails stats={planet} />
			</section>
		</>
	);
};

export default App;
