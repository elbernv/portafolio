const typedTechnologies = () => {
  new Typed('#technologies', {
    strings: ['Python', 'Node JS', 'Vue JS', 'Angular JS'],
    typeSpeed: 150,
    backSpeed: 130,
    loop: true,
    backDelay: 1200,
  });
};

const setContainersMaxWith = (containers) => {
  let screenWidth = window.screen.width;

  if (Array.isArray(containers)) {
    for (let container of containers) {
      container.style.width =
        screenWidth - Math.ceil((screenWidth * 1.0466) / 100) + 'px';
    }

    return;
  }

  containers.style.width =
    screenWidth - Math.ceil((screenWidth * 1.0466) / 100) + 'px';

  space.removeAll();
  document.getElementById('canvas').remove();
  floatySpace();

  return;
};

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({ duration: 800 });

  let containersRequireMaximumWidth = Array.from(
    document.getElementsByClassName('max-width')
  );
  let canvasBackground = document.getElementById('pt');
  typedTechnologies();
  setContainersMaxWith(containersRequireMaximumWidth);
  setContainersMaxWith(canvasBackground);
});
