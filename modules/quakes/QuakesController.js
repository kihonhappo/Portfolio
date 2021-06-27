import { getLocation, processDate } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;
    this.start = processDate('client', new Date('2021-01-01'));
    this.end = processDate('client', new Date());
    this.radius = 300;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    // let's give ourselves the option of using a location other than the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0
    };

    //alert('Controller: parent: ' + this.parent + ' Position: ' + JSON.stringify(this.position));
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }
  async init() {
    // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getQuakesByRadius(this.radius);
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
          };
         
            const position = await getLocation(options);
            console.log(position);
            this.position.lat = position.coords.latitude;
            this.position.log = position.coords.longitude;
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius) {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    this.parentElement.innerHTML = 'Loading...';
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(this.position, this.start, this.end, radius);
    // render the list to html
    //console.log(JSON.stringify(quakeList));
    this.quakesView.renderQuakeList(quakeList, this.start, this.end, this.radius, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details
    this.parentElement.addEventListener('touchend', e => {
      //alert('touched');
      //this.getQuakeDetails(e.target.dataset.id);
    });
    let vi = this;
    this.parentElement.addEventListener('click', e => {
      let cntrl = e.target;
      let cntrl_type = cntrl.tagName;
      let parent = cntrl.closest('li');
      let quake_id = parent.dataset.id;
      
      //alert(cntrl_type);
      switch(cntrl_type){
        case 'BUTTON':
          
          let radius = document.getElementById('radius');
          if(radius){
            vi.radius = radius.value;
            //alert('Button: ' + radius.value);
            let start = document.getElementById('start-date');
            //alert(start);
            let end = document.getElementById('end-date')
            vi.start = processDate('client', new Date(start.value));
            vi.end = processDate('client', new Date(end.value));
            vi.getQuakesByRadius(radius.value);
          }
          
          // render the list to html
          //console.log(JSON.stringify(quakeList));
         
          break;
        case 'DIV':
          if(cntrl.classList.contains('quake-info')){

            //cntrl.classList.toggle('hide');
          }
          break;
        default:
          if(quake_id != undefined){
            let inner_list = parent.parentElement;
            let lis = inner_list.querySelectorAll('li');
            lis.forEach(element => {
              if(element.classList.contains('selected')){
                element.classList.remove('selected');
              }
            });
            parent.classList.toggle('selected');
            let ele = parent.querySelector('.quake-info');
            //let hides = 
            ele.classList.toggle('hide');
            //alert(quakeList.length);
            vi.getQuakeDetails(ele, parent.dataset.id, quakeList);
          }
          break;
      }
      
      
      
      //this.getQuakeDetails(e.target.dataset.id);
    });
    this.parentElement.addEventListener('dblclick', e => {
      let cntrl = e.target;
      let cntrl_type = cntrl.tagName;
      let parent = cntrl.closest('li');
      let quake_id = parent.dataset.id;
      
      //alert(cntrl_type);
      switch(cntrl_type){
        case 'DIV':
          if(cntrl.classList.contains('quake-info')){
            cntrl.classList.toggle('hide');
            
          }
          break;
        default:

          break;
      }
    });
  }
  async getQuakeDetails(ele, quakeId, quakelist) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
    const details = this.quakes.getQuakeById(quakeId, quakelist);
    this.quakesView.renderQuake(ele, details);
   
  }
}