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

const setAnimationForSkillsCard = () => {
  let screenWidth = window.screen.width;
  let frontEndSkillCard =
    document.getElementsByClassName('front-end-skills')[0];
  let backEndSkillCard = document.getElementsByClassName('back-end-skills')[0];

  if (screenWidth > 1200) {
    frontEndSkillCard.setAttribute('data-aos', 'fade-right');
    backEndSkillCard.setAttribute('data-aos', 'fade-left');

    return;
  }

  frontEndSkillCard.setAttribute('data-aos', 'fade-up');
  backEndSkillCard.setAttribute('data-aos', 'fade-up');
};

document.addEventListener('DOMContentLoaded', function () {
  let containersRequireMaximumWidth = Array.from(
    document.getElementsByClassName('max-width')
  );
  let canvasBackground = document.getElementById('pt');

  typedTechnologies();
  setContainersMaxWith(containersRequireMaximumWidth);
  setContainersMaxWith(canvasBackground);
  setAnimationForSkillsCard();

  AOS.init({ duration: 800 });
});
