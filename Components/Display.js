
function Display({ title, images, links, logo, description, info, titleStyle, logoAlt, id, mirror=false, style={} }) {
	return (
		<div className="display" id={id} style={style}>
			<div className="anim fadein" style={{order: mirror ? 2 : 0}}>
				<div className="imgs">
					{images && images.map((image, index) => (
						<img key={index} src={image} alt="" />
					))}
				</div>
			</div>
			<div>
				<div className="brand anim fadeintoright">
					<div>
						<div>
							{links.map((link, index) => (
								<a key={index} className="btn" href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
							))}
							<br />
							<div className="titleNicon">
								{logo && <img src={logo} width="50px" alt={logoAlt} />}
								<h1 className="title" style={titleStyle}>{title}</h1>
							</div>
							<h2 className="sub">{description}</h2>
							<div className="spacer"></div>
							{info ? (Array.isArray(info) ? (
								<ul className="info">
									{info.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							) : (
								<p className="info">{info}</p>
							)) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Display