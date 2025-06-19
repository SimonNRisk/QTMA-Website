import { TeamMemberCard } from "./TeamMemberCard";
type Props = {
	role: string;
	members: {
		name: string;
		image: string;
		subPosition?: string;
		linkedIn?: string;
	}[];
};

export function TeamRoleSection({ role, members }: Props) {
	return (
		<div className="mb-40">
			<h2 className="text-4xl text-qtmaPrimaryDark font-light text-center mb-12">
				{role + (role.endsWith("s") ? "" : "s")}
			</h2>
			{/* TODO: migrate this to grid rather than flex for better vertical spacing (no gap-x gap-y, yes grid-x grid-y) */}
			<div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-28 xl:gap-36 2xl:gap-54">
				{members.map((member, i) => (
					<TeamMemberCard key={i} {...member} />
				))}
			</div>
		</div>
	);
}
