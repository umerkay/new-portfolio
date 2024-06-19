import React, { useState } from 'react';
import "../css/quicklinks.css";
import WebDev from '../Pages/WebDev';
import MathNPhysics from '../Pages/MathNPhysics';
import Games from '../Pages/Games';
import Coursework from '../Pages/Coursework';

export default function SiteMap({ selectedLink, handleLinkClick }) {

	const links = [
		{ text: "Web Dev", value: "web", component: <WebDev /> },
		{ text: "Math & Physics", value: "mathnphy", component: <MathNPhysics /> },
		{ text: "Games", value: "play", component: <Games /> },
		{ text: "Creative Design", value: "design", href: "https://umerkay.github.io/DesignPortfolio.pdf" },
		{ text: "Coursework", value: "coursework", component: <Coursework /> },
		{ text: "Deep Learning", value: "DL", disabled: true },
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
									className={(selectedLink.value == link.value ? "link active " : "link ") + (link.disabled ? "disabled" : "")}
									onClick={() => !link.disabled && handleLinkClick(link)}
									disabled={link.disabled}
									//new tab
									{...((link.href && !link.disabled) ? { href: link.href, target:"_blank" } : {})}
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
