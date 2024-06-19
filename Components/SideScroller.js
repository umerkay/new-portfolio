// src/components/Leaderboard.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const SideScroller = () => {
  const [loadingLB, setLoadingLB] = useState(true);
  const [data, setData] = useState([]);
  const [level, setLevel] = useState(1);

  const updateData = async () => {
    setLoadingLB(true);
    const querySnapshot = await db
      .collection('bestscores')
      .doc(`level${level}`)
      .collection('scores')
      .orderBy('time')
      .limit(5)
      .get();

    const scores = [];
    querySnapshot.forEach(doc => {
      scores.push(doc.data());
    });

    setData(scores);
    setLoadingLB(false);
  };

  useEffect(() => {
    updateData();
  }, [level]);

  const dataUpdated = () => {
    if (loadingLB) {
      return <div>Loading...</div>;
    } else if (data.length === 0) {
      return <div>Seems like no one has completed this level :)</div>;
    } else {
      return data.map((score, i) => (
        <div className="score" key={i}>
          <span className="pos">{i + 1}</span>
          <span className="name">{score.name}</span>
          <span className="time">{score.time}</span>
        </div>
      ));
    }
  };

  return (
    <div className="display" id="sidescroller">
      <div className="brand anim fadeintoleft">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
          <div>
            <a href="https://umerkay.github.io/side-scroller-2/" className="btn" target="_blank" rel="noopener noreferrer">Play ▶</a>
            <h1 className="title">Side Scroller</h1>
            <h2 className="sub">
              You slide across a world full of obstacles until you shatter into pieces and start all over again. It's
              fun.
            </h2>
            <div className="spacer"></div>
            <p className="info">
              Features a tiled 2D world with customizable blocks and a world builder.
              A highscore system synced with firebase firestore keeps track of players.
              The physics is vaguely simplified for perfomance, and most mechanics only offer the bare minimum of
              accuracy required to simulate the world.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="dataC">
              <div id="data" className="data">
                {dataUpdated()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideScroller;
