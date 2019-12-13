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
                isThumb: false
              },
              {
                src: '../images/te-koop/wingene/IMG_9624 copy.jpg',
                isThumb: false
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover.jpg',
                isThumb: false
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover2.jpeg',
                isThumb: true
              },
              {
                src: '../images/te-koop/wingene/IMG_9624.JPG',
                isThumb: false
              },
            ],
            type: 'huis'
          }
        ],
        city: 'wingene',
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
            ],
            type: 'appartement'
          }
        ],
        city: 'wingene',
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
            ],
            type: 'appartement'
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
            ],
            type: 'appartement'
          },
        ],
        city: 'oostveld',
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
                isThumb: false
              },
              {
                src: '../images/te-koop/wingene/IMG_9624 copy.jpg',
                isThumb: false
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover.jpg',
                isThumb: false
              },
              {
                src: '../images/te-koop/wingene/IMG_9624-cover2.jpeg',
                isThumb: true
              },
              {
                src: '../images/te-koop/wingene/IMG_9624.JPG',
                isThumb: false
              },
            ],
            type: 'huis'
          }
        ],
        city: 'wingene',
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
      // this.filterInputType = document.querySelector('input[name="filterPremisesType"]:checked').value
    },

    generateItemsTekoop() {
      let tempStr = '', meta, tumbPath = '';
      if (this.cardsTeKoop !== null) {
        database.premises.forEach((item, index) => {
          this.generateThumbPath(item.properties[0].media);

          console.log(`premise ${++index} = ${item.title}`)
          item.media !== undefined ? console.log(this.generateThumbPath(item.media)) : console.log('null');
          
          if (item.properties.length == 1) {
            // 1 LOT
            item.properties[0].sold ? this.meta = 'verkocht' : this.meta = this.priceFormat('€ ',item.properties[0].price);
          } else { 
            // MEERDERE LOTEN
            this.meta = `${item.properties.length} loten`;
          }

          tempStr += `
            <a class="flex-grid-item card premise" href="" data-filter="${this.listTypes(item.properties)} ${item.city}, ${this.listPrices(item.properties)}">
              <div class="card-head">
                  <img src="${this.tumbPath.replace('../', '../static/')}" alt="">
                  <div class="meta">
                    ${this.meta}
                  </div>
              </div>
              <div class="card-body p-16">
                  <h3>Nieuwbouwwoning wingene</h3>
                  <p>Nieuwbouwwoning gelegen in een bosrijke, rustige omgeving.</p>
              </div>
            </a>
          `
        });
        this.cardsTeKoop.innerHTML = tempStr;
      }
    },

    generateThumbPath(input) {
      input.forEach(r => {
        if (r.isThumb == true) {
          this.tumbPath = r.src;
        }
      })
    },

    priceFormat(prepend = '', input, append = '') {
      return prepend + input.toString().match(/.{1,3}/g).join('.') + append;
    },

    listPrices(input) {
      let tempStr = ''
      input.forEach((item) => {
        tempStr += `${item.price}, `;
      })

      return tempStr;
    },

    listTypes(input) {
      let tempStr = ''
      input.forEach((item) => {
        tempStr += `${item.type}, `;
      })

      return tempStr;
    },

    filterPremises() {
      let searchString = `${this.getUrlVar('premise_type')}, ${this.getUrlVar('premise_city')}, ${this.getUrlVar('premise_price')}`
      console.log
    },
    getUrlVar(variable) {
      var url = window.location.search.substring(1);
      var vars = url.split("&");
      for (var i=0;i<vars.length;i++) {
              var pair = vars[i].split("=");
              if(pair[0] == variable){return pair[1];}
      }
      return(false);
    }
  }

  app.init();
})();