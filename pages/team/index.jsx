import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import Head from "next/head";
import Footer from "../../components/Footer";
import { ClubMembers, Positions } from "../../data/TeamData.js";
import { TeamRoleSection } from "./components/TeamRoleSection";

const Team = () => {
	return (
		<>
			<Head>
				<meta name="description" content="2023/2024 Team" />
				<title>QTMA</title>
				<meta name="og:title" content={"QTMA"} />
			</Head>

			<Nav />

			<Layout background={"#edf5fc"}>
				<div className="history-container container">
					<h1 className="section-title">2023/2024 Team</h1>

					{Positions.map((role) => {
						const members = ClubMembers.filter(
							(m) => m.position === role
						);
						if (members.length === 0) return null;

						return (
							<TeamRoleSection
								key={role}
								role={role}
								members={members}
							/>
						);
					})}
				</div>
			</Layout>

			<Footer />
		</>
	);
};

export default Team;
