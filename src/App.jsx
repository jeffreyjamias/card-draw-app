import { useState } from "react";
import FlipCard from "./components/filpCard/FlipCard";
import { useCardStore } from "./stores/useCardStore";

import "./App.css";


function App() {
  const {
    cards,
    history,
    pickRandomCard,
    reset,
    shuffleCards
  } = useCardStore();


  return (
    <>

      <div className="card-count-container">


        <div className="card-text">
          Picked:
          <em>{history.length}</em>
        </div>


        <div className="history-container">

          {history
            .slice(0, 10)
            .map(card => (

              <div
                className="history-card"
                key={card.pickedAt}
              >
                {card.value}
              </div>

            ))}

        </div>


        <div className="card-text">
          Remaining:
          <em>{cards.length}</em>
        </div>

        <div className="action-buttons">
          <button
            className="action-button"
            onClick={shuffleCards}
          >
            Shuffle
          </button>

          <button
            className="action-button"
            onClick={reset}
          >
            Reset
          </button>
        </div>

        <button
          className="action-button"
          onClick={reset}
        >
          Reset
        </button>


      </div>



      <div className="cards-container">

        {cards.map(card => (

          <FlipCard
            key={card.value}
            card={card}
            onClick={() =>
              pickRandomCard(card.value)
            }
          />

        ))}

      </div>





    </>
  );
}


export default App;