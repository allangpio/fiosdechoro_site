const project = document.querySelectorAll('.grid');

const projectNav = document.querySelectorAll('.nav-items');

projectNav.forEach(function (element) {
  element.addEventListener('click', function () {
    displayNone(project);
    project.forEach(function (item) {
      if (item.classList.contains(element.classList[1])) {
        item.style.display = 'grid';
      }
    });
  });
});

function displayNone(project) {
  project.forEach(function (element) {
    element.style.display = 'none';
  });
}

function getProject(project) {
  project.forEach(function (element) {});
}
