document.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var windowWidth = window.innerWidth;

    var leftImage = document.querySelector('.left-image');
    var rightImage = document.querySelector('.right-image');

    if (x < windowWidth / 2) {
      leftImage.style.width = '55%';
      rightImage.style.width = '45%';
    } else {
      leftImage.style.width = '45%';
      rightImage.style.width = '55%';
    }
  });
  function goToDog() {
    window.location.href = 'dogs.html';
  }