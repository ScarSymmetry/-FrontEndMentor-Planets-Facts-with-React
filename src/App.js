import { useState, useEffect } from "react";

import data from "./data.json";
import PlanetDetails from "./PlanetDetails";

import "./App.css";
import arrow from "./svg/icon-source.svg";
import Header from "./Header";
import Main from "./componenets/Main/Main";

const App = () => {
	const [planet, setPlanet] = useState(data[2]);

	const [activeIndex, setActiveIndex] = useState(0);

	const handlePlanetChange = (index) => {
		setPlanet(data[index]);
	};

	//this way of extraction  from data.json seems shitty to me, couldnt come up with something cleaner
	const planetImage = Object.values(planet.images)[activeIndex];

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
				{/* <h1 style={{ color: "white" }}>{planet.name}</h1>
				<img style={{ width: "400px" }} src={planetImage} alt="" />
				<p>{infoText}</p>
				<a href={link}>Source:Wikipedia </a> */}

				<Main
					planetTitle={planet.name}
					planetDescription={infoText}
					wikiLink={link}
					arrow={arrow}
					planetImage={planetImage}
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
