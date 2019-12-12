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
            ]
          }
        ],
      },
    ]
  }

  const app = {
    init() {
      this.cacheElements();
      if (this.mapContactElement !== null) {
        this.placeContactPointer();
      }

      this.generateItemsTekoop();
    },
    
    cacheElements() {
      this.mapContactElement = document.querySelector('.map-contact'); 
      this.cardsTeKoop = document.querySelector('[data-label="te-koop-items"');
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 12,
        center: [3.266715, 51.128666], // , 
      });

      const bodyElement = document.body;
      const lineNavElement = document.querySelector('.line-nav');
      const btnToggleElement = document.querySelector('.btn-hamburger');
      
      btnToggleElement.addEventListener('click', (ev) => {
        if (bodyElement.classList.contains('nav-isopen')) {
          bodyElement.classList.remove('nav-isopen');
        } 
        else {
          bodyElement.classList.add('nav-isopen');
        }
      });
    },
    placeContactPointer() {
      console.log(this.map);
      let that = this;
      this.map.on('load', function() {
        console.log(that.map);
        that.map.loadImage('../static/images/marker.png', function(error, image) {
        if (error) throw error;
        that.map.addImage('marker', image);
          that.map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
              "type": "geojson",
              "data": {
                "type": "FeatureCollection",
                "features": [{
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [3.266715, 51.128666]
                  }
                }]
              }
            },
            "layout": {
              "icon-image": "marker",
              "icon-size": 0.25
            }
          });
        });
      });
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
            <a class="flex-grid-item card premise" href="">
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
    }
  }

  app.init();
})();