document.addEventListener("DOMContentLoaded", function () {

  const gameCardsJSON = `[
    {
      "title": "Luna Park Caotico",
      "type": "Luogo",
      "encounterCost": 3,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Montagne Russe Infinite",
          "timeCost": 2
        },
        {
          "name": "Tunnel del Terrore Ridicoloso",
          "timeCost": 1
        },
        {
          "name": "Stand del Tiro al Bersaglio Magico",
          "timeCost": 3
        }
      ],
      "description": "Un colorato luna park con attrazioni esagerate e personaggi stravaganti.",
      "image": "./img/luna-park.jpg"
    },
    {
      "title": "Il Gatto Saggio",
      "type": "Personaggio",
      "encounterCost": 2,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Pergamena della Verità",
          "timeCost": 1
        },
        {
          "name": "Libro degli Enigmi",
          "timeCost": 2
        }
      ],
      "description": "Un gatto antropomorfo con occhiali e una sciarpa, che offre consigli criptici.",
      "image": "./img/gatto.jpg"
    },
    {
      "title": "Biblioteca del Mistero",
      "type": "Luogo",
      "encounterCost": 4,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Volume Perduto di Alchimia",
          "timeCost": 3
        },
        {
          "name": "Diario Segreto del Bibliotecario",
          "timeCost": 1
        }
      ],
      "description": "Una biblioteca antica con libri che contengono segreti.",
      "image": "./img/biblioteca.jpg"
    },
    {
      "title": "Il Fornaio Errante",
      "type": "Personaggio",
      "encounterCost": 1,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Torta della Forza",
          "timeCost": 1
        },
        {
          "name": "Biscotti dell'Agilità",
          "timeCost": 2
        }
      ],
      "description": "Un fornaio allegro su un furgoncino di dolci magici.",
      "image": "./img/panettiere.jpg"   
    },
    {
      "title": "Isola Fluttuante",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Nido del Drago Aereo",
          "timeCost": 3
        },
        {
          "name": "Giardino Zen Volante",
          "timeCost": 1
        },
        {
          "name": "Fonte di Mana Celeste",
          "timeCost": 2
        }
      ],
      "description": "Un'isola sospesa in cielo, con creature volanti e piante che parlano.",
      "image": "./img/isola.jpg"
    },
    {
      "title": "Detective del Tempo",
      "type": "Personaggio",
      "encounterCost": 3,
      "bonusEffect": 0,
      "nextCards": [
        {
          "name": "Indizio d'Epoca Vittoriana",
          "timeCost": 1
        },
        {
          "name": "Ricordo del Futuro",
          "timeCost": 2
        },
        {
          "name": "Orologio Spaziotemporale",
          "timeCost": 3
        }
      ],
      "description": "Un investigatore che può viaggiare nel tempo, offrendo indizi da varie ere.",
      "image": "./img/detective.jpg"
    },
    {
      "title": "Mercato delle Meraviglie",
      "type": "Luogo",
      "encounterCost": 2,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Stallone delle Pozioni Rare",
          "timeCost": 2
        },
        {
          "name": "Banco degli Amuleti Perduti",
          "timeCost": 1
        },
        {
          "name": "Tendone delle Carte Fatate",
          "timeCost": 3
        }
      ],
      "description": "Un mercato notturno con oggetti magici e venditori mitologici.",
      "image": "./img/mercato.jpg"
    },
    {
      "title": "La Pirata dello Spazio",
      "type": "Personaggio",
      "encounterCost": 4,
      "bonusEffect": -1,
      "nextCards": [
        {
          "name": "Assalto al Convoglio Stellare",
          "timeCost": 3
        },
        {
          "name": "Tesoro del Pianeta Dimenticato",
          "timeCost": 2
        }
      ],
      "description": "Capitano di una nave spaziale a forma di galeone, naviga i flussi astrali.",
      "image": "./img/pirata.jpg"
    },
    {
      "title": "Giardini Sospesi di Harmonia",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Sentiero dei Fiori Cantanti",
          "timeCost": 1
        },
        {
          "name": "Laghetto delle Ninfe",
          "timeCost": 2
        },
        {
          "name": "Albero della Saggezza Antica",
          "timeCost": 3
        }
      ],
      "description": "Giardini lussureggianti che fluttuano in bolle d'aria, con piante e animali fantastici.",
      "image": "./img/giardino.jpg"
    },
    {
      "title": "L'Inventore Folle",
      "type": "Personaggio",
      "encounterCost": 2,
      "bonusEffect": -2,
      "nextCards": [
        {
          "name": "Macchina del Tempo Difettosa",
          "timeCost": 3
        },
        {
          "name": "Robot Assistente Maldestro",
          "timeCost": 1
        },
        {
          "name": "Razzo Sperimentale",
          "timeCost": 2
        }
      ],
      "description": "Uno scienziato con un laboratorio di invenzioni incredibili ma spesso difettose.",
      "image": "./img/scienziato.jpg"
    },
    {
      "title": "Città Sotterranea di Lumina",
      "type": "Luogo",
      "encounterCost": 4,
      "bonusEffect": 2,
      "nextCards": [
        {
          "name": "Cripta dei Cristalli Luminosi",
          "timeCost": 2
        },
        {
          "name": "Laboratorio Segreto Sotterraneo",
          "timeCost": 3
        },
        {
          "name": "Piazza del Mercato Nascosto",
          "timeCost": 1
        }
      ],
      "description": "Una città in una caverna gigante, illuminata da cristalli.",
      "image": "./img/citta.jpg"
    },
    {
      "title": "Il Cantastorie Fantasma",
      "type": "Personaggio",
      "encounterCost": 3,
      "bonusEffect": 1,
      "nextCards": [
        {
          "name": "Racconto delle Origini Dimenticate",
          "timeCost": 3
        },
        {
          "name": "Leggenda del Guerriero Senza Tempo",
          "timeCost": 1
        },
        {
          "name": "Saga del Re Perduto",
          "timeCost": 2
        }
      ],
      "description": "Un'ombra eterea che narra storie del passato, presente e futuro.",
      "image": "./img/cantastorie.jpg"
    },
    {
      "title": "Accademia di Magia Antica",
      "type": "Luogo",
      "encounterCost": 5,
      "bonusEffect": 3,
      "nextCards": [
        {
          "name": "Aula delle Pozioni Avanzate",
          "timeCost": 2
        },
        {
          "name": "Biblioteca degli Incantesimi Obsoleti",
          "timeCost": 1
        },
        {
          "name": "Torre dell'Astronomia Magica",
          "timeCost": 3
        }
      ],
      "description": "Un'antica scuola di magia con aule e incantesimi dimenticati.",
      "image": "./img/scuola.jpg"
    },
    {
      "title": "La Ladra di Sogni",
      "type": "Personaggio",
      "encounterCost": 1,
      "bonusEffect": -3,
      "nextCards": [
        {
          "name": "Memoria Rubata",
          "timeCost": 2
        },
        {
          "name": "Incubo Intrappolato",
          "timeCost": 3
        },
        {
          "name": "Sogno D'oro",
          "timeCost": 1
        }
      ],
      "description": "Una misteriosa ladra che ruba ricordi e sogni, lasciando indizi per il recupero.",
      "image": "./img/ladra.jpg"
    },
    {
      "title": "Il Circo delle Illusioni",
      "type": "Luogo",
      "encounterCost": 2,
      "bonusEffect": 0,
      "nextCards": [
        {
          "name": "Tenda della Divinazione",
          "timeCost": 1
        },
        {
          "name": "Spettacolo di Fuoco Fatato",
          "timeCost": 2
        },
        {
          "name": "Acrobazie Aeree Mozzafiato",
          "timeCost": 3
        }
      ],
      "description": "Un circo itinerante dove nulla è come sembra, con artisti che sfidano la realtà.",
      "image": "./img/circo.jpg"
    }
  ]`;

  //creazione array con json
  const jsonCard = JSON.parse(gameCardsJSON)
  const container = document.querySelector('.container')
  
  //variabile d'appoggio
  let cardHTML = ''



  //ciclo for con array json 

  for (let idx = 0; idx < jsonCard.length; idx++) {
    const singleCard = jsonCard[idx];
    

    const title = singleCard.title;
    const encounterCost = singleCard.encounterCost;
    const bonusEffect = singleCard.bonusEffect;
    const image = singleCard.image;
    const description = singleCard.description;
    const nextCards = singleCard.nextCards;
    
    const template = `
      <div class="card">
        <div class="card__front" data-index="${idx}">
         <div class="card__header">
          <img src="${image}" alt="">

          <div class="card__header-badges">
            <div class="badge badge--encounter-cost">${encounterCost}</div>
            <div class=" badge badge--bonus-effect">${bonusEffect}</div>
          </div>
         </div>
         <div class="card__content">
          <h2 class="title">
            ${title}
          </h2>
          <p class="description">
            ${description}
          </p>
         </div>
        </div>



      <div class="card__back" data-index="${idx}">
      <h2 class="title">Next cards</h2>
      <ul>
        <li class="next-card">${nextCards[0].name}
        <p>Costo tempo: ${nextCards[0].timeCost}</p>
        </li>
        
        <li class="next-card">${nextCards[1].name}
        <p>Costo tempo: ${nextCards[1].timeCost}</p>
        </li>


      
      
        ${nextCards[2] ? `
      <li class="next-card">${nextCards[2].name}
        <p>Costo tempo: ${nextCards[2].timeCost}</p>
      </li>
    ` : ''}


      </ul>
    </div>
    <div class="card__footer">
      <button class="btn read-more" data-index="${idx}">Flip</button>
    </div>
    </div>
  `
 

  //salviamo ogni template di ogni card nella variabile cardHtml
   cardHTML += template
  }

  //inseriamo la variabile nel container
  container.innerHTML = cardHTML

  
  

  //codice per far fuznionare il flip
  const flips = document.querySelectorAll('.read-more');

  // Ottieni tutti gli elementi con la classe '.read-more'
  for (let index = 0; index < flips.length; index++) {
    flips[index].addEventListener('click', function () {

      
     // Ottieni gli elementi della card corrispondenti in base all'indice
      const cardFront = document.querySelector(`.card__front[data-index="${index}"]`);
      const cardBack = document.querySelector(`.card__back[data-index="${index}"]`);
      

      // Toggle tra le classi 'card__front' e 'card__back' per entrambi gli elementi
      cardFront.classList.toggle('card__front');
      cardFront.classList.toggle('card__back');
      cardBack.classList.toggle('card__front');
      cardBack.classList.toggle('card__back');
    
    });
  }
 
  
  const searchInput = document.querySelector('.search__input')
  const searchButton = document.querySelector('.search__button')
  const resetButton = document.querySelector('.reset__button')

  
  searchButton.addEventListener('click', function () {

    //node list di tutte le card
    const cardUnica = document.querySelectorAll('.card');

    //prendiamo il value dell'input con il lower case
    const valueSearchInput = searchInput.value.toLowerCase();

    

    //variabile per mettere dentro i risultati che troviamo
    const risultati = [];

    //ciclo sul file json 
    for (let index = 0; index < jsonCard.length; index++) {
      const element = jsonCard[index];

      //prendiamo la chiave title e diamo il lowercase
      const titleElement = element.title.toLowerCase();

      //qui diciamo che se l'input ha come lettere delle iniziali dei titoli essi compariranno e sono pushati nella variabile risultati
      if (titleElement.startsWith(valueSearchInput)) {
        risultati.push(element);
      }
    }

    //qui creiamo un ciclo su tutte la card
    for (let index = 0; index < cardUnica.length; index++) {
      const card = cardUnica[index];

      //qui andiamo a prendere il file json con index di questo for richiamando la chiave title con il lowercase
      const cardTitle = jsonCard[index].title.toLowerCase();

      //variabile che da false
      let isResult = false;
    

      for (let resultIndex = 0; resultIndex < risultati.length; resultIndex++) {
        const result = risultati[resultIndex];

        //qui andiamo a prendere la chiave title dai risultati
        const resultTitle = result.title.toLowerCase();
    

        if (cardTitle === resultTitle) {
          isResult = true;
          break;
        }
      }
    
      if (isResult) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }


    //codice per resettare
    resetButton.addEventListener('click', function(){


      //ciclo sulle card e rimuoviamo la class hidden
      for (let index = 0; index < cardUnica.length; index++) {
        const card = cardUnica[index];

        card.classList.remove('hidden')
        
      }
  
      searchInput.value = ''
  
  
    })
  })


 
  
 


  })


