function InfoTooltip({ isOpen, onClose, isDataCorrect }) {
  return (
    <div className={`popup popup_type ${isOpen ? 'popup_isopen' : ''} `}>
      <div className='popup__container popup__container_type_tooltip'>
        <button
          type='button'
          className={`popup__button popup__button_action_close`}
          onClick={onClose}
        ></button>
        <div className='popup__tooltip'>
          <div
            className={`popup__tooltip-image ${
              isDataCorrect
                ? 'popup__tooltip-image_type_success'
                : 'popup__tooltip-image_type_error'
            }`}
          />
          <h3 className='popup__title popup__title_type_tooltip'>
            {isDataCorrect
              ? `Вы успешно зарегистрировались!`
              : `Что-то пошло не так!
            Попробуйте ещё раз.`}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
