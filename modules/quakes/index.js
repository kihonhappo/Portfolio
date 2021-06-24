
import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';

const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
/*
if('geolocation' in navigator) {
    alert('geolocation is available');
    
  } else {
    alert('geolocation IS NOT available');
  }*/
  
//alert(JSON.stringify(navigator.geolocation));
//alert(JSON.stringify(getLocation(options)));

//
//controller.init();
const controller = new QuakesController('#quakeList');
controller.init();
/*const position = {};
getLocation(options)
  .then((position) => {
    controller.position.lat = position.coords.latitude;
    controller.position.log = position.coords.longitude;
    controller.init();
  })
  .catch((err) => {
    console.error(err.message);
  });*/
//alert(JSON.stringify(getLocation(options)));
    
 /* 

navigator.geolocation.getCurrentPosition((position) => {
    let p = {};
    
    
    
    //alert('lat: ' + position.coords.latitude + ' long: ' +  position.coords.longitude);
  });*/
//alert(JSON.stringify(controller.position));

//