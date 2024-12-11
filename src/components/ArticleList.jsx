import React, { useState } from "react";
import Nav from "./Nav";

export default function ArticleOverlay({ user, list, quest, setArticle }) {
  const [showOverlay, setShowOverlay] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowOverlay(true)}>View Quest List</button>

      {/* Overlay */}
      {showOverlay && (
        <>
          <div className="overlay">
            <div className="overlay-content">
              <button onClick={() => setShowOverlay(false)}>Close</button>
              {!user ? "" : <Nav articles={list} />}
              <button onClick={() => setShowOverlay(false)}>Close</button>
            </div>
          </div>
          <div className="blur-background"></div>
        </>
      )}
    </>
  );
}
