function showWhatsapp(){
    cuteAlert({
        type: 'success',
        title: 'Whatsapp',
        message: `Escribeme a este número <br/> <strong>+58 414-4964508</strong>`,
        buttonText: 'Ok'
    });
}

function showEmail(){
    cuteAlert({
        type: 'success',
        title: 'Corre Eletrónico',
        message: `Este es mi correo <br/> <strong>elbernava11@gmail.com</strong>`,
        buttonText: 'Ok'
    });
}

function goToGitlab(){
    window.open('https://gitlab.com/users/Elber-17/projects', '_blank')
}

function goToLinkedIn(){
    window.open('https://www.linkedin.com/in/elber-nava-9147aa186/', '_blank')
}