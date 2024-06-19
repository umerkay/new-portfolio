import React from 'react'
import Display from '../Components/Display'
import "../css/coursework.css";
import img from "../img/coal.jpg";

export default function Coursework() {
    return (<>
        <h2 style={{color: "#ddd"}}>Coursework for</h2>
        <h1 class="title" style={{fontWeight: "bold", marginBottom: "0.5rem"}}> Bachelors of Science in Computer Science</h1>
        <h3 style={{color: "#eee", fontStyle: "italic"}}><a target="_blank" href='https://nust.edu.pk/'>National University of Sciences and Technology, Islamabad, Pakistan</a></h3>
        <div className='spacer'/>
        <Display
            title="μ-processor Simulator"
            links={[
                { href: "https://github.com/umerkay/processorsim", text: "Code", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } },
                { href: "https://umerkay.github.io/processorsim/", text: "Live", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } }
            ]}
            images={[img]}
            description="This project has been made as part of the coursework required for CS 235 Computer Organisation and Assembly Language. It is a graded group assignment."
            info={<span><br /><b>⭐ Awarded Best Project at National University of Sciences and Technology, Islamabad</b></span>}
            titleStyle={{ color: 'rgb(27, 27, 27)' }}
            logoAlt="μ-processor Simulator"
            id={"coursework"}
            style={{ alignItems: 'center', background: 'white', color: 'rgb(27, 27, 27)' }}
        />
        <div className='spacer'></div>
    </>
    )
}
