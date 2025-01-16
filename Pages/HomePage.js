import React, { useEffect, useState, useRef } from 'react'
import Signature from '../Components/Signature'
import Intro from '../Components/Intro'
import SiteMap from '../Components/SiteMap'
import { useLocation } from 'react-router-dom'
import WebDev from '../Pages/WebDev'
import MathNPhysics from '../Pages/MathNPhysics'
import Games from '../Pages/Games'
import Coursework from '../Pages/Coursework'
import DeepLearning from './DeepLearning'

const links = [
  { text: "Web Dev", value: "web", component: <WebDev /> },
  { text: "Math & Physics", value: "mathnphy", component: <MathNPhysics /> },
  { text: "Games", value: "play", component: <Games /> },
  { text: "Creative Design", value: "design", href: "https://umerkay.github.io/DesignPortfolio.pdf" },
  { text: "Coursework", value: "coursework", component: <Coursework /> },
  { text: "Deep Learning", value: "DL", component: <DeepLearning /> },
  { text: "FitReflect", value: "fitreflect", href: "https://fitreflect.com" },
].map((link) => ({ ...link, href: link.href || `#${link.value}` }));

export default function HomePage() {
  const { hash } = useLocation();
  const [selectedLink, setSelectedLink] = useState(null);

  // Create a ref for each section
  const sectionRefs = useRef(links.reduce((acc, link) => {
    acc[link.value] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    if (hash) {
      const link = links.find(link => link.value === hash.slice(1));
      setSelectedLink(link);
    }
  }, [hash]);

  // Scroll to the selected section when it's set
  useEffect(() => {
    if (selectedLink && sectionRefs.current[selectedLink.value]) {
      sectionRefs.current[selectedLink.value].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedLink]);

  return (
    <div className='container'>
      <Signature />
      <Intro />
      <div id='lll' className="spacer"></div>
      <SiteMap links={links} selectedLink={selectedLink} />
      {/* Render the selected component and assign the ref */}
      {selectedLink?.component && (
        <div style={{paddingTop: "5rem"}} ref={sectionRefs.current[selectedLink.value]}>
          {selectedLink.component}
        </div>
      )}
    </div>
  );
}
