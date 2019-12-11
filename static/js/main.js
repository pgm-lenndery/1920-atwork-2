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
              },
              {
                src: '../images/te-koop/wingene/IMG_9624 copy.jpg',
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover.jpg',
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover2.jpeg',
              },
              {
                src: '../images/te-koop/wingene/IMG_9624.JPG',
              },
            ]
          }
        ],
      },
      {
        title: 'nieuwbouwwoning wingene',
        intro: 'nieuwbouwwoning gelegen in een bosrijke, rustige omgeving.',
        media: [
          {
            src: '../images/te-koop/oostveld/oostveld-01.jpg',
            isThumb: true
          },
          {
            src: '../images/te-koop/oostveld/oostveld-02.jpg',
            isThumb: false
          },
        ],
        properties: [
          {
            price: 292500,
            sold: false,
            media: [
              {
                src: '../images/te-koop/wingene/IMG_1252.JPG',
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
      let tempStr, meta;
    },

    generateItemsTekoop() {
      if (this.cardsTeKoop !== null) {
        database.premises.forEach((item) => {
          console.log(`${item.title}`)

          if (item.properties.length == 1) {
            console.log(`\t 1 lot`)
            if (item.properties[0].sold == true) {
              console.log(`\t item sold`);
              this.meta = 'verkocht';
            } else {
              console.log(`\t item price = ${item.properties[0].price}`);
              this.meta = item.properties[0].price;
            }
          } else {
            console.log(`\t meerdere loten`)
            this.meta = `${item.properties.length} loten`;
          }

          this.tempStr += `
            <div class="flex-grid-item card premise">
              <div class="card-head">
                  <img src="../static/images/te-koop/wingene/IMG_9624-cover2.jpeg" alt="">
                  <div class="meta">
                    ${this.meta}
                  </div>
              </div>
              <div class="card-body p-16">
                  <h3>Nieuwbouwwoning wingene</h3>
                  <p>Nieuwbouwwoning gelegen in een bosrijke, rustige omgeving.</p>
              </div>
            </div>
          `
        });
        this.cardsTeKoop.innerHTML = this.tempStr;
      }
    }
  }

  app.init();
})();