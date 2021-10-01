const typedTechnologies = () => {
  let typed = new Typed('#technologies', {
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

const setAnimations = () => {
  let screenWidth = window.screen.width;
  const fadeLeftElements = Array.from(
    document.getElementsByClassName('fade-left')
  );
  const fadeRightElements = Array.from(
    document.getElementsByClassName('fade-right')
  );

  if (screenWidth > 1200) {
    for (element of fadeLeftElements) {
      element.setAttribute('data-aos', 'fade-left');
    }
    for (element of fadeRightElements) {
      element.setAttribute('data-aos', 'fade-right');
    }
    return;
  }

  const allElements = fadeLeftElements.concat(fadeRightElements);

  for (element of allElements) {
    element.setAttribute('data-aos', 'fade-up');
  }
};

document.addEventListener('DOMContentLoaded', function () {
  let containersRequireMaximumWidth = Array.from(
    document.getElementsByClassName('max-width')
  );
  let canvasBackground = document.getElementById('pt');

  typedTechnologies();

  setContainersMaxWith(containersRequireMaximumWidth);
  setContainersMaxWith(canvasBackground);
  setAnimations();

  AOS.init({ duration: 800 });
});
