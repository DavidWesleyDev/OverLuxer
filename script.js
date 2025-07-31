// Animação do clique no carrinho
function clickEffect(element) {
  element.classList.add('clicked');
  setTimeout(() => {
    element.classList.remove('clicked');
  }, 300);
}

// Toggle menu mobile
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

// CONTADOR DO CARRINHO
let contador = 0;
const cartCountEl = document.getElementById('cartCount');

function addToCart() {
  contador++;
  cartCountEl.textContent = contador;
  alert('Produto adicionado ao carrinho!');
}

// FILTRO SIMPLES DE PRODUTOS
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const produtos = document.querySelectorAll('.produto');

botoesFiltro.forEach(botao => {
  botao.addEventListener('click', () => {
    // Ativa botão clicado
    botoesFiltro.forEach(btn => btn.classList.remove('active'));
    botao.classList.add('active');

    const filtro = botao.getAttribute('data-filtro');

    produtos.forEach(prod => {
      if (filtro === 'todos' || prod.getAttribute('data-categoria') === filtro) {
        prod.style.display = 'block';
      } else {
        prod.style.display = 'none';
      }
    });
  });
});

// POP-UP PROMOCIONAL
window.addEventListener('load', () => {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'block'; // Mostra o pop-up ao carregar
  }
});

function closePopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'none';
  }
}

// FORMULÁRIO DE CONTATO (Simples, só front)
function enviarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return false;
  }

  // Simula envio
  document.getElementById('msgStatus').textContent = 'Mensagem enviada com sucesso! Obrigado.';
  
  // Limpa formulário
  event.target.reset();

  return false;
}
