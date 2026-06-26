import "./FlipCard.css";


function FlipCard({ card, onClick }) {

  return (

    <div
      className={
        `flip-card ${card.flipped ? "flipped" : ""
        }`
      }

      onClick={() => {
        if (!card.flipped) {
          onClick();
        }
      }}

    >

      <div className="flip-card-inner">


        <div className="flip-card-front">
          ?
        </div>


        <div className="flip-card-back">
          {card.value}
        </div>


      </div>

    </div>

  );

}


export default FlipCard;