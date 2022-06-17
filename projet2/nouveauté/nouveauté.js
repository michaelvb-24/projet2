
// articles en vente
const articles = [ 
    {
        id: 1,
        titre: "1991",
        auteur: 'Franck Thilliez',
        genre: 'policier',
        dispo: 'DISPONIBLE',
        price: 8.50,
        img: 'img/1991.webp'
    },
    {
        id: 2,
        titre: "Demon Slayer tome 22",
        auteur: 'Koyoharu Gotouge',
        genre: 'manga',
        dispo: 'DISPONIBLE',
        price: 7.29,
        img: 'img/demon slayer.webp'
    },
    {
        id: 3,
        titre: "GUERRE",
        auteur: 'Louis-Ferdinand Céline',
        genre: 'litterature',
        dispo: 'DISPONIBLE',
        price: 19.00,
        img: 'img/guerre.webp'
    },
    {
        id: 4,
        titre: "Labyrinthe",
        auteur: 'Frank Thillier',
        genre: 'sciencefiction',
        dispo: 'DISPONIBLE',
        price: 21.90,
        img: 'img/labyrinthes.webp'
    },
    {
        id: 5,
        titre: "L'Anomalie",
        auteur: 'Hervé Le Tellier',
        genre: 'litterature',
        dispo: 'DISPONIBLE',
        price: 8.70,
        img: 'img/lanomalie.webp'
    },
    {
        id: 6,
        titre: "LE BUREAU DES AFFAIRES OCCULTES",
        auteur: 'Eric FOUASSIER',
        genre: 'policier',
        dispo: 'DISPONIBLE',
        price: 8.40,
        img: 'img/le bureau des affaires occultes.webp'
    },
    {
        id: 7,
        titre: "Le cerf-volant",
        auteur: 'Laetitia Colombani',
        genre: 'litterature',
        dispo: 'DISPONIBLE',
        price: 7.40,
        img: 'img/le cerf-volant.webp'
    },
    {
        id: 8,
        titre: "LES SEPT SOEURS la soeur disparue",
        auteur: 'Lucinda Riley',
        genre: 'thriller',
        dispo: 'DISPONIBLE',
        price: 10.90,
        img: 'img/les sept soeurs.webp'
    },
    {
        id: 9,
        titre: "ONE PIECE Tome 101",
        auteur: 'Eiichiro Oda',
        genre: 'manga',
        dispo: 'DISPONIBLE',
        price: 6.90 ,
        img: 'img/one piece.webp'
    },
]

// menu burger
function openNav() {
    document.getElementById("myNav").style.width = "100%";
   }

function closeNav() {
     document.getElementById("myNav").style.width = "0%";
   }

   // animation
function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";
    
    var i = 0;
    var timer = setInterval(function() {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
  
  // application
  var speed = 75;
  var citation = document.querySelector('.citation');
  var p = document.querySelector('.citation2');
  var delay = citation.innerHTML.length * speed + speed;
  
  // type affect to header
  typeEffect(citation, speed);
  
  
  // type affect to body
  setTimeout(function(){
    p.style.display = "inline-block";
    typeEffect(p, speed);
  }, delay);


// point d'entrée

const header = document.querySelector('.header')
header.style.display = 'flex'
header.style.flexDirection = 'wrap'
header.style.justifyContent = 'space-between'
header.style.alignItems = 'center'
header.style.backgroundColor = "#AC0909"
header.style.padding = '30px 0'

const h1 = document.createElement('h1')
h1.innerText = "LIBRAIRIE"
h1.style.paddingLeft = '10px'
h1.style.color = 'white'

const ul = document.querySelector('ul')

const spanHeader = document.createElement("span")
spanHeader.classList.add('indice')
spanHeader.innerText = '0'
spanHeader.style.color = 'white'
ul.style.listStyle = 'none'
ul.style.color = 'white'

ul.appendChild(spanHeader)
header.append(h1, ul)

const articleCont = document.querySelector('.articles-container')
articleCont.style.backgroundColor = 'grey'
articleCont.style.paddingTop = '10px'

// test filtre

// const filtres_sf=articles.filter(value=> value.genre >= sciencefiction).map(
//     (item) => { 
//                 return { 
//                     ...item, 
//                     title: item.title.toUpperCase(),
//                     } 
//          }
//         ) 
//         console. log(filtres_sf);

// const filtres_manga= articles.filter(value=> value.genre >= manga).map(
//     (item) => { 
//                 return { 
//                     ...item, 
//                     title: item.title.toUpperCase(),
//                     } 
//          }
//         ) 
//         console. log(filtres_manga);

// const filtres_policier= articles.filter(value=> value.genre >= policier).map(
//     (item) => { 
//                 return { 
//                     ...item, 
//                     title: item.title.toUpperCase(),
//                     } 
//          }
//         ) 
//         console. log(filtres_policier);

// const filtres_thriller= articles.filter(value=> value.genre >= thriller).map(
//     (item) => { 
//                 return { 
//                     ...item, 
//                     title: item.title.toUpperCase(),
//                     } 
//          }
//         ) 
//         console. log(filtres_thriller);

// const filtres_litterature= articles.filter(value=> value.genre >= litterature).map(
//     (item) => { 
//                 return { 
//                     ...item, 
//                     title: item.title.toUpperCase(),
//                     } 
//          }
//         ) 
//         console. log(filtres_litterature);

// fin test filter

const displayArticle = () => {
    const articlesNode = articles.map(article => {
        return createArticle(article)
    });
    articleCont.append(...articlesNode)
}

let panier = [];
let compteur = 0;


const createArticle = (article) => {
    console.log(article);
    const div1 = document.createElement('div')
    div1.classList.add('article')

    const img = document.createElement('img')
    img.src = article.img
    img.alt = ''

    const h2 = document.createElement('h2')
    h2.innerText = article.titre
    h2.style.color='black'

    const p1 = document.createElement('h2')
    p1.innerText = article.dispo + " "
    p1.style.color='red'

    const div2 = document.createElement('div')
    div2.classList.add("article-action")

    const p2 = document.createElement('h2')
    p2.innerText = article.price+"€"
    p2.style.color='black'

    const btn = document.createElement('button')
    btn.innerText = 'Panier'

    btn.addEventListener('click', (event) => {
        if (btn.innerText === "Panier") {
            event.stopPropagation()
            panier.push(article)
            btn.innerText = "Supprimer du panier"
            btn.style.backgroundColor = '#AC0909'
            spanHeader.innerText = ++compteur
        } else if (btn.innerText === "Supprimer du panier") {
            event.stopPropagation()
            panier.splice(article, 1)
            btn.innerText = "Panier"
            btn.style.backgroundColor = "#AC0909"
            spanHeader.innerText = --compteur
        }
        console.log(panier);
})
div2.append(p2, btn)
        div1.append(img, h2, p1, div2)

        return div1
}

displayArticle()

