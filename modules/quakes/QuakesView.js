// Quake View handler
import { processDate } from './utilities.js';
export default class QuakesView {
    
    renderQuakeList(quakeList, start, end, radius, listElement) {
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
      let str = `
        <li class="tool-bar">
          <span class="cell">Quake Count:</span><span class="cell"> ${quakeList.metadata.count}</span>
          <span class="input"><label>Start Date: </label><input id="start-date" class="form-control search-dte" value="${processDate('client', new Date(start))}"/></span>
          <span class="input"><label>End Date: </label><input id="end-date" class="form-control search-dte" value="${processDate('client', new Date(end))}"/></span>
          <span class="input"><label>Search Radius: </label><input id="radius" class="form-control radius" value="${radius}"/></span>
          <button id="search" class="btn btn-search">Search</button>
        </li>
       <li class="headers">
          <span class="cell date-time-cont">
            <span class="day">Day</span>
            <span class="date">Date</span>
            <span class="time">Time</span>
          </span>
          <span class="cell mag">Magnitude</span>
          <span class="cell cause">Cause</span>
          <span class="cell distance">Distance</span>
          <span class="cell city">City</span>
          <span class="cell state">State/Country</span>
          <span class="cell coords">Coordinates</span>
        </li>
        <li class="list-cont">
          <div class="list-scroll">
            <ul class="inner-list">
      `;
      str += quakeList.features
      .map(quake => {
        return `
        <li data-id="${quake.id}">
          <span class="cell dte">${this.formatDate(new Date(quake.properties.time))} ${this.processTitle(quake.properties.title)}</span>
          <span class="cell coords">${quake.geometry.coordinates}</span>

          <div class="quake-info hide">

          </div>
        </li>`;
      })
      .join('');

      str += '</ul></div></li>';
      listElement.innerHTML = str;

      
    }
    processTitle(title){
      let title_list = title.split(' - ');
      let spaces = title_list[0].split(' ');
      let mag = '<i class="missing"> - </i>';
      let cause = '<i class="missing"> - </i>';
      let distance = '<i class="missing"> - </i>';
      let location = '<i class="missing"> - </i>';
      let city = '<i class="missing"> - </i>';
      let state = '<i class="missing"> - </i>';


      if(title_list[1].indexOf(' of ') > -1){
        title_list[1] = title_list[1].split('of');
        distance = title_list[1][0];
        location = title_list[1][1];
      }
      else{
        location = title_list[1];
      }
      
      if(location.indexOf(',') > -1){
        location = location.split(',');
        city = location[0];
        state = location[1];
      }
      else{
        state = location;
      }
      
      mag = spaces.shift();
      mag += ' ' + spaces.shift();
      if(spaces.length > 1){
        cause = spaces.join(' ');
      }

      /*if(title_list.length > 2){
        mag = title_list[0] + ' ' + title_list[1];
        title_list.forEach(function(ti, index){
          if(index > 1){
            distance += ti;
          }
        })
      }*/
      
      
      

      let str = `
        <span class="cell mag">${mag}</span>
        <span class="cell cause">${cause}</span>
        <span class="cell distance">${distance}</span>
        <span class="cell city">${city}</span>
        <span class="cell state">${state}</span>
        <!--<span class="title">${title}</span>-->
      `
      return str;
    }
    formatDate(dte){
      let d = dte.getDate();
      let m = dte.getMonth() + 1;
      let y = dte.getFullYear().toString();
      let h = dte.getHours();
      let min = dte.getMinutes();
      let s = dte.getSeconds();
      let date_parts = dte.toISOString().split('T');
      let date_str = date_parts[0];
      let date_time = date_parts[1];

      let local = new Date(dte);
      local.setMinutes(dte.getMinutes() - dte.getTimezoneOffset());

      const s_iso = local.toISOString();
      const date = s_iso.substring(0,10);
      const time = s_iso.substring(11,16);
      const local_time = dte.toLocaleTimeString();
      const time_str = dte.toTimeString();
      const dow = local.toDateString().substring(0, 3);

      let str = `
        
        <span class="cell date-time-cont">
          <span class="day">${dow}</span> 
          <span class="date">${m}/${d}/${y}</span>
          <span class="time">${local_time}</span>
        </span>

      `
      return str;
    }
    renderQuake(ele, quake) {
      const quakeProperties = Object.entries(quake.properties);
      ele.classList.toggel('hide');
      ele.innerHTML = JSON.stringify(quake);
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
    
    }
    renderMetaData(meta, ele){

    }
  }