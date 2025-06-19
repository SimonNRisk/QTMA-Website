import { LinkBox } from "./LinkBox";
import Image from "next/image";

type BannerProps = {
	title: string;
	message: string;
	linkBox: React.ReactNode;
	images?: string[];
};

export function Banner({ title, message, linkBox, images = [] }: BannerProps) {
	const renderImages = () => {
		if (images.length == 2) {
			return (
				<div className="flex flex-col items-center gap-4 mt-6">
					{images.map((src, i) => (
						<Image
							key={i}
							src={src}
							alt={`banner-image-${i}`}
							width={200}
							height={200}
							className="rounded-lg shadow"
						/>
					))}
				</div>
			);
		} else if (images.length === 3) {
			return (
				<div className="relative mt-6 h-[240px] w-full flex justify-center items-center">
					<Image
						src={images[0]}
						alt="top"
						width={160}
						height={160}
						className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-lg shadow"
					/>
					<Image
						src={images[1]}
						alt="left"
						width={160}
						height={160}
						className="absolute bottom-0 left-1/4 transform -translate-x-1/2 rounded-lg shadow"
					/>
					<Image
						src={images[2]}
						alt="right"
						width={160}
						height={160}
						className="absolute bottom-0 right-1/4 transform translate-x-1/2 rounded-lg shadow"
					/>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="bg-blue-100 border-4 border-blue-600 rounded-3xl py-8 px-4 mx-16 sm:px-6 lg:px-8 mb-16">
			<div className="max-w-3xl mx-auto text-left">
				<h1 className="text-blue-600 text-3xl sm:text-4xl mb-4">
					{title}
				</h1>
				<p className="text-gray-400 text-lg sm:text-xl mb-6 max-w-[60%]">
					{message}
				</p>
				{linkBox}
				{renderImages()}
			</div>
		</div>
	);
}
