(() => {
  const database = {
    
  }

  const app = {
    init () {
      this.cacheElements();
      if (this.mapContactElement !== null) {
        this.placeContactPointer();
      }

    },
    cacheElements() {
      this.mapContactElement = document.querySelector('.map-contact'); 
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
    }
  }

  app.init();
})();