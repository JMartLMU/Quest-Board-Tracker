import React, { useState } from 'react';
import Draggable from "react-draggable"
import PopUpOverlay from './QuestPopUp';
import Skull from "./css/assets/Skull.png"
import Coin from "./css/assets/Coin.png"

export default function Article({ article, number }) {
  const skullCount = Array(parseInt(article.danger) + 1).fill(0).map((_, index) => index + 1);
  const coinCount = Array(parseInt(article.reward)+ 1).fill(0).map((_, index) => index + 1);

  const generateRandomNumber = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };
  
  return (
    <Draggable
      defaultPosition={{x: generateRandomNumber((number/2) * 50), y: generateRandomNumber(200)}}
      bound= "parent"
    >
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section id="quest">
          <h2>{article.title}</h2>
          <PopUpOverlay quest={article}/>
          <div>
            {skullCount.map(index => 
              <img id="img" key={index} src={Skull} />
            )
            }
          </div>
          <div>
            {coinCount.map(index => 
              <img id="img" key={index} src={Coin} />
            )
            }
          </div>
        </section>
      )}
    </Draggable>
  )
}
