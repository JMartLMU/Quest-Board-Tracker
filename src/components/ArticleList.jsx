import React, { useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import './css/Overlay.css'

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
              {!user ? "" : <Nav articles={list} setArticle={setArticle} />}
              <Article article={quest} />
              <button onClick={() => setShowOverlay(false)}>Close</button>
            </div>
          </div>
          <div className="blur-background"></div>
        </>
      )}
    </>
  );
}
