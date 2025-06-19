import { SparkIcon } from "../public/assets/icons/SparkIcon.jsx";

const sizeMap = {
	small: "sm",
	medium: "md",
	large: "lg",
} as const;

type Size = keyof typeof sizeMap;

const paddingBySize: Record<"sm" | "md" | "lg", string> = {
	sm: "p-2 text-sm",
	md: "p-4 text-base",
	lg: "p-6 text-lg",
};

type LinkBoxProps = {
	message: string;
	link: string;
	icon?: React.ReactNode;
	hasIcon?: boolean;
	size?: Size;
};

export function LinkBox({
	message,
	link,
	icon,
	hasIcon = false,
	size = "medium",
}: LinkBoxProps) {
	const twSize = paddingBySize[sizeMap[size]];

	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={`text-gray-500 bg-white border-4 border-gray-400 rounded-full shadow-md inline-flex items-center gap-2 no-underline hover:bg-gray-100 hover:cursor-pointer transition ${twSize}`}
		>
			{hasIcon && <span className="shrink-0">{icon}</span>}
			<span>{message}</span>
		</a>
	);
}
