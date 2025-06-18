import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
	{
		image: 'https://static1.lenskart.com/media/desktop/img/Lenskart/Tilak-Verma/Home/Desktop-Banner.png',
		bg: '#1a2650',
		link: '/posts/tilak-verma',
	},
	{
		image: 'https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-wildgear.png',
		bg: '#1a2650',
		link: '/posts/wildgear',
	},
	{
		image: 'https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-harrypotter_20052025_rat.png',
		bg: '#1a2650',
		link: '/posts/harrypotter',
	},
	{
		image: 'https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-hustlr.png',
		bg: '#1a2650',
		link: '/posts/hustlr',
	},
	{
		image: 'https://static5.lenskart.com/media/uploads/NEW_AT_LK-Shapes_04062025_rat.png',
		bg: '#1a2650',
		link: '/posts/shapes-0406',
	},
	{
		image: 'https://static5.lenskart.com/media/uploads/Desktop-v2-topbanner-twyst.png',
		bg: '#1a2650',
		link: '/posts/twyst',
	},
	{
		image: 'https://static5.lenskart.com/media/uploads/NEW_AT_LK-Shapes-27772-desktop-banner.png',
		bg: '#1a2650',
		link: '/posts/shapes-27772',
	},
];

const HeroCarousel: React.FC = () => {
	const [current, setCurrent] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((prev) => (prev + 1) % slides.length);
		}, 4000); // Change slide every 4 seconds
		return () => clearInterval(timer);
	}, []);

	const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
	const next = () => setCurrent((prev) => (prev + 1) % slides.length);

	const slide = slides[current];

	const handleBannerClick = () => {
		if (slide.link) {
			navigate(slide.link);
		}
	};

	return (
		<div
			className="relative w-full h-[630px] md:h-[630px] flex items-center justify-center overflow-hidden cursor-pointer"
			style={{ background: slide.bg }}
			onClick={handleBannerClick}
		>
			<img
				src={slide.image}
				alt="Banner"
				className="absolute inset-0 w-full h-full object-cover opacity-95 transition-all duration-1000 ease-in-out pointer-events-none scale-100"
				style={{ transitionProperty: 'opacity, transform' }}
			/>
			{/* Navigation Arrows */}
			<button
				className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-transparent hover:bg-white/10 rounded-full w-16 h-16 flex items-center justify-center transition pointer-events-auto"
				onClick={(e) => {
					e.stopPropagation();
					prev();
				}}
				aria-label="Previous slide"
				style={{ outline: 'none' }}
			>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polyline
						points="25,10 15,20 25,30"
						stroke="white"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
					/>
				</svg>
			</button>
			<button
				className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-transparent hover:bg-white/10 rounded-full w-16 h-16 flex items-center justify-center transition pointer-events-auto"
				onClick={(e) => {
					e.stopPropagation();
					next();
				}}
				aria-label="Next slide"
				style={{ outline: 'none' }}
			>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polyline
						points="15,10 25,20 15,30"
						stroke="white"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
					/>
				</svg>
			</button>
		</div>
	);
};

export default HeroCarousel;
