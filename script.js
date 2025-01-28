// Animação para destaque de projetos ao passar o mouse
document.querySelectorAll('.project').forEach(project => {
    // Quando o mouse entra no elemento .project (um projeto)
    project.addEventListener('mouseenter', () => {
        // Aumenta o tamanho do projeto para dar um efeito de destaque
        project.style.transform = 'scale(1.08)'; // Aumenta o destaque
        // Adiciona sombra ao redor do projeto para dar um efeito visual
        project.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'; // Realça o sombreado
    });

    // Quando o mouse sai do elemento .project
    project.addEventListener('mouseleave', () => {
        // Retorna o projeto ao tamanho original
        project.style.transform = 'scale(1)'; // Volta ao tamanho original
        // Remove a sombra do projeto
        project.style.boxShadow = 'none'; // Remove o sombreado
    });
});
