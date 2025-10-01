// Funcionalidades da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Botão Agendar Conversa
    const agendarBtn = document.getElementById('agendarBtn');
    if (agendarBtn) {
        agendarBtn.addEventListener('click', function() {
            // Redirecionar para WhatsApp ou abrir modal de agendamento
            const whatsappUrl = 'https://wa.me/5535997320084?text= Olá! Gostaria de agendar uma conversa sobre Educação Financeira | Assessoria de Investimentos.';
            window.open(whatsappUrl, '_blank');
        });
    }

    // Botão Baixar Apresentação
    const pdfBtn = document.getElementById('pdfBtn');
    if (pdfBtn) {
        pdfBtn.addEventListener('click', function() {
            // Baixar o arquivo kafka.pdf
            const link = document.createElement('a');
            link.href = 'kafka.pdf';
            link.download = 'kafka.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Formulário de Contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação básica
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Aqui você pode implementar o envio do formulário
            // Por exemplo, enviar para um serviço de email ou API
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Limpar formulário
            contactForm.reset();
        });
    }

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});