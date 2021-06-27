import { getJSON, processDate } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.start = new Date('2019-06-01'); //'2021-06-01'
    this.end = new Date();
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, start, end, radius = 300) {
    this.start = processDate('server', new Date(start));
    this.end = processDate('server', new Date(end));
    let maxradius = radius;
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    let new_url = this.baseUrl + '&starttime=' + this.start + '&endtime=' + this.end + '&latitude=' + position.lat + '&longitude=' + position.log + '&maxradiuskm=' + maxradius;
    console.log(new_url);
    this._quakes = getJSON(new_url);
    console.log(this._quakes);
    //alert(JSON.stringify(this._quakes));
    //console.log(this._quakes);
    return this._quakes;
  }
  
  getQuakeById(id, quakelist) {
    // filter this._quakes for the record identified by id and return it
    let event_quake = '&eventid=' + id;
    //alert('ID: ' + id + ' quakes.length: ' + quakelist.length);
    return quakelist.features.filter(item => item.id === id)[0];
  }
}