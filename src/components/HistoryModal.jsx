function HistoryModal({ history, close }) {

  return (

    <div className="modal-bg">

      <div className="modal">

        <h2>
          Pick History
        </h2>


        {history.length === 0 && (
          <p>No cards picked</p>
        )}


        {history.map((card, index) => (

          <div
            className="history-item"
            key={card.pickedAt}
          >

            <strong>
              #{index + 1}
            </strong>

            {" "}
            Card {card.value}


            <br />

            <small>
              {new Date(
                card.pickedAt
              ).toLocaleTimeString()}
            </small>

          </div>

        ))}


        <button onClick={close}>
          Close
        </button>


      </div>

    </div>

  );
}


export default HistoryModal;