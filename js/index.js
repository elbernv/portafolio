const typedTechnologies = () => {
  let typed = new Typed("#technologies", {
    strings: ["Nest JS", "Express JS", "FastApi"],
    typeSpeed: 150,
    backSpeed: 130,
    loop: true,
    backDelay: 1200,
  });
};

const setAnimations = () => {
  let screenWidth = window.screen.width;
  const fadeLeftElements = Array.from(
    document.getElementsByClassName("fade-left")
  );
  const fadeRightElements = Array.from(
    document.getElementsByClassName("fade-right")
  );

  if (screenWidth > 1200) {
    for (element of fadeLeftElements) {
      element.setAttribute("data-aos", "fade-left");
    }
    for (element of fadeRightElements) {
      element.setAttribute("data-aos", "fade-right");
    }
    return;
  }

  const allElements = fadeLeftElements.concat(fadeRightElements);

  for (element of allElements) {
    element.setAttribute("data-aos", "fade-up");
  }
};

const sendWhatsapp = (event) => {
  window
    .open("https://api.whatsapp.com/send?phone=584144964508", "_blank")
    .focus();
};

const sendEmail = (event) => {
  window.open("mailto:elbernava11@gmail.com").focus();
};

const goTo = (event, url) => {
  window.open(url).focus();
};

document.addEventListener("DOMContentLoaded", function () {
  typedTechnologies();

  setAnimations();

  AOS.init({ duration: 800 });
});
