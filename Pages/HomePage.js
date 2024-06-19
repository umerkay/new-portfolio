import React, { useState } from 'react'
import Signature from '../Components/Signature'
import Intro from '../Components/Intro'
import SiteMap from '../Components/SiteMap'

export default function HomePage() {
  
	const [selectedLink, setSelectedLink] = useState("");

	const handleLinkClick = (value) => {
		setSelectedLink(value);
	};

  return (
    <div className='container'>
      <Signature />
      <Intro />
      <div class="spacer"></div>
      <SiteMap selectedLink={selectedLink} handleLinkClick={handleLinkClick} />
      <div class="spacer"></div>
			<>{selectedLink.component || selectedLink.value}</>
    </div>
  )
}
