const card = document.querySelectorAll('.cards__card');
const exitSelected = document.querySelectorAll('.exit');
const popups = document.querySelectorAll('.popup');

card.forEach(function (element, index) {
  // selects the popup that refers to the selected card
  const popupSelected = document.querySelector(
    `.popup.${element.classList[1]}`
  );

  const popupBox = popupSelected.firstElementChild;

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

// close popup when click outside the popup content
popups.forEach(function (popup) {
  const popupBox = popup.firstElementChild;
  popup.addEventListener('click', function (event) {
    if (event.target !== popupBox && !popup.classList.contains('hidden')) {
      popup.classList.toggle('hidden');
    }
  });
});

//////////////////
//SMOOTH SCROOL TO THE CONTACT SECTION
const smoothBtn = document.querySelector('#smooth-btn');
smoothBtn.addEventListener('click', function () {
  const section = document.querySelector('#contato');
  section.scrollIntoView({behavior: 'smooth', block: 'center'});
});

////////////////////////////////////////
///  FUNCTION TO MAKE THE INFO CARDS APPEAR ON SCROLL

function scrollAppear() {
  const infoLeft = document.querySelector('#info-card-left');
  const infoRight = document.querySelector('#info-card-right');

  let infoPosition = infoLeft.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;

  if (infoPosition < screenPosition) {
    infoLeft.classList.add('info-appear');
    infoRight.classList.add('info-appear');
  }
}

window.addEventListener('scroll', scrollAppear);
