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
		<div className="mb-10">
			<h2 className="text-4xl text-qtmaPrimaryDark font-light text-center mb-4">
				{role + (role.endsWith("s") ? "" : "s")}
			</h2>
			<div className="student-photos">
				{members.map((member, i) => (
					<TeamMemberCard key={i} {...member} />
				))}
			</div>
		</div>
	);
}
