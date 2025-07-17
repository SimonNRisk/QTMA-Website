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

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
					</div>
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
				{/* Parallax Stats Section */}
				<div 
					className="relative py-32 my-16 overflow-hidden"
					style={{
						background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
					}}
				>
					{/* Floating Elements */}
					<div className="absolute inset-0">
						<div 
							className="absolute w-32 h-32 bg-white opacity-10 rounded-full blur-xl"
							style={{
								transform: `translateY(${scrollY * -0.1}px) translateX(${mousePosition.x * 0.02}px)`,
								top: '20%',
								left: '10%'
							}}
						/>
						<div 
							className="absolute w-24 h-24 bg-white opacity-15 rounded-full blur-lg"
							style={{
								transform: `translateY(${scrollY * -0.15}px) translateX(${mousePosition.x * -0.02}px)`,
								top: '70%',
								right: '20%'
							}}
						/>
					</div>
					
					{/* Stats Content */}
					<div className="container mx-auto px-4 relative z-10">
						<div 
							className="text-center mb-12"
							style={{
								transform: `translateY(${Math.max(0, (scrollY - height * 0.8) * 0.2)}px)`
							}}
						>
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
								Innovation by the Numbers
							</h2>
							<p className="text-xl text-blue-100">
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
										transform: `translateY(${Math.max(0, (scrollY - height * 0.9) * 0.1)}px)`,
										animationDelay: `${index * 100}ms`
									}}
								>
									<div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-pulse">
										{stat.number}
									</div>
									<div className="text-blue-200 text-lg">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Feature Cards Section */}
				<div className="py-20 bg-gray-50 my-16 relative overflow-hidden">
					{/* Background Pattern */}
					<div 
						className="absolute inset-0 opacity-5"
						style={{
							transform: `translateY(${scrollY * -0.1}px)`,
							backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
							backgroundSize: '30px 30px'
						}}
					/>
					
					<div className="container mx-auto px-4 relative z-10">
						<div 
							className="text-center mb-16"
							style={{
								transform: `translateY(${Math.max(0, (scrollY - height * 1.8) * 0.2)}px)`
							}}
						>
							<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
								Why Choose QTMA?
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
									className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
									style={{
										transform: `translateY(${Math.max(0, (scrollY - height * 1.9) * 0.1)}px)`,
										animationDelay: `${index * 100}ms`
									}}
								>
									<div className="text-4xl mb-4">{feature.icon}</div>
									<h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
									<p className="text-gray-600">{feature.desc}</p>
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

				{/* Timeline Section */}
				<div className="relative py-20 bg-black my-16 overflow-hidden">
					<div className="container mx-auto px-4 relative z-10">
						<div 
							className="text-center mb-16"
							style={{
								transform: `translateY(${Math.max(0, (scrollY - height * 2.5) * 0.3)}px)`
							}}
						>
							<h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
								Our <span className="text-purple-400">Journey</span>
							</h2>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								From concept to creation, witness the evolution of innovation
							</p>
						</div>

						{/* Timeline Items */}
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
							
							{[
								{ year: "2020", title: "Foundation", desc: "QTMA was born with a vision to bridge tech and business" },
								{ year: "2022", title: "First Products", desc: "Launched our first student-built applications" },
								{ year: "2024", title: "Innovation Hub", desc: "Became Queen's premier product incubation center" },
								{ year: "2025", title: "Future Forward", desc: "Leading the next wave of student innovation" }
							].map((item, index) => (
								<div 
									key={index}
									className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
									style={{
										transform: `translateY(${Math.max(0, (scrollY - height * (2.6 + index * 0.1)) * 0.2)}px)`
									}}
								>
									<div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
										<div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 transform">
											<div className="text-3xl font-bold text-blue-400 mb-2">{item.year}</div>
											<h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
											<p className="text-gray-300">{item.desc}</p>
										</div>
									</div>
									
									{/* Timeline Dot */}
									<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Final CTA Section */}
				<div 
					className="relative py-20 my-16 overflow-hidden"
					style={{
						background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 100%)'
					}}
				>
					{/* Parallax Background Elements */}
					<div className="absolute inset-0">
						<div 
							className="absolute w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"
							style={{
								transform: `translateY(${scrollY * 0.05}px) translateX(${mousePosition.x * 0.03}px)`,
								top: '10%',
								left: '20%'
							}}
						/>
						<div 
							className="absolute w-32 h-32 bg-white opacity-8 rounded-full blur-xl"
							style={{
								transform: `translateY(${scrollY * -0.03}px) translateX(${mousePosition.x * -0.02}px)`,
								bottom: '20%',
								right: '15%'
							}}
						/>
					</div>

					<div className="container mx-auto px-4 text-center relative z-10">
						<div 
							style={{
								transform: `translateY(${Math.max(0, (scrollY - height * 3.2) * 0.2)}px)`
							}}
						>
							<h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
								Ready to Build the Future?
							</h2>
							<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
								Join QTMA today and be part of Queen's most innovative student organization.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
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
