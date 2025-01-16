import React from 'react'
import SideScroller from '../Components/SideScroller'
import Display from '../Components/Display'
import "../css/needless.css";
import img from "../img/needlesslogo.jpg";

export default function Games() {
    return (
        <>
            <h1 class="title"> Games!</h1>
            {/* <div className='spacer' /> */}
            <SideScroller></SideScroller>
            <Display
                title="needlessjs"
                links={[
                    { href: "https://github.com/umerkay/needless-library", text: "Code" },
                    { href: "https://umerkay.github.io/needlessjs/", text: "Website" }
                ]}
                images={[img]}
                description="Graphic & Sketch Library"
                info="These games are made with love on Needlessjs, or some development version of it. Needlessjs is a library I have developed myself to do away with the redundant and cumbersome nature of the Canvas API in JavaScript. It is inspired by p5.js and the Processing Foundation's work, but allows sketches to be much more modular."
                id={"needless"}
            />
        </>
    )
}
