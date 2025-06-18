type LinkBoxProps = {
	message: string;
	link: string;
};

export function LinkBox({ message, link }: LinkBoxProps) {
	return (
		<div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
			<a href={link} target="_blank">
				{message}
			</a>
		</div>
	);
}
