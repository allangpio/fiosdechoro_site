const card = document.querySelectorAll('.cards__card');
const exitSelected = document.querySelectorAll('.exit');

card.forEach(function (element) {
  // selects the popup that refers to the selected card
  const popupSelected = document.querySelector(
    `.popup.${element.classList[1]}`
  );

  element.addEventListener('click', function () {
    // open popup when clicked
    popupSelected.classList.toggle('hidden');
  });

  // close popup
  const exitSelected = document.querySelector(`.exit.${element.classList[1]}`);
  exitSelected.addEventListener('click', function () {
    popupSelected.classList.toggle('hidden');
  });
});
