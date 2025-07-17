import Image from "next/image";
import qtmaLogo from "../public/assets/Club Data/QTMA_logo.png";
import startup from "../public/assets/Visuals/Startup_SVG.png";
import Layout from "../components/layout";
import { Link as SLink } from "react-scroll";
import React, { useEffect, useState } from "react";
import { FancyAmpersand } from "../components/icons/FancyAmpersand";
import { Banner } from "../components/Banner";
import { LinkBox } from "../components/LinkBox";
import Nav from "./Nav.jsx";

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
	const [scrollY, setScrollY] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (width <= 650) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	// Parallax scroll effect
	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Mouse tracking for interactive effects
	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePosition({
				x: (e.clientX / window.innerWidth) * 100,
				y: (e.clientY / window.innerHeight) * 100
			});
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<Layout home={true}>
			{/* NAVBAR */}
			<section>
				<Nav/>
			</section>

			{/* BACKGROUND SECTION - Enhanced with Parallax */}
			<section
				id="home"
				className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50"
			>
				{/* Floating Background Elements */}
				<div className="absolute inset-0">
					<div 
						className="absolute w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse"
						style={{
							transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) translateY(${scrollY * 0.1}px)`,
							top: '10%',
							left: '10%'
						}}
					/>
					<div 
						className="absolute w-64 h-64 bg-purple-200 opacity-25 rounded-full blur-2xl animate-pulse"
						style={{
							transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px) translateY(${scrollY * 0.15}px)`,
							top: '60%',
							right: '15%',
							animationDelay: '1s'
						}}
					/>
					<div 
						className="absolute w-48 h-48 bg-indigo-200 opacity-30 rounded-full blur-xl animate-bounce"
						style={{
							transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px) translateY(${scrollY * 0.08}px)`,
							top: '30%',
							right: '40%',
							animationDuration: '4s'
						}}
					/>
				</div>

				{/* Parallax Ampersand */}
				<div 
					className="absolute inset-0 flex items-center justify-center pointer-events-none"
					style={{
						transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0003}) rotate(${scrollY * 0.02}deg)`
					}}
				>
					<FancyAmpersand className="w-[200%] h-[200%] opacity-10 scale-150" />
				</div>


			</section>

			{/* FOREGROUND CONTENT */}
			<section className="-mt-32 sm:-mt-40 relative z-10 pb-32">
				{/* Main Title with Parallax */}
				<div 
					className="flex items-center justify-center"
					style={{
						transform: `translateY(${scrollY * -0.2}px)`
					}}
				>
					<h1 className="text-center text-gray-400 text-3xl mb-4 animate-fade-in">
						QUEEN'S TECHNOLOGY AND MEDIA ASSOCIATION
					</h1>
				</div>
				<Banner
					title="Launch the next big thing."
					message="Designers. Developers. Analysts. Building at Canada’s premier product incubation club."
					linkBox={
						<LinkBox
							message="VIEW OUR PRODUCTS"
							link="https://forms.gle/3b1d7Z5x6f8a2g4i9"
							hasIcon
						/>
					}
					images={[
						"/assets/2025/Home/curious-mahir.jpg",
						"/assets/2025/Home/happy-alison.png",
						"/assets/2025/Home/happy-nathan.jpg",
					]}
				/>
				<Banner
					title="Meet the next generation of leaders and innovators."
					message="Teams consist of highly motivated and vision-oriented students across all faculties."
					linkBox={
						<LinkBox
							message="MEETING OUR TEAM"
							link="https://forms.gle/3b1d7Z5x6f8a2g4i9"
							hasIcon
						/>
					}
					images={[
						"/assets/2025/Home/qtma-on-3.jpg",
						"/assets/2025/Home/thinking.jpg",
					]}
				/>
				{/* Parallax Stats Section - Styled like Banner */}
				<div 
					className="bg-blue-100 border-4 border-blue-600 rounded-3xl py-8 px-4 mx-4 sm:mx-8 md:mx-16 sm:px-6 lg:px-8 mt-16 mb-32 relative overflow-hidden"
					style={{
						transform: isMobile ? 'none' : `translateY(${Math.max(0, (scrollY - height * 0.8) * 0.05)}px)`
					}}
				>
					{/* Floating Elements */}
					<div className="absolute inset-0 overflow-hidden">
						<div 
							className="absolute w-32 h-32 bg-blue-200 opacity-20 rounded-full blur-xl"
							style={{
								transform: `translateY(${scrollY * -0.1}px) translateX(${mousePosition.x * 0.02}px)`,
								top: '20%',
								left: '10%'
							}}
						/>
						<div 
							className="absolute w-24 h-24 bg-blue-200 opacity-25 rounded-full blur-lg"
							style={{
								transform: `translateY(${scrollY * -0.15}px) translateX(${mousePosition.x * -0.02}px)`,
								top: '70%',
								right: '20%'
							}}
						/>
					</div>
					
					{/* Stats Content */}
					<div className="max-w-6xl mx-auto relative z-10">
						<div 
							className="text-center mb-8"
						>
							<h2 className="text-blue-600 text-3xl sm:text-4xl mb-4">
								Innovation by the Numbers
							</h2>
							<p className="text-gray-400 text-lg sm:text-xl mb-6">
								See the impact we're making at Queen's University
							</p>
						</div>
						
						<div className="grid md:grid-cols-4 gap-8">
							{[
								{ number: "150+", label: "Active Members" },
								{ number: "50+", label: "Products Built" },
								{ number: "25+", label: "Industry Partners" },
								{ number: "5", label: "Years Strong" }
							].map((stat, index) => (
								<div 
									key={index}
									className="text-center"
									style={{
										animationDelay: `${index * 100}ms`
									}}
								>
									<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
										{stat.number}
									</div>
									<div className="text-gray-400 text-lg">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Feature Cards Section - Styled like Banner */}
				<div 
					className="bg-blue-100 border-4 border-blue-600 rounded-3xl py-8 px-4 mx-4 sm:mx-8 md:mx-16 sm:px-6 lg:px-8 mt-32 mb-16 relative overflow-hidden"
					style={{
						transform: isMobile ? 'none' : `translateY(${Math.max(0, (scrollY - height * 1.8) * 0.05)}px)`
					}}
				>
					{/* Background Pattern */}
					<div 
						className="absolute inset-0 opacity-5 overflow-hidden"
						style={{
							transform: `translateY(${scrollY * -0.1}px)`,
							backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
							backgroundSize: '30px 30px'
						}}
					/>
					
					<div className="max-w-6xl mx-auto relative z-10">
						<div className="text-left max-w-[600px] mb-8">
							<h2 className="text-blue-600 text-3xl sm:text-4xl mb-4">
								Why Choose QTMA?
							</h2>
							<p className="text-gray-400 text-lg sm:text-xl mb-6">
								We're more than just a club - we're a community of innovators, creators, and future leaders.
							</p>
						</div>

						{/* Feature Cards */}
						<div className="grid md:grid-cols-3 gap-8">
							{[
								{
									title: "Real-World Experience",
									desc: "Work on actual products that solve real problems for real users.",
									icon: "🚀"
								},
								{
									title: "Industry Mentorship",
									desc: "Learn from professionals currently working at top tech companies.",
									icon: "👥"
								},
								{
									title: "Cross-Functional Teams",
									desc: "Collaborate with students from business, engineering, and design.",
									icon: "🎯"
								}
							].map((feature, index) => (
								<div 
									key={index}
									className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
									style={{
										animationDelay: `${index * 100}ms`
									}}
								>
									<div className="text-3xl mb-3 text-blue-600">{feature.icon}</div>
									<h3 className="text-xl font-bold text-blue-600 mb-3">{feature.title}</h3>
									<p className="text-gray-400">{feature.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Additional Banner - Process Section */}
				<div 
					style={{
						transform: `translateY(${Math.max(0, (scrollY - height * 2.2) * 0.15)}px)`
					}}
				>
					<Banner
						title="From Concept to Creation"
						message="Our structured approach takes your ideas from initial brainstorming to fully-launched products that make an impact."
						linkBox={
							<LinkBox
								message="SEE OUR PROCESS"
								link="/history"
								hasIcon
							/>
						}
						images={[
							"/assets/2025/Home/curious-mahir.jpg",
							"/assets/2025/Home/thinking.jpg",
						]}
					/>
				</div>

				{/* Timeline Section - Styled like Banner */}
				<div 
					className="bg-blue-100 border-4 border-blue-600 rounded-3xl py-8 px-4 mx-4 sm:mx-8 md:mx-16 sm:px-6 lg:px-8 mt-16 mb-32 relative overflow-hidden"
					style={{
						transform: isMobile ? 'none' : `translateY(${Math.max(0, (scrollY - height * 2.5) * 0.05)}px)`
					}}
				>
					<div className="max-w-6xl mx-auto relative z-10">
						<div className="text-left max-w-[600px] mb-8">
							<h2 className="text-blue-600 text-3xl sm:text-4xl mb-4">
								Our Journey
							</h2>
							<p className="text-gray-400 text-lg sm:text-xl mb-6">
								From concept to creation, witness the evolution of innovation
							</p>
						</div>

						{/* Timeline Items */}
						<div className="relative pl-8 border-l-2 border-blue-300">
							{[
								{ year: "2020", title: "Foundation", desc: "QTMA was born with a vision to bridge tech and business" },
								{ year: "2022", title: "First Products", desc: "Launched our first student-built applications" },
								{ year: "2024", title: "Innovation Hub", desc: "Became Queen's premier product incubation center" },
								{ year: "2025", title: "Future Forward", desc: "Leading the next wave of student innovation" }
							].map((item, index) => (
								<div 
									key={index}
									className="mb-10 relative"
								>
									{/* Timeline Dot */}
									<div className="absolute -left-[25px] w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-100"></div>
									
									<div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
										<div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
										<h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
										<p className="text-gray-400">{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Final CTA Section - Styled like Banner */}
				<div 
					className="bg-blue-100 border-4 border-blue-600 rounded-3xl py-8 px-4 mx-4 sm:mx-8 md:mx-16 sm:px-6 lg:px-8 mt-32 mb-16 relative overflow-hidden"
					style={{
						transform: isMobile ? 'none' : `translateY(${Math.max(0, (scrollY - height * 3.2) * 0.05)}px)`
					}}
				>
					{/* Floating Elements */}
					<div className="absolute inset-0 overflow-hidden">
						<div 
							className="absolute w-32 h-32 bg-blue-200 opacity-20 rounded-full blur-xl"
							style={{
								transform: `translateY(${scrollY * -0.1}px) translateX(${mousePosition.x * 0.02}px)`,
								top: '20%',
								left: '10%'
							}}
						/>
						<div 
							className="absolute w-24 h-24 bg-blue-200 opacity-25 rounded-full blur-lg"
							style={{
								transform: `translateY(${scrollY * -0.15}px) translateX(${mousePosition.x * -0.02}px)`,
								top: '70%',
								right: '20%'
							}}
						/>
					</div>

					<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
						<div className="text-left max-w-[600px]">
							<h2 className="text-blue-600 text-3xl sm:text-4xl mb-4">
								Ready to Build the Future?
							</h2>
							<p className="text-gray-400 text-lg sm:text-xl mb-6">
								Join QTMA today and be part of Queen's most innovative student organization.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<LinkBox
									message="JOIN OUR COMMUNITY"
									link="/contact"
									hasIcon
								/>
								<LinkBox
									message="EXPLORE PLACEMENTS"
									link="/placements"
									hasIcon
								/>
							</div>
						</div>
						
						{/* Decorative Image */}
						<div className="relative w-[280px] h-[280px] hidden md:block">
							<div className="absolute top-0 right-10 w-40 h-40 bg-blue-600 opacity-20 rounded-lg"></div>
							<div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 opacity-15 rounded-lg"></div>
							<div className="absolute bottom-0 right-40 w-48 h-48 bg-blue-600 opacity-25 rounded-lg"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Custom Animations */}
			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				
				.animate-fade-in {
					animation: fade-in 1s ease-out;
				}
			`}</style>
		</Layout>
	);
}
