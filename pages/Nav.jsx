import qtmaLogo from "../public/assets/Club Data/QTMA_logo.png";
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
	const { height, width } = useWindowDimensions();
	const [isTablet, setIsTablet] = useState(false);

	useEffect(() => {
		if (width <= 1100) {
			setIsTablet(true);
		} else {
			setIsTablet(false);
		}
	}, [width]);

	return (
		<>
			<Layout background="#222831" isNav={true}>
				<div className="nav-container container">
					<div
						className="nav-toggle-container"
						onClick={() => {
							setNavOn(!navOn);
						}}
					>
						<AiOutlineMenu />
					</div>
					<div className="logo-container">
						<Link passHref href="/" legacyBehavior>
							<Image
								alt="QTMA logo"
								src={qtmaLogo}
								className="nav-logo"
								height={41.71}
								width={154}
							/>
						</Link>
					</div>
					<div
						className="links-container"
						style={{
							transform:
								navOn && isTablet
									? "translateX(0)"
									: isTablet
									? "translateX(100%)"
									: "translateX(0)",
						}}
					>
						<Link className="nav-link" href="/">
							Home
						</Link>
						<Link className="nav-link" href="/products">
							Products
						</Link>
						<Link className="nav-link" href="/history">
							History
						</Link>
						<Link className="nav-link" href="/team">
							Team
						</Link>
						<Link className="nav-link" href="/placements">
							Placements
						</Link>
						<Link className="nav-link" href="/contact">
							Contact
						</Link>
					</div>
				</div>
			</Layout>
		</>
	);
}
