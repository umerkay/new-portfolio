import React from 'react'

export default function AboutSection({ large, logos, title, desc, img, dir = 'left', button }) {
    return (
        <div className='aboutsection' style={{ marginBottom: large ? '10rem' : '3rem' }}>
            <div className={"text " + dir}>
                {logos ? (<div className='logos'>
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt="" />
                    ))}
                </div>) : null}
                <div className='text-child'>
                    <h1 className="title">{title}</h1>
                    <h2 className="desc">{desc}</h2>
                    {button ? <a href={button.link} className='btn'>{button.text}</a> : null}
                </div>
            </div>
            <div className={dir == 'left' ? 'img right' : 'img left'}>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
