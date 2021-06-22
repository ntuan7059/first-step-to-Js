'use strict';
const modalHiden = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const modalShow = document.querySelectorAll(`.show-modal`);
const closeModal = document.querySelector(`.close-modal`);
for (let i = 0; i < modalShow.length; i++)
  modalShow[i].addEventListener(`click`, function () {
    modalHiden.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
  });
const hiddenModal = function () {
  overlay.classList.add(`hidden`);
  modalHiden.classList.add(`hidden`);
};

closeModal.addEventListener(`click`, hiddenModal);
overlay.addEventListener(`click`, hiddenModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modalHiden.classList.contains(`hidden`))
    hiddenModal();
});
