// card.js
class Card {
  constructor(carroData) {
    this.carroData = carroData;
    this.render();
  }

  render() {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    // Adicione aqui o HTML e estilização para o seu card usando this.carroData

    document.body.appendChild(cardElement);
  }
}

const getCarroById = async (idcarro) => {
  try {
    const response = await fetch(`http://localhost:3001/api/carros/${idcarro}`);
    const data = await response.json();
    
    console.log("Dados do Carro:", data);

    // Crie um novo Card com os dados do carro
    new Card(data);
  } catch (error) {
    console.error("Erro ao buscar carro:", error);
  }
};

// Chame a função com o ID do carro desejado
getCarroById(1); // Substitua 1 pelo ID do carro desejado
