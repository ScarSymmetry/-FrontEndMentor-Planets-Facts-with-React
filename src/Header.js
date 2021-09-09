import Nav from "./Nav";

const Header = ({ data, changePlanet,activePlanet}) => {
	return (
		<>
			
			<Nav changePlanet={changePlanet} data={data} activePlanet={activePlanet}/>;
		</>
	);
};

export default Header;
