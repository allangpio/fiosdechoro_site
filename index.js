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
///  FUNCTION TO FADE-IN TEXTS OF THE MUSIC SECTION

function scrollAppear(selector) {
  const items = document.querySelectorAll(selector);

  items.forEach(function (item) {
    let itemPosition = item.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (itemPosition < screenPosition) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', function () {
  scrollAppear('.text-appear');
});

//////////////////////////////////
/// BURGUER MENU

const navSlide = () => {
  const burguer = document.querySelector('.burguer');
  const nav = document.querySelector('.nav__links');

  // toggle nav
  burguer.addEventListener('click', () => {
    nav.classList.toggle('burguer-active');

    // BURGUER ANIMATION
    burguer.classList.toggle('toggle');
  });
};

navSlide();
