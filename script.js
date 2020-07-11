document
  .querySelector('#carousel .carousel-items')
  .addEventListener('wheel', (event) => {
    const { deltaY } = event
    if (!deltaY) return;

    const moveUp = deltaY > 0;
    const size = window.innerWidth;
    const posX = moveUp ? size : size * -1;

    event.target.scrollBy(posX, 0);
  });