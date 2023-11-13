// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");


document.getElementById('showForm').addEventListener('click', function () {
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.innerHTML = `
     <div class="modal-content">
        <span class="close">&times;</span>
        <form id="emailForm">
              <label for="email">Email:</label>
              <input type="email" id="email" required>
              <br>
              <label for="name">Имя:</label>
              <input type="text" id="name" required>
              <br>
              <button class="btn__apply" type="submit">Apply</button>
           </form>
     </div>
  `;

  document.body.appendChild(modal)

  document.querySelector('.close').addEventListener('click', function () {
     modal.remove();
  })

  document.getElementById('emailForm').addEventListener('submit', function (event) {
     event.preventDefault()

     const email = document.getElementById('email').value
     const name = document.getElementById('name').value

     console.log('Email:', email)
     console.log('Имя:', name)

     modal.remove();
  })
})






const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
});

const sliderWrap = document.querySelector('.swiper-wrapper')

  data.forEach(el => {
      const slide = document.createElement('div')
      const image = document.createElement('img')

      slide.classList = 'swiper-slide'
      image.classList = 'swiper-image'

      image.src = el.img

      slide.append(image)
      sliderWrap.append(slide)
  })

// Категория


const dataAlt = [

  {
      name: 'BMW M2',
      img: 'https://i.pinimg.com/originals/6c/b5/19/6cb51998ab68dcd03188950e40608ba1.jpg',
      price: 300,
      category: 'Sedan'
  },
  {
      name: 'BMW M3',
      img: 'https://www.hdcarwallpapers.com/walls/2018_bmw_m3_cs_4k_3-HD.jpg',
      price: 150,
      category: 'Sedan'
  },
  {
      name: 'BMW M4',
      img: 'https://masterpiecer-images.s3.yandex.net/fc84f1265b8a11ee9b7136f52626dcc9:upscaled',
      price: 180,
      category: 'Sedan'
  },
  {
      name: 'BMW M5',
      img: 'https://img.goodfon.ru/wallpaper/big/e/44/bmw-m5-f90-sedan-2017-dym-rezina.jpg',
      price: 300,
      category: 'Sedan'
  },
  {
      name: 'BMW M8',
      img: 'https://wallpapercave.com/wp/wp7917827.jpg',
      price: 400,
      category: 'Sedan'
  },
  {
      name: 'BMW X4',
      img: 'https://images3.alphacoders.com/102/1024562.jpg',
      price: 500,
      category: 'Crossover'
  },
  {
      name: 'BMW X5',
      img: 'https://4kwallpapers.com/images/wallpapers/manhart-mhx5-700-bmw-x5-m-competition-2022-5k-5120x2880-8250.jpeg',
      price: 1000,
      category: 'Crossover'
  },
  {
      name: 'BMW X7',
      img: 'https://images3.alphacoders.com/968/968289.jpg',
      price: 2000,
      category: 'Crossover'
  },
  {
      name: 'BMW I8',
      img: 'https://wallpapers.com/images/hd/4k-bmw-i8-gsfp50u16cqoatfb.jpg',
      price: 3000,
      category: 'Electrocar'
  },
]

///////////////////////////////////////////////////////////////////////////
// отрисовка всей страницы

const output = document.querySelector('.output')
let category = 'all'

// функция categoriesRender, принимает data в качестве аргумента и отображает
// элементы списка. Для каждого элемента данных создаются соответствующие элементы HTML

const categoriesRender = (data) => {
  output.innerHTML = ''
  data.forEach(el => {
      const wrap = document.createElement('div')
      const image = document.createElement('img')
      const name = document.createElement('p')
      const obr = document.createElement('div')
      const price = document.createElement('p')
      const show = document.createElement('h4')
      const category = document.createElement('p')

      category.classList = 'catBtn'
      wrap.classList = 'wrap'
      obr.classList = 'obr'
      show.classList = 'show'

      image.src = el.img
      name.textContent = el.name
      show.textContent = 'show'

      show.addEventListener('click', () => {
          const isVisible = category.classList.toggle('show-info')
          if(isVisible) {
              price.textContent = el.price
              category.textContent = el.category
          } else {
              price.textContent = ''
              category.textContent = ''
          }
      })

      obr.append(price, category)
      wrap.append(image, name, show, obr)
      output.append(wrap)
  })
}

categoriesRender(dataAlt)

// Вызывается функция categoriesRender с аргументом dataAlt, которая содержит данные о товарах.

///////////////////////////////////////////////////////////////////////////////////////////
// категории

const categoryChoise = ['all', 'Sedan', 'Crossover', 'Electrocar']
// Создаем массив categoryChoise, который содержит список категорий, включая "all", "burgers", "pizzas" и "drinks"


