import React from 'react';
import '../css/about.scss';
import AboutSection from '../Components/AboutSection';
import img1 from '../img/umerkayexplains.png';
import img2 from '../img/DL.png';
import img3 from '../img/design.png';
import img4 from '../img/skills.png';
import tum from '../img/tumlogo.png';
import nust from '../img/nustlogo.png';
import umer from '../img/umerkay.jpg';

const About = () => {
  return (
    <div className="container anim fadein">
      <div className="about">
        <div className="title">M. Umer K.</div>

        <AboutSection
          title={<>
            <div className='logos'>
              <img src={tum} alt="TUM" style={{}} />
              <img src={nust} alt="NUST" style={{}} />
            </div>
            Visitng Researcher, Technical University of Munich
            <br />
            Research Intern, MachVis Lab, Islamabad
          </>}
          desc={"Currently doing academic research in Computer Vision. Specifically, I am working on using domain adaptation & few-shot learning methods to train useful deep learning models on satellite imagery data. I am working on a DAAD-funded project with AI4EO at TUM and NARC in Islamabad."}
          img={umer}
          dir='left'
          large={true}
        ></AboutSection>

        <AboutSection
          title={'Umerkay Explains'}
          desc={"I am making videos explaining deep learning and AI concepts over on youtube. 3blue1brown, Computerphile, Tom Scott and Yannic Kilcher are some of my inspirations. Work in Progress 🚧👷"}
          img={img1}
          dir='right'
        ></AboutSection>

        <AboutSection
          title={'Deep Learning - CV & NLP'}
          desc={"I am working on self-interest projects in DeepLearning and Computer Vision. Projects include Humaizing AI Text, Visual Question Answering Chatbot, Pose Detection, Object Detection, Land Use Segmentation, Virtual Try-On, and more."}
          img={img2}
          large
          button={{ text: 'Projects', link: '/#DL' }}
        ></AboutSection>

        <AboutSection
          title={'Full-Stack Web Developer'}
          desc={"A keen JavaScript nerd, trying to convince every person I meet to learn this language and accompany me on this journey to adorn the web. I have experience both with back-end and front-end development, and front-end interface and experience design."}
          img={img3}
          button={{ text: 'Projects', link: '/#web' }}
        ></AboutSection>

        <AboutSection
          title={'UI & Graphic Designer'}
          desc={"Experienced with design tools like Photoshop and Illustrator, including designing infographics, posters, and items for the purposes of print. Have worked with various events to produce artwork and graphics."}
          img={img4}
          dir='right'
          large
          button={{ text: 'Portfolio', link: '/DesignPortfolio.pdf' }}
        ></AboutSection>


        {/* <div className="body">
          <div>
            Developer of the World Wide Web; | develop, design and engineer Web
            Applications and Websites. <br />
            A keen JavaScript nerd, trying to convince every person | meet to
            learn this language and accompany me on this journey to adorn the
            Web. | have experience both with back and front end development, and
            front end interface and experience design.<br /><br />
            | write blogs over at DEV which include tips and some of my
            experiences, including occasional rants.
            <a
              style={{ textDecoration: 'underline' }}
              href="https://dev.to/umerkk164"
              target="_blank"
              rel="noopener noreferrer"
            >
              dev.to/umerkk164
            </a>
          </div>
          <div>
            I have been a designer of computer graphics since I was about ten.
            <br />
            Experienced with design tools like Photoshop, Illustrator, including
            designing infographics, posters, and items for the purposes of
            print. Have worked with various events to produce artwork and
            graphics.
            <br /><br />
            If you wish to reach out to me, email is the quickest way to do so.
            <br />
            umerkk164@gmail.com
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
