function goToGitlab() {
  window.open('https://gitlab.com/users/Elber-17/projects', '_blank');
}

function goToLinkedIn() {
  window.open('https://www.linkedin.com/in/elber-nava-9147aa186/', '_blank');
}

const drawShell = () => {
  let shell = new Shell('#awesome-shell', {
    user: 'elber',
    host: 'dev',
    path: '~',
    style: 'ubuntu',
    commands: ['First command', 'Second command', '...'],
    typed: Typed
  });
}

AOS.init({ duration: 850 });

new Vivus(
  'svg-devices',
  { duration: 300, file: './img/vectorpaint.svg' },
  () => {}
);

document.addEventListener('DOMContentLoaded', function () {
  drawShell()
});
