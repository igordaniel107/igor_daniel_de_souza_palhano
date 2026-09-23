// --- MENU RESPONSIVO (MOBILE) ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


// --- VALIDAÇÃO DE JAVASCRIPT (RUBRICA) ---
// Executa apenas se estiver na página de contato
const formContato = document.getElementById("form-contato");

if (formContato) {
    formContato.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o recarregamento automático da página
        
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        // Exemplo simples de interação em JS exigida em avaliações
        alert(`Obrigado pelo contato, ${nome}! Retornaremos em breve no e-mail: ${email}.`);
        
        formContato.reset(); // Limpa os campos do formulário
    });
}