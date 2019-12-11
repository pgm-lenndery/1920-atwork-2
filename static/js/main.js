(() => {
  const database = {
    premises: [
      {
        title: 'nieuwbouwwoning wingene',
        intro: 'nieuwbouwwoning gelegen in een bosrijke, rustige omgeving.',
        properties: [
          {
            price: 292500,
            sold: false,
            media: [
              {
                src: '../images/te-koop/wingene/IMG_1252.JPG',
                isThumb: false,
              },
              {
                src: '../images/te-koop/wingene/IMG_9624 copy.jpg',
                isThumb: false,
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover.jpg',
                isThumb: false,
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover2.jpeg',
                isThumb: true,
              },
              {
                src: '../images/te-koop/wingene/IMG_9624.JPG',
                isThumb: false,
              },
            ]
          }
        ],
      },
      {
        title: 'nieuwbouwwoning wingene',
        intro: 'nieuwbouwwoning gelegen in een bosrijke, rustige omgeving.',
        properties: [
          {
            price: 292500,
            sold: false,
            media: [
              {
                src: '../images/te-koop/wingene/IMG_1252.JPG',
                isThumb: false,
              },
              {
                src: '../images/te-koop/wingene/IMG_9624 copy.jpg',
                isThumb: false,
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover.jpg',
                isThumb: false,
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover2.jpeg',
                isThumb: true,
              },
              {
                src: '../images/te-koop/wingene/IMG_9624.JPG',
                isThumb: false,
              },
            ]
          }
        ],
      },
      {
        title: 'appartementen in oostveld',
        intro: 'vijf nieuwbouwappartementen in het rustige oostveld',
        properties: [
          {
            title: 'appartement 101',
            bedrooms: '2',
            price: 220000,
            sold: false,
            media: [
              {
                src: '../images/te-koop/wingene/IMG_1252.JPG',
                isThumb: false,
              },
            ]
          },
          {
            title: 'appartement 201',
            bedrooms: '1',
            price: 220000,
            sold: true,
            media: [
              {
                src: '../images/te-koop/wingene/IMG_1252.JPG',
                isThumb: false,
              },
            ]
          },
        ],
      },
    ]
  }

  const app = {
    init() {
      this.cacheElements();
      this.generateItemsTekoop();
    },
    
    cacheElements() {
      this.cardsTeKoop = document.querySelector('[data-label="te-koop-items"');
    },

    generateItemsTekoop() {
      // console.log(this.cardsTeKoop)
      let tempStr;
      if (this.cardsTeKoop !== null) {
        database.premises.forEach((item,index) => {
          console.log(`item: ${item.title} - n°${index}`)
          tempStr += `
            <div class="flex-grid-item card premise">
              <div class="card-head">
                  <img src="../static/images/te-koop/wingene/IMG_9624-cover2.jpeg" alt="">
                  <div class="meta">
                      verkocht
                  </div>
              </div>
              <div class="card-body p-16">
                  <h3>Nieuwbouwwoning wingene</h3>
                  <p>Nieuwbouwwoning gelegen in een bosrijke, rustige omgeving.</p>
              </div>
            </div>
          `
        });
        this.cardsTeKoop.innerHTML = tempStr;
      }
    }
  }

  app.init();
})();