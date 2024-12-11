import React, { useState } from "react";
import { deleteArticle } from "../services/articleService";

export default function PopUpOverlay({ quest }) {
  const [showOverlay, setShowOverlay] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowOverlay(true)}>Show Details</button>

      {/* Overlay */}
      {showOverlay && (
        <>
          <div className="overlay">
            <div className="overlay-content2">
              <button onClick={() => deleteArticle(quest)}>Abandon Quest</button>
              <h2>{quest.title}</h2>
              <h3>Details</h3>
              <p>{quest.body}</p>
              <button onClick={() => setShowOverlay(false)}>Close</button>
            </div>
          </div>
          <div className="blur-background"></div>
        </>
      )}
    </>
  );
}
