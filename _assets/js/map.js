
/*

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtaXNoamdyYXkiLCJhIjoiY2pkbjBmeGN6MDd1YzMzbXI3cWdpNThjayJ9.3YE8T1H2QUyqNIkxdKWxkg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hamishjgray/cjvgni6nh0a991fnz00plzg3o',
   // style: 'mapbox://styles/mapbox/light-v10',
    center: [130.0989, -25.852510],
    zoom: 3.7,
    //minZoom: 5,

  });

console.log(map);



map.addControl(new mapboxgl.NavigationControl());

map.on('load', function() {
  // Insert the layer beneath any symbol layer.
  var layers = map.getStyle().layers;

  var labelLayerId;
  for (var i = 0; i < layers.length; i++) {
  if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
    labelLayerId = layers[i].id;
    break;
    }
  }

  });



  // code from the next step will go here!
  var geojson = {
    type: 'FeatureCollection',
    features: [

  //************** Abenteurer ************
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [131.034361, -25.352594]
    },
    properties: {
      title: 'Uluru',
      id: 'abenteuer',
      img: '1',
      link: 'http://bit.ly/2JLu2YH',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
    },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [146.9560, -19.1014]
    },
    properties: {
      title: 'Great Barrier Reef',
      id: 'abenteuer',
      img: '2',
      link: 'http://bit.ly/2CAawbw',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  //************** Kultur ************
{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [151.2164539, -33.8548157]
    },
    properties: {
      title: 'Sydney',
      id: 'kultur',
      img: '1',
      link: 'http://bit.ly/2CtblT9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [144.9629, -37.8142]
    },
    properties: {
      title: 'Melbourne',
      id: 'kultur',
      img: '2',
      link: 'http://bit.ly/2Ojmniz',
      description: 'BLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  //************** Natur ************
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [145.428, -16.2379]
    },
    properties: {
      title: 'Daintree Rainforest',
      id: 'natur',
      img: '1',
      link: 'http://bit.ly/2FsvDOz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [113.7690568, -23.1435944]
  },
  properties: {
    title: 'Ningaloo Reef',
    id: 'natur',
    img: '2',
    link: 'http://bit.ly/2Yey4Me',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },

  //************** Genuss ************
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [130.034361, -25.352594]
    },
    properties: {
      title: 'Magische Stunden am Ayers Rock',
      id: 'genuss',
      img: '1',
      link: '#',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [116.016, -31.8494]
    },
    properties: {
      title: 'Delikatessen aus dem Outback',
      id: 'genuss',
      img: '2',
      link: '#',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },
	{
	    type: 'Feature',
	    geometry: {
	      type: 'Point',
	      coordinates: [151.2164539, -33.8548157]
	    },
	    properties: {
	      title: 'Skylinefieber für Nachtschwärmer',
	      id: 'genuss',
	      img: '1',
	      link: 'http://bit.ly/2CtblT9',
	      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	    }
	  },
		{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [138.9385455, -34.6134149]
    },
    properties: {
      title: 'Barossa Valley',
      id: 'genuss',
      img: '5',
      link: '#',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
    ]
  };

  	// add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('a');
    //el.innerHTML = 'onlick';

    //document.body.appendChild(el);
    el.className = 'bv-show marker marker--'+marker.properties.id;
    el.id = marker.properties.id+marker.properties.img;


  	//alert(marker.properties.id);

    // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<a class="text--black" target="_blank" href="'+ marker.properties.link +'"><div class="bv-popup-img bg-img--16-9" style="background-image: url({{site.img}}/content/'+marker.properties.id+'/section'+marker.properties.img+'.jpg); "></div><div class="boxpad--sm"><div class=" text text--md text--black text--bold text--upper text--left" >' + marker.properties.title + '</div><div class="text text--sm text--black">' + marker.properties.description + '<span class="text--red text--bold"> Mehr&nbsp;erfahren</span></div><div class="space--xxs"></div></div></a>'))

    //.setHTML('<a href="'+marker.properties.link+'"><div class="bv-popup-wrap "><img src="{{site.img}}/content/'+marker.properties.id+'/bg-'+marker.properties.img+'.jpg"><div class="boxpad--sm"><div class=" text text--md text--black text--bold text--upper text--left" >' + marker.properties.title + '</div><div class="text text--sm text--black">' + marker.properties.description + '<span class="text--red text--bold"> Mehr&nbsp;erfahren</span></div><div class="space--xxs"></div></div></div></a>'))
    .addTo(map);
  });
*/
