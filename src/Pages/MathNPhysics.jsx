import React from 'react'
import Display from '../Components/Display'
import evo1Img from "../img/evo1.png";
import evo2Img from "../img/evo2.png";
import "../css/nf.css";
import "../css/optics.css";
import "../css/evolution.css";

export default function MathNPhysics() {
    return (
        <>
            <h1 className="title"> Math, Intelligence and Physics in JavaScript</h1>
            <div className='spacer'/>
            <Display
                title="Newton's Fractals"
                links={[
                    { href: "https://github.com/umerkay/Newtons-Fractal/", text: "Code" },
                    { href: "https://umerkay.github.io/Newtons-Fractal/", text: "View Live" }
                ]}
                description="Renders pretty pictures using Newton's method applied to a fixed polynomial"
                id={"nf"}
            />

            <Display
                title="Optics Simulation"
                links={[
                    { href: "https://github.com/umerkay/Optics-Simulation", text: "Code" },
                    { href: "https://umerkay.github.io/Optics-Simulation/", text: "View Live" }
                ]}
                description="Simulation and Demonstration of Complex (Simple) Light Behaviours"
                info="This application is built purely in JavaScript. Every reasonable effort has been
        made for mathematic computational efficiency and physical
        accuracy. It simulates reflection, refraction in mediums of
        different shapes and refractive indices, including circles and
        polygons, lens behaviours and light filters."
                id={"optics"}
            />

            <Display
                title="Evolution Sandbox"
                links={[
                    { href: "https://github.com/umerkay/EvolutionSandbox", text: "GitHub" },
                    { href: "https://umerkay.github.io/EvolutionSandbox/", text: "View Live" }
                ]}
                description="Simulation of Genetic Evolution in Intelligent Autonomous Agents"
                images={[evo1Img, evo2Img]}
                info="This simulation is built purely in JavaScript. Every reasonable effort has been made for
        mathematic computational efficiency and physical and biological
        accuracy, as required for the scope of this simulation."
                id={"evolution"}
                mirror={true}
            />
        </>
    )
}
