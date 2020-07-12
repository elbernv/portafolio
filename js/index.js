function showContactInfo(){
    cuteAlert({
        type: 'success',
        title: 'Contáctame',
        message: `Escribeme a este número <br/> <strong>+58 414-4964508</strong><br/><br/>
        Este es mi correo <br/> <strong>elbernava11@gmail.com</strong>`,
        buttonText: 'Ok',
        'icon' : 'email-plus-outline'
    });
}

function showWhatsapp(){
    cuteAlert({
        type: 'success',
        title: 'Whatsapp',
        message: `Escribeme a este número <br/> <strong>+58 414-4964508</strong>`,
        buttonText: 'Ok',
        'icon' : 'whatsapp'
    });
}

function showEmail(){
    cuteAlert({
        type: 'success',
        title: 'Corre Eletrónico',
        message: `Este es mi correo <br/> <strong>elbernava11@gmail.com</strong>`,
        buttonText: 'Ok',
        'icon' : 'gmail'
    });
}

function goToGitlab(){
    window.open('https://gitlab.com/users/Elber-17/projects', '_blank')
}

function goToLinkedIn(){
    window.open('https://www.linkedin.com/in/elber-nava-9147aa186/', '_blank')
}

AOS.init({duration: 850});