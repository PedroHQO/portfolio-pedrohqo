window.addEventListener('scroll', () =>{
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.cabecalho__menu__link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link =>{
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
})

document.getElementById('formContato').addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('contato').value;
    const mensagem = document.getElementById('mensagem').value;

    const textoWhatsApp = `Olá Pedro , vim pelo seu portfólio!%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Mensagem:* ${mensagem}`;

    window.open(`https://wa.me/5535999256938?text=${textoWhatsApp}`, '_blank');

    this.reset();

    alert('Obrigado pela mensagem! Você será redirecionado para o WhatsApp.')
})