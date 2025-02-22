import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLights from "./trafficlight";

//create your first component
const Home = () => {


	return (
		<div className="fondo">
			<TrafficLights />
		</div >
	);
};

export default Home;
