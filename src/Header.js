import Nav from "./Nav";

const Header = ({ data, changePlanet }) => {
	return <Nav changePlanet={changePlanet} data={data} />;
};

export default Header;
