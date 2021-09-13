let typewriter = new Typewriter('#technologies', {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1500)
    .typeString('Python')
    .pauseFor(950)
    .deleteChars(6)
    .typeString('Javascript')
    .pauseFor(950)
    .deleteChars(10)
    .typeString('Typescript')
    .pauseFor(950)
    .deleteChars(10)
    .typeString('Node JS')
    .pauseFor(950)
    .deleteChars(7)
    .typeString(':)')
    .pauseFor(950)
    .start();
