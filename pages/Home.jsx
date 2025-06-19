import Image from "next/image";
import qtmaLogo from "../public/assets/Club Data/QTMA_logo.png";
import startup from "../public/assets/Visuals/Startup_SVG.png";
import Layout from "../components/layout";
import { Link as SLink } from "react-scroll";
import React, { useEffect, useState } from "react";
import { FancyAmpersand } from "../components/icons/FancyAmpersand";

function getWindowDimensions() {
	if (typeof window !== "undefined") {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	}
	return {
		width: 0,
		height: 0,
	};
}

export function useWindowDimensions() {
	const [windowdimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowdimensions;
}

export default function Home() {
	const { height, width } = useWindowDimensions();
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (width <= 650) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	return (
		<Layout home={true}>
			<section
				id="home"
				className="relative h-screen w-full overflow-hidden bg-black"
			>
				{/* BIG BACKGROUND SVG */}
				<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
					<FancyAmpersand className="w-[200%] h-[200%] opacity-10 scale-150" />
				</div>

				{/* FOREGROUND CONTENT */}
				<div className="relative z-10 flex items-center justify-center h-full">
					<h1 className="text-white text-6xl">Welcome to QTMA</h1>
				</div>
			</section>
		</Layout>
	);
}
