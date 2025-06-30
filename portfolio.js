// Espera o DOM carregar para executar o script
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a'); // seleciona todos os links do menu
    const sections = document.querySelectorAll('main section'); // seleciona todas as seções principais

    // Função para remover destaque de todas as seções
    function clearActiveSections() {
        sections.forEach(section => section.classList.remove('active-section'));
    }

    // Destaca a seção inicial (por exemplo, a #home)
    clearActiveSections();
    const initialSection = document.getElementById('home');
    if (initialSection) initialSection.classList.add('active-section');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // evita o jump padrão (se quiser rolagem suave, pode controlar aqui)

            clearActiveSections();

            // Pega o id da seção alvo a partir do href do link clicado
            const targetId = link.getAttribute('href').substring(1);

            // Seleciona a seção alvo e adiciona a classe para destacar
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active-section');
                // Scroll suave programático (opcional)
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
