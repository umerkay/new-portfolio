import React from 'react'
import Display from '../Components/Display'
import "../css/aEye.css";
import "../css/landuse.css";
import "../css/fss.css";
import img from "../img/aeye1.png";
import img2 from "../img/aeye2.jpg";
import img3 from "../img/landuse1.png";
import img4 from "../img/fss1.png";
import img5 from "../img/fss2.png";
import FSSTable from '../Components/FssTable';

export default function DeepLearning() {
    return (<>

        <h1 id='DL' class="title"> Deep Learning & ML Projects</h1>
        <h3 style={{color: "#eee", fontStyle: "italic"}}>Demos not available due to resource constraints.</h3>
        <div className='spacer' />
        <div className='spacer' />
        <Display
            title={<>a<span style={{fontWeight: "bolder", color: "rgba(10, 0, 192, 0.801)"}}>EYE</span></>}
            links={[
                { href: "https://github.com/umerkay/aEYE", text: "Code", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } },
                { href: "https://github.com/umerkay/aEYE/blob/main/DL%20Proj%20Report.pdf", text: "Report", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } }
            ]}
            images={[img, img2]}
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
            title="Land Use Segmentation"
            subtitle="with UNet++ on DeepGlobe"
            links={[
                { href: "https://github.com/umerkay/aEYE", text: "Github", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } },
                { href: "https://github.com/umerkay/satellite-imaging-segmentation/blob/main/Satellite%20Image%20Segmentation.ipynb", text: "Notebook", style: { backgroundColor: 'rgb(113, 6, 236)', color: 'white' } }
            ]}
            images={[img3]}
            description="Dataset part of the DeepGlobe Challenge. A UNet++ architecture is used to predict segmentation maps of satellite imagery. The masks classify between 7 different classes for land use: urban, agriculture, rangeland, forest, water, barren, and unknown."
            info={<span><br /><b>⭕ Satellite data exhibits class imbalance. This is tackled by calculating and using class weights in the loss calculation.</b></span>}
            titleStyle={{ fontSize: '2.5em' }}
            logoAlt="Land Use Segmentation"
            id={"landuse"}
            imgHorizontal={true}
            style={{ alignItems: 'center' }}
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
