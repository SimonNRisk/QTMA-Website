import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";

type Props = {
	name: string;
	image: string;
	subPosition?: string;
	linkedIn?: string;
};

export function TeamMemberCard({ name, image, subPosition, linkedIn }: Props) {
	console.log(linkedIn);
	return (
		<div className="text-center">
			{linkedIn ? (
				<a
					href={linkedIn}
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<Image
						alt={`Photo of ${name}`}
						src={image}
						className="rounded-full border-4 border-gray-400 shadow-md aspect-square object-cover"
						width={200}
						height={200}
					/>
				</a>
			) : (
				<Image
					alt={`Photo of ${name}`}
					src={image}
					className="rounded-full border-4 border-gray-400 shadow-md aspect-square object-cover"
					width={200}
					height={200}
				/>
			)}
			<p className="">{name}</p>
		</div>
	);
}
