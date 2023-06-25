async function getPokemonData(i) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();

    const nomePokemon = data.name;
    const tiposPokemon = data.types.map(type => type.type.name).join(', ');
    const img = data.sprites.front_default;
    console.log(i);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.alt = `Imagem do ${nomePokemon}`;

    const nameElement = document.createElement('h3');
    nameElement.classList.add('name');
    nameElement.textContent = nomePokemon;

    const typeElement = document.createElement('p');
    typeElement.classList.add('type');
    typeElement.textContent = tiposPokemon;

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(nameElement);
    cardDiv.appendChild(typeElement);

    document.getElementById('pokemon-cards').appendChild(cardDiv);
  } catch (error) {
    console.log(`Erro ao obter o Pokémon ${i}:`, error);
  }
}

async function fetchPokemonData() {
  for (let i = 1; i <= 151; i++) {
    await getPokemonData(i);

    if (i % 4 === 0) {
      const brElement = document.createElement('br');
      document.getElementById('pokemon-cards').appendChild(brElement);
    }
  }
}

fetchPokemonData();