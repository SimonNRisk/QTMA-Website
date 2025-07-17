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
		// Close mobile menu when window is resized to desktop
		if (width > 1100) {
			setNavOn(false);
		}
	}, [width]);

	// Get current path for active link styling
	const currentPath = router.pathname;

	return (
		<>
			{/* Blue nav bar docked to the right */}
			<div className="fixed top-0 right-0 z-[9999]">
				{/* Desktop Navigation */}
				<div className={`${isTablet ? 'hidden' : 'block'}`}>
					<div className="px-6 py-4">
						<div className="flex items-center gap-6 text-gray-800">
							<Link
								className={`nav-link hover:text-blue-600 transition-colors ${currentPath === "/" ? "text-blue-600 font-semibold" : ""}`}
								href="/"
							>
								Home
							</Link>
							<Link
								className={`nav-link hover:text-blue-600 transition-colors ${currentPath === "/products" ? "text-blue-600 font-semibold" : ""}`}
								href="/products"
							>
								Products
							</Link>
							<Link
								className={`nav-link hover:text-blue-600 transition-colors ${currentPath === "/history" ? "text-blue-600 font-semibold" : ""}`}
								href="/history"
							>
								History
							</Link>
							<Link
								className={`nav-link hover:text-blue-600 transition-colors ${currentPath === "/team" ? "text-blue-600 font-semibold" : ""}`}
								href="/team"
							>
								Team
							</Link>
							<Link
								className={`nav-link hover:text-blue-600 transition-colors ${currentPath === "/placements" ? "text-blue-600 font-semibold" : ""}`}
								href="/placements"
							>
								Placements
							</Link>
							<Link
								className={`nav-link hover:text-blue-600 transition-colors ${currentPath === "/contact" ? "text-blue-600 font-semibold" : ""}`}
								href="/contact"
							>
								Contact
							</Link>
						</div>
					</div>
				</div>

				{/* Mobile Hamburger Button */}
				<div className={`${isTablet ? 'block' : 'hidden'}`}>
					<div
						className="p-3 cursor-pointer hover:bg-gray-100 transition-colors"
						onClick={() => setNavOn(!navOn)}
					>
						<AiOutlineMenu size={24} className="text-gray-800" />
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className={`${isTablet ? 'block' : 'hidden'} fixed top-0 right-0 h-full w-80 bg-blue-600 shadow-2xl transition-transform duration-300 ease-in-out ${navOn ? "translate-x-0" : "translate-x-full"
						}`}
				>
					<div className="p-6">
						{/* Close button */}
						<div className="flex justify-end mb-8">
							<button
								onClick={() => setNavOn(false)}
								className="text-white hover:text-blue-200 text-2xl"
							>
								×
							</button>
						</div>

						{/* Mobile nav links */}
						<div className="flex flex-col gap-6 text-white text-lg">
							<Link
								className={`nav-link hover:text-blue-200 transition-colors py-2 ${currentPath === "/" ? "text-blue-200 font-semibold border-l-4 border-blue-200 pl-4" : ""}`}
								href="/"
								onClick={() => setNavOn(false)}
							>
								Home
							</Link>
							<Link
								className={`nav-link hover:text-blue-200 transition-colors py-2 ${currentPath === "/products" ? "text-blue-200 font-semibold border-l-4 border-blue-200 pl-4" : ""}`}
								href="/products"
								onClick={() => setNavOn(false)}
							>
								Products
							</Link>
							<Link
								className={`nav-link hover:text-blue-200 transition-colors py-2 ${currentPath === "/history" ? "text-blue-200 font-semibold border-l-4 border-blue-200 pl-4" : ""}`}
								href="/history"
								onClick={() => setNavOn(false)}
							>
								History
							</Link>
							<Link
								className={`nav-link hover:text-blue-200 transition-colors py-2 ${currentPath === "/team" ? "text-blue-200 font-semibold border-l-4 border-blue-200 pl-4" : ""}`}
								href="/team"
								onClick={() => setNavOn(false)}
							>
								Team
							</Link>
							<Link
								className={`nav-link hover:text-blue-200 transition-colors py-2 ${currentPath === "/placements" ? "text-blue-200 font-semibold border-l-4 border-blue-200 pl-4" : ""}`}
								href="/placements"
								onClick={() => setNavOn(false)}
							>
								Placements
							</Link>
							<Link
								className={`nav-link hover:text-blue-200 transition-colors py-2 ${currentPath === "/contact" ? "text-blue-200 font-semibold border-l-4 border-blue-200 pl-4" : ""}`}
								href="/contact"
								onClick={() => setNavOn(false)}
							>
								Contact
							</Link>
						</div>
					</div>
				</div>

				{/* Mobile overlay */}
				{navOn && isTablet && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 z-[-1]"
						onClick={() => setNavOn(false)}
					/>
				)}
			</div>
		</>
	);
}