import React, { useState } from 'react';
import "../css/quicklinks.css";
import WebDev from '../Pages/WebDev';
import MathNPhysics from '../Pages/MathNPhysics';
import Games from '../Pages/Games';

export default function SiteMap({ selectedLink, handleLinkClick }) {

	const links = [
		{ text: "Deep Learning", value: "DL" },
		{ text: "Web Dev", value: "web", component: <WebDev /> },
		{ text: "Math & Physics", value: "mathnphy", component: <MathNPhysics /> },
		{ text: "Games", value: "play", component: <Games /> },
		{ text: "Creative Design", value: "design" },
		{ text: "Coursework", value: "coursework" }
	];

	return (
		<>
			<div style={{ textAlign: "center" }}>
				<h1>Site Map</h1>
			</div>
			<div className="spacer"></div>
			<div id="quicklinks">
				<div className="brand">
					<div>
						<div className="links">
							{links.map((link, index) => (
								<a
									key={index}
									className={selectedLink.value == link.value ? "link active" : "link"}
									onClick={() => handleLinkClick(link)}
								>
									{link.text}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
