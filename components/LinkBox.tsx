import { SparkIcon } from "../public/assets/icons/SparkIcon.jsx";

type LinkBoxProps = {
	message: string;
	link: string;
	icon?: React.ReactNode;
	hasIcon?: boolean;
};

export function LinkBox({
	message,
	link,
	icon = <SparkIcon />,
	hasIcon = false,
}: LinkBoxProps) {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="text-gray-500 bg-white border-4 border-gray-400 p-4 rounded-full shadow-md inline-flex items-center gap-2 no-underline hover:bg-gray-50 transition"
		>
			{hasIcon && <span className="shrink-0">{icon}</span>}
			<span>{message}</span>
		</a>
	);
}
