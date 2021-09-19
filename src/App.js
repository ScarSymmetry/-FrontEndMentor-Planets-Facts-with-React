import { useState, useEffect } from "react";

import data from "./data.json";
import PlanetDetails from "./componenets/Footer/PlanetDetails";

import "./App.css";
import arrow from "./svg/icon-source.svg";
import Header from "./componenets/Header/Header";
import Main from "./componenets/Main/Main";

const App = () => {
	const initialData = data && data[2];
	const [planet, setPlanet] = useState(initialData);
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePlanetChange = (index) => {
		setPlanet(data[index]);
	};

	const shit = Object.keys(planet.images)[activeIndex];

	const [infoText, link] = Object.values(planet[shit]);

	//not sure if this is even a sideeffect.i guess its not ,so i could just put it in the handlePlanetChange function?
	//this resets active tab when you change planet in the navbar
	useEffect(() => {
		setActiveIndex(0);
	}, [planet]);

	return (
		<>
			<Header
				changePlanet={handlePlanetChange}
				data={data}
				activePlanet={planet.name}
			/>

			<section className="wrapper">
				<Main
					planetTitle={planet.name}
					planetDescription={infoText}
					wikiLink={link}
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
