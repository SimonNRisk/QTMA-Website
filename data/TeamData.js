/**
 * Data for all QTMA members
 */

import MatthewMacEachern from "../public/assets/Members/Matthew_MacEachern.png";
import AlisonXia from "../public/assets/Members/Alison_Xia.png";
import EgorPetrov from "../public/assets/Members/Egor_Petrov.png";
import BigGuy from "../public/assets/Members/Egor_Petrov.png";

import KevinLiang from "../public/assets/Members/Kevin_Liang.png";
import OliviaXu from "../public/assets/Members/Olivia_Xu.png";
import HelenXu from "../public/assets/Members/Helen_Xu.png";
import MahirHamid from "../public/assets/Members/Mahir_Hamid.png";
import SriyaNarra from "../public/assets/Members/Sriya_Narra.png";
import ArchitaSabhani from "../public/assets/Members/Archita_Sabhani.png";
import MathhewKim from "../public/assets/Members/Mathhew_Kim.png";

import ThomasHuang from "../public/assets/Members/Thomas_Huang.png";
import GrahamCarkner from "../public/assets/Members/Graham_Carkner.png";
import AlexLian from "../public/assets/Members/Alex_Lian.png";
import ManushPatel from "../public/assets/Members/Manush_Patel.png";

import JadeWei from "../public/assets/Members/Jade_Wei.png";
import ReidMoffat from "../public/assets/Members/Reid_Moffat.png";
import CainSusko from "../public/assets/Members/Cain_Susko.png";
import YvesAlikalfic from "../public/assets/Members/Yves_Alikalfic.png";

import JulianBrickman from "../public/assets/Members/Julian_Brickman.png";
import SophieEllwood from "../public/assets/Members/Sophie_Ellwood.png";
import MichaelHan from "../public/assets/Members/Michael_Han.png";
import ConnorRewa from "../public/assets/Members/Connor_Rewa.png";
import DharsanRavindran from "../public/assets/Members/Dharsan_Ravindran.png";
import XimingYu from "../public/assets/Members/Ximing_Yu.png";
import SavannahHan from "../public/assets/Members/Savannah_Han.png";
import ConnorLeung from "../public/assets/Members/Connor_Leung.png";
import DanielJoseph from "../public/assets/Members/Daniel_Joseph.png";
import ShakibAbsar from "../public/assets/Members/Shakib_Absar.png";
import AlBarrAjiboye from "../public/assets/Members/Al-Barr_Ajiboye.png";
import MattDobaj from "../public/assets/Members/Matt_Dobaj.png";
import KeelyMcSpurren from "../public/assets/Members/Keely_McSpurren.png";

import ShabichaSureshkumar from "../public/assets/Members/Shabicha_Sureshkumar.png";
import AmandaLi from "../public/assets/Members/Amanda_Li.png";
import ErinZhang from "../public/assets/Members/Erin_Zhang.png";
import MikeNguyen from "../public/assets/Members/Mike_Nguyen.png";
import JasmineGao from "../public/assets/Members/Jasmine_Gao.png";

import AidanBrown from "../public/assets/Members/Aidan_Brown.png";
import BeatriceBeneciaSetiawan from "../public/assets/Members/Beatrice_Benecia_Setiawan.png";
import StevenVuong from "../public/assets/Members/Steven_Vuong.png";
import NickArchambault from "../public/assets/Members/Nick_Archambault.png";

import VasiliPiliouras from "../public/assets/Members/Vasili_Piliouras.png";
import JennieChoi from "../public/assets/Members/Jennie_Choi.png";
import HannahHe from "../public/assets/Members/Hannah_He.png";
import WilliamDu from "../public/assets/Members/William_Du.png";
import AminahRizvan from "../public/assets/Members/Aminah_Rizvan.png";
import MarcusHui from "../public/assets/Members/Marcus_Hui.png";
import CynthiaChoi from "../public/assets/Members/Cynthia_Choi.png";
import ClaireHu from "../public/assets/Members/Claire_Hu.png";
import EmanuelPiccinini from "../public/assets/Members/Emanuel_Piccinini.png";

import LukasCupsa from "../public/assets/Members/Lukas_Cupsa.png";
import JanevraPier from "../public/assets/Members/Janevra_Pier.png";
import SindusaraMunasinghe from "../public/assets/Members/Sindusara_Munasinghe.png";
import NathanReynolds from "../public/assets/Members/Nathan_Reynolds.png";

import KevinYu from "../public/assets/Members/Kevin_Yu.png";

// All positions team members can have
const Positions = [
	"Co-Chair",
	"Club Operations",

	"Product Manager",
	"Senior Developer",
	"Developer",
	"UI/UX Designer",
	"Senior Business Analyst",
	"Business Analyst",
	"Frosh Rep",

	"Website Developer",
];

