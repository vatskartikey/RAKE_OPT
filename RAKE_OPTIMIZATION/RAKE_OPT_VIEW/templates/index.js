var homeIcon = document.querySelector('.card');

window.onResize = function() {
  if (window.innerWidth <= 960){ homeIcon.classList.add('col-12');
        homeIcon.classList.remove('col-10');
  }
  else homeIcon.classList.remove('col-12');
  homeIcon.classList.add('col-10');
};