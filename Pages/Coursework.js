import React from 'react'
import Display from '../Components/Display'
import "../css/coursework.css";
import img from "../img/coal.jpg";
import "../css/aEye.css";
import "../css/landuse.css";
import "../css/fss.css";
import img0 from "../img/aeye1.png";
import img2 from "../img/aeye2.jpg";
import img3 from "../img/landuse1.png";
import img4 from "../img/fss1.png";
import img5 from "../img/fss2.png";
import FSSTable from '../Components/FssTable';

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
        
        <Display
            title={<>a<span style={{fontWeight: "bolder", color: "rgba(10, 0, 192, 0.801)"}}>EYE</span></>}
            links={[
                { href: "https://github.com/umerkay/aEYE", text: "Code", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } },
                { href: "https://github.com/umerkay/aEYE/blob/main/DL%20Proj%20Report.pdf", text: "Report", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } }
            ]}
            images={[img0, img2]}
            description="aEYE is a Visual Question Answering (VQA) system designed to empower visually impaired individuals by providing access to visual content through natural language questions."
            info={<span><br /><b>⭕ Our solution involves fine-tuning a pretrained version of Microsoft’s GenerativeImage2Text (GIT) model on the COCOQA dataset.</b></span>}
            titleStyle={{ color: 'rgb(27, 27, 27)' }}
            logoAlt="aEYE"
            id={"aEye"}
            mirror={true}
            imgHorizontal={true}
            style={{ alignItems: 'center', background: 'white', color: 'rgb(27, 27, 27)' }}
        />
        <Display
            title="Improving Alzeimer's Diagnosis"
            links={[
                { href: "https://github.com/umerkay/FeatureSubsetSelection", text: "Code", style: { backgroundColor: 'rgb(0, 0, 0)', color: 'white' } },
                { href: "https://github.com/umerkay/FeatureSubsetSelection/blob/main/AI%20GA%20and%20PSO.pdf", text: "Report", style: { backgroundColor: 'rgb(0, 0, 0)', color: 'white' } }
            ]}
            images={[img4]}
            description="with Feature Subset Selection using Genetic Algorithm (GA) and Particle Swarm Optimization (PSO), and Non-dominated Sorting Genetic Algorithm II (NSGA-II) for multi-objective optimization."
            info={<><span><br /><b>
                ⭕ Accuracy improves when redundant features are removed, but reaches plateau 
                <br />⭕ NSGA-II used to show tradeoff between accuracy and no. of features in subset
                </b></span>
                 <FSSTable /></>}
            titleStyle={{ color: 'rgb(27, 27, 27)' }}
            logoAlt="Feature Subset Selection"
            id={"fss"}
            mirror={true}
            style={{ alignItems: 'center', background: 'white', color: 'rgb(27, 27, 27)' }}
        />
        <div className='spacer'></div>
    </>
    )
}
