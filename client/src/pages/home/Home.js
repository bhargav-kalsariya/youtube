import React from "react";
import { Outlet } from "react-router-dom";
import './Home.scss'
import Navbar from "../../components/navbar/Navbar";

function Home() {
	return (
		<div className="Home">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default Home;
