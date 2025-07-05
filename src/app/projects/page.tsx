"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { ChromaGrid } from "@/components/ui/ChromaGrid";

const projects = [
	{
		title: "GoldLace",
		description: "Landing page for GoldLacee, a fashion store.",
		image: "/gold.png",
		link: "https://github.com/sandeep-senn/E---Commerce",
		live: "https://e-commerce-one-gamma-79.vercel.app/",
	},
	{
		title: "Be Productive",
		description: "A productivity app to manage tasks and goals.",
		image: "/prod.png",
		link: "https://github.com/sandeep-senn/Be-Productive",
		live: "https://be-productive-one.vercel.app/",
	},
	{
		title: "AI Mentor Platform",
		description:
			"Personalized AI for Code Debuggind, Code Converting with AI chatBOT",
		image: "/Mentor.png",
		link: "https://github.com/sandeep-senn/AI-Powered-Mentor-Platform",
		live: "https://ai-powered-mentor-platform-bven.vercel.app/",
	},
	{
		title: "Jarvis AI",
		description: "A personalized voice assistant for daily tasks.",
		image: "/jarvis.png",
		link: "https://github.com/sandeep-senn/Jarvis-AI",
		live: "https://jarvis-ai-plum.vercel.app/",
	},
	{
		title: "User Authentication System",
		description: "Secure user authentication with JWT.",
		image: "/auth.png",
		link: "https://github.com/sandeep-senn/user-authentication-system",
		live: "https://user-authentication-system-sand.vercel.app/",
	},
	{
		title: "CarFix Website",
		description: "Modern garage service site with UI polish.",
		image: "/carfix.png",
		link: "https://github.com/sandeep-senn/CarFix",
		live: "https://car-fix.vercel.app/",
	},
	{
		title: "Notes App",
		description: "Basic Notes Management app for you!",
		image: "/goodnotes.png",
		link: "https://github.com/sandeep-senn/notes-management-system",
		live: "https://notes-management-app-pg69.vercel.app/",
	},
	{
		title: "User Management System",
		description: "User Management system to store user data.",
		image: "/user.png",
		link: "https://github.com/sandeep-senn/User-Management-System",
		live: "https://user-management-system-lilac.vercel.app/",
	},
];

const Projects = () => {
	return (
		<section className="min-h-screen bg-white text-black px-10 py-20 rounded-b-[80px]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-7xl md:text-7xl animate-bounce font-bold text-blue-600 text-center mb-16">
					Projects
				</h2>

				<ChromaGrid
					items={projects.map((p) => ({
						image: p.image,
						title: p.title,
						subtitle: p.description,
						handle: undefined,
						borderColor: "#2563eb", // modern blue
						gradient: "linear-gradient(145deg, #2563eb, #000)",
						url: p.live,
						location: undefined,
					}))}
					columns={3}
					rows={Math.ceil(projects.length / 3)}
					radius={320}
					className="my-8"
				/>
			</div>
		</section>
	);
};

export default Projects;
