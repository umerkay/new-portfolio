import React from 'react';
import "../css/drawboard.css";
import "../css/prayerjournal.css";
import "../css/skills.css";
import "../css/watchtoday.css";
import skillsImg from "../img/skills.png";
import pjSs1Img from "../img/pj-ss1.jpg";
import pjSs2Img from "../img/pj-ss2.jpg";
import pjLogoImg from "../img/pj-logo.png";
import drawboard03Img from "../img/drawboard03.jpg";
import drawboard02Img from "../img/drawboard02.jpg";
import watchtoday01Img from "../img/watchtoday01.png";
import watchtoday02Img from "../img/watchtoday02.png";
import Display from "../Components/Display";

export default function WebDev() {
	return (
		<div>
			<div id="skills">
				<div className="brand anim fadeintoleft">
					<div>
						<h1 className="inline">Skills</h1>
						<p className="inline">
							HTML&CSS <span className="bold">JavaScript</span><br />
							<span className="bold">Node.js</span> Express
							<span className="bold">React</span> Redux Socket.io<br />
							<span className="bold">Progressive Web Apps</span><br />
							p5.js Creative Coding <span className="bold">Game Development</span><br />
							<span className="bold">Modern</span> Responsive Web & Mobile Design<br />
							MongoDB <span className="bold">Firebase</span><br />
						</p>
					</div>
				</div>
				<div className="anim fadein">
					<div className="splash anim shrink">
						<img src={skillsImg} alt="Skills" />
					</div>
				</div>
			</div>

			<h1 className="title">JavaScript Web Projects</h1>

			<Display
				title="Prayer Journal"
				images={[pjSs1Img, pjSs2Img]}
				links={[
					{ href: "https://umerkay.github.io/prayerjournal/", text: "Code" },
					{ href: "https://umerkay.github.io/prayerjournal/", text: "View Live" }
				]}
				logo={pjLogoImg}
				logoAlt="Prayer Journal Logo"
				description="A journal for Muslims to record daily obligatory Salah. PWA that syncs across all types of devices"
				info={[
					"React, with Hooks, Functional Components and the Context API only",
					"Secure and Realtime sync with Firebase Firestore and Authentication",
					"Modern, Minimalist Design. Can work Offline",
					"Makes use of Sass/Scss"
				]}
				id={"prayerjournal"}
			/>

			<Display
				title="Drawboard"
				images={[drawboard03Img, drawboard02Img]}
				links={[
					{ href: "https://github.com/umerkay/Drawboard", text: "Code" },
					{ href: "https://cryptic-oasis-85688.herokuapp.com", text: "View Live" }
				]}
				description="Realtime Collaborative Drawing Application with Integrated Chat"
				info="This application is built using the MERN stack, with MongoDB, Express, React and Node.js. This instance is a project demonstration only and not meant for production. It utilises socket.io for real-time drawing and chat messages, and needlessjs for working with HTML canvases"
				id={"drawboard"}
				mirror={true}
			/>

			<Display
				title={<>Watch<span style={{ fontStyle: 'italic' }}>Today</span></>}
				images={[watchtoday01Img, watchtoday02Img]}
				links={[
					{ href: "https://github.com/umerkay/watchtoday", text: "Code" },
					{ href: "https://umerkay.github.io/watchtoday", text: "View Live" }
				]}
				description="Simple, Minimalist Movie Explorer Application. Demonstrates Frontend React Skills with the Hooks API"
				info={[
					"React, with Hooks and Functional Components only",
					"Uses Hash Router",
					"Modern, Minimalist Design",
					"Makes use of Sass/Scss"
				]}
				id={"watchtoday"}
				mirror={true}
			/>
		</div>
	)
}
