import React from 'react'
import Display from '../Components/Display'
import "../css/coursework.css";
import "../css/publications.css";
import paperImg from "../img/paper.png";

export default function Publications() {
    return (<>
        <h2 style={{color: "#ddd"}}>Research</h2>
        <h1 className="title" style={{fontWeight: "bold", marginBottom: "0.5rem"}}>Publications</h1>
        {/* <h3 style={{color: "#eee", fontStyle: "italic"}}>Research publications and conference papers</h3> */}
        <div className='spacer'/>
        
        <Display
            title="Breast Cancer Detection Through Spectrogram Generation from GANs-Simulated Microwave Imaging Data"
            subtitle="2025 2nd International Conference on Microwave, Antennas & Circuits (ICMAC)"
            links={[
                { href: "https://ieeexplore.ieee.org/document/11003239", text: "IEEE Xplore", style: { backgroundColor: 'rgb(0, 102, 204)', color: 'white' } },
                // { href: "https://doi.org/10.1109/ACCESS.2024.11003239", text: "DOI", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } }
            ]}
            description="This research presents a novel approach to breast cancer detection using microwave imaging data enhanced with Generative Adversarial Networks (GANs). S11 and S12 parameters are converted to frequency spectrograms using Fourier analysis, which are then fed into deep learning models for classification of cancerous vs. non-cancerous tissue."
            info={<span><br /><b>⭕ Novel GAN-based data simulation approach</b><br />
                   <b>⭕ Microwave imaging & spectrogram analysis</b><br />
                   <b>⭕ Deep learning classification for medical diagnosis</b><br />
                   <b>⭕ Demonstrates promising accuracy and generalizability</b></span>}
            titleStyle={{ color: 'rgb(27, 27, 27)' }}
            logoAlt="Breast Cancer Detection Research"
            id={"pub"}
            style={{ alignItems: 'center', background: 'white', color: 'rgb(27, 27, 27)' }}
        />
        
        <div className='spacer'></div>
    </>
    )
}
