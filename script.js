// Inicializa o EmailJS
emailjs.init({
    publicKey: "WfiQ6ynQpjJETBHNl",
});

// Função para lidar com o envio do formulário
function handleSubmit(event) {
    event.preventDefault();
    
    const now = new Date();
    document.getElementById('time').value = now.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    // Envia o formulário usando EmailJS
    emailjs.sendForm('service_rtjdw48', 'template_b5tzkm1', event.target)
        .then(() => {
            return emailjs.sendForm('service_rtjdw48', 'template_xzsygga', event.target);
        })
        .then(() => {
            alert('📩 Mensagem enviada com sucesso!');
            event.target.reset(); // Limpa o formulário
        }) 
        .catch((error) => {
            alert('❌ Falha ao enviar a mensagem. Por favor, tente novamente mais tarde. ');
            console.error('ERRO...', error);
        });
}

// Adiciona o event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', () => {
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

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Adiciona o event listener para o formulário de contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', handleSubmit);
    }
});