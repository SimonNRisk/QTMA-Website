import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

export default function Nav() {
	const router = useRouter();
	const [navOn, setNavOn] = useState(false);
	const { width } = useWindowDimensions();
	const [isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		setIsTablet(width <= 1100);
	}, [width]);

	return (
		<>
			{/* Transparent fixed top navbar */}
			<div className="fixed top-0 left-0 w-full z-[9999] bg-transparent">
				<div className="nav-container container mx-auto px-8 py-4 flex items-center">
					{/* Hamburger icon */}
					<div
						className="nav-toggle-container cursor-pointer block sm:hidden"
						onClick={() => setNavOn(!navOn)}
					>
						<AiOutlineMenu size={28} />
					</div>

					{/* Spacer */}
					<div className="flex-1" />

					{/* Nav Links */}
					<div
						className={`links-container ${
							isTablet
								? `fixed top-0 right-0 h-full w-2/3 bg-white z-[10000] p-8 transition-transform duration-300 ${
										navOn ? "translate-x-0" : "translate-x-full"
								  }`
								: "flex"
						}`}
					>
						<div className="linksTogether flex flex-col sm:flex-row items-start sm:items-center gap-8 text-blue-600 text-xl sm:text-base ml-auto pr-12">
							<Link className="nav-link" href="/">Home</Link>
							<Link className="nav-link" href="/products">Products</Link>
							<Link className="nav-link" href="/history">History</Link>
							<Link className="nav-link" href="/team">Team</Link>
							<Link className="nav-link" href="/placements">Placements</Link>
							<Link className="nav-link" href="/contact">Contact</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Spacer div to push content below fixed navbar */}
			<div className="h-20" />
		</>
	);
}