const generateMemberData = (
	image,
	name,
	position,
	linkedin = "",
	subPosition = ""
) => {
	// Param verification
	if (typeof image !== "object") {
		throw new Error(
			`Team member's image must be an image object (import it). Image value: ${JSON.stringify(
				image
			)} Type: ${typeof image}`
		);
	}
	if (typeof name !== "string" || name.match(/^([A-Za-z -])+?$/) == null) {
		throw new Error(`Name: ${name} is invalid, see regex above`);
	}
	if (typeof position !== "string" || !Positions.includes(position)) {
		throw new Error(`'${position}' is not a valid position`);
	}
	if (typeof linkedin !== "string" || !linkedin) {
		throw new Error(
			`Linkedin is invalid, must be a valid profile url or # for no profile. Parameter value: ${linkedin}`
		);
	}
	if (typeof subPosition !== "string") {
		throw new Error(
			`Invalid Sub-Position, must be a string (can be empty). Value: ${subPosition}`
		);
	}

	// Construct & return new object
	return {
		image: image,
		name: name,
		position: position,
		subPosition: subPosition,
		linkedIn: linkedin.startsWith("https://")
			? linkedin
			: `https://www.linkedin.com/in/${linkedin}/`,
	};
};

const ClubMembers = [
	// Co-chairs
	generateMemberData(
		MatthewMacEachern,
		"Matthew MacEachern",
		"Co-Chair",
		"matthew-maceachern"
	),
	generateMemberData(AlisonXia, "Alison Xia", "Co-Chair", "alison-xia"),
	generateMemberData(
		EgorPetrov,
		"Jegor Petrov",
		"Co-Chair",
		"egorpetrov1402"
	),
	generateMemberData(BigGuy, "Big Guy", "Co-Chair", "biggie"),

	// Club operations
	generateMemberData(
		KevinLiang,
		"Kevin Liang",
		"Club Operations",
		"keviniang",
		"Director"
	),
	generateMemberData(
		OliviaXu,
		"Olivia Xu",
		"Club Operations",
		"olivia-chen-xu",
		"Director"
	),
	generateMemberData(
		HelenXu,
		"Helen Xu",
		"Club Operations",
		"helencxu",
		"Director"
	),
	generateMemberData(
		MahirHamid,
		"Mahir Hamid",
		"Club Operations",
		"mahirhamid",
		"Senior Advisor"
	),
	generateMemberData(
		SriyaNarra,
		"Sriya Narra",
		"Club Operations",
		"sriya-narra",
		"Operations"
	),
	generateMemberData(
		ArchitaSabhani,
		"Archita Sabhani",
		"Club Operations",
		"architasabhani",
		"Operations"
	),
	generateMemberData(
		MathhewKim,
		"Mathhew Kim",
		"Club Operations",
		"geonho-mattkim",
		"Operations"
	),

	// PMs
	generateMemberData(
		ThomasHuang,
		"Thomas Huang",
		"Product Manager",
		"thomas-huang-805958205"
	),
	generateMemberData(
		GrahamCarkner,
		"Graham Carkner",
		"Product Manager",
		"gcarkner"
	),
	generateMemberData(AlexLian, "Alex Lian", "Product Manager", "alex-lian"),
	generateMemberData(
		ManushPatel,
		"Manush Patel",
		"Product Manager",
		"manushpatel"
	),

	// Sr. devs
	generateMemberData(JadeWei, "Jade Wei", "Senior Developer", "jade-wei"),
	generateMemberData(
		ReidMoffat,
		"Reid Moffat",
		"Senior Developer",
		"reid-moffat"
	),
	generateMemberData(
		CainSusko,
		"Cain Susko",
		"Senior Developer",
		"cain-susko-688203202"
	),
	generateMemberData(
		YvesAlikalfic,
		"Yves Alikalfic",
		"Senior Developer",
		"yves-alikalfic"
	),

	// Devs
	generateMemberData(
		JulianBrickman,
		"Julian Brickman",
		"Developer",
		"julian-brickman-962995255"
	),
	generateMemberData(
		SophieEllwood,
		"Sophie Ellwood",
		"Developer",
		"sophie-ellwood"
	),
	generateMemberData(MichaelHan, "Michael Han", "Developer", "michael-y-han"),

	generateMemberData(ConnorRewa, "Connor Rewa", "Developer", "connorrewa"),
	generateMemberData(
		DharsanRavindran,
		"Dharsan Ravindran",
		"Developer",
		"dharsanravi"
	),
	generateMemberData(XimingYu, "Ximing Yu", "Developer", "yuximing"),

	generateMemberData(
		SavannahHan,
		"Savannah Han",
		"Developer",
		"savannah-han"
	),
	generateMemberData(ConnorLeung, "Connor Leung", "Developer", "connorleung"),
	generateMemberData(
		DanielJoseph,
		"Daniel Joseph",
		"Developer",
		"danieljoseph8"
	),
	generateMemberData(
		ShakibAbsar,
		"Shakib Absar",
		"Developer",
		"shakib-absar"
	),

	generateMemberData(
		AlBarrAjiboye,
		"Al-Barr Ajiboye",
		"Developer",
		"al-barr"
	),
	generateMemberData(MattDobaj, "Matt Dobaj", "Developer", "mattdobaj"),
	generateMemberData(
		KeelyMcSpurren,
		"Keely McSpurren",
		"Developer",
		"keely-mcspurren"
	),

	// UI/UX
	generateMemberData(
		ShabichaSureshkumar,
		"Shabicha Sureshkumar",
		"UI/UX Designer",
		"shabicha-sureshkumar-0b7372200",
		"Senior Designer"
	),
	generateMemberData(
		AmandaLi,
		"Amanda Li",
		"UI/UX Designer",
		"amanda-li-1889a9252",
		"Junior Designer"
	),
	generateMemberData(
		ErinZhang,
		"Erin Zhang",
		"UI/UX Designer",
		"erin-r-zhang",
		"Senior Designer"
	),
	generateMemberData(
		MikeNguyen,
		"Mike Nguyen",
		"UI/UX Designer",
		"mike-ngn",
		"Senior Designer"
	),
	generateMemberData(
		JasmineGao,
		"Jasmine Gao",
		"UI/UX Designer",
		"gao-jasmine",
		"Senior Designer"
	),

	// Sr. BAs
	generateMemberData(
		AidanBrown,
		"Aidan Brown",
		"Senior Business Analyst",
		"aidanbrownd"
	),
	generateMemberData(
		BeatriceBeneciaSetiawan,
		"Beatrice Benecia Setiawan",
		"Senior Business Analyst",
		"beatricebenecia"
	),
	generateMemberData(
		StevenVuong,
		"Steven Vuong",
		"Senior Business Analyst",
		"steven--vuong"
	),
	generateMemberData(
		NickArchambault,
		"Nick Archambault",
		"Senior Business Analyst",
		"nickarchambault"
	),

	// BAs
	generateMemberData(
		VasiliPiliouras,
		"Vasili Piliouras",
		"Business Analyst",
		"vasili-piliouras"
	),
	generateMemberData(
		JennieChoi,
		"Jennie Choi",
		"Business Analyst",
		"jennie-choi-994314254"
	),
	generateMemberData(HannahHe, "Hannah He", "Business Analyst", "hannah21"),
	generateMemberData(
		WilliamDu,
		"William Du",
		"Business Analyst",
		"williamdu853"
	),
	generateMemberData(
		AminahRizvan,
		"Aminah Rizvan",
		"Business Analyst",
		"aminahrizwan"
	),
	generateMemberData(
		MarcusHui,
		"Marcus Hui",
		"Business Analyst",
		"marcuscameronhui"
	),
	generateMemberData(
		CynthiaChoi,
		"Cynthia Choi",
		"Business Analyst",
		"choicynthia"
	),
	generateMemberData(ClaireHu, "Claire Hu", "Business Analyst", "huclaire"),
	generateMemberData(
		EmanuelPiccinini,
		"Emanuel Piccinini",
		"Business Analyst",
		"emanuel-piccininni"
	),

	// Frosh reps
	generateMemberData(LukasCupsa, "Lukas Cupsa", "Frosh Rep", "lukas-cupsa"),
	generateMemberData(
		JanevraPier,
		"Janevra Pier",
		"Frosh Rep",
		"janevra-pier-687562277"
	),
	generateMemberData(
		SindusaraMunasinghe,
		"Sindusara Munasinghe",
		"Frosh Rep",
		"sindusara-munasinghe"
	),
	generateMemberData(
		NathanReynolds,
		"Nathan Reynolds",
		"Frosh Rep",
		"nathan-reynolds-78a47b290"
	),

	// Web devs 🙂
	generateMemberData(
		ReidMoffat,
		"Reid Moffat",
		"Website Developer",
		"reid-moffat"
	),
	generateMemberData(
		KevinYu,
		"Kevin Yu",
		"Website Developer",
		"https://kevinyu.ca/"
	),
	generateMemberData(
		YvesAlikalfic,
		"Yves Alikalfic",
		"Website Developer",
		"yves-alikalfic"
	),
];

export { Positions, ClubMembers };
