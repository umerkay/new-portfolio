import React, { useState } from 'react';
import "../css/quicklinks.css";

export default function SiteMap({ selectedLink, links }) {

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
									className={(selectedLink?.value == link.value ? "link active " : "link ") + (link.disabled ? "disabled" : "")}
									onClick={() => !link.disabled}
									disabled={link.disabled}
									//new tab
									{...((link.href && !link.disabled) ? { href: link.href, target: link.target || "" } : {})}
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
