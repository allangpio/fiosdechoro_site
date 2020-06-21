var card = document.querySelectorAll('.cards__card');

card.forEach(function (element) {
  // selects the popup that refers to the selected card
  var popupSelected = document.querySelector(`.popup.${element.classList[1]}`);

  element.addEventListener('click', function () {
    // open popup when clicked
    popupSelected.classList.toggle('hidden');
  });

  // close popup
  var exitSelected = document.querySelector(`.exit.${element.classList[1]}`);
  exitSelected.addEventListener('click', function () {
    popupSelected.classList.toggle('hidden');
  });
});
