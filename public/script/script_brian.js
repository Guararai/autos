// Add any necessary JavaScript here
// For example, to handle the FAQ accordion:
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            const button = item.querySelector('button');
            button.textContent = button.textContent === '+' ? '-' : '+';
        });
    });
});[]

/*JOGOS*/

// Script para funções adicionais (caso necessário)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso.");
});

/*sim*/