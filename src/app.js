// Array con valores
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Array con símbolos
const symbols = ['♥', '♦', '♣', '♠'];

// Esperar a que el DOM esté cargado
window.onload = () => {

  // Selección de elementos usando clases
  const cardValueElement = document.querySelector('.card-value');
  const topSymbolElement = document.querySelector('.top-symbol');
  const bottomSymbolElement = document.querySelector('.bottom-symbol');
  const generateNewCard = document.querySelector('.buttonCard');
  const cardElement = document.querySelector('.poker-card');

  // Función para generar carta aleatoria
  function generateRandomCard() {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    // Determinar color según el símbolo
    const isRed = (randomSymbol === '♥' || randomSymbol === '♦');
    const symbolColor = isRed ? 'red-symbol' : 'black-symbol';

    // Actualizar valores
    cardValueElement.textContent = randomValue;
    topSymbolElement.textContent = randomSymbol;
    bottomSymbolElement.textContent = randomSymbol;

    // Remover clases de color anteriores
    topSymbolElement.classList.remove('red-symbol', 'black-symbol');
    bottomSymbolElement.classList.remove('red-symbol', 'black-symbol');
    cardValueElement.classList.remove('red-symbol', 'black-symbol');

    // Aplicar color
    topSymbolElement.classList.add(symbolColor);
    bottomSymbolElement.classList.add(symbolColor);
    cardValueElement.classList.add(symbolColor);
  }

  // Event listener para el botón
  generateNewCard.addEventListener('click', generateRandomCard);

  // Generar carta inicial
  generateRandomCard();
};

