document.querySelectorAll('.product-card').forEach(card => {
  const images = Array.from(card.querySelectorAll('.image-data img'));
  const mainImage = card.querySelector('.image-slider img');
  const leftBtn = card.querySelector('.nav.left');
  const rightBtn = card.querySelector('.nav.right');

  let currentIndex = 0;

  leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentIndex].src;
  });

  rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex].src;
  });
});
