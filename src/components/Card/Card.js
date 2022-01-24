function Card({ onCardClick, card }) {
  const { link, name, likes } = card;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <img src={link} alt={name} onClick={handleClick} className="element__image" />
      <button className="button element__button element__button_action_delete"></button>
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <div className="element__likes-wrapper">
          <button
            type="button"
            className="button element__button element__button_action_like"
          ></button>
          <p className="element__likes-number">{likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
