import react, { useEffect } from "react";
import Card from "../Card/Card";
import api from "../../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = react.useState();
  const [userDescription, setUserDescription] = react.useState();
  const [userAvatar, setUserAvatar] = react.useState();
  const [cards, setCards] = react.useState([]);

  react.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile content__section">
        <div className="profile__wraper">
          <div className="profile__avatar-wraper">
            <button
              onClick={onEditAvatar}
              type="button"
              className="button profile__button profile__button_action_avatar"
            ></button>
            <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__status">{userDescription}</p>
            <button
              onClick={onEditProfile}
              type="button"
              className="button profile__button profile__button_action_edit"
            ></button>
          </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="button profile__button profile__button_action_add"
        ></button>
      </section>

      <section className="elements content__section" aria-label="Карточки с фотографиями">
        {cards.map((card) => (
          <Card key={card._id} {...card} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