const outputButtonContainer = document.querySelector('.wrap__btn')

categoryChoise.forEach(el => {
 const categoryButton = document.createElement('button')

 categoryButton.classList = 'category__button'
 categoryButton.textContent = el
 categoryButton.value = el

 categoryButton.addEventListener('click', () => {
    const selectedCategory = categoryButton.value

    if (selectedCategory === 'all') {
       categoriesRender(dataAlt)
    } else {
       const result = dataAlt.filter(item => item.category === selectedCategory)
       categoriesRender(result)
    }
 })

 outputButtonContainer.append(categoryButton)
})


// const onButtonClickRenderItems = () => { 
//     const categoriesWrap = document.querySelector('.categories__choise') 

//     categoryChoise.forEach(el => { 
//         const option = document.createElement('option') 

//         option.textContent = el 
//         option.value = el 
//         option.classList = 'categoryBtn' 

//         categoriesWrap.addEventListener('change', () => { 
//             const selectedCategory = categoriesWrap.value 
//             category = selectedCategory
//             if (selectedCategory === 'all') { 
//                 categoriesRender(dataAlt) 
//             } else { 
//                 const result = dataAlt.filter(item => { 
//                     return item.category === selectedCategory 
//                 }) 
//                 categoriesRender(result) 
              
//             } 
//         }) 
//         categoriesWrap.append(option) 
//     })  
// } 

// onButtonClickRenderItems()

//////////////////////////////////////////////////////////////////
// активная кнопка

const activeButton = () => {
  const buttons = document.querySelectorAll('.category__button')
  buttons[0].classList.add('active')
  console.log(buttons);

  buttons.forEach((el, index) => {
      el.addEventListener('click', () => {
          buttons.forEach((_, innerIndex) => {
              if(index === innerIndex) {
                  buttons[index].classList.add('active')
              } else {
                  buttons[innerIndex].classList.remove('active')
              }
          })
      })
  })

}
activeButton()

////////////////////////////////////////////////////////////////////////////////
// динамический поиск в form

const form = document.querySelector('form')
const search = document.querySelector('.search')
const clear = document.querySelector('.clear')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const serachTerm = search.value.trim().toLowerCase()
  // searchTerm значение в инпуте, которое вводит user

  const searchResult = dataAlt.filter(el => {
      // el - каждое слово
     return el.name.toLowerCase().includes(serachTerm) && (category === el.category || category === 'all')
  })
  searchResult.length === 0 
      ? output.textContent = 'Нет такого товара' 
      : categoriesRender(searchResult)
  search.value = ''
})

/////////////////////////////////////////////////////////////////////////
// sort

const sort =  document.querySelector('.sort')

sort.addEventListener('click', () => {
  let sortedData = null
  if(sort.name === 'asc'){
      sort.name = 'desc'
      sort.textContent = 'descendant'
      sortedData = [...dataAlt].sort((a, b) => a.price-b.price)
      console.log(sort.name);
  } else {
      sort.name = 'asc'
      sort.textContent = 'ascendant'
      sortedData = [...dataAlt].sort((a, b) => b.price-a.price)
  }
  categoriesRender(sortedData)
})


///////////////////////////////////////////////////////////////////////////////////////////////
// Аккордеон

const accordionWrap = document.querySelectorAll('.accordion__wrap')

// accordionWrap.forEach((el, index) => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('accordion__active')
//     })
// })


for(let i = 0; i < accordionWrap.length; i++) {
    accordionWrap[i].addEventListener('click', () => {
        accordionWrap.forEach((el, index) => {
            if(i === index) {
                el.classList.toggle('accordion__active')
            } else {
                el.classList.remove('accordion__active')
            }
        })
    })
}


//////////////////////////////////////////////////////////


const data = [
    {
        title: 'first',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
    },
    {
        title: 'second',
        text: `Marvel counts among its characters such well-known superheroes as Spider-Man, Iron Man, Captain America, Thor, Doctor Strange, Hulk, Wolverine, and Captain Marvel, as well as popular superhero teams such as the Avengers, the X-Men, the Fantastic Four, and the Guardians of the Galaxy. Its stable of well-known supervillains includes the likes of Doctor Doom, Magneto, Ultron, Thanos, Green Goblin, Galactus, Loki, and Kingpin. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City.[4] Additionally, Marvel has published several licensed properties from other companies.
         This includes Star Wars comics twice from 1977 to 1986 and again since 2015.`,
    },
    {
        title: 'third',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
    },
    {
        title: 'fourth',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`
    },

]
