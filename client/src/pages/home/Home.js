import React from "react";
import { Outlet } from "react-router-dom";
import './Home.scss'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
	return (
		<div className="Home">
			<Navbar />
			<Sidebar />
			<Outlet />
		</div>
	);
}

export default Home;
