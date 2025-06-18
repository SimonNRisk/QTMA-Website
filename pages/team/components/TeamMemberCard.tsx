import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";

type Props = {
	name: string;
	image: string;
	subPosition?: string;
	linkedIn?: string;
};

export function TeamMemberCard({ name, image, subPosition, linkedIn }: Props) {
	return (
		<div className="student-container text-center">
			<Image
				alt={`Photo of ${name}`}
				src={image}
				className="student-image"
				width={500}
				height={500}
			/>
			<p className="student-name">{name}</p>
			{subPosition && <p className="special-role">{subPosition}</p>}
			{linkedIn && (
				<a
					className="linkedIn"
					target="_blank"
					rel="noreferrer"
					href={linkedIn}
				>
					<AiFillLinkedin />
				</a>
			)}
		</div>
	);
}
