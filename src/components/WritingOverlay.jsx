import React, { useState } from "react";
import ArticleEntry from "./ArticleEntry";
import './css/Overlay.css'

export default function WritingOverlay({ addArticle }) {
  const [showOverlay, setShowOverlay] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowOverlay(true)}>Set a Quest</button>

      {/* Overlay */}
      {showOverlay && (
        <>
          <div className="overlay">
            <div className="overlay-content">
              <h2>Scribing new quest...</h2>
              <ArticleEntry addArticle={addArticle}/>
              <button onClick={() => setShowOverlay(false)}>Close</button>
            </div>
          </div>
          <div className="blur-background"></div>
        </>
      )}
    </>
  );
}
