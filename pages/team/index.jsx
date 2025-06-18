import Layout from "../../components/layout";
import Image from "next/image";
import Nav from "../Nav";
import { ClubMembers, Positions } from "../../data/TeamData.js";
import { AiFillLinkedin } from "react-icons/ai";
import Head from "next/head";
import Footer from "../../components/Footer";

const Team = () => {
	const renderClubMembers = () => {
		const renderSpecialRole = (student) => {
			if (student.subPosition) {
				return <p className="special-role">{student.subPosition}</p>;
			}
		};

		return Positions.map((category) => (
			<>
				<p className="position-name">
					{category + (category.endsWith("s") ? "" : "s")}
				</p>
				<div className="student-photos">
					{ClubMembers.filter(
						(student) => student.position === category
					).map((student, i) => (
						<div key={i} className="student-container">
							<Image
								alt="Student photo"
								className="student-image"
								src={student.image}
								width={500}
								height={500}
							/>
							<p className="student-name">{student.name}</p>
							{renderSpecialRole(student)}

							<a
								className="linkedIn"
								rel="noreferrer"
								target="_blank"
								href={student.linkedIn}
							>
								<AiFillLinkedin />
							</a>
						</div>
					))}
				</div>
			</>
		));
	};

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
					{renderClubMembers()}
				</div>
			</Layout>
			<Footer />
		</>
	);
};

export default Team;
