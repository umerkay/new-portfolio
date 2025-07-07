import React from 'react';
import '../css/flightsim.css';

const FlightSim = () => {
  return (
    <div className="display" id="flightsim">
      <div className="brand anim fadeintoleft">
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 0fr' }}>
          <div>
            <a href="https://umerkay.github.io/fly/" className="btn" target="_blank" rel="noopener noreferrer">Fly ▶</a>
            <h1 className="titlesmall">A Horrible Attempt at a</h1>
            <h1 className="title">Flight Simulator</h1>
            {/* <h2 className="sub">
              Take to the skies in a browser-based flight simulator! Experience basic flight physics and explore a 3D world.
            </h2> */}
            {/* <div className="spacer"></div> */}
            <p className="info">
Really proud of the terrain generation. It uses Perlin and Fractal noise to generate realistic looking terrains. All maps are generated procedurally, based on a seed, and are infinite. Every reasonable effort has been made to make sure it runs on a potato. No, really. It has been performance optimized.            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            {/* No leaderboard for this game */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSim;
