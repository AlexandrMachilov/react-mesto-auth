import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page__container">
      <header className="header page__header">
        <img
          src="<%=require('./images/logo-header.svg')%>"
          alt="Логотип место"
          className="header__logo"
        />
      </header>
      <main className="content">
        <section className="profile content__section">
          <div className="profile__wraper">
            <div className="profile__avatar-wraper">
              <button
                type="button"
                className="button profile__button profile__button_action_avatar"
              ></button>
              <img src="#" alt="Аватар профиля" className="profile__avatar" />
            </div>

            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <p className="profile__status"></p>
              <button
                type="button"
                className="button profile__button profile__button_action_edit"
              ></button>
            </div>
          </div>
          <button
            type="button"
            className="button profile__button profile__button_action_add"
          ></button>
        </section>

        <section
          className="elements content__section"
          aria-label="Карточки с фотографиями"
        ></section>
      </main>
      <footer className="footer page__footer">
        <p className="footer__title">&copy; 2020 Mesto Russia</p>
      </footer>

      {/*<!-- Edit popup -->*/}
      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button
            type="button"
            className="popup__button popup__button_action_close popup__button_action_close-edit"
          ></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form
            className="popup__form popup__form_edit-content"
            name="form-edit"
            novalidate
          >
            <input
              type="text"
              className="popup__input popup__input_type_name"
              name="name"
              id="profile-name"
              placeholder="Имя"
              autocomplete="off"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="popup__input-error profile-name-input-error"></span>
            <input
              type="text"
              className="popup__input popup__input_type_status"
              name="status"
              id="profile-status"
              placeholder="Профессиональная деятельность"
              autocomplete="off"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="popup__input-error profile-status-input-error"></span>
            <button
              type="submit"
              className="popup__button popup__button_action_submit popup__button_action_edit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      {/*<!-- Add popup -->*/}
      <div className="popup popup_type_add">
        <div className="popup__container">
          <button
            type="button"
            className="popup__button popup__button_action_close popup__button_action_close-add"
          ></button>
          <h3 className="popup__title">Новое место</h3>
          <form
            className="popup__form popup__form_add-content"
            name="form-add"
            novalidate
          >
            <input
              type="text"
              className="popup__input popup__input_type_place-name"
              name="name"
              id="place-name"
              placeholder="Название"
              autocomplete="off"
              minlength="2"
              maxlength="30"
              required
            />
            <span className="popup__input-error place-name-input-error"></span>
            <input
              type="url"
              className="popup__input popup__input_type_place-url"
              name="url"
              id="place-url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error place-url-input-error"></span>
            <button
              type="submit"
              className="popup__button popup__button_action_submit popup__button_action_add-content"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
    
      {/* <!-- Show image popup-->*/}
      <div className="popup popup_type_show-image">
        <figure className="popup__figure">
          <button
            type="button"
            className="popup__button popup__button_action_close popup__button_action_close-image"
          ></button>
          <img src="#" alt="#" className="popup__image" />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>

      {/*<!-- Delete confirm popup -->*/}
      <div className="popup popup_type_confirm">
        <div className="popup__container popup__container_type_confirm">
          <button
            type="button"
            className="popup__button popup__button_action_close popup__button_action_close-confirm"
          ></button>
          <h3 className="popup__title popup__title_type_confirm">Вы уверены?</h3>
          <form className="popup__form popup__form_confirm" name="form-delete">
            <button
              type="submit"
              className="popup__button popup__button_action_submit popup__button_action_confirm"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      {/*<!-- Edit avatar popup -->*/}
      <div className="popup popup_type_edit-avatar">
        <div className="popup__container popup__container_type_small">
          <button
            type="button"
            className="popup__button popup__button_action_close popup__button_action_close-edit-avatar"
          ></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form
            className="popup__form popup__form_edit-avatar"
            name="form-avatar"
            novalidate
          >
            <input
              type="url"
              className="popup__input popup__input_type_edit-avatar"
              name="avatar"
              id="edit-avatar"
              placeholder="Ссылка на аватар"
              autocomplete="on"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="popup__input-error edit-avatar-input-error"></span>
            <button
              type="submit"
              className="popup__button popup__button_action_submit popup__button_action_edit-avatar"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <template className="element-template">
        <article className="element">
          <img src="#" alt="#" className="element__image" />
          <button
            className="button element__button element__button_action_delete"
          ></button>
          <div className="element__description">
            <h2 className="element__title"></h2>
            <div className="element__likes-wrapper">
              <button
                type="button"
                className="button element__button element__button_action_like"
              ></button>
              <p className="element__likes-number"></p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
