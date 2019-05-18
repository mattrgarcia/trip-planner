
import BuildMarker from './marker'
import mapboxgl from 'mapbox-gl'

const mapAPI = 'pk.eyJ1Ijoicm9ib21vb3NlIiwiYSI6ImNqdnRyNmsyeTIxcTA0NW8xbm5wcHpkb2MifQ.035Tc5bbZ9JNui_T_I1s5A'



mapboxgl.accessToken = mapAPI;



const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});


//main div ID 'map'

const mapDiv = document.createElement('div')
const corrdArray = [-74.009151, 40.705086]

const target = new BuildMarker('hotel')
console.log(target);

const marker = new mapboxgl.Marker(mapDiv).setLngLat(corrdArray).addTo(map);

target.addTo(map);










